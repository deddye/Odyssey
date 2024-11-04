import { createClient } from "@supabase/supabase-js";
import { type Database } from "../types/supabase";
import { env } from "~/env.mjs";

const supabaseUrl = `https://jxcknebthguwixjgjypc.supabase.co`;
const supabaseKey = `${env.NEXT_PUBLIC_SUPABASE_KEY}`;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
