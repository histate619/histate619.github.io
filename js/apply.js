import { CONFIG, TABLE, BUCKET, isConfigured } from '../config.js?v=20261010035936'
import { STRINGS, pickLanguage, saveLanguage, setDocumentLanguage } from './i18n.js?v=20261010035936'
import { parsePower, formatPower } from './power.js?v=20261010035936'
import { compressImage } from './image.js?v=20261010035936'
import { supabase } from './client.js?v=20261010035936'

const $ = id => document.getElementById(id)
let lang = pickLanguage()
const t = () => STRINGS[lang]

// 欄位定義：name 對應資料庫欄位，group 決定分在哪個區塊
const GROUPS = ['groupYou', 'groupClan', 'groupPower', 'groupPlay', 'groupMore']
// 兵種名稱用遊戲內英文，不自行翻譯
const FACTIONS = { fighter: 'Fighter', shooter: 'Shooter', rider: 'Rider' }
const FIELDS = [
  { group: 'groupYou', name: 'username', label: 'username', type: 'text', required: true, max: 40, note: 'usernameNote' },
  { group: 'groupYou', name: 'game_id', label: 'gameId', type: 'text', required: true, max: 30, inputmode: 'numeric', help: true },
  { group: 'groupYou', name: 'current_state', label: 'currentState', type: 'text', required: true, max: 10, inputmode: 'numeric' },
  { group: 'groupYou', name: 'current_clan', label: 'currentClan', type: 'text', max: 40 },
  { group: 'groupClan', name: 'preferred_clan', label: 'preferredClan', type: 'clan', required: true, any: true },
  { group: 'groupClan', name: 'backup_clan', label: 'backupClan', type: 'clan', optional: true },
  { group: 'groupClan', name: 'referrer', label: 'referrer', type: 'text', max: 40, full: true, hint: 'referrerHint' },
  { group: 'groupPower', name: 'overall_power', label: 'overallPower', type: 'power', required: true },
  { group: 'groupPower', name: 'watchtower_level', label: 'watchtower', type: 'watchtower', required: true },
  { group: 'groupPower', name: 'first_march_power', label: 'march1', type: 'power', required: true },
  { group: 'groupPower', name: 'second_march_power', label: 'march2', type: 'power' },
  { group: 'groupPower', name: 'third_march_power', label: 'march3', type: 'power' },
  { group: 'groupPower', name: 'kill_count', label: 'killCount', type: 'power', required: true, hint: 'killHint' },
  { group: 'groupPower', name: 'main_faction', label: 'mainFaction', type: 'choice', required: true,
    options: () => FACTIONS },
  { group: 'groupPlay', name: 'active_hours', label: 'activeHours', type: 'text', required: true, max: 60, hint: 'activeHoursHint' },
  { group: 'groupPlay', name: 'leadership', label: 'leadership', type: 'choice', required: true, options: s => s.leadershipOptions },
  { group: 'groupPlay', name: 'participation', label: 'participation', type: 'choice', required: true, full: true,
    options: s => s.participationOptions },
  { group: 'groupMore', name: 'images', label: 'images', type: 'images', full: true },
  { group: 'groupMore', name: 'reason', label: 'reason', type: 'textarea', max: 1000, full: true },
  { group: 'groupMore', name: 'agree_rules', label: 'agreeRules', type: 'agree', required: true, full: true }
]

// 標題文字：有些字串是函式（要帶州號）
const labelText = (f, s) => typeof s[f.label] === 'function' ? s[f.label](CONFIG.stateName) : s[f.label]

function render() {
  const s = t()
  // 保留使用者已填的值，切換語言不清空
  const values = Object.fromEntries(new FormData($('form')))
  setDocumentLanguage(lang)
  document.title = s.title
  $('lang').value = lang
  $('stateNo').textContent = CONFIG.stateName
  $('back').textContent = s.back
  $('title').textContent = s.title
  $('intro').textContent = isConfigured() ? s.intro : s.notConfigured
  $('submit').textContent = s.submit
  $('submit').disabled = !isConfigured()

  const box = $('fields')
  const files = $('images')?.files
  // 重繪前直接讀當下狀態（toggle 事件是非同步的，點開後立刻切語言會來不及記錄）
  const helpOpen = Boolean($('idHelp')?.open)
  box.replaceChildren(...GROUPS.map(g => {
    const set = document.createElement('fieldset')
    const grid = document.createElement('div')
    grid.className = 'grid'
    grid.append(...FIELDS.filter(f => f.group === g).flatMap(f => f.help ? [fieldEl(f, s), idHelpEl(s, helpOpen)] : [fieldEl(f, s)]))
    set.append(Object.assign(document.createElement('legend'), { textContent: s[g] }), grid)
    return set
  }))
  for (const [k, v] of Object.entries(values)) {
    const el = box.querySelector(`[name="${k}"]`)
    if (el?.type === 'checkbox') el.checked = true
    else if (el && el.type !== 'file') el.value = v
  }
  if (files?.length) $('images').files = files
  showThumbs()
  box.querySelectorAll('[data-power]').forEach(updatePowerPreview)
}

// 「找不到遊戲 ID？」：整列寬、預設收合，點開才顯示範例圖（做法參考 620 的申請頁）
function idHelpEl(s, open) {
  const box = Object.assign(document.createElement('details'), { className: 'help full', id: 'idHelp', open })
  box.append(
    Object.assign(document.createElement('summary'), { textContent: s.idHelp }),
    Object.assign(document.createElement('p'), { textContent: s.idHelpText }),
    Object.assign(document.createElement('img'), { src: 'assets/game-id-example.jpg', alt: s.idHelpAlt, width: 928, height: 607, loading: 'lazy' })
  )
  return box
}

function fieldEl(f, s) {
  const label = document.createElement('label')
  if (f.full) label.className = 'full'
  if (f.type === 'agree') {
    // 同意框：勾選框在前、文字在後，同一行
    const box = Object.assign(document.createElement('input'), { type: 'checkbox', name: f.name, required: true })
    label.classList.add('check')
    label.append(box, Object.assign(document.createElement('span'), { textContent: labelText(f, s) }))
    return label
  }
  // 標題與星號包在同一個 span，避免 grid label 把星號拆成獨立一行
  const caption = document.createElement('span')
  caption.append(s[f.label])
  if (f.required) caption.append(' ', Object.assign(document.createElement('span'), { className: 'req', textContent: '*' }))
  label.append(caption)
  let input
  if (f.type === 'clan') {
    input = document.createElement('select')
    const first = f.optional ? s.none : s.select
    input.append(new Option(first, ''), ...CONFIG.clans.map(c => new Option(`${c.tag}（${c.name}）`, c.tag)))
    if (f.any) input.append(new Option(s.anyClan, 'ANY'))
  } else if (f.type === 'choice') {
    input = document.createElement('select')
    input.append(new Option(s.select, ''), ...Object.entries(f.options(s)).map(([v, l]) => new Option(l, v)))
  } else if (f.type === 'watchtower') {
    input = document.createElement('select')
    input.append(new Option(s.select, ''))
    for (let i = CONFIG.minWatchtower ?? 1; i <= CONFIG.maxWatchtower; i++) input.append(new Option(String(i), String(i)))
    // 30 級之後是工業 1–3，存成 31–33
    for (let n = 1; n <= (CONFIG.industrialLevels ?? 0); n++) input.append(new Option(s.industrial(n), String(CONFIG.maxWatchtower + n)))
  } else if (f.type === 'textarea') {
    input = document.createElement('textarea')
    input.rows = 4
    input.maxLength = f.max
  } else if (f.type === 'images') {
    input = document.createElement('input')
    input.type = 'file'
    input.id = 'images'
    input.accept = 'image/jpeg,image/png,image/webp'
    input.multiple = true
    input.addEventListener('change', showThumbs)
    const hint = document.createElement('small')
    hint.textContent = s.imagesHint(CONFIG.maxImages)
    // 原生檔案框的按鈕文字由瀏覽器語言決定，頁面改不了；改用自繪按鈕，原生 input 只保留功能
    const picker = document.createElement('span')
    picker.className = 'file-picker'
    const button = Object.assign(document.createElement('span'), { className: 'file-button', textContent: s.chooseFiles })
    const status = Object.assign(document.createElement('span'), { className: 'file-status', id: 'fileStatus' })
    picker.append(input, button, status)
    // 也支援把圖片直接拖進框裡
    picker.addEventListener('dragover', e => { e.preventDefault(); picker.classList.add('drag') })
    picker.addEventListener('dragleave', () => picker.classList.remove('drag'))
    picker.addEventListener('drop', e => {
      e.preventDefault()
      picker.classList.remove('drag')
      input.files = e.dataTransfer.files
      showThumbs()
    })
    const thumbs = document.createElement('div')
    thumbs.className = 'thumbs'
    thumbs.id = 'thumbs'
    input.name = f.name
    label.append(hint, picker, thumbs)
    return label
  } else {
    input = document.createElement('input')
    input.type = 'text'
    if (f.max) input.maxLength = f.max
    if (f.hint) input.placeholder = s[f.hint]
    if (f.inputmode) input.inputMode = f.inputmode
  }
  input.name = f.name
  input.required = Boolean(f.required)
  label.append(input)
  // 提示放在輸入框下方：兩欄並排時，輸入框才會從同一高度開始
  if (f.note) label.append(Object.assign(document.createElement('small'), { className: 'note', textContent: s[f.note] }))
  if (f.type === 'power') {
    input.dataset.power = ''
    input.placeholder = s[f.hint ?? 'powerHint']
    input.addEventListener('input', () => updatePowerPreview(input))
    const p = document.createElement('span')
    p.className = 'preview'
    label.append(p)
  }
  return label
}

function updatePowerPreview(input) {
  const p = input.parentElement.querySelector('.preview')
  if (!input.value.trim()) { p.textContent = ''; p.className = 'preview'; input.removeAttribute('aria-invalid'); return }
  const raw = parsePower(input.value)
  const bad = Number.isNaN(raw)
  p.textContent = bad ? t().badPower : `= ${formatPower(raw)}`
  p.className = bad ? 'preview bad' : 'preview'
  input.setAttribute('aria-invalid', String(bad))
}

function showThumbs() {
  const count = $('images').files.length
  $('fileStatus').textContent = count ? t().filesChosen(count) : t().noFiles
  const box = $('thumbs')
  box.querySelectorAll('img').forEach(img => URL.revokeObjectURL(img.src))
  box.replaceChildren(...[...$('images').files].map(file => {
    const img = document.createElement('img')
    img.src = URL.createObjectURL(file)
    img.alt = file.name
    return img
  }))
}

function setMsg(text, kind = '') {
  $('msg').textContent = text
  $('msg').className = `msg ${kind}`
}

// 讀取並驗證表單；有錯回傳 { error }
function collect() {
  const s = t()
  const fd = new FormData($('form'))
  const row = { language: lang }
  for (const f of FIELDS) {
    if (f.type === 'images') continue
    if (f.type === 'agree') {
      if (!fd.get(f.name)) return { error: s.mustAgree, field: f.name }
      row[f.name] = true
      continue
    }
    const v = String(fd.get(f.name) ?? '').trim()
    if (f.required && !v) return { error: `${labelText(f, s)}：${s.required}`, field: f.name }
    if (!v) { row[f.name] = null; continue }
    if (f.type === 'power') {
      const raw = parsePower(v)
      if (Number.isNaN(raw)) return { error: `${labelText(f, s)}：${s.badPower}`, field: f.name }
      row[f.name] = raw
    } else if (f.type === 'watchtower') {
      row[f.name] = Number(v)
    } else {
      row[f.name] = v
    }
  }
  const files = [...$('images').files]
  if (files.length > CONFIG.maxImages) return { error: s.tooMany(CONFIG.maxImages), field: 'images' }
  return { row, files }
}

async function submit(e) {
  e.preventDefault()
  const s = t()
  const { row, files, error, field } = collect()
  if (error) {
    setMsg(error, 'err')
    $('form').querySelector(`[name="${field}"]`)?.focus()
    return
  }
  $('submit').disabled = true
  setMsg(s.submitting)
  try {
    const paths = []
    for (const [i, file] of files.entries()) {
      setMsg(s.uploading(i + 1, files.length))
      const blob = await compressImage(file)
      const path = `uploads/${crypto.randomUUID()}.jpg`
      const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, blob, { contentType: 'image/jpeg' })
      if (upErr) throw upErr
      paths.push(path)
    }
    row.image_paths = paths
    // 不加 .select()：訪客沒有讀取權限，要求回傳資料會失敗
    const { error: insErr } = await supabase.from(TABLE).insert(row)
    if (insErr) throw insErr
    $('form').reset()
    showThumbs()
    $('form').querySelectorAll('[data-power]').forEach(updatePowerPreview)
    setMsg(s.ok, 'ok')
    $('msg').append(document.createElement('br'), Object.assign(document.createElement('a'), { href: 'status.html', textContent: s.okStatus }))
  } catch (err) {
    console.error(err)
    setMsg(s.err + (err.message || String(err)), 'err')
  } finally {
    $('submit').disabled = !isConfigured()
  }
}

$('lang').addEventListener('change', e => { lang = e.target.value; saveLanguage(lang); render() })
$('form').addEventListener('submit', submit)
// 使用者修改任何欄位後，清掉上一次的錯誤提示
$('form').addEventListener('input', () => { if ($('msg').classList.contains('err')) setMsg('') })
render()
