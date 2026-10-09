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
  },
  ko: {
    title: '신청 심사', titleClan: c => `${c} 신청 심사`,
    email: 'Email', account: '계정', accountHint: '연맹 약칭(예: AxY) 또는 Email', password: '비밀번호', login: '로그인', loggingIn: '로그인 중…', loginFailed: m => `로그인 실패: ${m}`,
    notConfigured: 'config.js에 Supabase 설정이 없습니다.',
    notStaff: e => `이 계정(${e})은 심사자 명단에 없습니다.`,
    staffCheckFailed: m => `로그인은 됐지만 심사자 명단을 읽지 못했습니다: ${m}`,
    whoAlliance: (c, e) => `${c} 연맹 계정(${e})`, who: (e, r) => `${e}(${r})`,
    allStatus: '모든 상태', allClans: '모든 연맹',
    sortPower: '총 전투력(높은 순)', sortNew: '최신 제출순', sortOld: '오래된 제출순',
    search: '닉네임 / ID / 추천인 검색', reload: '새로고침', export: 'CSV 내보내기', logout: '로그아웃', close: '닫기',
    loading: '불러오는 중…', loadFailed: m => `불러오기 실패: ${m}`, count: (n, total) => `${total}건 중 ${n}건 표시`,
    status: { pending: '대기', approved: '승인', rejected: '거절' },
    faction: { fighter: 'Fighter', shooter: 'Shooter', rider: 'Rider', none: '고정 병종 없음', unknown: '모름' },
    participation: { very: '매우 활발', active: '활발', moderate: '보통', occasional: '가끔', rare: '거의 안 함' },
    leadership: { r5: '전 R5', r4: '전 R4', none: '운영 경험 없음' },
    any: '상관없음', industrial: n => `Industrial ${n}`,
    meta: {
      state: v => `서버 ${v}`, currentClan: v => `현재 연맹 ${v}`, preferred: v => `1지망 ${v}`, backup: v => `2지망 ${v}`,
      referrer: v => `추천인 ${v}`, watchtower: v => `감시탑 ${v}`, faction: v => `병종 ${v}`,
      hours: v => `접속 ${v}`, events: v => `이벤트 ${v}`, noAgree: '규칙에 동의하지 않음'
    },
    march1: '1부대', march2: '2부대', march3: '3부대', kills: '처치',
    note: '메모(다른 심사 계정도 볼 수 있음)', save: '저장', reviewedAt: t => `심사 ${t}`,
    readonlyAny: '신청자가 「상관없음」을 선택해 보기만 가능합니다', readonlySecond: c => `2지망입니다(1지망 ${c}). 보기만 가능합니다`,
    saveFailed: m => `저장 실패: ${m}`, noPermission: '권한 없음', updated: (u, s) => `업데이트됨: ${u} → ${s}`,
    thumbsFailed: m => `스크린샷을 불러오지 못했습니다: ${m}`, screenshot: '스크린샷', yes: '예', no: '아니요',
    csv: {
      created: '제출 시간', status: '상태', username: '게임 닉네임', gameId: '게임 ID', state: '현재 서버', currentClan: '현재 연맹',
      preferred: '1지망 연맹', backup: '2지망 연맹', referrer: '추천인', watchtower: '감시탑', power: '총 전투력', powerShown: '총 전투력(표시)',
      march1: '1부대 전투력', march2: '2부대 전투력', march3: '3부대 전투력', kills: '처치 수', faction: '주력 병종', hours: '접속 시간(ST)',
      events: '이벤트 참여도', leadership: '운영 경험', agree: '규칙 동의', reason: '지원 이유', images: '스크린샷 수', note: '메모', language: '언어'
    }
  },
  ar: {
    title: 'مراجعة الطلبات', titleClan: c => `مراجعة طلبات ${c}`,
    email: 'Email', account: 'الحساب', accountHint: 'اختصار التحالف (مثل AxY) أو البريد', password: 'كلمة المرور', login: 'تسجيل الدخول', loggingIn: 'جارٍ تسجيل الدخول…', loginFailed: m => `فشل تسجيل الدخول: ${m}`,
    notConfigured: 'إعدادات Supabase غير موجودة في config.js.',
    notStaff: e => `هذا الحساب (${e}) ليس ضمن قائمة المراجعين.`,
    staffCheckFailed: m => `تم تسجيل الدخول، لكن تعذّرت قراءة قائمة المراجعين: ${m}`,
    whoAlliance: (c, e) => `حساب تحالف ${c} (${e})`, who: (e, r) => `${e} (${r})`,
    allStatus: 'كل الحالات', allClans: 'كل التحالفات',
    sortPower: 'القوة الإجمالية (من الأعلى)', sortNew: 'الأحدث أولًا', sortOld: 'الأقدم أولًا',
    search: 'ابحث بالاسم / المعرّف (ID) / الداعي', reload: 'تحديث', export: 'تصدير CSV', logout: 'تسجيل الخروج', close: 'إغلاق',
    loading: 'جارٍ التحميل…', loadFailed: m => `تعذّر التحميل: ${m}`, count: (n, total) => `عرض ${n} من ${total}`,
    status: { pending: 'قيد المراجعة', approved: 'مقبول', rejected: 'مرفوض' },
    faction: { fighter: 'Fighter', shooter: 'Shooter', rider: 'Rider', none: 'بلا فئة ثابتة', unknown: 'لا يعرف' },
    participation: { very: 'نشط جدًا', active: 'نشط', moderate: 'متوسط', occasional: 'أحيانًا', rare: 'نادرًا' },
    leadership: { r5: 'كان R5', r4: 'كان R4', none: 'بلا خبرة قيادية' },
    any: 'بلا تفضيل', industrial: n => `Industrial ${n}`,
    meta: {
      state: v => `الخادم ${v}`, currentClan: v => `التحالف الحالي ${v}`, preferred: v => `الخيار الأول ${v}`, backup: v => `الخيار الثاني ${v}`,
      referrer: v => `دعاه ${v}`, watchtower: v => `برج المراقبة ${v}`, faction: v => `الفئة ${v}`,
      hours: v => `النشاط ${v}`, events: v => `الفعاليات: ${v}`, noAgree: 'لم يوافق على القواعد'
    },
    march1: 'الأولى', march2: 'الثانية', march3: 'الثالثة', kills: 'القتلات',
    note: 'ملاحظة (يراها المراجعون الآخرون)', save: 'حفظ', reviewedAt: t => `رُوجع ${t}`,
    readonlyAny: 'اختار المتقدم «بلا تفضيل». للعرض فقط', readonlySecond: c => `أنت الخيار الثاني (الأول ${c}). للعرض فقط`,
    saveFailed: m => `تعذّر الحفظ: ${m}`, noPermission: 'لا صلاحية', updated: (u, s) => `تم التحديث: ${u} ← ${s}`,
    thumbsFailed: m => `تعذّر تحميل لقطات الشاشة: ${m}`, screenshot: 'لقطة شاشة', yes: 'نعم', no: 'لا',
    csv: {
      created: 'وقت التقديم', status: 'الحالة', username: 'الاسم في اللعبة', gameId: 'المعرّف في اللعبة (ID)', state: 'الخادم الحالي', currentClan: 'التحالف الحالي',
      preferred: 'الخيار الأول', backup: 'الخيار الثاني', referrer: 'الداعي', watchtower: 'برج المراقبة', power: 'القوة الإجمالية', powerShown: 'القوة الإجمالية (مختصرة)',
      march1: 'قوة المسيرة الأولى', march2: 'قوة المسيرة الثانية', march3: 'قوة المسيرة الثالثة', kills: 'عدد الأعداء المقتولين', faction: 'الفئة الرئيسية', hours: 'أوقات النشاط (ST)',
      events: 'المشاركة في الفعاليات', leadership: 'الخبرة القيادية', agree: 'الموافقة على القواعد', reason: 'السبب', images: 'عدد اللقطات', note: 'ملاحظة', language: 'اللغة'
    }
  }
}
