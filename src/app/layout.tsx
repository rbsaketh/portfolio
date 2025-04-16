import { seoData } from '@/lib/content/portfolio';
import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';
import { Analytics } from "@vercel/analytics/react"

import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoData.title,
  authors: [
    {
      name: seoData.author,
    },
  ],
  description: seoData.description,
  keywords: seoData.keywords.join(','),
  metadataBase: new URL(seoData.url),
  alternates: {
    canonical: seoData.url,
  },
  openGraph: {
    type: 'website',
    url: seoData.url,
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    siteName: seoData.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    site: seoData.url,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: '/favicons/icon_120x120.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/icon_512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/icon_32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/rounded_icon_16x16.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/scripts/no-flash.js" async />
      </head>
      <body className={`text-text bg-bg ${fontVariables}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
