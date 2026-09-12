import Image from "next/image";
import PageShell from "@/components/PageShell";
const platforms=[['youtube','YouTube'],['facebook','Facebook'],['instagram','Instagram'],['goodreads','Goodreads'],['threads','Threads'],['bluesky','Bluesky'],['linkedin','LinkedIn']];
export default function ConnectPage(){return <PageShell eyebrow="Connect" title="Follow the Journey" intro="Wonder Works Creative is establishing a focused social presence. Official profile links will appear here as each account is launched and verified.">
<div className="platform-grid">{platforms.map(([slug,name])=><article className="platform-card" id={slug} key={slug}><Image src={`/images/social/${slug}.svg`} alt="" width={30} height={30}/><div><h2>{name}</h2><p>Official account link coming soon.</p></div></article>)}</div>
</PageShell>}
