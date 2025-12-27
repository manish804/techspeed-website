import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  name: string;
  email: string;
  company?: string;
  service?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const leadData: LeadData = await req.json();

    const emailBody = `
New Lead Submission from Suryonex Website
==========================================

Name: ${leadData.name}
Email: ${leadData.email}
Company: ${leadData.company || 'Not provided'}
Service Interest: ${leadData.service || 'Not specified'}

Please follow up within 24 hours.

--
Automated notification from Suryonex Lead System
    `.trim();

    const smtpHost = Deno.env.get('SMTP_HOST') || 'smtp.mailer91.com';
    const smtpPort = Deno.env.get('SMTP_PORT') || '587';
    const smtpUser = Deno.env.get('SMTP_USER') || '';
    const smtpPass = Deno.env.get('SMTP_PASS') || '';
    const notifyEmail = Deno.env.get('NOTIFY_EMAIL') || 'info@suryonex.com';

    console.log(`New lead received: ${leadData.name} (${leadData.email})`);
    console.log(`Service interest: ${leadData.service || 'General inquiry'}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead notification processed',
        lead: {
          name: leadData.name,
          email: leadData.email
        }
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing lead notification:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to process notification'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
