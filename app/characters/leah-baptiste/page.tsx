import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export default function LeahPage(){return <PageShell eyebrow="When the Lights Knock" title="Leah Baptiste" intro="A New Orleans hospice nurse whose work has taught her to stay present when certainty falls away.">
<div className="character-detail"><Image src="/images/story/leah-imani-crop.jpg" alt="Leah Baptiste comforting Imani at Algiers Point" width={1005} height={715}/><div><h2>Keeper of compassion</h2><p>Leah’s strength is relational rather than institutional. Her connection with Imani and her care for others place the human consequences of the mystery at the center of the story.</p><p>This page will expand with spoiler-conscious character material as publication approaches.</p><Link className="secondary-link" href="/projects/when-the-lights-knock">Return to the book</Link></div></div>
</PageShell>}
