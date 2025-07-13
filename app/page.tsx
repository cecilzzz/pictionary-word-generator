import WordGenerator from '@/components/WordGenerator';
import SEOContent from '@/components/SEOContent';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Pictionary Word Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate random words for your Pictionary game instantly
          </p>
        </div>

        {/* Tool Section */}
        <div className="mb-16">
          <WordGenerator />
        </div>

        {/* SEO Content Section */}
        <SEOContent />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600 text-sm">
            <div className="mb-4">
              <Link href="/about" className="hover:text-blue-600 transition-colors mr-6">
                About
              </Link>
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy & Terms
              </Link>
            </div>
            <p>© {new Date().getFullYear()} Pictionary Word Generator. All rights reserved.</p>
            <p className="mt-2">Free word generator for Pictionary, Charades, and drawing games.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
