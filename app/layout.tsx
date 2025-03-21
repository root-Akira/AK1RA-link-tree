import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "AK1RA | Sunny Singh - Web3 Enthusiast & Blockchain Event Manager",
  description: "Welcome to AK1RA digital space! Web3 Enthusiast, Linux Enthusiast, Blockchain Event Manager, Discord Server Designer, and Social Media Manager. Founding Member of @campustocrypto.",
  keywords: "AK1RA, Sunny Singh, Web3, Blockchain, Linux, Discord, Social Media, Event Manager, campustocrypto",
  authors: [{ name: "Sunny Singh", url: "https://github.com/root-Akira" }],
  creator: "Sunny Singh",
  publisher: "AK1RA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akira-link-tree.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akira-link-tree.vercel.app',
    siteName: 'AK1RA Digital Space',
    title: 'AK1RA | Sunny Singh - Web3 Enthusiast & Blockchain Event Manager',
    description: 'Welcome to AK1RA digital space! Web3 Enthusiast, Linux Enthusiast, Blockchain Event Manager, Discord Server Designer, and Social Media Manager.',
    images: [
      {
        url: '/myAvatar.png',
        width: 800,
        height: 800,
        alt: 'AK1RA Profile Picture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AK1RA | Sunny Singh - Web3 Enthusiast & Blockchain Event Manager',
    description: 'Welcome to AK1RA digital space! Web3 Enthusiast, Linux Enthusiast, Blockchain Event Manager, Discord Server Designer, and Social Media Manager.',
    creator: '@with_AK1RA',
    images: ['/myAvatar.png'],
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
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
    },
  },
  generator: 'Next.js',
  applicationName: 'AK1RA Digital Space',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google site verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
