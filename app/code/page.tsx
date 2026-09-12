import PageShell from "@/components/PageShell";
import Link from "next/link";
export default function CodePage(){return <PageShell eyebrow="Wonder Works Creative" title="Code" intro="Technology is part of the studio’s creative language, supporting websites, digital storytelling, interactive experiences, and future communities.">
<div className="content-grid three-col"><article className="content-card"><h2>Web</h2><p>Fast, accessible, maintainable digital experiences built around clear storytelling.</p></article><article className="content-card"><h2>Interactive</h2><p>Future explorations may include games, immersive experiences, and reader-centered tools.</p></article><article className="content-card"><h2>Community</h2><p>Digital spaces will be evaluated carefully for usefulness, safety, cost, and long-term value.</p></article></div><p className="page-cta"><Link className="button compact" href="/contact">Discuss a digital project</Link></p>
</PageShell>}
