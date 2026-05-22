import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const GTM_ID = 'GTM-M49KH6JB'

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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
