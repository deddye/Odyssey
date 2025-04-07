import { useEffect, useState } from "react";
import Layout from "../layout";
import checkAuthentication from "~/lib/utils/supabase/authentication";
import { useRouter } from "next/router";
import { supabase } from "~/lib/utils/supabase/supabaseClient";
import { type User } from "types/interfaces";

export default function Messages() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    checkAuthentication()
      .then((res) => {
        if (res) setUserId(res.user.id);
      })
      .catch((err) => {
        console.log(err);
        router.push("/").catch((error) => console.log(error));
      });

    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) console.log(error);

      return data;
    };

    fetchUser()
      .then((res) => {
        if (res) setUser(res);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Layout pageName="Messages">
        <div className="layout-content-container flex max-w-[960px] flex-1 flex-col ">
          <div className="@container flex p-4">
            <div className="@[520px]:flex-row @[520px]:justify-between @[520px]:items-center flex w-full flex-col gap-4">
              <p className="text-white">{user?.username}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
