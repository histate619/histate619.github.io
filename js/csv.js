// 產生 Excel 可直接開啟的 CSV（含 UTF-8 BOM，避免中文亂碼）
export function toCsv(rows, columns) {
  const head = columns.map(c => escape(c.label)).join(',')
  const body = rows.map(r => columns.map(c => escape(c.value(r))).join(','))
  return '﻿' + [head, ...body].join('\r\n')
}

function escape(value) {
  const s = value === null || value === undefined ? '' : String(value)
  // 以 = + - @ 開頭的儲存格會被 Excel 當公式執行，前置單引號中和
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s
  return /[",\r\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe
}
