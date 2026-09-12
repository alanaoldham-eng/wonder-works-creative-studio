import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wonderworkscreative.studio"),
  title: {
    default: "Wonder Works Creative Studio",
    template: "%s | Wonder Works Creative Studio",
  },
  description:
    "Wonder Works Creative, LLC develops imaginative stories and experiences across publishing, screen, and technology. Discover When the Lights Knock: Book One by Alana Oldham.",
  applicationName: "Wonder Works Creative Studio",
  authors: [{ name: "Alana Oldham" }],
  creator: "Wonder Works Creative, LLC",
  publisher: "Wonder Works Creative, LLC",
  keywords: [
    "Wonder Works Creative",
    "Wonder Works Publishing",
    "When the Lights Knock",
    "Alana Oldham",
    "spiritual science fiction",
    "Hessdalen lights",
    "New Orleans fiction",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Wonder Works Creative Studio",
    title: "Wonder Works Creative Studio",
    description:
      "Enter the world of When the Lights Knock: Book One, the featured project from Wonder Works Creative, LLC.",
    images: [
      {
        url: "/images/hero/r8-snowy-valley-3840x2160.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-covered Hessdalen Valley beneath aurora lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonder Works Creative Studio",
    description: "When the Lights Knock: Book One by Alana Oldham.",
    images: ["/images/hero/r8-snowy-valley-3840x2160.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logos/wonder-works-creative-mark.jpg",
    apple: "/images/logos/wonder-works-creative-mark.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#030a11",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
