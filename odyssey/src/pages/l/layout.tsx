import { type Session } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "~/lib/utils/supabase/supabaseClient";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session) {
        await router.push("/");
      }
      setSession(session.session);
    };

    checkAuth().catch((err) => console.log(err + ": Error redirecting to '/'"));
  }, [router]);

  return (
    <>
      {!session ? (
        <div> Loading... </div>
      ) : (
        <div
          className="group/design-root dark relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#111518]"
          style={{ fontFamily: "Be Vietnam Pro, Noto Sans, sans-serif" }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1 justify-center gap-1 px-6 py-5">
              <div className="layout-content-container flex w-80 flex-col">
                <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#111518] p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 rounded-xl bg-[#283139] px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="House"
                          data-size="24px"
                          data-weight="fill"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Home
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="MagnifyingGlass"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Search
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="Plus"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Create
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="Bell"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Notifications
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="MessengerLogo"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M181.66,106.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0L112,123.31,85.66,149.66a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0L144,132.69l26.34-26.35A8,8,0,0,1,181.66,106.34ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.52a8,8,0,0,1,6.54.67A88,88,0,0,0,216,128Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Messages
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="UserCircle"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Profile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
