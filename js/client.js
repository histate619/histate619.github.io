import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
import { CONFIG, isConfigured } from '../config.js?v=20261010023521'

export const supabase = isConfigured()
  ? createClient(CONFIG.supabaseUrl, CONFIG.supabasePublishableKey)
  : null
