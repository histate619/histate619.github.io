import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
import { CONFIG, isConfigured } from '../config.js?v=20261009091803'

export const supabase = isConfigured()
  ? createClient(CONFIG.supabaseUrl, CONFIG.supabasePublishableKey)
  : null
