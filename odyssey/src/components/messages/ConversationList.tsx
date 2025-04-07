import { useEffect, useState } from "react";
import { getConversations } from "~/lib/utils/supabase/directMessages";
import { type User } from "types/interfaces";

interface ConversationListProps {
  userId: string;
  selectedUserId?: string;
  onSelectConversation: (userId: string) => void;
}

// Define the return type of getConversations
export interface ConversationWithDetails {
  conversation: {
    user1_id: string;
    user2_id: string;
    last_message_at: string;
  };
  profile: User;
  latestMessage: {
    message: string;
    created_at: string;
    sender_id: string;
  };
  unreadCount: number;
}

export default function ConversationList({
  userId,
  selectedUserId,
  onSelectConversation,
}: ConversationListProps) {
  const [conversations, setConversations] = useState<ConversationWithDetails[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        const conversationsData = await getConversations(userId);
        setConversations(conversationsData);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      void fetchConversations();
    }

    // Set up a polling interval to refresh conversations
    const intervalId = setInterval(() => {
      if (userId) {
        void fetchConversations();
      }
    }, 10000); // Refresh every 10 seconds

    return () => clearInterval(intervalId);
  }, [userId]);

  if (loading && conversations.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-white">Loading conversations...</p>
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        <p className="text-center text-white">No conversations yet</p>
        <p className="text-center text-[#9cacba]">
          Start a new conversation by visiting a user&apos;s profile and
          clicking the Message button
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      {conversations.map((convo) => {
        const otherUser = convo.profile;
        const isSelected = selectedUserId === otherUser.id;
        const formattedDate = new Date(
          convo.latestMessage.created_at,
        ).toLocaleString();
        const isUnread =
          convo.unreadCount > 0 && convo.latestMessage.sender_id !== userId;

        return (
          <div
            key={otherUser.id}
            className={`flex cursor-pointer flex-col border-b border-[#3b4954] p-4 hover:bg-[#283139] ${
              isSelected ? "bg-[#283139]" : ""
            }`}
            onClick={() => onSelectConversation(otherUser.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: otherUser.profile_pic_url
                      ? `url(${otherUser.profile_pic_url})`
                      : "url(https://cdn.usegalileo.ai/stability/bb83e0f0-5455-463a-9d28-4f1c9d6172e2.png)",
                  }}
                />
                <div>
                  <p
                    className={`text-sm font-medium ${isUnread ? "font-bold text-white" : "text-white"}`}
                  >
                    {otherUser.first_name} {otherUser.last_name}
                  </p>
                  <p className="text-xs text-[#9cacba]">
                    @{otherUser.username}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs text-[#9cacba]">{formattedDate}</p>
                {isUnread && (
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2094f3]">
                    <span className="text-xs text-white">
                      {convo.unreadCount}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p
              className={`mt-2 line-clamp-1 text-sm ${
                isUnread ? "font-semibold text-white" : "text-[#9cacba]"
              }`}
            >
              {convo.latestMessage.sender_id === userId ? "You: " : ""}
              {convo.latestMessage.message}
            </p>
          </div>
        );
      })}
    </div>
  );
}
