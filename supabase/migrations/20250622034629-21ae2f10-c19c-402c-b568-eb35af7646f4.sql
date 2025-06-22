
-- Create policy to allow public users to insert bookings
CREATE POLICY "Allow public booking submissions" 
ON public.bookings 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow authenticated users to view all bookings
CREATE POLICY "Allow authenticated users to view bookings" 
ON public.bookings 
FOR SELECT 
TO authenticated 
USING (true);

-- Create policy to allow authenticated users to update bookings
CREATE POLICY "Allow authenticated users to update bookings" 
ON public.bookings 
FOR UPDATE 
TO authenticated 
USING (true);

-- Create policy to allow authenticated users to delete bookings
CREATE POLICY "Allow authenticated users to delete bookings" 
ON public.bookings 
FOR DELETE 
TO authenticated 
USING (true);
