import { useRouter } from "next/router";
import React from "react";
import { supabase } from "~/lib/utils/supabase/supabaseClient";

const LogoutButton = () => {
  const router = useRouter();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }

    router.push("/").catch((err) => console.log(err));
  }

  return (
    <button
      className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#223749] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white"
      onClick={async () => {
        await signOut();
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
