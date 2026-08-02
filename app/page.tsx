'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import {
  BookOpen,
  Clapperboard,
  Code2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  Youtube,
} from 'lucide-react';

const socialLinks = [
  { label: 'YouTube', href: '#', Icon: Youtube },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'Goodreads', href: '#', text: 'g' },
  { label: 'Threads', href: '#', text: '@' },
  { label: 'Bluesky', href: '#', text: '⌁' },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'homepage-hero' }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) setEmail('');
    } catch {
      setMessage('We could not add you right now. Please try again in a moment.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <nav className="shell nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Wonder Works Creative home">
            <Image
              src="/images/logos/wonder-works-creative-horizontal.jpg"
              alt="Wonder Works Creative"
              width={620}
              height={349}
              priority
            />
          </a>

          <div className="navlinks">
            <a href="#publishing">Publishing</a>
            <a href="#screen">Screen</a>
            <a href="#code">Code</a>
            <a href="#about">About</a>
            <a href="mailto:hello@wonderworkscreative.studio">Contact</a>
          </div>

          <a className="button header-cta" href="#join">
            Join Launch Team <span aria-hidden="true">✦</span>
          </a>
          <Menu className="mobile-menu" aria-hidden="true" />
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />

        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A spiritual sci-fi adventure</p>
            <h1>When the<br />Lights Knock</h1>
            <div className="book-one"><span />Book One<span /></div>
            <p className="hook">
              Three <em>mysterious</em> lights appear above the Mississippi River.
            </p>
            <p className="lede">
              An astrophysicist in Norway and a hospice nurse in New Orleans follow the same impossible phenomenon toward a question humanity has never learned to ask.
            </p>

            <form id="join" className="signup" onSubmit={subscribe}>
              <label htmlFor="email">Join the Launch Team</label>
              <div className="signup-row">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
                <button disabled={busy}>{busy ? 'Joining…' : 'Join Now ✦'}</button>
              </div>
              <small>Book news, launch invitations, and occasional studio updates. Unsubscribe anytime.</small>
              {message && <p className="form-message" role="status">{message}</p>}
            </form>

            <div className="follow-block">
              <p>Follow the journey</p>
              <div className="socials" aria-label="Wonder Works social media">
                {socialLinks.map(({ label, href, Icon, text }) => (
                  <a key={label} href={href} aria-label={label} title={`${label} link coming soon`}>
                    {Icon ? <Icon size={18} /> : <span>{text}</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="book-stage" aria-label="When the Lights Knock R8 cover preview">
            <Image
              className="standing-book"
              src="/images/books/wtlk-r8-standing-book.png"
              alt="When the Lights Knock, Book One, by Alana Oldham"
              width={1250}
              height={1550}
              priority
            />
          </div>
        </div>
      </section>

      <section className="story shell" aria-labelledby="story-heading">
        <div className="section-title" id="story-heading">
          <span />The Story<span />
        </div>
        <div className="story-grid">
          <article className="story-card elena-card">
            <div className="story-copy">
              <p>Hessdalen Valley, Norway</p>
              <h2>Dr. Elena Rostova</h2>
              <span>Astrophysicist. Seeker of patterns. Chasing a phenomenon that defies explanation and changes everything.</span>
              <a href="#join">Explore her journey <b>✦</b></a>
            </div>
          </article>
          <article className="story-card leah-card">
            <div className="story-copy">
              <p>Algiers Point, New Orleans</p>
              <h2>Leah Baptiste</h2>
              <span>Hospice nurse. Keeper of compassion. Guiding others through endings while searching for a truth that begins anew.</span>
              <a href="#join">Explore her journey <b>✦</b></a>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="author-hub shell">
        <div className="author-image-wrap">
          <Image
            src="/images/author/alana-oldham-real.jpg"
            alt="Alana Oldham"
            width={1254}
            height={1254}
          />
        </div>

        <div className="author-copy">
          <p className="eyebrow">Author & Creative Founder</p>
          <h2>Alana Oldham</h2>
          <blockquote>“What if contact isn’t about who has come, but who we become?”</blockquote>
          <p>Alana writes at the intersection of science, spirituality, consciousness, and the human heart. <em>When the Lights Knock</em> begins a larger world designed for books, screen adaptation, and future interactive experiences.</p>
          <a className="button compact" href="mailto:hello@wonderworkscreative.studio">Meet the author ✦</a>
        </div>

        <div id="publishing" className="imprint">
          <Image
            src="/images/logos/wonder-works-publishing-sheet.png"
            alt="Wonder Works Publishing"
            width={1254}
            height={1254}
          />
          <p className="imprint-line">An imprint of Wonder Works Creative, LLC</p>
          <p>Stories that expand consciousness, elevate compassion, and illuminate what it means to be human.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><BookOpen /><b>Publishing</b><small>Books that inspire and transform.</small></div>
          <div id="screen"><Clapperboard /><b>Screen</b><small>Stories built to move audiences.</small></div>
          <div id="code"><Code2 /><b>Code</b><small>Purposeful digital experiences.</small></div>
          <div><Sparkles /><b>Wonder. Create. Impact.</b><small>Worlds on the page, on the screen, and in code.</small></div>
        </div>
        <div className="shell legal">
          <span>© 2026 Wonder Works Creative, LLC</span>
          <a href="mailto:hello@wonderworkscreative.studio"><Mail size={14} /> Contact</a>
        </div>
      </footer>
    </main>
  );
}
