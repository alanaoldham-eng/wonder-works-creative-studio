import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export default function AboutPage(){return <PageShell eyebrow="About the studio" title="Wonder Works Creative" intro="Wonder Works Creative, LLC is an independent creative company developing stories and intellectual property across publishing, screen, digital media, and future interactive formats.">
<div className="about-layout"><Image className="about-photo" src="/images/author/alana-oldham-real.jpg" alt="Alana Oldham" width={1254} height={1254}/><div><h2>Founded by Alana Oldham</h2><p>Alana Oldham brings decades of technology experience to a creative practice rooted in storytelling, consciousness, compassion, scientific curiosity, and spiritual exploration.</p><p>The company’s first major publishing project is <em>When the Lights Knock</em>, the opening book in a planned trilogy. Wonder Works Publishing serves as the company’s literary imprint.</p><div className="inline-actions"><Link className="button compact" href="/events">Upcoming appearances</Link><Link className="secondary-link" href="/contact">Contact the studio</Link></div></div></div>
</PageShell>}
