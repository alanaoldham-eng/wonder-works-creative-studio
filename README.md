# Wonder Works Creative Studio

Next.js 16 website for Wonder Works Creative, LLC, featuring *When the Lights Knock: Book One* and a Supabase-backed Launch Team signup.

## PowerShell setup

```powershell
Set-Location "C:\dev\wwcs\web"
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
