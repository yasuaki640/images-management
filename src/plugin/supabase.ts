import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

// vue組み込みのplugin機能を使ってみる
export const supabase = createClient<Database>(url, key);
