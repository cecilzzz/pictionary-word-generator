import WordGenerator from '@/components/WordGenerator';
import SEOContent from '@/components/SEOContent';

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
      </div>
    </main>
  );
}
