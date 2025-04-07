import { type User } from "types/interfaces";
import { type Message } from "~/lib/utils/supabase/directMessages";

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
  otherUser: User;
}

export default function MessageBubble({
  message,
  isCurrentUser,
  otherUser,
}: MessageBubbleProps) {
  const formattedTime = new Date(message.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`mb-4 flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
    >
      {!isCurrentUser && (
        <div
          className="mr-2 h-8 w-8 flex-shrink-0 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: otherUser.profile_pic_url
              ? `url(${otherUser.profile_pic_url})`
              : "url(https://cdn.usegalileo.ai/stability/bb83e0f0-5455-463a-9d28-4f1c9d6172e2.png)",
          }}
        />
      )}
      <div className="flex max-w-[70%] flex-col">
        <div
          className={`rounded-2xl px-4 py-2 ${
            isCurrentUser
              ? "bg-[#2094f3] text-white"
              : "bg-[#283139] text-white"
          }`}
        >
          <p className="whitespace-pre-wrap break-words">{message.message}</p>
        </div>
        <div
          className={`mt-1 flex items-center ${
            isCurrentUser ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-xs text-[#9cacba]">{formattedTime}</span>
          {isCurrentUser && (
            <span className="ml-1 text-xs text-[#9cacba]">
              {message.read ? "Read" : "Sent"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
