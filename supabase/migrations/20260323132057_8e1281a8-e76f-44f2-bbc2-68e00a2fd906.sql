DROP POLICY IF EXISTS "Allow anon insert rate limits" ON public.lead_rate_limits;
DROP POLICY IF EXISTS "Allow anon select own rate limits" ON public.lead_rate_limits;
DROP TABLE IF EXISTS public.lead_rate_limits;