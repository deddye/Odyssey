import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "~/lib/utils/supabase/supabaseClient";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);
  const failedMsg = "username or password incorrect";

  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data.session) {
      router.push("/l/dashboard").catch((err) => console.log(err));
    }
    setFailed(true);
    if (error) {
      console.log(error);
      return;
    }
  }

  return (
    <>
      <div className="group/design-root w- dark relative flex h-2/3 flex-col overflow-x-hidden bg-[#95caf8] will-change-auto">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-40 py-5">
            <div className="layout-content-container flex w-[512px] max-w-[512px] max-w-[960px] flex-1 flex-col py-5">
              <h1 className="px-4 pb-3 pt-5 text-center text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
                Log In
              </h1>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex min-w-40 flex-1 flex-col">
                  <p className="pb-2 text-base font-medium leading-normal text-white">
                    Email
                  </p>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-[#223749] p-4 text-base font-normal leading-normal text-white placeholder:text-[#90b0cb] focus:border-none focus:outline-0 focus:ring-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => (e.key === "Enter" ? login() : "")}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex min-w-40 flex-1 flex-col">
                  <p className="pb-2 text-base font-medium leading-normal text-white">
                    Password
                  </p>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-[#223749] p-4 text-base font-normal leading-normal text-white placeholder:text-[#90b0cb] focus:border-none focus:outline-0 focus:ring-0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => (e.key === "Enter" ? login() : "")}
                  />
                </label>
              </div>
              {failed && failedMsg}
              <div className="flex px-4 py-3">
                <button
                  className="flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#2094f3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white"
                  onClick={login}
                >
                  <span className="truncate" onClick={login}>
                    Log In
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <p className="px-4 pb-3 pt-1 text-center text-sm font-normal leading-normal text-[#90b0cb]">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </footer> */}
        </div>
      </div>
    </>
  );
};

export default Login;
