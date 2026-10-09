import { CONFIG, TABLE, BUCKET, isConfigured } from '../config.js?v=20261009082041'
import { supabase } from './client.js?v=20261009082041'
import { formatPower } from './power.js?v=20261009082041'
import { toCsv } from './csv.js?v=20261009082041'
import { pickLanguage, saveLanguage } from './i18n.js?v=20261009082041'
import { ADMIN_STRINGS } from './admin-i18n.js?v=20261009082041'

const $ = id => document.getElementById(id)
// 語言偏好與申請頁共用
let lang = pickLanguage()
const t = () => ADMIN_STRINGS[lang]
const clanText = c => c === 'ANY' ? t().any : c
// 31–33 是工業 1–3
const towerText = v => v > CONFIG.maxWatchtower ? t().industrial(v - CONFIG.maxWatchtower) : v
let rows = []
let role = null
let myClan = null
let userId = null
let userEmail = ''
// 聯盟帳號只能審核第一志願是自己聯盟的申請（資料庫規則同樣擋著，這裡只是讓介面一致）
const canReview = r => role === 'admin' || (role === 'alliance' && r.preferred_clan === myClan)

function msg(text, kind = '') { $('msg').textContent = text; $('msg').className = `msg ${kind}` }

// 套用固定文字：data-i18n="a.b" 對應 ADMIN_STRINGS 的巢狀 key
function applyLanguage() {
  const s = t()
  const get = key => key.split('.').reduce((o, k) => o?.[k], s)
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant'
  $('lang').value = lang
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = get(el.dataset.i18n) })
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = get(el.dataset.i18nPlaceholder) })
  document.title = role === 'alliance' ? s.titleClan(myClan) : s.title
  $('heading').textContent = document.title
  if (role) $('who').textContent = role === 'alliance' ? s.whoAlliance(myClan, userEmail) : s.who(userEmail, role)
  if (rows.length || role) { fillClanFilter(); render() }
}

function fillClanFilter() {
  const clans = [...new Set([...CONFIG.clans.map(c => c.tag), ...rows.map(r => r.preferred_clan)])].filter(Boolean)
  const current = $('fClan').value
  $('fClan').replaceChildren(new Option(t().allClans, ''), ...clans.map(c => new Option(clanText(c), c)))
  $('fClan').value = current
}

async function start() {
  if (!isConfigured()) { msg(t().notConfigured, 'err'); return }
  const { data: { session } } = await supabase.auth.getSession()
  session ? await enter(session.user) : showLogin()
}

function showLogin() { $('login').hidden = false; $('app').hidden = true }

$('login').addEventListener('submit', async e => {
  e.preventDefault()
  const fd = new FormData(e.target)
  $('loginMsg').textContent = t().loggingIn
  const { data, error } = await supabase.auth.signInWithPassword({ email: fd.get('email'), password: fd.get('password') })
  if (error) { $('loginMsg').textContent = t().loginFailed(error.message); $('loginMsg').className = 'msg err'; return }
  $('loginMsg').textContent = ''
  await enter(data.user)
})

async function enter(user) {
  const { data, error } = await supabase.from('admins').select('role, clan').eq('user_id', user.id).maybeSingle()
  if (error || !data) {
    msg(t().notStaff(user.email), 'err')
    await supabase.auth.signOut()
    showLogin()
    return
  }
  role = data.role
  myClan = data.clan
  userId = user.id
  userEmail = user.email
  $('fClan').hidden = role === 'alliance'
  applyLanguage()
  $('login').hidden = true
  $('app').hidden = false
  msg('')
  await load()
}

async function load() {
  msg(t().loading)
  const all = []
  // PostgREST 預設單次最多 1000 筆，分頁拉完
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase.from(TABLE).select('*').order('created_at', { ascending: false }).range(from, from + 999)
    if (error) { msg(t().loadFailed(error.message), 'err'); return }
    all.push(...data)
    if (data.length < 1000) break
  }
  rows = all
  fillClanFilter()
  msg('')
  render()
}

function filtered() {
  const st = $('fStatus').value
  const clan = $('fClan').value
  const q = $('q').value.trim().toLowerCase()
  const list = rows.filter(r =>
    (!st || r.status === st) &&
    (!clan || r.preferred_clan === clan) &&
    (!q || [r.username, r.game_id, r.referrer].some(v => v && v.toLowerCase().includes(q))))
  const sort = $('sort').value
  const by = {
    power: (a, b) => Number(b.overall_power) - Number(a.overall_power),
    new: (a, b) => b.created_at.localeCompare(a.created_at),
    old: (a, b) => a.created_at.localeCompare(b.created_at)
  }[sort]
  return list.sort(by)
}

function fmtTime(iso) {
  return new Date(iso).toLocaleString(lang === 'en' ? 'en-GB' : 'zh-TW', { hour12: false })
}

function render() {
  const list = filtered()
  $('count').textContent = t().count(list.length, rows.length)
  $('list').replaceChildren(...list.map(card))
  loadThumbs(list)
}

function card(r) {
  const s = t()
  const m = s.meta
  const el = document.createElement('article')
  el.className = 'card'
  el.dataset.status = r.status
  const info = document.createElement('div')
  const h = document.createElement('h3')
  h.append(r.username, ' ', Object.assign(document.createElement('span'), { className: 'pw', textContent: formatPower(r.overall_power) }))
  const meta = document.createElement('div')
  meta.className = 'meta'
  meta.replaceChildren(...[
    `ID ${r.game_id}`, m.state(r.current_state), r.current_clan && m.currentClan(r.current_clan),
    m.preferred(clanText(r.preferred_clan)), r.backup_clan && m.backup(r.backup_clan), r.referrer && m.referrer(r.referrer),
    r.watchtower_level && m.watchtower(towerText(r.watchtower_level)), r.main_faction && m.faction(s.faction[r.main_faction]),
    r.active_hours && m.hours(r.active_hours), r.participation && m.events(s.participation[r.participation]),
    r.leadership && s.leadership[r.leadership], r.agree_rules === false ? m.noAgree : null, fmtTime(r.created_at)
  ].filter(Boolean).map(t => Object.assign(document.createElement('span'), { textContent: t })))
  const powers = document.createElement('div')
  powers.className = 'powers'
  for (const [label, key] of [[s.march1, 'first_march_power'], [s.march2, 'second_march_power'], [s.march3, 'third_march_power'], [s.kills, 'kill_count']]) {
    if (r[key] == null) continue
    const span = document.createElement('span')
    span.append(`${label} `, Object.assign(document.createElement('b'), { textContent: formatPower(r[key]) }))
    powers.append(span)
  }
  info.append(h, meta, powers)

  const actions = document.createElement('div')
  actions.className = 'actions'
  const sel = document.createElement('select')
  for (const [v, l] of Object.entries(s.status)) sel.append(new Option(l, v))
  sel.value = r.status
  const note = document.createElement('textarea')
  note.rows = 2
  note.placeholder = s.note
  note.value = r.admin_note ?? ''
  note.maxLength = 1000
  const save = document.createElement('button')
  save.className = 'secondary'
  save.type = 'button'
  save.textContent = s.save
  save.addEventListener('click', () => review(r, sel.value, note.value, save))
  if (!canReview(r)) { sel.disabled = note.disabled = save.disabled = true }
  const reviewed = document.createElement('small')
  reviewed.className = 'meta'
  if (r.reviewed_at) reviewed.textContent = s.reviewedAt(fmtTime(r.reviewed_at))
  actions.append(sel, note, save, reviewed)
  if (role === 'alliance' && !canReview(r)) {
    const why = r.preferred_clan === 'ANY' ? s.readonlyAny : s.readonlySecond(r.preferred_clan)
    actions.prepend(Object.assign(document.createElement('span'), { className: 'readonly', textContent: why }))
    el.classList.add('is-readonly')
  }

  el.append(info, actions)
  if (r.reason) el.append(Object.assign(document.createElement('p'), { className: 'reason', textContent: r.reason }))
  if (r.image_paths?.length) {
    const thumbs = document.createElement('div')
    thumbs.className = 'thumbs'
    thumbs.dataset.id = r.id
    el.append(thumbs)
  }
  return el
}

async function review(r, status, note, btn) {
  btn.disabled = true
  const patch = { status, admin_note: note.trim() || null, reviewed_at: new Date().toISOString(), reviewed_by: userId }
  const { data, error } = await supabase.from(TABLE).update(patch).eq('id', r.id).select()
  btn.disabled = false
  if (error || !data?.length) { msg(t().saveFailed(error?.message ?? t().noPermission), 'err'); return }
  Object.assign(r, data[0])
  msg(t().updated(r.username, t().status[status]), 'ok')
  render()
}

// 私有 bucket：用 1 小時有效的簽名網址顯示縮圖
async function loadThumbs(list) {
  const paths = list.flatMap(r => r.image_paths ?? [])
  if (!paths.length) return
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrls(paths, 3600)
  if (error) { msg(t().thumbsFailed(error.message), 'err'); return }
  const urls = new Map(data.filter(d => d.signedUrl).map(d => [d.path, d.signedUrl]))
  for (const r of list) {
    const box = document.querySelector(`.thumbs[data-id="${r.id}"]`)
    if (!box) continue
    box.replaceChildren(...(r.image_paths ?? []).filter(p => urls.has(p)).map(p => {
      const img = document.createElement('img')
      img.src = urls.get(p)
      img.loading = 'lazy'
      img.alt = t().screenshot
      img.addEventListener('click', () => { $('viewerImg').src = img.src; $('viewer').showModal() })
      return img
    }))
  }
}

function exportCsv() {
  const list = filtered()
  const s = t()
  const c = s.csv
  const csv = toCsv(list, [
    { label: c.created, value: r => fmtTime(r.created_at) },
    { label: c.status, value: r => s.status[r.status] },
    { label: c.username, value: r => r.username },
    { label: c.gameId, value: r => r.game_id },
    { label: c.state, value: r => r.current_state },
    { label: c.currentClan, value: r => r.current_clan },
    { label: c.preferred, value: r => clanText(r.preferred_clan) },
    { label: c.backup, value: r => r.backup_clan },
    { label: c.referrer, value: r => r.referrer },
    { label: c.watchtower, value: r => r.watchtower_level && towerText(r.watchtower_level) },
    { label: c.power, value: r => r.overall_power },
    { label: c.powerShown, value: r => formatPower(r.overall_power) },
    { label: c.march1, value: r => r.first_march_power },
    { label: c.march2, value: r => r.second_march_power },
    { label: c.march3, value: r => r.third_march_power },
    { label: c.kills, value: r => r.kill_count },
    { label: c.faction, value: r => s.faction[r.main_faction] },
    { label: c.hours, value: r => r.active_hours },
    { label: c.events, value: r => s.participation[r.participation] },
    { label: c.leadership, value: r => s.leadership[r.leadership] },
    { label: c.agree, value: r => r.agree_rules == null ? '' : r.agree_rules ? s.yes : s.no },
    { label: c.reason, value: r => r.reason },
    { label: c.images, value: r => r.image_paths?.length ?? 0 },
    { label: c.note, value: r => r.admin_note },
    { label: c.language, value: r => r.language }
  ])
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const d = new Date()
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  a.download = `applications-${stamp}.csv`
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}

$('lang').addEventListener('change', e => { lang = e.target.value; saveLanguage(lang); applyLanguage() })
for (const id of ['fStatus', 'fClan', 'sort']) $(id).addEventListener('change', render)
$('q').addEventListener('input', render)
$('reload').addEventListener('click', load)
$('export').addEventListener('click', exportCsv)
$('logout').addEventListener('click', async () => {
  await supabase.auth.signOut()
  rows = []; role = myClan = userId = null; userEmail = ''
  $('list').replaceChildren(); applyLanguage(); showLogin()
})
$('viewerClose').addEventListener('click', () => $('viewer').close())
$('viewer').addEventListener('click', e => { if (e.target === $('viewer')) $('viewer').close() })
applyLanguage()
start()
