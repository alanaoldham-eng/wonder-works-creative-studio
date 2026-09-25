"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const socialLinks = [
  { label: "YouTube", icon: "/images/social/youtube.svg", slug: "youtube" },
  { label: "Facebook", icon: "/images/social/facebook.svg", slug: "facebook" },
  { label: "Instagram", icon: "/images/social/instagram.svg", slug: "instagram" },
  { label: "Goodreads", icon: "/images/social/goodreads.svg", slug: "goodreads" },
  { label: "Threads", icon: "/images/social/threads.svg", slug: "threads" },
  { label: "Bluesky", icon: "/images/social/bluesky.svg", slug: "bluesky" },
  { label: "LinkedIn", icon: "/images/social/linkedin.svg", slug: "linkedin" },
];

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ firstName, email, source: "homepage-hero" }) });
      const data = await response.json(); setMessage(data.message); if (response.ok) { setFirstName(""); setEmail(""); }
    } catch { setMessage("We could not add you right now. Please try again shortly."); }
    finally { setBusy(false); }
  }

  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" /><div className="hero-vignette" aria-hidden="true" /><div className="hero-name-mask" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Featured Project</p>
            <h1>When the<br />Lights Knock</h1>
            <div className="book-one"><span />Book One<span /></div>
            <p className="hook">Three <em>mysterious</em> lights appear above the Mississippi River.</p>
            <p className="lede">An astrophysicist in Norway and a hospice nurse in New Orleans follow the same impossible phenomenon toward a question humanity has never learned to ask.</p>
            <div className="hero-actions"><Link className="text-link" href="/projects/when-the-lights-knock">Explore the book</Link><Link className="text-link" href="/events">Upcoming events</Link></div>
            <form id="join" className="signup" onSubmit={subscribe}>
              <label htmlFor="email">Join the Launch Team</label>
              <div className="signup-fields">
                <input id="firstName" name="firstName" type="text" required value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First name" autoComplete="given-name" aria-label="First name" />
                <input id="email" name="email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" autoComplete="email" aria-label="Email address" />
                <button disabled={busy}>{busy ? "Joining…" : "Join Now ✦"}</button>
              </div>
              <small>Book news, launch invitations, and occasional studio updates. Unsubscribe anytime.</small>
              {message && <p className="form-message" role="status">{message}</p>}
            </form>
          </div>
          <div className="book-stage"><div className="cover-frame"><Image className="book-cover" src="/images/books/wtlk-r8-front-book-one-clean.jpg" alt="When the Lights Knock, Book One, by Alana Oldham" width={1765} height={2850} priority /></div></div>
        </div>
      </section>
      <section className="follow-strip"><div className="shell follow-strip-inner"><p>Follow the journey</p><div className="socials">{socialLinks.map(({label,icon,slug})=><Link key={label} href={`/connect#${slug}`} aria-label={label}><Image src={icon} alt="" width={28} height={28} /><span>{label}</span></Link>)}</div></div></section>
      <section className="story shell" aria-labelledby="story-heading">
        <div className="section-title" id="story-heading"><span />The Story<span /></div>
        <div className="story-grid">
          <article className="story-card story-card-split">
            <div className="story-copy"><p>Algiers Point, New Orleans</p><h2>Leah Baptiste</h2><span>Hospice nurse. Keeper of compassion. Guiding others through endings while searching for a truth that begins anew.</span><Link href="/characters/leah-baptiste">Follow her journey <b>✦</b></Link></div>
            <div className="story-visual"><Image className="story-image story-image-leah" src="/images/story/leah-dock-card.jpg" alt="Leah Baptiste comforting Imani on the dock at Algiers Point" fill sizes="(max-width: 980px) 100vw, 50vw" /></div>
          </article>
          <article className="story-card story-card-split">
            <div className="story-copy"><p>Hessdalen Valley, Norway</p><h2>Dr. Elena Rostova</h2><span>Astrophysicist. Seeker of patterns. Chasing a phenomenon that defies explanation and changes everything.</span><Link href="/characters/elena-rostova">Follow her journey <b>✦</b></Link></div>
            <div className="story-visual"><Image className="story-image" src="/images/story/elena-valley-card.jpg" alt="Elena Rostova looking out over the snow-covered Hessdalen Valley at night" fill sizes="(max-width: 980px) 100vw, 50vw" /></div>
          </article>
        </div>
      </section>
      <section className="author-hub shell">
        <div className="author-image-wrap"><Image src="/images/author/alana-oldham-real.jpg" alt="Alana Oldham wearing a dark blue science-fiction uniform" width={1254} height={1254} /></div>
        <div className="author-copy"><p className="eyebrow">Author & Creative Founder</p><h2>Alana Oldham</h2><blockquote>“What if humanity’s greatest encounter isn’t about who has come, but who we become?”</blockquote><p>Alana writes at the intersection of science, spirituality, consciousness, and the human heart. <em>When the Lights Knock</em> begins a larger world designed for books, screen adaptation, and future interactive experiences.</p><Link className="button compact" href="/events">Meet Alana at an event ✦</Link><Link className="secondary-link" href="/about">Read Alana’s story</Link></div>
        <div className="imprint"><Image src="/images/logos/wonder-works-publishing-logo.png" alt="Wonder Works Publishing" width={488} height={521} /><p className="imprint-line">An imprint of Wonder Works Creative, LLC</p><p>Stories that expand consciousness, elevate compassion, and illuminate what it means to be human.</p><Link className="secondary-link" href="/publishing">Explore the imprint</Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
