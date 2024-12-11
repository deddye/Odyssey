CREATE POLICY "Allow authenticated users to insert files"
ON storage.objects
FOR INSERT
WITH CHECK (
  auth.role() = 'authenticated'
);

CREATE POLICY "Allow authenticated users to read files"
ON storage.objects
FOR SELECT
USING (
  auth.role() = 'authenticated'
);

CREATE POLICY "Allow users to delete their own files"
ON storage.objects
FOR DELETE
USING (
  auth.role() = 'authenticated' AND owner = auth.uid()
);

create policy "Authenticated users can update their own rows"
  on public.profiles
  for update
  using (auth.role() = 'authenticated' AND auth.uid() = id);