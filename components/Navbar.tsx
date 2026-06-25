'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.svg" alt="BrightFuture Solar Logo" width={160} height={40} className="h-10 w-auto" priority />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link href="#contact" className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#hero" onClick={() => setIsOpen(false)} className="text-gray-700 hover:bg-primary-50 hover:text-primary-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Home
          </Link>
          <Link href="#features" onClick={() => setIsOpen(false)} className="text-gray-700 hover:bg-primary-50 hover:text-primary-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Features
          </Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-700 hover:bg-primary-50 hover:text-primary-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:bg-primary-50 hover:text-primary-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Contact
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
