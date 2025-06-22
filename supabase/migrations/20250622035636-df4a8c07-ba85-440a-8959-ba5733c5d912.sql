
-- Drop the current restrictive policy
DROP POLICY "Allow public booking submissions" ON public.bookings;

-- Create a new policy that allows both anonymous and authenticated users
CREATE POLICY "Allow all users to submit bookings" 
ON public.bookings 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);
