import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "~/components/navigation/navItems";
import { supabase } from "~/lib/utils/supabase/supabaseClient";

export default function Layout({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  const [profilePath, setProfilePath] = useState<string>("");

  useEffect(() => {
    supabase.auth
      .getUser()
      .then((res) => {
        if (res.data.user) setProfilePath(res.data.user.id);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center gap-1 px-6 py-5">
          <div className="layout-content-container flex w-80 flex-col">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#111518] p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-start gap-4 px-3 text-white">
                    <Image
                      src="/icons/favicon-32x32.png"
                      alt="Odyssey Logo"
                      width={32}
                      height={32}
                    />
                    <h1 className="font-['BC CE'] text-3xl">ODYSSEY</h1>
                  </div>

                  {navItems(profilePath).map((item) => (
                    <Link key={item.name} href={item.url}>
                      <div
                        className={`flex items-center gap-3 rounded-xl ${pageName === item.name ? "bg-[#283139]" : "bg-[#111518]"} px-3 py-2`}
                      >
                        <div
                          className="text-white"
                          data-icon={item.icon}
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
                            <path d={item.path}></path>
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-normal text-white">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
