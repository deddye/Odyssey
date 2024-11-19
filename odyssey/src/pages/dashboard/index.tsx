import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LogoutButton from "~/components/auth/logoutButton";
import { supabase } from "~/lib/utils/supabase/supabaseClient";

export default function Dashboard() {
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
                          data-icon="Bookmark"
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
                            <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Bookmarks
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-white"
                          data-icon="List"
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
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          Lists
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
              <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <p className="min-w-72 text-4xl font-black leading-tight tracking-[-0.033em] text-white">
                    Discover New Hobbies
                  </p>
                  <LogoutButton />
                </div>
                <div className="flex flex-wrap gap-3 p-3 pr-4">
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      All
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Gardening
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Cooking
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      DIY
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Gaming
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Sports
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Art
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Fashion
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                    <p className="text-sm font-medium leading-normal text-white">
                      Music
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Gaming
                        </p>
                        <p className="text-base font-bold leading-tight text-white">
                          {" "}
                          {`What's your favorite game?`}{" "}
                        </p>
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Join the discussion
                        </p>
                      </div>
                      <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center gap-1 overflow-hidden rounded-xl bg-[#283139] px-4 pr-2 text-sm font-medium leading-normal text-white">
                        <div
                          className="text-white"
                          data-icon="ArrowRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </div>
                        <span className="truncate">Join</span>
                      </button>
                    </div>
                    <div
                      className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e02c1334-223d-44ab-874b-7c67025c3218.png")`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Art
                        </p>
                        <p className="text-base font-bold leading-tight text-white">
                          Meetup for art lovers
                        </p>
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Get together for a fun painting session
                        </p>
                      </div>
                      <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center gap-1 overflow-hidden rounded-xl bg-[#283139] px-4 pr-2 text-sm font-medium leading-normal text-white">
                        <div
                          className="text-white"
                          data-icon="ArrowRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </div>
                        <span className="truncate">RSVP</span>
                      </button>
                    </div>
                    <div
                      className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/stability/514a1927-109a-4e09-bdc3-8931bd8fe20a.png")`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Fashion
                        </p>
                        <p className="text-base font-bold leading-tight text-white">
                          Summer fashion tips
                        </p>
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Share your favorite summer looks
                        </p>
                      </div>
                      <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center gap-1 overflow-hidden rounded-xl bg-[#283139] px-4 pr-2 text-sm font-medium leading-normal text-white">
                        <div
                          className="text-white"
                          data-icon="ArrowRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </div>
                        <span className="truncate">Join</span>
                      </button>
                    </div>
                    <div
                      className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e538489d-b4a7-48db-8d85-8d6baa93ae0e.png")`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Music
                        </p>
                        <p className="text-base font-bold leading-tight text-white">
                          Concert buddies needed
                        </p>
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          {" "}
                          {`Who's going to the music festival next month?`}
                        </p>
                      </div>
                      <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center gap-1 overflow-hidden rounded-xl bg-[#283139] px-4 pr-2 text-sm font-medium leading-normal text-white">
                        <div
                          className="text-white"
                          data-icon="ArrowRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </div>
                        <span className="truncate">RSVP</span>
                      </button>
                    </div>
                    <div
                      className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/stability/04a391bd-2d22-489b-86ad-dc3939f552a7.png")`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Tech
                        </p>
                        <p className="text-base font-bold leading-tight text-white">
                          Intro to web development
                        </p>
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Join us for a beginner-friendly workshop
                        </p>
                      </div>
                      <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center gap-1 overflow-hidden rounded-xl bg-[#283139] px-4 pr-2 text-sm font-medium leading-normal text-white">
                        <div
                          className="text-white"
                          data-icon="ArrowRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </div>
                        <span className="truncate">RSVP</span>
                      </button>
                    </div>
                    <div
                      className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/stability/d8cea2bc-0a8b-47ab-aea3-476742d349ff.png")`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          Fitness
                        </p>
                        <p className="text-base font-bold leading-tight text-white">
                          Running group
                        </p>
                        <p className="text-sm font-normal leading-normal text-[#9cacba]">
                          {" "}
                          {`Let's get together for a morning run`}
                        </p>
                      </div>
                      <button className="flex h-8 w-fit min-w-[84px] max-w-[480px] cursor-pointer flex-row-reverse items-center justify-center gap-1 overflow-hidden rounded-xl bg-[#283139] px-4 pr-2 text-sm font-medium leading-normal text-white">
                        <div
                          className="text-white"
                          data-icon="ArrowRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </div>
                        <span className="truncate">RSVP</span>
                      </button>
                    </div>
                    <div
                      className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/stability/31be2209-ddc3-4317-a689-c4758c4a7c9e.png")`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
