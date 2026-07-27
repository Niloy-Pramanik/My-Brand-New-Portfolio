import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import { Sidebar } from '@/components/site/Sidebar';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
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
  metadataBase: new URL('https://my-brand-new-portfolio.vercel.app'),
  title: 'Niloy Pramanik — Full-Stack Developer & AI Engineer',
  description:
    'Portfolio of Niloy Pramanik, a Computer Science student building full-stack web applications and exploring AI/ML, computer vision, and AI security.',
  openGraph: {
    title: 'Niloy Pramanik — Full-Stack Developer & AI Engineer',
    description:
      'Portfolio of Niloy Pramanik, a Computer Science student building full-stack web applications and exploring AI/ML, computer vision, and AI security.',
    url: 'https://my-brand-new-portfolio.vercel.app',
    siteName: 'Niloy Pramanik',
    images: ['/images/portfolio_demo.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niloy Pramanik — Full-Stack Developer & AI Engineer',
    description:
      'Portfolio of Niloy Pramanik, a Computer Science student building full-stack web applications and exploring AI/ML, computer vision, and AI security.',
    images: ['/images/portfolio_demo.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-sawad-bg text-sawad-text font-sans antialiased">
        {/* Main layout: sidebar + content */}
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col lg:flex-row gap-8 lg:gap-10 relative">
          <Navbar />

          {/* Fixed sidebar (desktop only, centered card on mobile) */}
          <Sidebar />

          {/* Scrollable content area */}
          <div className="flex-1 min-w-0 pb-20 lg:pb-0 pt-8 lg:pt-28">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
