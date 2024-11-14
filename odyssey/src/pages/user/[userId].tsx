export default function UserPage() {
  return (
    <>
      <div
        className="group/design-root dark relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#111518]"
        style={{ fontFamily: "Be Vietnam Pro, Noto Sans, sans-serif" }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center gap-1 px-6 py-5">
            <div className="layout-content-container flex w-80 flex-col">
              <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#111518] p-4">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div
                      className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/stability/9ac0358e-2359-40f3-a8a7-a8ecf563f7cb.png")`,
                      }}
                    ></div>
                  </div>
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
                        data-icon="Compass"
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
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-medium leading-normal text-white">
                        Explore
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
                        data-icon="Envelope"
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
                          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-medium leading-normal text-white">
                        Messages
                      </p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div
                        className="text-white"
                        data-icon="PlusSquare"
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
                          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-medium leading-normal text-white">
                        Create
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#2094f3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                    <span className="truncate">Search</span>
                  </button>
                  <div className="flex flex-col gap-1">
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
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div
                        className="text-white"
                        data-icon="Gear"
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
                          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-medium leading-normal text-white">
                        Settings
                      </p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div
                        className="text-white"
                        data-icon="Question"
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
                          <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-medium leading-normal text-white">
                        Help
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
              <div className="@container flex p-4">
                <div className="@[520px]:flex-row @[520px]:justify-between @[520px]:items-center flex w-full flex-col gap-4">
                  <div className="flex gap-4">
                    <div
                      className="aspect-square min-h-32 w-32 rounded-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("https://cdn.usegalileo.ai/stability/bb83e0f0-5455-463a-9d28-4f1c9d6172e2.png")`,
                      }}
                    ></div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
                        Haley Sutton
                      </p>
                      <p className="text-base font-normal leading-normal text-[#9cacba]">
                        @haleywrites
                      </p>
                    </div>
                  </div>
                  <div className="@[480px]:w-auto flex w-full max-w-[480px] gap-3">
                    <button className="@[480px]:flex-auto flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#283139] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                      <span className="truncate">Follow</span>
                    </button>
                    <button className="@[480px]:flex-auto flex h-10 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#2094f3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
                      <span className="truncate">Message</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <div className="flex gap-8 border-b border-[#3b4954] px-4">
                  <a
                    className="flex flex-col items-center justify-center border-b-[3px] border-b-white pb-[13px] pt-4 text-white"
                    href="#"
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em] text-white">
                      Hobbies
                    </p>
                  </a>
                  <a
                    className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-[#9cacba]"
                    href="#"
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em] text-[#9cacba]">
                      Progress
                    </p>
                  </a>
                  <a
                    className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-[#9cacba]"
                    href="#"
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em] text-[#9cacba]">
                      Learning Goals
                    </p>
                  </a>
                </div>
              </div>
              <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-3 p-3 pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                  <p className="text-sm font-medium leading-normal text-white">
                    Writing
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                  <p className="text-sm font-medium leading-normal text-white">
                    Blogging
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                  <p className="text-sm font-medium leading-normal text-white">
                    Journaling
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                  <p className="text-sm font-medium leading-normal text-white">
                    Creative Writing
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                  <p className="text-sm font-medium leading-normal text-white">
                    Fiction Writing
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                  <p className="text-sm font-medium leading-normal text-white">
                    Short Stories
                  </p>
                </div>
              </div>
              <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">
                Progress
              </h3>
              <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
                <div className="flex items-center gap-4">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
                    data-icon="PencilSimple"
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
                      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="line-clamp-1 text-base font-medium leading-normal text-white">
                      Writing a Novel - 45%
                    </p>
                    <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                      {`I'm working on my first novel`}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-base font-normal leading-normal text-white">
                    45%
                  </p>
                </div>
              </div>
              <div className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
                <div className="flex items-center gap-4">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#283139] text-white"
                    data-icon="PencilSimple"
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
                      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="line-clamp-1 text-base font-medium leading-normal text-white">
                      Writing a Novel - 45%
                    </p>
                    <p className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                      {`I'm working on my first novel`}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-base font-normal leading-normal text-white">
                    45%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
