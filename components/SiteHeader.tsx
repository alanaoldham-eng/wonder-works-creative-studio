import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Wonder Works Creative home">
          <Image src="/images/logos/wonder-works-creative-horizontal.jpg" alt="Wonder Works Creative Studio" width={620} height={349} priority />
        </Link>
        <div className="navlinks">
          <Link href="/publishing">Publishing</Link>
          <Link href="/screen">Screen</Link>
          <Link href="/code">Code</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link className="button header-cta" href="/#join">Join Launch Team <span aria-hidden="true">✦</span></Link>
      </nav>
    </header>
  );
}
