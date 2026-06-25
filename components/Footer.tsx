import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 md:py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Link href="/" className="text-3xl font-bold text-green-500 hover:text-green-400 transition-colors duration-300">
            GreenSun Energy
          </Link>
          <p className="mt-4 text-md max-w-2xl mx-auto leading-relaxed">
            Harnessing the power of the sun for a brighter, sustainable future. Providing innovative solar solutions for homes and businesses across the nation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-lg font-medium">
          <Link href="#features" className="hover:text-white transition-colors duration-300">Features</Link>
          <Link href="#testimonials" className="hover:text-white transition-colors duration-300">Testimonials</Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} GreenSun Energy. All rights reserved.</p>
          <p className="text-sm mt-2">
            123 Solar Drive, Green City, CA 90210 | Phone: (800) 555-SOLAR | Email: info@greensunenergy.com
          </p>
        </div>
      </div>
    </footer>
  );
}
