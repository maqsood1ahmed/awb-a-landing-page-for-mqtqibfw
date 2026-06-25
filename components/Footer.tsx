import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo-white.svg" alt="BrightFuture Solar Logo" width={180} height={45} className="h-11 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering homes and businesses with clean, sustainable solar energy solutions. Join us in building a brighter future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary-400 transition-colors text-sm">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary-400 transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-400 transition-colors text-sm">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+1-800-555-0199" className="hover:text-primary-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.106l-1.412-.353a1.125 1.125 0 01-.822-.977V3.375c0-.516.351-.966.852-1.106l1.412-.353A1.125 1.125 0 0121.75 0h-2.25c-8.284 0-15 6.716-15 15v2.25a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  (800) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:info@brightfuturesolar.com" className="hover:text-primary-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v1.076a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 01-1.591.659h-1.076M21.75 9a2.25 2.25 0 00-2.25-2.25h-6a2.25 2.25 0 00-2.25 2.25m9 0V3.75c0-.621-.504-1.125-1.125-1.125H12.75A2.25 2.25 0 0010.5 4.875v3.375m7.5 0H12M9 6v3.75m0 0H3.75A2.25 2.25 0 001.5 11.25v6.525a2.25 2.25 0 00.659 1.591l5.432 5.432c.386.386.891.609 1.412.609h1.076M9 6h.008v.008H9V6z" />
                  </svg>
                  info@brightfuturesolar.com
                </a>
              </li>
              <li>
                <p className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  123 Solar Drive, Green City, CA 90210
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} BrightFuture Solar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
