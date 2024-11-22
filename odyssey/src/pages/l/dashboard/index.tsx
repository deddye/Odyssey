import LogoutButton from "~/components/auth/logoutButton";
import Layout from "../layout";
import { useEffect, useState } from "react";
import checkAuthentication from "~/lib/utils/supabase/authentication";

export default function Dashboard() {
  const [isAuthed, setIsAuthed] = useState(false);
  useEffect(() => {
    checkAuthentication()
      .then((_) => setIsAuthed(true))
      .catch((err) => console.log(err));
  });

  return (
    <>
      {!isAuthed ? (
        <div>Loading ...</div>
      ) : (
        <Layout>
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
        </Layout>
      )}
    </>
  );
}
