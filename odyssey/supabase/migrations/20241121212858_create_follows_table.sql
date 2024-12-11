CREATE TABLE IF NOT EXISTS "public"."follows" (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    follower_id UUID REFERENCES auth.users (id) ON DELETE CASCADE,
    following_id UUID REFERENCES auth.users (id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT now()
);

-- Allow users to insert follow relationships
CREATE POLICY "Allow insert follows" ON "public"."follows"
FOR INSERT
WITH CHECK (auth.uid() = follower_id);

-- Allow users to view follow relationships involving them
CREATE POLICY "Allow select follows" ON "public"."follows"
FOR SELECT
USING (auth.uid() = follower_id OR auth.uid() = following_id);

-- Allow users to delete their own follow relationships
CREATE POLICY "Allow delete follows" ON "public"."follows"
FOR DELETE
USING (auth.uid() = follower_id);

ALTER TABLE "public"."follows"
ADD CONSTRAINT unique_follows UNIQUE (follower_id, following_id);


CREATE INDEX follows_following_idx ON "public"."follows" (following_id);

CREATE INDEX follows_follower_idx ON "public"."follows" (follower_id);

ALTER TABLE "public"."follows" OWNER TO "postgres";

ALTER TABLE "public"."follows" ENABLE ROW LEVEL SECURITY;


GRANT ALL ON TABLE "public"."follows" TO "anon";
GRANT ALL ON TABLE "public"."follows" TO "authenticated";
GRANT ALL ON TABLE "public"."follows" TO "service_role";
