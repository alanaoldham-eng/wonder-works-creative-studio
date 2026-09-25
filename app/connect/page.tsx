import Image from "next/image";
import PageShell from "@/components/PageShell";

const platforms = [
  { slug: "youtube", name: "YouTube", detail: "Official account link coming soon." },
  { slug: "facebook", name: "Facebook", detail: "Official account link coming soon." },
  { slug: "instagram", name: "Instagram", detail: "Official account link coming soon." },
  { slug: "goodreads", name: "Goodreads", detail: "Official account link coming soon." },
  { slug: "threads", name: "Threads", detail: "Official account link coming soon." },
  { slug: "bluesky", name: "Bluesky", detail: "Official account link coming soon." },
  { slug: "linkedin", name: "LinkedIn", detail: "linkedin.com/in/alana", href: "https://www.linkedin.com/in/alana/" },
];

export default function ConnectPage() {
  return <PageShell
    eyebrow="Connect"
    title="Follow the Journey"
    intro="Wonder Works Creative is establishing a focused social presence. Official profile links will appear here as each account is launched and verified."
  >
    <div className="platform-grid">
      {platforms.map((platform) => (
        <article className="platform-card" id={platform.slug} key={platform.slug}>
          <Image src={`/images/social/${platform.slug}.svg`} alt="" width={30} height={30} />
          <div>
            <h2>{platform.name}</h2>
            {platform.href
              ? <p><a className="inline-link" href={platform.href} target="_blank" rel="noreferrer">{platform.detail}</a></p>
              : <p>{platform.detail}</p>}
          </div>
        </article>
      ))}
    </div>
  </PageShell>;
}
