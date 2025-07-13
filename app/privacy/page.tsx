import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Service - Pictionary Word Generator',
  description: 'Privacy Policy and Terms of Service for Pictionary Word Generator. Learn how we protect your privacy and the terms for using our free word generation tool.',
  keywords: 'privacy policy, terms of service, pictionary generator legal',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Word Generator
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy and trust are important to us
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Privacy Policy Section */}
          <section>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
              <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h3>
                  <p className="text-gray-700 mb-3">
                    Our Pictionary Word Generator is designed with privacy in mind. We collect minimal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>No Personal Data:</strong> We do not collect names, email addresses, or any personal information</li>
                    <li><strong>Usage Analytics:</strong> We may use Google Analytics to understand how our tool is used (anonymously)</li>
                    <li><strong>Technical Data:</strong> Basic technical information like browser type and device type for optimization</li>
                    <li><strong>No Account Required:</strong> Our service works without registration or login</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How We Use Information</h3>
                  <p className="text-gray-700 mb-3">
                    Any information we collect is used solely to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Improve the functionality and user experience of our word generator</li>
                    <li>Understand usage patterns to optimize performance</li>
                    <li>Ensure the security and stability of our service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Storage and Security</h3>
                  <p className="text-gray-700 mb-3">
                    We take data security seriously:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>All data is processed securely using industry-standard practices</li>
                    <li>We do not store personal information on our servers</li>
                    <li>Game data (generated words) is stored locally in your browser only</li>
                    <li>We do not share any data with third parties except as required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies and Local Storage</h3>
                  <p className="text-gray-700 mb-3">
                    Our website uses minimal cookies and local storage:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                    <li><strong>Analytics Cookies:</strong> Google Analytics for usage statistics (can be disabled)</li>
                    <li><strong>Local Storage:</strong> To remember your game preferences and avoid duplicate words</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h3>
                  <p className="text-gray-700 mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Use our service without providing any personal information</li>
                    <li>Clear your browser data at any time</li>
                    <li>Disable cookies in your browser settings</li>
                    <li>Contact us with any privacy concerns</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h2>
              <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Acceptance of Terms</h3>
                  <p className="text-gray-700">
                    By using our Pictionary Word Generator, you agree to these terms of service. If you do not agree with any part of these terms, please do not use our service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Description</h3>
                  <p className="text-gray-700 mb-3">
                    Our service provides:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Free random word generation for Pictionary and similar games</li>
                    <li>Three difficulty levels (easy, medium, hard)</li>
                    <li>Duplicate word prevention during game sessions</li>
                    <li>Mobile-responsive design for all devices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Acceptable Use</h3>
                  <p className="text-gray-700 mb-3">
                    You agree to use our service only for lawful purposes and in accordance with these terms. You must not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Attempt to damage, disable, or impair the service</li>
                    <li>Use the service for any illegal or unauthorized purpose</li>
                    <li>Interfere with other users&apos; enjoyment of the service</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Intellectual Property</h3>
                  <p className="text-gray-700">
                    The word database and software are provided for personal and educational use. The service is provided &quot;as is&quot; without warranties of any kind. We reserve the right to modify or discontinue the service at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-700">
                    Our service is provided free of charge for entertainment purposes. We are not liable for any damages arising from the use of our service. Use at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Changes to Terms</h3>
                  <p className="text-gray-700">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the service constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy or Terms of Service, please contact us through our website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Playing?</h2>
              <p className="text-lg mb-6">
                Now that you understand our commitment to your privacy, let&apos;s have some fun!
              </p>
              <Link 
                href="/" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Generate Your First Word
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}