import { supabase } from "./supabaseClient";
import { type User } from "types/interfaces";

// Define interfaces for API responses
interface ConversationResponse {
  message_id: string;
  sender_id: string;
  receiver_id: string;
  message: string;
  read: boolean;
  created_at: string;
  other_user_id: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_pic_url: string | null;
  unread_count: number;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

/**
 * Send a direct message to another user
 * @param senderId The ID of the sender
 * @param receiverId The ID of the receiver
 * @param message The message content
 * @returns The result of the operation with the created message
 */
export const sendDirectMessage = async (
  senderId: string,
  receiverId: string,
  message: string,
): Promise<ApiResponse<Message>> => {
  try {
    const response = await fetch("http://localhost:42069/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_id: senderId,
        receiver_id: receiverId,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error sending message: ${response.statusText}`);
    }

    const data = (await response.json()) as ApiResponse<Message>;
    return data;
  } catch (error) {
    console.error("Error sending direct message:", error);
    throw error;
  }
};

/**
 * Get all conversations for a user
 * @param userId The ID of the user
 * @returns An array of conversations with the latest message
 */
export const getConversations = async (userId: string) => {
  try {
    // Get all conversations for the user directly from the API
    const response = await fetch(
      `http://localhost:42069/api/conversations/${userId}`,
    );
    if (!response.ok) {
      throw new Error(`Error fetching conversations: ${response.statusText}`);
    }

    const data = (await response.json()) as ApiResponse<ConversationResponse[]>;

    if (!data.success) {
      throw new Error(`API error: ${data.message ?? "Unknown error"}`);
    }

    // Transform the data to match our expected format
    const conversationsWithDetails = data.data.map((conversation) => {
      return {
        conversation: {
          // Create a conversation object with the fields we need
          user1_id: userId,
          user2_id: conversation.other_user_id,
          last_message_at: conversation.created_at,
        },
        profile: {
          id: conversation.other_user_id,
          username: conversation.username,
          first_name: conversation.first_name,
          last_name: conversation.last_name,
          profile_pic_url: conversation.profile_pic_url,
          created_at: conversation.created_at, // Add created_at to match User interface
        } as User,
        latestMessage: {
          message: conversation.message,
          created_at: conversation.created_at,
          sender_id: conversation.sender_id,
        },
        unreadCount: conversation.unread_count,
      };
    });

    return conversationsWithDetails;
  } catch (error) {
    console.error("Error in getConversations:", error);
    throw error;
  }
};

// Define the Message interface
export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  message: string;
  read: boolean;
  created_at: string;
}

/**
 * Get all messages between two users
 * @param userId The ID of the current user
 * @param otherUserId The ID of the other user
 * @returns An array of messages
 */
export const getMessages = async (
  userId: string,
  otherUserId: string,
): Promise<Message[]> => {
  try {
    const response = await fetch(
      `http://localhost:42069/api/messages/${userId}/${otherUserId}`,
    );
    if (!response.ok) {
      throw new Error(`Error fetching messages: ${response.statusText}`);
    }

    const data = (await response.json()) as ApiResponse<Message[]>;
    if (!data.success) {
      throw new Error(`API error: ${data.message ?? "Unknown error"}`);
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

/**
 * Mark messages as read
 * @param userId The ID of the current user (receiver)
 * @param senderId The ID of the sender
 * @returns The result of the operation
 */
export const markMessagesAsRead = async (userId: string, senderId: string) => {
  try {
    const response = await fetch(
      `http://localhost:42069/api/messages/read/${senderId}/${userId}`,
      {
        method: "PUT",
      },
    );

    if (!response.ok) {
      throw new Error(`Error marking messages as read: ${response.statusText}`);
    }

    const data = (await response.json()) as ApiResponse<unknown>;
    return data;
  } catch (error) {
    console.error("Error marking messages as read:", error);
    throw error;
  }
};
