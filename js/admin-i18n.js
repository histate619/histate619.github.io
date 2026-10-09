// 審核頁文字（繁中／英文）。HTML 裡的固定文字用 data-i18n／data-i18n-placeholder 對應這裡的 key。
export const ADMIN_STRINGS = {
  'zh-TW': {
    title: '申請審核', titleClan: c => `${c} 申請審核`,
    email: 'Email', account: '帳號', accountHint: '聯盟簡稱（如 AxY）或 Email', password: '密碼', login: '登入', loggingIn: '登入中…', loginFailed: m => `登入失敗：${m}`,
    notConfigured: 'config.js 尚未填入 Supabase 設定。',
    notStaff: e => `此帳號（${e}）不在審核名單內。`,
    staffCheckFailed: m => `登入成功，但讀取審核名單失敗：${m}`,
    whoAlliance: (c, e) => `${c} 聯盟帳號（${e}）`, who: (e, r) => `${e}（${r}）`,
    allStatus: '全部狀態', allClans: '全部聯盟',
    sortPower: '總戰力（高到低）', sortNew: '最新提交', sortOld: '最早提交',
    search: '搜尋名稱 / ID / 推薦人', reload: '重新整理', export: '匯出 CSV', logout: '登出', close: '關閉',
    loading: '載入中…', loadFailed: m => `讀取失敗：${m}`, count: (n, total) => `顯示 ${n} / 共 ${total} 筆`,
    status: { pending: '待審', approved: '通過', rejected: '拒絕' },
    faction: { fighter: 'Fighter', shooter: 'Shooter', rider: 'Rider', none: '無固定兵種', unknown: '不清楚' },
    participation: { very: '非常活躍', active: '活躍', moderate: '普通', occasional: '偶爾', rare: '很少' },
    leadership: { r5: '曾任 R5', r4: '曾任 R4', none: '沒當過管理' },
    any: '不限', industrial: n => `工業 ${n}`,
    meta: {
      state: v => `州 ${v}`, currentClan: v => `現聯盟 ${v}`, preferred: v => `首選 ${v}`, backup: v => `備選 ${v}`,
      referrer: v => `推薦人 ${v}`, watchtower: v => `瞭望塔 ${v}`, faction: v => `兵種 ${v}`,
      hours: v => `上線 ${v}`, events: v => `活動 ${v}`, noAgree: '未同意規則'
    },
    march1: '一隊', march2: '二隊', march3: '三隊', kills: '擊殺',
    note: '備註（其他審核帳號也看得到）', save: '儲存', reviewedAt: t => `審於 ${t}`,
    readonlyAny: '申請人選「不限」，只能查看', readonlySecond: c => `你是第二志願（第一志願 ${c}），只能查看`,
    saveFailed: m => `儲存失敗：${m}`, noPermission: '沒有權限', updated: (u, s) => `已更新：${u} → ${s}`,
    thumbsFailed: m => `截圖載入失敗：${m}`, screenshot: '截圖', yes: '是', no: '否',
    csv: {
      created: '提交時間', status: '狀態', username: '遊戲名稱', gameId: '遊戲ID', state: '目前州', currentClan: '目前聯盟',
      preferred: '首選聯盟', backup: '備選聯盟', referrer: '推薦人', watchtower: '瞭望塔', power: '總戰力', powerShown: '總戰力(顯示)',
      march1: '一隊戰力', march2: '二隊戰力', march3: '三隊戰力', kills: '擊殺數', faction: '主力兵種', hours: '上線時段(ST)',
      events: '活動參與度', leadership: '管理經驗', agree: '同意規則', reason: '理由', images: '截圖數', note: '備註', language: '語言'
    }
  },
  en: {
    title: 'Application review', titleClan: c => `${c} application review`,
    email: 'Email', account: 'Account', accountHint: 'Alliance tag (e.g. AxY) or email', password: 'Password', login: 'Log in', loggingIn: 'Logging in…', loginFailed: m => `Login failed: ${m}`,
    notConfigured: 'Supabase settings are missing from config.js.',
    notStaff: e => `This account (${e}) is not on the reviewer list.`,
    staffCheckFailed: m => `Logged in, but could not read the reviewer list: ${m}`,
    whoAlliance: (c, e) => `${c} alliance account (${e})`, who: (e, r) => `${e} (${r})`,
    allStatus: 'All statuses', allClans: 'All alliances',
    sortPower: 'Overall power (high to low)', sortNew: 'Newest first', sortOld: 'Oldest first',
    search: 'Search name / ID / referrer', reload: 'Refresh', export: 'Export CSV', logout: 'Log out', close: 'Close',
    loading: 'Loading…', loadFailed: m => `Could not load: ${m}`, count: (n, total) => `Showing ${n} of ${total}`,
    status: { pending: 'Pending', approved: 'Approved', rejected: 'Rejected' },
    faction: { fighter: 'Fighter', shooter: 'Shooter', rider: 'Rider', none: 'No faction', unknown: "Doesn't know" },
    participation: { very: 'Very active', active: 'Active', moderate: 'Moderate', occasional: 'Occasional', rare: 'Rarely' },
    leadership: { r5: 'Former R5', r4: 'Former R4', none: 'No leadership role' },
    any: 'No preference', industrial: n => `Industrial ${n}`,
    meta: {
      state: v => `State ${v}`, currentClan: v => `Now in ${v}`, preferred: v => `1st choice ${v}`, backup: v => `2nd choice ${v}`,
      referrer: v => `Referred by ${v}`, watchtower: v => `Watchtower ${v}`, faction: v => `Faction ${v}`,
      hours: v => `Online ${v}`, events: v => `Events: ${v}`, noAgree: 'Did not agree to rules'
    },
    march1: '1st', march2: '2nd', march3: '3rd', kills: 'Kills',
    note: 'Note (other reviewers can see it)', save: 'Save', reviewedAt: t => `Reviewed ${t}`,
    readonlyAny: 'Applicant chose "No preference". View only', readonlySecond: c => `You are the 2nd choice (1st choice is ${c}). View only`,
    saveFailed: m => `Could not save: ${m}`, noPermission: 'no permission', updated: (u, s) => `Updated: ${u} → ${s}`,
    thumbsFailed: m => `Could not load screenshots: ${m}`, screenshot: 'Screenshot', yes: 'Yes', no: 'No',
    csv: {
      created: 'Submitted', status: 'Status', username: 'In-game name', gameId: 'Game ID', state: 'Current state', currentClan: 'Current alliance',
      preferred: '1st choice', backup: '2nd choice', referrer: 'Referrer', watchtower: 'Watchtower', power: 'Overall power', powerShown: 'Overall power (short)',
      march1: '1st march power', march2: '2nd march power', march3: '3rd march power', kills: 'Kill count', faction: 'Main faction', hours: 'Active hours (ST)',
      events: 'Event participation', leadership: 'Leadership experience', agree: 'Agreed to rules', reason: 'Reason', images: 'Screenshots', note: 'Note', language: 'Language'
    }
  }
}
