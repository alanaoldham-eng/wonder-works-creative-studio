import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function PublishingPage() {
  return <PageShell eyebrow="Wonder Works Publishing" title="Publishing" intro="Wonder Works Publishing is the literary imprint of Wonder Works Creative, LLC, created to publish imaginative work with emotional depth, intellectual curiosity, and long-term creative potential.">
    <div className="content-grid two-col">
      <article className="content-card"><h2>Current release</h2><h3>When the Lights Knock: Book One</h3><p>A spiritual science-fiction adventure beginning in New Orleans and Norway, where three mysterious lights draw two women into a widening global mystery.</p><Link className="button compact" href="/projects/when-the-lights-knock">Explore the book</Link></article>
      <article className="content-card"><h2>The imprint</h2><p>Wonder Works Publishing supports books, author materials, literary marketing, events, reader resources, and future rights opportunities while remaining part of the broader Wonder Works Creative brand.</p><Link className="secondary-link" href="/contact">Publishing and rights inquiries</Link></article>
    </div>
  </PageShell>;
}
