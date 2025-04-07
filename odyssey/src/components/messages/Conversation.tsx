import { useEffect, useRef, useState } from "react";
import {
  getMessages,
  markMessagesAsRead,
  sendDirectMessage,
  type Message,
} from "~/lib/utils/supabase/directMessages";
import { supabase } from "~/lib/utils/supabase/supabaseClient";
import { type User } from "types/interfaces";
import MessageBubble from "./MessageBubble";

interface ConversationProps {
  currentUserId: string;
  otherUserId: string;
}

export default function Conversation({
  currentUserId,
  otherUserId,
}: ConversationProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [otherUser, setOtherUser] = useState<User | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch messages and set up real-time subscription
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const messagesData = await getMessages(currentUserId, otherUserId);
        setMessages(messagesData);

        // Mark messages as read
        if (messagesData.some((m) => m.sender_id === otherUserId && !m.read)) {
          await markMessagesAsRead(currentUserId, otherUserId);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchOtherUser = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", otherUserId)
          .single();

        if (error) {
          console.error("Error fetching other user:", error);
          return;
        }

        setOtherUser(data);
      } catch (error) {
        console.error("Error fetching other user:", error);
      }
    };

    if (currentUserId && otherUserId) {
      void fetchMessages();
      void fetchOtherUser();

      // Subscribe to new messages
      const subscription = supabase
        .channel("direct_messages_changes")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "direct_messages",
            filter: `(sender_id=eq.${currentUserId},receiver_id=eq.${otherUserId})`,
          },
          (payload) => {
            if (payload.eventType === "INSERT") {
              setMessages((prev) => [...prev, payload.new as Message]);
            } else if (payload.eventType === "UPDATE") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === payload.new.id ? (payload.new as Message) : msg,
                ),
              );
            }
          },
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "direct_messages",
            filter: `(sender_id=eq.${otherUserId},receiver_id=eq.${currentUserId})`,
          },
          (payload) => {
            if (payload.eventType === "INSERT") {
              setMessages((prev) => [...prev, payload.new as Message]);
              // Mark as read immediately
              void markMessagesAsRead(currentUserId, otherUserId);
            } else if (payload.eventType === "UPDATE") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === payload.new.id ? (payload.new as Message) : msg,
                ),
              );
            }
          },
        )
        .subscribe();

      return () => {
        void supabase.removeChannel(subscription);
      };
    }
  }, [currentUserId, otherUserId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentUserId || !otherUserId) return;

    try {
      const messageContent = newMessage.trim();
      const response = await sendDirectMessage(
        currentUserId,
        otherUserId,
        messageContent,
      );

      // If the message was sent successfully, add it to the messages state
      if (response && response.success && response.data) {
        setMessages((prev) => [...prev, response.data]);
      }

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (loading && messages.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-white">Loading messages...</p>
      </div>
    );
  }

  if (!otherUser) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-white">User not found</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col">
      {/* Header */}
      <div className="flex items-center border-b border-[#3b4954] bg-[#1e262f] p-4">
        <div
          className="mr-3 h-10 w-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: otherUser.profile_pic_url
              ? `url(${otherUser.profile_pic_url})`
              : "url(https://cdn.usegalileo.ai/stability/bb83e0f0-5455-463a-9d28-4f1c9d6172e2.png)",
          }}
        />
        <div>
          <p className="text-sm font-medium text-white">
            {otherUser.first_name} {otherUser.last_name}
          </p>
          <p className="text-xs text-[#9cacba]">@{otherUser.username}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-center text-[#9cacba]">
              No messages yet. Send a message to start the conversation.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isCurrentUser={message.sender_id === currentUserId}
              otherUser={otherUser}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form
        onSubmit={handleSendMessage}
        className="border-t border-[#3b4954] bg-[#1e262f] p-4"
      >
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-xl bg-[#283139] px-4 py-2 text-white placeholder-[#9cacba] focus:outline-none"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="ml-2 rounded-xl bg-[#2094f3] px-4 py-2 text-white disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
