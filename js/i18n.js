import { CONFIG } from '../config.js?v=20261010023521'

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
      ['聯盟審核', '你選的聯盟和州管理層會看你的申請'],
      ['查看結果', '隨時用遊戲名稱和 ID 到「查看申請狀態」查進度；通過後會有人聯繫你安排移民']
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
      ['Alliance review', 'The alliance you chose and the state leadership review your application'],
      ['Check the result', 'Check progress any time on the status page with your in-game name and ID. If approved, someone will contact you about the move']
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
  },
  ko: {
    homeTitle: n => `${n} 서버 이주 신청`,
    tagline: '이주민 모집 중',
    lead: n => `${n} 서버로 이주하고 싶으신가요? 신청서를 보내 주시면 운영진이 검토 후 연락드립니다.`,
    applyCta: '이주 신청하기',
    statusCta: '신청 상태 확인',
    statusTitle: '신청 상태 확인', statusIntro: '신청할 때 입력한 게임 닉네임과 게임 ID를 입력하면 심사 진행 상황을 볼 수 있습니다.',
    statusCheck: '조회', statusChecking: '조회 중…', statusNeedBoth: '게임 닉네임과 게임 ID를 모두 입력하세요',
    statusFailed: '조회 실패: ', statusNone: '신청서를 찾을 수 없습니다. 닉네임과 ID가 신청할 때와 같은지 확인하세요.',
    statusMany: n => `신청서 ${n}건을 찾았습니다. 최신순입니다.`,
    statusLabel: { pending: '심사 중', approved: '승인됨', rejected: '승인되지 않음' },
    statusExplain: {
      pending: '운영진이 아직 신청서를 검토하고 있습니다. 결과가 나오면 연락드립니다.',
      approved: '신청이 승인되었습니다. 운영진이 다음 절차에 대해 연락드립니다.',
      rejected: '이번 신청은 승인되지 않았습니다. 궁금한 점은 추천인이나 연맹 운영진에게 문의하세요.'
    },
    statusClan: '1지망 연맹', statusSubmitted: '제출일', statusReviewed: '심사일',
    okStatus: '나중에 「신청 상태 확인」 페이지에서 진행 상황을 볼 수 있습니다.',
    routeTitle: '신청 절차',
    steps: [
      ['신청서 작성', '게임 닉네임, ID, 전투력과 가방 스크린샷'],
      ['연맹 심사', '선택한 연맹과 서버 운영진이 신청서를 검토합니다'],
      ['결과 확인', '언제든 닉네임과 ID로 「신청 상태 확인」에서 진행 상황을 볼 수 있습니다. 승인되면 이주 일정을 연락드립니다']
    ],
    alliancesTitle: n => `${n} 서버의 연맹`,
    footer: n => `Dark War: Survival ${n} 서버`,
    finalTitle: '이주할 준비가 되셨나요?',
    finalText: '전투력 수치와 가방 스크린샷을 준비한 뒤 작성을 시작하세요.',
    credit: '사진: Serhii Kalyn, Nico (Unsplash)',
    back: '홈으로',
    title: '이주 신청',
    intro: '* 표시 항목은 필수입니다. 제출하면 운영진이 신청서를 검토합니다.',
    groupYou: '내 정보', groupClan: '가입 희망 연맹', groupPower: '전투력', groupPlay: '활동', groupMore: '스크린샷과 지원 이유',
    usernameNote: '이주 이벤트가 끝날 때까지 닉네임을 바꾸지 마세요', anyClan: '상관없음',
    idHelp: '게임 ID는 어디서 보나요?', idHelpText: '게임에서 프로필을 열면 「ID:」 옆의 숫자가 게임 ID입니다.', idHelpAlt: '게임 프로필 화면, ID 줄이 주황색 테두리로 표시됨',
    mainFaction: '주력 병종', killCount: '처치 수', killHint: '예: 2.2M',
    activeHours: '주 접속 시간', activeHoursHint: '서버 시간(ST) 기준, 예: 20:00–24:00',
    participation: '서버/연맹 이벤트 참여도', leadership: '연맹 운영 경험',
    participationOptions: { very: '매우 활발: 거의 모든 이벤트 참여', active: '활발: 주요 이벤트 대부분 참여', moderate: '보통: 시간 될 때 참여', occasional: '가끔: 일부 이벤트만 참여', rare: '거의 참여 안 함' },
    leadershipOptions: { r5: 'R5', r4: 'R4', none: '없음' },
    agreeRules: n => `${n} 서버 규칙, NAP(불가침 협정), 연맹 규정을 지키겠습니다`, mustAgree: '동의에 체크해야 제출할 수 있습니다',
    username: '게임 닉네임', gameId: '게임 ID', currentState: '현재 서버', currentClan: '현재 연맹',
    preferredClan: '1지망', backupClan: '2지망',
    referrer: `${CONFIG.stateName} 서버 추천인`, referrerHint: '선택 사항, 추천해 준 플레이어의 닉네임', select: '선택', none: '선택 안 함',
    watchtower: '감시탑 레벨', industrial: n => `Industrial ${n}`, overallPower: '총 전투력', march1: '1부대(주력 차량) 전투력', march2: '2부대 전투력', march3: '3부대 전투력',
    powerHint: '예: 150M, 1.2B, 1.5억', reason: '가입하려는 이유',
    images: '가방/영웅 스크린샷', imagesHint: n => `최대 ${n}장, 제출할 때 자동으로 압축됩니다`,
    chooseFiles: '스크린샷 선택', noFiles: '선택한 스크린샷 없음', filesChosen: n => `${n}장 선택됨`,
    submit: '신청서 제출', submitting: '제출 중…', uploading: (i, n) => `스크린샷 업로드 중 ${i}/${n}…`,
    ok: '신청서가 제출되었습니다. 운영진이 검토 후 연락드립니다.', err: '제출되지 않았습니다: ', badPower: '전투력을 인식할 수 없습니다. 150M, 1.2B, 1.5억처럼 입력하세요',
    tooMany: n => `스크린샷은 최대 ${n}장입니다. 일부를 지우고 다시 제출하세요`, notConfigured: '아직 신청을 받지 않습니다.', required: '필수 항목입니다'
  },
  ar: {
    homeTitle: n => `طلب الانتقال إلى الولاية ${n}`,
    tagline: 'نستقبل المنتقلين الآن',
    lead: n => `تفكر في الانتقال إلى الولاية ${n}؟ أرسل طلبًا وستتواصل معك القيادة بعد مراجعته.`,
    applyCta: 'قدّم طلب الانتقال',
    statusCta: 'تحقق من حالة الطلب',
    statusTitle: 'حالة الطلب', statusIntro: 'أدخل اسمك ومعرّفك في اللعبة كما كتبتهما في الطلب لترى أين وصل.',
    statusCheck: 'تحقق', statusChecking: 'جارٍ التحقق…', statusNeedBoth: 'أدخل اسمك ومعرّفك في اللعبة معًا',
    statusFailed: 'تعذّر التحقق: ', statusNone: 'لم يُعثر على طلب. تأكد من أن الاسم والمعرّف مطابقان لما أدخلته عند التقديم.',
    statusMany: n => `وُجد ${n} طلبات، الأحدث أولًا.`,
    statusLabel: { pending: 'قيد المراجعة', approved: 'مقبول', rejected: 'غير مقبول' },
    statusExplain: {
      pending: 'ما زالت القيادة تراجع طلبك، وستتواصل معك عند صدور القرار.',
      approved: 'تم قبول طلبك. ستتواصل معك القيادة بشأن الخطوات التالية.',
      rejected: 'لم يُقبل طلبك هذه المرة. إن كان لديك سؤال فاسأل من رشّحك أو قيادة التحالف.'
    },
    statusClan: 'الخيار الأول', statusSubmitted: 'تاريخ التقديم', statusReviewed: 'تاريخ المراجعة',
    okStatus: 'يمكنك متابعة طلبك لاحقًا من صفحة حالة الطلب.',
    routeTitle: 'خطوات التقديم',
    steps: [
      ['املأ الطلب', 'اسمك ومعرّفك في اللعبة وقوتك، مع لقطات شاشة للحقيبة'],
      ['مراجعة التحالف', 'يراجع التحالف الذي اخترته وقيادة الولاية طلبك'],
      ['اعرف النتيجة', 'تابع طلبك في أي وقت من صفحة حالة الطلب باسمك ومعرّفك. إذا قُبلت فسيتواصل معك أحد لترتيب الانتقال']
    ],
    alliancesTitle: n => `تحالفات الولاية ${n}`,
    footer: n => `Dark War: Survival، الولاية ${n}`,
    finalTitle: 'مستعد للانتقال؟',
    finalText: 'جهّز أرقام قوتك ولقطات شاشة الحقيبة، ثم ابدأ بملء الطلب.',
    credit: 'الصور: Serhii Kalyn وNico (Unsplash)',
    back: 'العودة إلى الرئيسية',
    title: 'طلب الانتقال',
    intro: 'الحقول المعلّمة بـ * إلزامية. يذهب طلبك إلى القيادة للمراجعة.',
    groupYou: 'معلوماتك', groupClan: 'التحالف الذي تريد الانضمام إليه', groupPower: 'القوة', groupPlay: 'النشاط', groupMore: 'لقطات الشاشة والسبب',
    usernameNote: 'لا تغيّر اسمك حتى ينتهي حدث الانتقال', anyClan: 'بلا تفضيل',
    idHelp: 'أين أجد معرّفي في اللعبة؟', idHelpText: 'افتح ملفك الشخصي في اللعبة، والأرقام بجانب «ID:» هي معرّفك.', idHelpAlt: 'شاشة الملف الشخصي في اللعبة، وسطر المعرّف محاط بإطار برتقالي',
    mainFaction: 'فئة القوات الرئيسية', killCount: 'عدد القتلى', killHint: 'مثال: 2.2M',
    activeHours: 'أوقات نشاطك المعتادة', activeHoursHint: 'بتوقيت الخادم (ST)، مثال: 20:00–24:00',
    participation: 'المشاركة في فعاليات الخادم والتحالف', leadership: 'خبرة في قيادة تحالف',
    participationOptions: { very: 'نشط جدًا: تقريبًا كل الفعاليات', active: 'نشط: معظم الفعاليات الكبرى', moderate: 'متوسط: عندما يتاح الوقت', occasional: 'أحيانًا: بعض الفعاليات فقط', rare: 'نادرًا ما أشارك' },
    leadershipOptions: { r5: 'R5', r4: 'R4', none: 'لا' },
    agreeRules: n => `ألتزم بقواعد الولاية ${n} واتفاقية عدم الاعتداء (NAP) وقوانين التحالف`, mustAgree: 'ضع علامة الموافقة قبل الإرسال',
    username: 'الاسم في اللعبة', gameId: 'المعرّف في اللعبة', currentState: 'الولاية الحالية', currentClan: 'التحالف الحالي',
    preferredClan: 'الخيار الأول', backupClan: 'الخيار الثاني',
    referrer: `من رشّحك في الولاية ${CONFIG.stateName}`, referrerHint: 'اختياري، اسم اللاعب الذي رشّحك في اللعبة', select: 'اختر', none: 'لا شيء',
    watchtower: 'مستوى برج المراقبة', industrial: n => `Industrial ${n}`, overallPower: 'القوة الإجمالية', march1: 'قوة المسيرة الأولى (المركبة الرئيسية)', march2: 'قوة المسيرة الثانية', march3: 'قوة المسيرة الثالثة',
    powerHint: 'مثال: 150M أو 1.2B', reason: 'لماذا تريد الانضمام؟',
    images: 'لقطات شاشة الحقيبة / الأبطال', imagesHint: n => `حتى ${n} صور، تُضغط تلقائيًا عند الإرسال`,
    chooseFiles: 'اختر لقطات الشاشة', noFiles: 'لم تُختر أي لقطة', filesChosen: n => `تم اختيار ${n}`,
    submit: 'أرسل الطلب', submitting: 'جارٍ الإرسال…', uploading: (i, n) => `جارٍ رفع اللقطة ${i}/${n}…`,
    ok: 'تم إرسال الطلب. ستتواصل معك القيادة بعد المراجعة.', err: 'لم يُرسل: ', badPower: 'لم نفهم قيمة القوة. اكتبها مثل 150M أو 1.2B',
    tooMany: n => `الحد الأقصى ${n} لقطات. احذف بعضها وأرسل مرة أخرى`, notConfigured: 'التقديم غير مفتوح بعد.', required: 'هذا الحقل مطلوب'
  }
}

// 語言清單：選單顯示名、<html lang>、日期格式、文字方向。阿拉伯文日期用拉丁數字，和遊戲內一致。
export const LANGS = {
  'zh-TW': { label: '繁體中文', html: 'zh-Hant', locale: 'zh-TW', dir: 'ltr' },
  en: { label: 'English', html: 'en', locale: 'en-GB', dir: 'ltr' },
  ko: { label: '한국어', html: 'ko', locale: 'ko-KR', dir: 'ltr' },
  ar: { label: 'العربية', html: 'ar', locale: 'ar-u-nu-latn', dir: 'rtl' }
}

// 設定整頁語言與方向
export function setDocumentLanguage(lang) {
  document.documentElement.lang = LANGS[lang].html
  document.documentElement.dir = LANGS[lang].dir
}

// 優先順序：網址 ?lang=ko（分享連結用，會記住，之後點到其他頁面也維持）→ 上次手動選的 → 預設規則。
// 預設規則（用戶指定不變）：瀏覽器中文 → 繁中，其他 → 英文
export function pickLanguage() {
  const fromUrl = langFromUrl(location.search)
  if (fromUrl) { saveLanguage(fromUrl); return fromUrl }
  try {
    const saved = localStorage.getItem('apply-lang')
    if (saved && STRINGS[saved]) return saved
  } catch {}
  return /^zh/i.test(navigator.language) ? 'zh-TW' : 'en'
}

// ?lang=ko / ar / en / zh（zh、zh-TW、tw 都算繁中），大小寫不拘；不認得的值忽略
export function langFromUrl(search) {
  const v = new URLSearchParams(search).get('lang')?.trim().toLowerCase()
  if (!v) return null
  if (v === 'zh' || v === 'zh-tw' || v === 'tw') return 'zh-TW'
  return STRINGS[v] ? v : null
}

export function saveLanguage(lang) {
  try { localStorage.setItem('apply-lang', lang) } catch {}
}
