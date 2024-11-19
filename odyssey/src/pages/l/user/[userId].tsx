import Layout from "../layout";

export default function UserPage() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
