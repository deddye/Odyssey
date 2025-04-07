CREATE TABLE IF NOT EXISTS "public"."direct_messages" (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    sender_id UUID REFERENCES auth.users (id) ON DELETE CASCADE,
    receiver_id UUID REFERENCES auth.users (id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX direct_messages_sender_idx ON "public"."direct_messages" (sender_id);
CREATE INDEX direct_messages_receiver_idx ON "public"."direct_messages" (receiver_id);
CREATE INDEX direct_messages_conversation_idx ON "public"."direct_messages" (sender_id, receiver_id);

-- Allow users to insert their own messages
CREATE POLICY "Allow insert direct_messages" ON "public"."direct_messages"
FOR INSERT
WITH CHECK (auth.uid() = sender_id);

-- Allow users to view messages they sent or received
CREATE POLICY "Allow select direct_messages" ON "public"."direct_messages"
FOR SELECT
USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

-- Allow users to update read status of messages they received
CREATE POLICY "Allow update direct_messages" ON "public"."direct_messages"
FOR UPDATE
USING (auth.uid() = receiver_id)
WITH CHECK (
    -- Only allow updating the read field
    (sender_id = direct_messages.sender_id) AND
    (receiver_id = direct_messages.receiver_id) AND
    (message = direct_messages.message) AND
    (created_at = direct_messages.created_at)
);

-- Create conversations view for easier querying
CREATE OR REPLACE VIEW "public"."conversations" AS
SELECT DISTINCT
    CASE
        WHEN sender_id < receiver_id THEN sender_id
        ELSE receiver_id
    END AS user1_id,
    CASE
        WHEN sender_id < receiver_id THEN receiver_id
        ELSE sender_id
    END AS user2_id,
    MAX(created_at) AS last_message_at
FROM "public"."direct_messages"
GROUP BY user1_id, user2_id;

-- Enable RLS on the direct_messages table
ALTER TABLE "public"."direct_messages" OWNER TO "postgres";
ALTER TABLE "public"."direct_messages" ENABLE ROW LEVEL SECURITY;

-- Grant permissions
GRANT ALL ON TABLE "public"."direct_messages" TO "anon";
GRANT ALL ON TABLE "public"."direct_messages" TO "authenticated";
GRANT ALL ON TABLE "public"."direct_messages" TO "service_role";

-- Grant permissions on the view
GRANT ALL ON TABLE "public"."conversations" TO "anon";
GRANT ALL ON TABLE "public"."conversations" TO "authenticated";
GRANT ALL ON TABLE "public"."conversations" TO "service_role";
