import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pictionary Word Generator - Free Random Words for Drawing Game',
  description: 'Generate random words for your Pictionary game instantly. Our free Pictionary word generator includes hundreds of words across different difficulty levels. Perfect for parties, family time, and group activities.',
  keywords: 'pictionary, word generator, drawing game, party games, family games, random words',
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
      <body className="font-sans">{children}</body>
    </html>
  )
}
