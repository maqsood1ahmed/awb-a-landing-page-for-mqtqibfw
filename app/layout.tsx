import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.solarenergyco.com'),
  title: 'BrightFuture Solar - Sustainable Energy Solutions for Your Home & Business',
  description: 'BrightFuture Solar provides leading solar energy solutions for homes and businesses. Save money, reduce your carbon footprint, and achieve energy independence with our expert installations and premium solar panels.',
  keywords: ['solar energy', 'solar panels', 'renewable energy', 'sustainable energy', 'solar installation', 'home solar', 'business solar', 'clean energy', 'solar solutions'],
  openGraph: {
    title: 'BrightFuture Solar - Sustainable Energy Solutions',
    description: 'Harness the power of the sun with BrightFuture Solar. Expert installation, significant savings, and a greener future.',
    url: 'https://www.solarenergyco.com',
    siteName: 'BrightFuture Solar',
    images: [
      {
        url: 'https://www.solarenergyco.com/og-image.jpg', // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'BrightFuture Solar Panels on a Rooftop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightFuture Solar - Sustainable Energy Solutions',
    description: 'Harness the power of the sun with BrightFuture Solar. Expert installation, significant savings, and a greener future.',
    creator: '@BrightFutureSolar', // Replace with actual Twitter handle
    images: ['https://www.solarenergyco.com/twitter-image.jpg'], // Replace with actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  canonical: 'https://www.solarenergyco.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased text-gray-800 bg-gray-50 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
