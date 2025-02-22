import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import BackgroundEffect from '@/components/BackgroundEffect';
import CustomCursor from '@/components/CustomCursor';
import ResumeButton from '@/components/ResumeButton';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vanshshah.netlify.app'),
  title: 'Vansh Shah - Portfolio',
  description: 'Personal portfolio showcasing my work experience and projects in AI, web development and software engineering',
  keywords: ['Vansh Shah','web development', 'software engineer', 'portfolio', 'react', 'next.js'],
  authors: [{ name: 'Vansh Shah' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Vansh Shah - Portfolio',
    description: 'Personal portfolio showcasing my work experience and projects in AI, web development and software engineering',
    url: 'https://vanshshah.netlify.app',
    siteName: 'Vansh Shah Portfolio',
    locale: 'India',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} min-h-screen`}
        style={{ 
          background: 'transparent',
          margin: 0,
          padding: 0
        }}
      >
        <BackgroundEffect />
        <CustomCursor />
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
          <ResumeButton />
        </main>
      </body>
    </html>
  );
}