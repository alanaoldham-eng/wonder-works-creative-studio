// Emails a notification when a row is inserted into public.contact_messages.
// Invoked by a Supabase Database Webhook; sends through the Resend API.
//
// Required secrets: RESEND_API_KEY, NOTIFY_EMAIL, WEBHOOK_SECRET
// Optional secret:  NOTIFY_FROM (defaults to Resend's shared test sender)

interface ContactRow {
  id: string;
  first_name: string;
  last_name: string | null;
  email: string;
  organization: string | null;
  inquiry_type: string;
  subject: string;
  message: string;
  created_at: string;
}

Deno.serve(async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // The function is deployed without JWT verification so the webhook can reach
  // it, so this shared secret is what keeps strangers from sending you mail.
  const expectedSecret = Deno.env.get("WEBHOOK_SECRET");
  if (!expectedSecret || request.headers.get("x-webhook-secret") !== expectedSecret) {
    return new Response("Forbidden", { status: 403 });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const notifyEmail = Deno.env.get("NOTIFY_EMAIL");
  const from = Deno.env.get("NOTIFY_FROM") ?? "onboarding@resend.dev";

  if (!apiKey || !notifyEmail) {
    console.error("Missing RESEND_API_KEY or NOTIFY_EMAIL secret.");
    return new Response("Not configured", { status: 500 });
  }

  const payload = await request.json().catch(() => null);
  const row: ContactRow | undefined = payload?.record;
  if (!row) {
    return new Response("No record in payload", { status: 400 });
  }

  const name = [row.first_name, row.last_name].filter(Boolean).join(" ");
  const lines = [
    `From:      ${name} <${row.email}>`,
    row.organization ? `Company:   ${row.organization}` : null,
    `Type:      ${row.inquiry_type}`,
    `Subject:   ${row.subject}`,
    `Received:  ${row.created_at}`,
    "",
    row.message,
    "",
    "--",
    "Sent by the contact form at wonderworkscreative.studio.",
    `Row ${row.id} in the contact_messages table.`,
  ].filter(Boolean);

  // Plain text only: the message body is written by the public, so it is never
  // rendered as HTML.
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: notifyEmail,
      reply_to: row.email,
      subject: `Contact form: ${row.subject}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the email:", response.status, await response.text());
    return new Response("Email failed", { status: 502 });
  }

  return new Response("Sent", { status: 200 });
});
