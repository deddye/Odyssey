import { supabase } from "./supabaseClient";

export async function followUser(followerId: string, followingId: string) {
  // Check if the user is already following the target user
  const { data, error } = await supabase
    .from("follows")
    .select("*")
    .eq("follower_id", followerId)
    .eq("following_id", followingId);

  if (error) return error;

  // If the follow relationship already exists, return a message
  if (data && data.length > 0) {
    return {
      data: null,
      error: new Error("You are already following this user."),
    };
  }

  // Insert the follow relationship
  const { data: insertData, error: insertError } = await supabase
    .from("follows")
    .insert([{ follower_id: followerId, following_id: followingId }]);

  // Return the result of the insert operation
  return { data: insertData, error: insertError };
}

export async function unfollowUser(followerId: string, followingId: string) {
  const { data, error } = await supabase
    .from("follows")
    .delete()
    .eq("follower_id", followerId)
    .eq("following_id", followingId);

  if (error) {
    console.error("Error unfollowing user:", error);
  } else {
    console.log("Follow removed:", data);
  }
}
