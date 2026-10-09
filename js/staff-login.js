// 聯盟帳號用假 email（example.com 是保留網域，不會寄信給任何人）。
// 聯盟長登入時只要輸入聯盟簡稱，這裡換成對應 email；建帳號腳本用同一套規則。
export const ALLIANCE_EMAIL_DOMAIN = 's619.example.com'

// 'NØVA' → 'nova'、'C&G' → 'cg'、'MTS_' → 'mts'
export function allianceSlug(tag) {
  return String(tag).replace(/[Øø]/g, 'o').normalize('NFKD').replace(/[^A-Za-z0-9]/g, '').toLowerCase()
}

// 含 @ 視為完整 email（管理員帳號），否則視為聯盟簡稱
export function loginEmail(input) {
  const v = String(input).trim()
  return v.includes('@') ? v : `${allianceSlug(v)}@${ALLIANCE_EMAIL_DOMAIN}`
}
