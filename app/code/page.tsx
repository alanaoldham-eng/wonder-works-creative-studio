import Link from "next/link";
import PageShell from "@/components/PageShell";

const GITHUB_URL = "https://github.com/alanaoldham-eng";
const LINKEDIN_URL = "https://www.linkedin.com/in/alana/";

const capabilities = [
  {
    title: "Application development",
    body: "Full-stack development across frontend, backend, data workflows, automated testing, TypeScript validation, production builds, and deployment.",
    tech: ["Next.js", "TypeScript", "React", "Python", "Git/GitHub", "Vercel"],
  },
  {
    title: "Blockchain and Web3",
    body: "Token, registry, and NFT development on the Base Ethereum Layer 2 network, including the CAPIT application, token, and liquidity ecosystem.",
    tech: ["Solidity", "Base", "Ethereum L2", "Hardhat"],
  },
  {
    title: "AI systems",
    body: "AI systems development and integration, including a model platform with a visual flow builder for composing and running model workflows.",
    tech: ["Python", "AI integration"],
  },
  {
    title: "Content management",
    body: "CMS implementation and content modeling that let business users manage content without touching application code, plus enterprise content integration and migration.",
    tech: ["TinaCMS", "Backbase CMS", "Alfresco", "SDL Tridion"],
  },
  {
    title: "Architecture and integration",
    body: "Application and solutions architecture, systems integration, API-driven applications, technical design, and the business analysis that connects requirements to working software.",
    tech: ["Solutions architecture", "Systems integration", "Technical design"],
  },
  {
    title: "Enterprise and security",
    body: "Digital banking, insurance, and financial technology delivery across Europe, Asia, and North America, grounded in information security architecture and secure content delivery.",
    tech: ["Digital banking", "Information security", "MSc Information Security"],
  },
];

const work = [
  {
    title: "CAPIT",
    body: "A Web3 application, token, liquidity pool, and ecosystem built on Base. Currently on the Sepolia testnet and moving into production.",
    stack: "Solidity, TypeScript, Next.js, TinaCMS",
    links: [
      { label: "CAPIT Registry", href: "https://v0-capit.vercel.app" },
      { label: "Token code", href: "https://github.com/alanaoldham-eng/capit-hardhat" },
      { label: "NFT code", href: "https://github.com/alanaoldham-eng/capit/tree/main/capit-nft" },
    ],
  },
  {
    title: "Tellus AI Model Platform",
    body: "A model platform demo with a visual flow builder for assembling AI workflows.",
    stack: "Python",
    links: [
      { label: "Flow Builder demo", href: "https://tellus-ai-model-platform.vercel.app/" },
      { label: "Code", href: "https://github.com/alanaoldham-eng/tellus-ai-model-platform" },
    ],
  },
  {
    title: "Tellus Wallet",
    body: "A digital wallet application with its own backend service.",
    stack: "TypeScript, JavaScript, CSS, Python, C++",
    links: [
      { label: "Wallet", href: "https://tellus-wallet.vercel.app/" },
      { label: "Backend code", href: "https://github.com/alanaoldham-eng/tellus-backend" },
    ],
  },
  {
    title: "Tellus Digital",
    body: "A CMS-enabled company website where content is managed entirely through TinaCMS.",
    stack: "TypeScript, JavaScript, CSS",
    links: [
      { label: "Website", href: "https://www.tellusdigital.io/" },
      { label: "Code", href: "https://github.com/alanaoldham-eng/web/tree/main" },
    ],
  },
  {
    title: "Krewe App",
    body: "A mobile-first community web application, available by invitation only.",
    stack: "TypeScript, PL/SQL, CSS, Next.js",
    links: [{ label: "Code", href: "https://github.com/alanaoldham-eng/LesBiGulfFriends" }],
  },
  {
    title: "Cardano Gateway",
    body: "A prototype gateway exploring integration with the Cardano network.",
    stack: "Prototype",
    links: [{ label: "Code", href: "https://github.com/alanaoldham-eng/cardano-gateway" }],
  },
];

export default function CodePage() {
  return <PageShell
    eyebrow="Wonder Works Creative"
    title="Code"
    intro="Technology is part of the studio’s creative language. Founder Alana Oldham has built, integrated, and supported software since 1996, and still writes code every day across web applications, blockchain, AI systems, and enterprise integration."
  >
    <div className="content-grid three-col">
      {capabilities.map((item) => (
        <article className="content-card" key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <ul className="tech-list">{item.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        </article>
      ))}
    </div>

    <h2 className="section-heading">Recent work</h2>
    <div className="content-grid two-col">
      {work.map((project) => (
        <article className="content-card" key={project.title}>
          <h2>{project.title}</h2>
          <h3>{project.stack}</h3>
          <p>{project.body}</p>
          <p className="work-links">
            {project.links.map((link) => (
              <a className="inline-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </p>
        </article>
      ))}
    </div>

    <h2 className="section-heading">Public record</h2>
    <div className="content-grid two-col">
      <article className="content-card">
        <h2>GitHub</h2>
        <p>Public repositories showing active development: feature work, bug fixes, testing, CMS implementation, application routing, content modeling, and production-build verification.</p>
        <a className="secondary-link" href={GITHUB_URL} target="_blank" rel="noreferrer">github.com/alanaoldham-eng</a>
      </article>
      <article className="content-card">
        <h2>LinkedIn</h2>
        <p>Thirty years of professional history, from application development at Entergy in 1996 through solutions architecture and business engineering at Backbase to founding Tellus Digital.</p>
        <a className="secondary-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">linkedin.com/in/alana</a>
      </article>
    </div>

    <p className="page-cta"><Link className="button compact" href="/contact">Discuss a digital project</Link></p>
  </PageShell>;
}
