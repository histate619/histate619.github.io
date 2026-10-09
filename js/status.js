import { CONFIG, isConfigured } from '../config.js?v=20261009090817'
import { STRINGS, pickLanguage, saveLanguage } from './i18n.js?v=20261009090817'
import { supabase } from './client.js?v=20261009090817'

const $ = id => document.getElementById(id)
const el = (tag, props = {}, ...children) => {
  const node = Object.assign(document.createElement(tag), props)
  node.append(...children)
  return node
}
let lang = pickLanguage()
const t = () => STRINGS[lang]
// 最近一次查詢結果；切換語言時用它重畫，不必重查
let rows = null

const fmtDate = iso => new Date(iso).toLocaleDateString(lang === 'en' ? 'en-GB' : 'zh-TW', { year: 'numeric', month: 'short', day: 'numeric' })

function setMsg(text, kind = '') {
  $('msg').textContent = text
  $('msg').className = `msg ${kind}`
}

function renderResults() {
  const s = t()
  const box = $('results')
  if (!rows) return box.replaceChildren()
  if (rows.length === 0) return box.replaceChildren(el('p', { className: 'lookup-empty', textContent: s.statusNone }))
  box.replaceChildren(...rows.map(r => el('div', { className: `lookup-row is-${r.status}` },
    el('b', { className: 'lookup-status', textContent: s.statusLabel[r.status] ?? r.status }),
    el('p', { className: 'lookup-explain', textContent: s.statusExplain[r.status] ?? '' }),
    el('dl', {},
      el('dt', { textContent: s.statusClan }), el('dd', { textContent: r.preferred_clan === 'ANY' ? s.anyClan : r.preferred_clan }),
      el('dt', { textContent: s.statusSubmitted }), el('dd', { textContent: fmtDate(r.created_at) }),
      ...(r.reviewed_at ? [el('dt', { textContent: s.statusReviewed }), el('dd', { textContent: fmtDate(r.reviewed_at) })] : [])))))
  if (rows.length > 1) box.prepend(el('p', { className: 'lookup-empty', textContent: s.statusMany(rows.length) }))
}

function render() {
  const s = t()
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant'
  document.title = s.statusTitle
  $('lang').value = lang
  $('stateNo').textContent = CONFIG.stateName
  $('back').textContent = s.back
  $('title').textContent = s.statusTitle
  $('intro').textContent = isConfigured() ? s.statusIntro : s.notConfigured
  $('lUser').textContent = s.username
  $('lId').textContent = s.gameId
  $('submit').textContent = s.statusCheck
  $('submit').disabled = !isConfigured()
  if ($('msg').classList.contains('err')) setMsg('')
  renderResults()
}

async function lookup(e) {
  e.preventDefault()
  const s = t()
  const username = $('username').value.trim()
  const gameId = $('game_id').value.trim()
  if (!username || !gameId) {
    rows = null; renderResults()
    return setMsg(s.statusNeedBoth, 'err')
  }
  $('submit').disabled = true
  setMsg(s.statusChecking)
  try {
    const { data, error } = await supabase.rpc('application_status', { p_username: username, p_game_id: gameId })
    if (error) throw error
    rows = data
    setMsg('')
    renderResults()
  } catch (err) {
    console.error(err)
    rows = null; renderResults()
    setMsg(s.statusFailed + (err.message || String(err)), 'err')
  } finally {
    $('submit').disabled = !isConfigured()
  }
}

$('lang').addEventListener('change', e => { lang = e.target.value; saveLanguage(lang); render() })
$('form').addEventListener('submit', lookup)
render()
