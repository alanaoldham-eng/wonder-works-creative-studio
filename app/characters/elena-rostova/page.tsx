import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export default function ElenaPage(){return <PageShell eyebrow="When the Lights Knock" title="Dr. Elena Rostova" intro="An astrophysicist drawn to Hessdalen Valley by a phenomenon that refuses to remain only an object of observation.">
<div className="character-detail"><Image src="/images/story/elena-hessdalen-clean.jpg" alt="Snow-covered Hessdalen Valley" width={1505} height={900}/><div><h2>Seeker of patterns</h2><p>Elena approaches the unexplained through evidence, disciplined observation, and a deep respect for what remains unknown. Her journey tests whether understanding can come from distance alone.</p><p>This page will expand with spoiler-conscious character material as publication approaches.</p><Link className="secondary-link" href="/projects/when-the-lights-knock">Return to the book</Link></div></div>
</PageShell>}
