import router from "next/router";
import { supabase } from "./supabaseClient";

export default async function checkAuthentication() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) {
    await router.push("/");
  }
}
