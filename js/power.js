// 戰力字串 → 原始整數戰力。複製自 darkwar/src/roster.js 的單位規則，兩專案刻意不共用程式碼。
// 支援 K/M/B/T、億/亿/억（=100M）、萬/万/만（=0.01M）；純數字視為原始戰力。無法辨識回傳 NaN。
const MULTIPLIERS = { K: 1e3, M: 1e6, B: 1e9, T: 1e12, '億': 1e8, '亿': 1e8, '억': 1e8, '萬': 1e4, '万': 1e4, '만': 1e4 }
export const MAX_POWER = 1e13

export function parsePower(value) {
  const text = String(value ?? '').replace(/[,\s]/g, '').toUpperCase()
  const match = text.match(/^(\d+(?:\.\d+)?)([KMBT]|億|亿|억|萬|万|만)?$/)
  if (!match) return NaN
  const raw = Math.round(Number(match[1]) * (match[2] ? MULTIPLIERS[match[2]] : 1))
  return raw > MAX_POWER ? NaN : raw
}

// 原始戰力 → 顯示用，例如 152340000 → "152.34M"
export function formatPower(raw) {
  if (raw === null || raw === undefined || raw === '' || !Number.isFinite(Number(raw))) return ''
  const n = Number(raw)
  if (n >= 1e9) return `${trim(n / 1e9)}B`
  if (n >= 1e6) return `${trim(n / 1e6)}M`
  if (n >= 1e3) return `${trim(n / 1e3)}K`
  return String(n)
}

function trim(x) {
  return x.toFixed(2).replace(/\.?0+$/, '')
}
