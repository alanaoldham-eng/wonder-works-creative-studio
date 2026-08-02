CREATE EXTENSION IF NOT EXISTS citext;
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email CITEXT NOT NULL UNIQUE,
  first_name TEXT,
  source TEXT NOT NULL DEFAULT 'homepage',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','active','unsubscribed','bounced')),
  consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  ip_hash TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS newsletter_status_idx ON newsletter_subscribers(status);
