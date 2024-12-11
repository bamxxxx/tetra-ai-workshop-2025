import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("emailsubmissiontetra");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Processing contact form submission');
    
    const submission: ContactForm = await req.json();
    console.log('Form data:', submission);

    // Send email using Resend
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AI Workshop Contact Form <aiworkshop@tetra.support>",
        to: ["m@tetra.team"],
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p>You have received a new message from the contact form:</p>
          <ul>
            <li><strong>Name:</strong> ${submission.name}</li>
            <li><strong>Email:</strong> ${submission.email}</li>
            <li><strong>Message:</strong> ${submission.message}</li>
          </ul>
        `,
        reply_to: submission.email,
      }),
    });

    if (!emailRes.ok) {
      const emailError = await emailRes.text();
      console.error('Resend API error:', emailError);
      throw new Error(`Failed to send email: ${emailError}`);
    }

    const emailData = await emailRes.json();
    console.log('Email sent successfully:', emailData);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);