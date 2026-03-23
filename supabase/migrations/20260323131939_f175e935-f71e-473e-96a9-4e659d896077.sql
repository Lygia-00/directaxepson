ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS notification_sent_at TIMESTAMP WITH TIME ZONE;

DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.leads;
CREATE POLICY "Allow anonymous inserts"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (
  char_length(btrim(nome)) BETWEEN 3 AND 200
  AND char_length(btrim(hospital)) BETWEEN 2 AND 200
  AND regexp_replace(whatsapp, '\D', '', 'g') ~ '^\d{10,11}$'
);

CREATE TABLE IF NOT EXISTS public.lead_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.lead_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_lead_rate_limits_ip_hash_created_at
ON public.lead_rate_limits (ip_hash, created_at DESC);