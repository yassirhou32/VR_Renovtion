import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vr-harmonie.fr'),
  title: 'VR Harmonie - Rénovation de toiture et façades',
  description: 'VR Harmonie : Artisans de père en fils depuis 25 ans. Expertise en toiture, façades et patrimoine en Indre-et-Loire et Loir-et-Cher.',
  generator: 'v0.app',
  openGraph: {
    title: 'VR Harmonie - Rénovation de toiture et façades',
    description:
      'VR Harmonie : Artisans de père en fils depuis 25 ans. Expertise en toiture, façades et patrimoine en Indre-et-Loire et Loir-et-Cher.',
    url: '/',
    siteName: 'VR Harmonie',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/DSC08771.jpg',
        alt: 'Rénovation de toiture et façades - VR Harmonie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VR Harmonie - Rénovation de toiture et façades',
    description:
      'VR Harmonie : Artisans de père en fils depuis 25 ans. Expertise en toiture, façades et patrimoine en Indre-et-Loire et Loir-et-Cher.',
    images: ['/images/DSC08771.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
