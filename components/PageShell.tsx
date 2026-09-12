import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-intro">{intro}</p>
        </div>
      </section>
      <section className="shell page-content">{children}</section>
      <SiteFooter />
    </main>
  );
}
