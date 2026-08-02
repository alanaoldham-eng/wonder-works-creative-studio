# Wonder Works Creative Studio

Next.js 15 website for **Wonder Works Creative, LLC**, using the R8 *When the Lights Knock* cover artwork, the approved Wonder Works identities, Alana Oldham's real uploaded portrait, PostgreSQL, and a launch-team mailing list.

## Windows PowerShell setup

```powershell
Set-Location C:\dev\WWCS\wwcs-web\wonder-works-studio-nextjs
npm install
Copy-Item .env.example .env.local
notepad .env.local
```

Create the PostgreSQL database and table:

```powershell
psql -U postgres -c "CREATE DATABASE wonderworks;"
psql -U postgres -d wonderworks -f .\db\schema.sql
```

Start the website:

```powershell
npm run dev
```

Open `http://localhost:3000`.

## Environment variable

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/wonderworks
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Image source policy

- `public/images/author/alana-oldham-real.jpg` is the exact uploaded portrait. It is not regenerated or retouched.
- The book files under `public/images/books/` come from the uploaded R8 cover PDF.
- `wtlk-r8-front-book-one.jpg` changes only the obsolete subtitle line for the website preview.
- The back-cover blurb remains provisional and is not used as homepage copy.
