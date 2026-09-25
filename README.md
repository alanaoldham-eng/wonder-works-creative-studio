# Wonder Works Creative Studio

Next.js 16 website for Wonder Works Creative, LLC, featuring *When the Lights Knock: Book One* and a Supabase-backed Launch Team signup.

## PowerShell setup

```powershell
Set-Location "C:\dev\wwcs\wonder-works-creative-studio"
npm install
Copy-Item .env.example .env.local
notepad .env.local
npm run build
npm run dev
```

The site will be available at `http://localhost:3000`.

## Supabase

Run `db/schema.sql` in the Supabase SQL Editor. Add these variables locally and in Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

The public role can insert Launch Team signups but cannot read, update, or delete subscriber records.

## Contact message notifications

New rows in `contact_messages` trigger an email through a Supabase Database
Webhook and the `contact-notify` Edge Function in `supabase/functions/`. The
function sends via the Resend API.

Secrets the function needs (set with `supabase secrets set`):

- `RESEND_API_KEY` – API key from resend.com
- `NOTIFY_EMAIL` – where notifications are delivered
- `WEBHOOK_SECRET` – shared secret; the webhook must send it as the
  `x-webhook-secret` header, and the function rejects anything else
- `NOTIFY_FROM` – optional sender address, defaults to Resend's test sender

Deploy with `supabase functions deploy contact-notify --no-verify-jwt`. The
function is written for Deno and is excluded from the Next.js TypeScript and
ESLint configuration.
