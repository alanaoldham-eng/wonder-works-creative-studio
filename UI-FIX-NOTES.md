# UI and Forms Update

## Changes
- Launch Team form now requires first name and email.
- The large author-name artifact in the hero background is masked so it does not overlap the form.
- Social links are larger and include readable platform names.
- Story cards use a split text/image layout so images are not stretched.
- Leah's card keeps Leah and Imani visible and does not show the man.
- Contact page now uses a real form; all mailto links were removed.
- Added `/api/contact` and a `contact_messages` Supabase table with insert-only RLS.

## Database
Run `db/schema.sql` again in the Supabase SQL Editor. The script uses `if not exists` and safely adds the new `contact_messages` table and RLS policy.
