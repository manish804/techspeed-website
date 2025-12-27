import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SYSTEM_PROMPT = `You are a helpful AI assistant for Suryonex, a leading outsourcing company since 2002. You help website visitors learn about our services and guide them toward becoming clients.

About Suryonex:
- Founded in 2002, minority women-owned technology business
- 20+ years of experience, 500+ happy clients, 98% satisfaction rate
- US-based project management with global production teams
- Never lost a document or had a data breach in our history

Our Services:
1. AI Driven Processing - AI data extraction, AI-assisted processing, ML optimization
2. Data Services - Data entry (99.95-100% accuracy), data mining, data processing
3. Customer Experience - Back office support, service desk, chat support, content moderation

Key Benefits:
- 60% average cost savings
- 24/7 support available
- Scale from 1 to 50 team members in 48 hours
- SOC 2, GDPR, ISO 27001, HIPAA compliant
- 100% on-time delivery guaranteed

Contact:
- Phone: 503-927-0027
- Email: info@suryonex.com
- Location: Portland, OR (HQ) and Pune, India (Operations)

Your goal is to:
1. Answer questions about our services professionally and helpfully
2. Highlight relevant benefits based on their needs
3. Encourage visitors to request a free estimate or contact us
4. Keep responses concise (2-3 sentences unless more detail is needed)
5. Be friendly but professional

If asked about pricing, explain that we provide custom quotes based on specific needs and encourage them to contact us for a free estimate.`;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface RequestBody {
  message: string;
  history?: ChatMessage[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { message, history = [] }: RequestBody = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const apiKey = Deno.env.get('FASTROUTER_API_KEY');
    if (!apiKey) {
      console.error('FASTROUTER_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const messages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.slice(-10),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://go.fastrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('FastRouter API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'AI service temporarily unavailable' }),
        {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || 'I apologize, but I encountered an issue. Please try again or contact us directly at info@suryonex.com.';

    return new Response(
      JSON.stringify({
        message: assistantMessage,
        success: true
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(
      JSON.stringify({
        error: 'Something went wrong. Please try again.',
        success: false
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
