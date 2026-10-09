import { CONFIG } from '../config.js?v=20261009090817'

export const STRINGS = {
  'zh-TW': {
    // 首頁
    homeTitle: n => `State ${n} 移民申請`,
    tagline: '正在招募移民',
    lead: n => `想搬到 ${n} 州？填一份申請，管理層看過後會跟你聯繫。`,
    applyCta: '填寫移民申請',
    statusCta: '查看申請狀態',
    // 申請狀態查詢頁
    statusTitle: '申請狀態查詢', statusIntro: '輸入申請時填的遊戲名稱和遊戲 ID，就能看到審核進度。',
    statusCheck: '查詢', statusChecking: '查詢中…', statusNeedBoth: '遊戲名稱和遊戲 ID 都要填',
    statusFailed: '查詢失敗：', statusNone: '查不到申請。請確認遊戲名稱和 ID 跟申請時填的一樣。',
    statusMany: n => `找到 ${n} 份申請，最新的在最上面。`,
    statusLabel: { pending: '審核中', approved: '已通過', rejected: '未通過' },
    statusExplain: {
      pending: '管理層還在看你的申請，有結果會跟你聯繫。',
      approved: '申請已通過，管理層會跟你聯繫後續安排。',
      rejected: '這次申請沒有通過。有疑問可以聯繫推薦人或聯盟管理層。'
    },
    statusClan: '首選聯盟', statusSubmitted: '提交日期', statusReviewed: '審核日期',
    okStatus: '之後可以在「查看申請狀態」頁查詢審核進度。',
    routeTitle: '申請流程',
    steps: [
      ['填寫申請', '遊戲名稱、ID、戰力，再附上背包截圖'],
      ['管理層審核', '每份申請都會由管理層查看'],
      ['等待聯繫', '審核後管理層會跟你聯繫移民安排']
    ],
    alliancesTitle: n => `${n} 州的聯盟`,
    footer: n => `Dark War: Survival 第 ${n} 州`,
    finalTitle: '準備好搬家了嗎？',
    finalText: '準備好你的戰力數字和背包截圖，就可以開始填。',
    credit: '照片：Serhii Kalyn、Nico（Unsplash）',
    // 申請頁
    back: '返回首頁',
    title: '移民申請',
    intro: '帶 * 的欄位必填。送出後，申請會交給管理層審核。',
    groupYou: '你的資料', groupClan: '想加入的聯盟', groupPower: '戰力', groupPlay: '活躍度', groupMore: '截圖與理由',
    usernameNote: '移民活動結束前請不要改名', anyClan: '不限',
    idHelp: '找不到遊戲 ID？看這裡', idHelpText: '在遊戲裡打開個人資料，「ID:」後面那一串數字就是。', idHelpAlt: '遊戲個人資料頁，ID 那一行用橘框標出',
    mainFaction: '主力兵種', killCount: '擊殺數', killHint: '例：2.2M',
    activeHours: '平常上線時段', activeHoursHint: '用伺服器時間（ST），例：20:00–24:00',
    participation: '伺服器／聯盟活動參與度', leadership: '曾擔任聯盟管理',
    participationOptions: { very: '非常活躍：幾乎每個活動都參加', active: '活躍：主要活動大多參加', moderate: '普通：有空就參加', occasional: '偶爾：只參加部分活動', rare: '很少參加' },
    leadershipOptions: { r5: 'R5', r4: 'R4', none: '沒有當過' },
    agreeRules: n => `我願意遵守 ${n} 伺服器規則、NAP（互不侵犯協定）與聯盟規定`, mustAgree: '要勾選同意才能送出',
    username: '遊戲名稱', gameId: '遊戲 ID', currentState: '目前所在州', currentClan: '目前聯盟',
    preferredClan: '第一志願', backupClan: '第二志願',
    referrer: `${CONFIG.stateName} 伺服器推薦人`, referrerHint: '選填，推薦你的玩家遊戲名稱', select: '請選擇', none: '不填',
    watchtower: '瞭望塔等級', industrial: n => `工業 ${n}`, overallPower: '總戰力', march1: '第一隊（主力車）戰力', march2: '第二隊戰力', march3: '第三隊戰力',
    powerHint: '例：150M、1.5億', reason: '為什麼想加入？',
    images: '背包／英雄截圖', imagesHint: n => `最多 ${n} 張，送出時會自動壓縮`,
    chooseFiles: '選擇截圖', noFiles: '還沒選擇截圖', filesChosen: n => `已選 ${n} 張`,
    submit: '送出申請', submitting: '正在送出…', uploading: (i, n) => `正在上傳截圖 ${i}/${n}…`,
    ok: '申請已送出。管理層審核後會跟你聯繫。', err: '沒有送出：', badPower: '看不懂這個戰力，請寫成 150M 或 1.5億 這種格式',
    tooMany: n => `截圖最多 ${n} 張，請刪掉幾張再送出`, notConfigured: '申請功能還沒開放，暫時無法送出。', required: '這一欄必填'
  },
  en: {
    homeTitle: n => `State ${n} migration`,
    tagline: 'Now recruiting migrants',
    lead: n => `Thinking of moving to State ${n}? Send an application and the leadership will get back to you.`,
    applyCta: 'Apply to migrate',
    statusCta: 'Check application status',
    statusTitle: 'Application status', statusIntro: 'Enter the in-game name and ID you used on your application to see where it stands.',
    statusCheck: 'Check status', statusChecking: 'Checking…', statusNeedBoth: 'Enter both your in-game name and ID',
    statusFailed: 'Could not check: ', statusNone: 'No application found. Make sure the name and ID match what you entered when you applied.',
    statusMany: n => `Found ${n} applications, newest first.`,
    statusLabel: { pending: 'Under review', approved: 'Approved', rejected: 'Not approved' },
    statusExplain: {
      pending: 'The leadership is still reviewing your application and will contact you when there is a decision.',
      approved: 'Your application was approved. The leadership will contact you about next steps.',
      rejected: 'Your application was not approved this time. Ask your referrer or the alliance leadership if you have questions.'
    },
    statusClan: '1st choice', statusSubmitted: 'Submitted', statusReviewed: 'Reviewed',
    okStatus: 'You can check its progress later on the application status page.',
    routeTitle: 'How it works',
    steps: [
      ['Fill in the application', 'In-game name, ID, power, plus screenshots of your bag'],
      ['Leadership review', 'Every application is read by the leadership'],
      ['Hear back', 'After review, the leadership contacts you about the move']
    ],
    alliancesTitle: n => `Alliances in State ${n}`,
    footer: n => `Dark War: Survival, State ${n}`,
    finalTitle: 'Ready to move?',
    finalText: 'Have your power numbers and bag screenshots ready, then start the form.',
    credit: 'Photos: Serhii Kalyn, Nico (Unsplash)',
    back: 'Back to home',
    title: 'Migration application',
    intro: 'Fields marked * are required. Your application goes to the leadership for review.',
    groupYou: 'About you', groupClan: 'Alliance you want to join', groupPower: 'Power', groupPlay: 'Activity', groupMore: 'Screenshots and reason',
    usernameNote: 'Please do not change your name until the migration event ends', anyClan: 'No preference',
    idHelp: 'Where is my game ID?', idHelpText: 'Open your profile in Dark War and look beside “ID:”.', idHelpAlt: 'Dark War profile screen with the ID row outlined in orange',
    mainFaction: 'Main troop faction', killCount: 'Kill count', killHint: 'e.g. 2.2M',
    activeHours: 'Usual active hours', activeHoursHint: 'In server time (ST), e.g. 20:00–24:00',
    participation: 'Server / alliance event participation', leadership: 'Alliance leadership experience',
    participationOptions: { very: 'Very active: almost all events', active: 'Active: most major events', moderate: 'Moderate: when available', occasional: 'Occasional: selected events only', rare: 'Rarely take part' },
    leadershipOptions: { r5: 'R5', r4: 'R4', none: 'None' },
    agreeRules: n => `I will follow State ${n}'s rules, NAP and alliance policies`, mustAgree: 'Tick the box to agree before sending',
    username: 'In-game name', gameId: 'In-game ID', currentState: 'Current state', currentClan: 'Current alliance',
    preferredClan: 'First choice', backupClan: 'Second choice',
    referrer: `Referrer in State ${CONFIG.stateName}`, referrerHint: 'Optional, in-game name of the player who referred you', select: 'Select', none: 'None',
    watchtower: 'Watchtower level', industrial: n => `Industrial ${n}`, overallPower: 'Overall power', march1: '1st march (main car / APC) power', march2: '2nd march power', march3: '3rd march power',
    powerHint: 'e.g. 150M, 1.2B', reason: 'Why do you want to join?',
    images: 'Bag / hero screenshots', imagesHint: n => `Up to ${n} images, compressed when you send`,
    chooseFiles: 'Choose screenshots', noFiles: 'No screenshots chosen', filesChosen: n => `${n} chosen`,
    submit: 'Send application', submitting: 'Sending…', uploading: (i, n) => `Uploading screenshot ${i}/${n}…`,
    ok: 'Application sent. The leadership will contact you after review.', err: 'Not sent: ', badPower: 'Power not recognized. Write it like 150M or 1.2B',
    tooMany: n => `At most ${n} screenshots. Remove some and send again`, notConfigured: 'Applications are not open yet.', required: 'This field is required'
  }
}

export function pickLanguage() {
  try {
    const saved = localStorage.getItem('apply-lang')
    if (saved && STRINGS[saved]) return saved
  } catch {}
  return /^zh/i.test(navigator.language) ? 'zh-TW' : 'en'
}

export function saveLanguage(lang) {
  try { localStorage.setItem('apply-lang', lang) } catch {}
}
