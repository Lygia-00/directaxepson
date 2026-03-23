CREATE POLICY "Allow anon insert rate limits"
ON public.lead_rate_limits
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anon select own rate limits"
ON public.lead_rate_limits
FOR SELECT
TO anon
USING (true);