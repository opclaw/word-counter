import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://word-counter.vercel.app'),
  alternates: {
    canonical: 'https://word-counter.vercel.app',
  },
  title: 'Word Counter — Count Words, Characters, Lines | Free Tool',
  description: 'Count words, characters, sentences, and paragraphs in your text. Free online word counter tool.',
  keywords: ['word counter', 'character counter', 'count words', 'text analyzer', 'word count'],
  authors: [{ name: 'SmartOK Tools' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://word-counter.vercel.app',
    siteName: 'Word Counter',
    title: 'Word Counter — Count Words, Characters, Lines',
    description: 'Count words, characters, sentences, and paragraphs.',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Word Counter',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Any',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              featureList: 'Word count, Character count, Sentence count, Paragraph count, Line count',
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  )
}
