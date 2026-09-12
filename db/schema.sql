create table if not exists public.launch_team (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  first_name text,
  source text not null default 'website',
  consented_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create unique index if not exists launch_team_email_unique
  on public.launch_team (lower(email));

alter table public.launch_team enable row level security;

drop policy if exists "Anyone can join launch team" on public.launch_team;
create policy "Anyone can join launch team"
  on public.launch_team
  for insert
  to anon, authenticated
  with check (
    email is not null
    and length(trim(email)) >= 5
    and length(email) <= 320
  );

revoke select, update, delete on public.launch_team from anon, authenticated;
grant insert on public.launch_team to anon, authenticated;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text,
  email text not null,
  organization text,
  inquiry_type text not null,
  subject text not null,
  message text not null,
  source text not null default 'website-contact-form',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (
    length(trim(first_name)) >= 1
    and length(trim(email)) >= 5
    and length(trim(subject)) >= 2
    and length(trim(message)) >= 10
  );

revoke select, update, delete on public.contact_messages from anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
