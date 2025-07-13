import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pictionary Word Generator - Free Random Words for Drawing Game',
  description: 'Generate random words for your Pictionary game instantly. Our free Pictionary word generator includes hundreds of words across different difficulty levels. Perfect for parties, family time, and group activities.',
  authors: [{ name: 'Pictionary Word Generator' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GQRLLDCXFC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GQRLLDCXFC');
          `}
        </Script>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
