import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Pictionary Word Generator',
  description: 'Learn about our free Pictionary word generator tool. Discover how we help make your drawing games more fun with our carefully curated word database.',
  keywords: 'about pictionary generator, drawing game tool, word generator features',
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Word Generator
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Pictionary Word Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your go-to tool for making drawing games more exciting and spontaneous
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <section className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We believe that the best memories are made when people come together to play, laugh, and create. Our Pictionary Word Generator was born from a simple idea: make it easier for everyone to enjoy one of the world&apos;s most beloved drawing games.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you&apos;re planning a family game night, organizing a party, or looking for a fun team-building activity, our tool provides instant access to hundreds of carefully selected words that will keep your games fresh and exciting.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What Makes Us Special</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Instant Generation</h3>
                      <p className="text-gray-600">No waiting, no preparation. Get random words instantly with just one click.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Three Difficulty Levels</h3>
                      <p className="text-gray-600">Easy words for kids, medium for families, and hard for experienced players.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Completely Free</h3>
                      <p className="text-gray-600">No registration, no hidden fees. Just pure fun for everyone.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Mobile Friendly</h3>
                      <p className="text-gray-600">Works perfectly on phones, tablets, and computers. Play anywhere!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Choose Difficulty</h3>
                  <p className="text-gray-600">Select easy, medium, or hard based on your group&apos;s skill level.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Generate Word</h3>
                  <p className="text-gray-600">Click the button to get a random word instantly.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Start Drawing</h3>
                  <p className="text-gray-600">Draw the word and let the fun begin!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
              <p className="text-lg mb-6">
                Join thousands of players who are already using our word generator to make their games more exciting!
              </p>
              <Link 
                href="/" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start Generating Words
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 