CREATE POLICY "Allow authenticated read access"
ON "public"."profiles"
FOR SELECT
USING (auth.role() = 'authenticated');