import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const RESEND_API_KEY = Deno.env.get("emailsubmissiontetra");
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailSubmission {
  email: string;
  offerExtendedUntil: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Log API key presence (not the actual key)
    console.log('Resend API Key present:', !!RESEND_API_KEY);
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    const submission: EmailSubmission = await req.json();
    
    console.log('Processing submission:', submission);
    
    // Store email in database
    const { data: dbData, error: dbError } = await supabase
      .from('email_submissions')
      .insert([{
        email: submission.email,
        offer_extended_until: submission.offerExtendedUntil
      }])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to store email submission');
    }

    console.log('Successfully stored in database:', dbData);

    // Send notification email
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AI Workshop <workshop@tetra.team>",
        to: ["m@tetra.team"],
        subject: "New Workshop Offer Extension Request",
        html: `
          <h2>New Email Submission</h2>
          <p>A user has requested to extend their workshop offer:</p>
          <ul>
            <li><strong>Email:</strong> ${submission.email}</li>
            <li><strong>Offer Extended Until:</strong> ${new Date(submission.offerExtendedUntil).toLocaleString()}</li>
          </ul>
        `,
      }),
    });

    const emailData = await emailRes.text();
    console.log('Resend API response:', emailRes.status, emailData);

    if (!emailRes.ok) {
      console.error('Resend API error:', emailData);
      return new Response(JSON.stringify({ error: `Failed to send notification email: ${emailData}` }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in notify-email-submission function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);