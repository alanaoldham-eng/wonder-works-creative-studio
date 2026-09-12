import Link from "next/link";
import PageShell from "@/components/PageShell";
export default function EventsPage(){return <PageShell eyebrow="Meet the author" title="Events & Appearances" intro="Book signings, conversations, launch gatherings, and other appearances will be posted here as they are confirmed.">
<div className="content-card event-card"><p className="event-status">Schedule in development</p><h2>Upcoming events will be announced soon</h2><p>No public book signings or appearances have been formally announced yet. Join the Launch Team to receive confirmed dates, locations, accessibility details, and registration information.</p><div className="inline-actions"><Link className="button compact" href="/#join">Join the Launch Team</Link><Link className="secondary-link" href="/contact">Invite Alana to an event</Link></div></div>
</PageShell>}
