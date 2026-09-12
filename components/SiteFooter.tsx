import Link from "next/link";
import { BookOpen, Clapperboard, Code2, Sparkles } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <Link href="/publishing"><BookOpen /><b>Publishing</b><small>Books that inspire and transform.</small></Link>
        <Link href="/screen"><Clapperboard /><b>Screen</b><small>Stories built to move audiences.</small></Link>
        <Link href="/code"><Code2 /><b>Code</b><small>Purposeful digital experiences.</small></Link>
        <Link href="/about"><Sparkles /><b>Wonder. Create. Impact.</b><small>Worlds on the page, on the screen, and in code.</small></Link>
      </div>
      <div className="shell legal">
        <span>© 2026 Wonder Works Creative, LLC</span>
        <div className="legal-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
