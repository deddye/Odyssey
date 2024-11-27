import React, { useEffect } from "react";
import Login from "~/components/auth/login";
import { useState } from "react";
import Signup from "~/components/auth/signup";
import Popup from "reactjs-popup";
import Layout from "./l/layout";
import LogoutButton from "~/components/auth/logoutButton";
import checkAuthentication from "~/lib/utils/supabase/authentication";
import { type Session } from "@supabase/supabase-js";

export default function Home() {
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    checkAuthentication()
      .then((res) => {
        if (res) setSession(res);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  }, [loading]);

  const toggleSignUpPopup = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  if (loading) return <div>Loading...</div>;
  else
    return (
      <>
        {!session ? (
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223749] px-10 py-3">
              <div className="flex items-center gap-4 text-white">
                <div className="size-4">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">
                  Odyssey
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-4">
                {/* Leaving this commented out because I like the way the search label looks
              could use this in the future at some point */}
                {/* <label className="flex !h-10 min-w-40 max-w-64 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-xl">
                  <div
                    className="flex items-center justify-center rounded-l-xl border-r-0 border-none bg-[#223749] pl-4 text-[#90b0cb]"
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
                  <input
                    placeholder="Search"
                    className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl rounded-l-none border-l-0 border-none bg-[#223749] px-4 pl-2 text-base font-normal leading-normal text-white placeholder:text-[#90b0cb] focus:border-none focus:outline-0 focus:ring-0"
                    value=""
                  />
                </div>
              </label> */}
                <button
                  className="@[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#2094f3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white"
                  onClick={toggleSignUpPopup}
                >
                  <span className="truncate">Sign up</span>
                </button>
                <Popup open={isSignUpOpen} onClose={toggleSignUpPopup} modal>
                  <Signup />
                </Popup>
                <button
                  className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#223749] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white"
                  onClick={toggleLoginPopup}
                >
                  <span className="truncate">Log In</span>
                </button>
                <Popup open={isLoginOpen} onClose={toggleLoginPopup} modal>
                  <Login />
                </Popup>
              </div>
            </header>
            <div className="flex flex-1 justify-center px-40 py-5">
              <div className="layout-content-container flex w-[512px] max-w-[960px] flex-1 flex-col py-5">
                <div className="@container">
                  <div className="@[480px]:gap-8 @[864px]:flex-row flex flex-col gap-6 px-4 py-10">
                    <div
                      className="@[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full aspect-video w-full rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("/landingbackg.webp")`,
                      }}
                    ></div>
                    <div className="@[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center flex flex-col gap-6">
                      <div className="flex flex-col gap-2 text-left">
                        <h1 className="@[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-4xl font-black leading-tight tracking-[-0.033em] text-white">
                          Discover and share your hobbies
                        </h1>
                        <h2 className="@[480px]:text-base @[480px]:font-normal @[480px]:leading-normal text-sm font-normal leading-normal text-white">
                          {`Odyssey is a platform for hobbyists and enthusiasts. It's a place to learn from others, share your expertise, and connect with people who love the things
                      you do.`}
                        </h2>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="@[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#2094f3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                          <span className="truncate">Sign up</span>
                        </button>
                        <button className="@[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#223749] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                          <span className="truncate">Log in</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex px-4 py-3">
                  <button className="flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[#223749] px-4 pl-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                    <div
                      className="text-white"
                      data-icon="GoogleLogo"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
                      </svg>
                    </div>
                    <span className="truncate">Continue with Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Layout pageName="Home">
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
