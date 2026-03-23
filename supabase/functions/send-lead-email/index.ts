import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, hospital, whatsapp, created_at } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const date = new Date(created_at || Date.now());
    const formatted = date.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
        <h2 style="color:#08123a;margin-bottom:20px;">Novo lead recebido — HOSPEX 2026</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Nome:</td><td style="padding:8px 0;color:#08123a;font-weight:600;">${nome}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Hospital/Clínica:</td><td style="padding:8px 0;color:#08123a;font-weight:600;">${hospital}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">WhatsApp:</td><td style="padding:8px 0;color:#08123a;font-weight:600;">${whatsapp}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Data:</td><td style="padding:8px 0;color:#08123a;font-weight:600;">${formatted}</td></tr>
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;"/>
        <p style="color:#999;font-size:12px;">Lead capturado via landing page Directa × Epson — HOSPEX 2026</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Directa Leads <onboarding@resend.dev>",
        to: ["contato@directa.com.br"],
        subject: `Novo lead — HOSPEX 2026: ${nome}`,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ error: data }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
