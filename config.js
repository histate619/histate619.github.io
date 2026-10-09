// ⚠️ 這裡只放可以公開的設定。service_role / secret key 絕對不能放這裡。
export const CONFIG = {
  supabaseUrl: 'https://kprcsiosxbhdihgojwbv.supabase.co',            // 例：https://xxxx.supabase.co
  supabasePublishableKey: 'sb_publishable_YztJsWh9EbVXCCGaKKgOhw_S25VAgZ8', // 例：sb_publishable_xxx（或舊版 anon key）
  stateName: '619',          // 顯示為「STATE 619」
  // 本州聯盟：tag 為申請表下拉的值（取聯盟簡稱），name 為全名。依戰力排名順序。
  // 來源：用戶 2026-10-08 提供的聯盟排行截圖；徽章也是從該截圖裁出。
  clans: [
    { tag: 'AxY', name: 'Apex Yünhai', badge: 'assets/badges/AxY.png' },
    { tag: 'NØVA', name: 'NØVA Nēxus', badge: 'assets/badges/NOVA.png' },
    { tag: 'MTS_', name: 'MT Squad', badge: 'assets/badges/MTS.png' },
    { tag: 'MOM', name: 'Misfits Of Mayhem', badge: 'assets/badges/MOM.png' },
    { tag: 'SQ99', name: 'SQUAD 99', badge: 'assets/badges/SQ99.png' },
    { tag: 'C&G', name: 'Chill & Grill', badge: 'assets/badges/CG.png' },
    { tag: 'LNT', name: 'The Northern Lights', badge: 'assets/badges/LNT.png' },
    { tag: 'BL99', name: 'BLOOD SQUAD', badge: 'assets/badges/BL99.png' }
  ],
  // 瞭望塔 21–30（移民至少 20 級，用戶 2026-10-09 指定從 21 起），之後是工業 1–3（資料庫存 31–33）
  minWatchtower: 21,
  maxWatchtower: 30,
  industrialLevels: 3,
  maxImages: 3
}

export const TABLE = 'applications'
export const BUCKET = 'application-images'
export const isConfigured = () => Boolean(CONFIG.supabaseUrl && CONFIG.supabasePublishableKey)
