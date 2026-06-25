import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenSun Energy - Power Your Home with Solar',
  description: 'Harness the sun\u0027s potential with GreenSun Energy. Sustainable, affordable solar solutions for homes and businesses. Get a free quote today!',
  keywords: ['solar energy', 'renewable energy', 'solar panels', 'clean energy', 'sustainable living', 'green energy', 'home solar'],
  openGraph: {
    title: 'GreenSun Energy - Power Your Home with Solar',
    description: 'Harness the sun\u0027s potential with GreenSun Energy. Sustainable, affordable solar solutions for homes and businesses. Get a free quote today!',
    url: 'https://www.greensunenergy.com',
    siteName: 'GreenSun Energy',
    images: [
      {
        url: 'https://www.greensunenergy.com/og-image.jpg', // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'GreenSun Energy Solar Panels',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreenSun Energy - Power Your Home with Solar',
    description: 'Harness the sun\u0027s potential with GreenSun Energy. Sustainable, affordable solar solutions for homes and businesses. Get a free quote today!',
    creator: '@greensunenergy', // Replace with actual Twitter handle
    images: ['https://www.greensunenergy.com/twitter-image.jpg'], // Replace with actual Twitter image URL
  },
  canonical: 'https://www.greensunenergy.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
