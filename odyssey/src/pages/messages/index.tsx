import { useEffect, useState } from "react";
import Layout from "../layout";
import checkAuthentication from "~/lib/utils/supabase/authentication";
import { useRouter } from "next/router";
import { supabase } from "~/lib/utils/supabase/supabaseClient";
import { type User } from "types/interfaces";
import ConversationList from "~/components/messages/ConversationList";
import Conversation from "~/components/messages/Conversation";

export default function Messages() {
  const [userId, setUserId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      try {
        const res = await checkAuthentication();
        if (res) setUserId(res.user.id);
      } catch (err) {
        console.log(err);
        void router.push("/");
      }
    };

    void authenticate();

    // Check if there's a user query parameter to open a specific conversation
    const userIdFromQuery = router.query.user as string;
    if (userIdFromQuery) {
      setSelectedUserId(userIdFromQuery);
    }
  }, [router, router.query.user]);

  const handleSelectConversation = (otherUserId: string) => {
    setSelectedUserId(otherUserId);
  };

  return (
    <>
      <Layout pageName="Messages">
        <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
          <div className="flex h-[calc(100vh-64px)] flex-1">
            {/* Conversations List */}
            <div className="w-full border-r border-[#3b4954] md:w-1/3">
              {userId && (
                <ConversationList
                  userId={userId}
                  selectedUserId={selectedUserId ?? undefined}
                  onSelectConversation={handleSelectConversation}
                />
              )}
            </div>

            {/* Conversation */}
            <div className="hidden md:flex md:w-2/3">
              {userId && selectedUserId ? (
                <Conversation
                  currentUserId={userId}
                  otherUserId={selectedUserId}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-center text-[#9cacba]">
                    Select a conversation or start a new one by visiting a
                    user&apos;s profile
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
