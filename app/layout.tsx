import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderworkscreative.studio'),
  title: 'Wonder Works Creative Studio',
  description: 'Books, screen stories, and purposeful digital experiences from Wonder Works Creative, LLC.'
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
