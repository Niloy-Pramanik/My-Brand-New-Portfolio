import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import { Sidebar } from '@/components/site/Sidebar';
import { Navbar } from '@/components/site/Navbar';
import { MobilePageTransition } from '@/components/site/MobilePageTransition';
import { Footer } from '@/components/site/Footer';
import { PROFILE, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';
import './globals.css';

const archivo = Archivo({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.website),
  ...pageMetadata(SITE_TITLE, SITE_DESCRIPTION, '/'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-sawad-bg text-sawad-text font-sans antialiased">
        {/* Main layout: sidebar + content */}
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col lg:flex-row gap-8 lg:gap-10 relative">
          <Navbar />

          {/* Fixed sidebar (desktop only, centered card on mobile) */}
          <Sidebar />

          {/* Scrollable content area — extra bottom pad so the mobile bar never covers content */}
          <div className="flex-1 min-w-0 pb-28 lg:pb-0 pt-8 lg:pt-28">
            <MobilePageTransition>{children}</MobilePageTransition>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
