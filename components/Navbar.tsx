import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* Replace with your actual logo image */}
          <Image src="/logo.svg" alt="GreenSun Energy Logo" width={40} height={40} className="h-10 w-10" />
          <span className="text-2xl font-bold text-green-700">GreenSun Energy</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-green-700 transition-colors duration-300 font-medium">Features</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-green-700 transition-colors duration-300 font-medium">Testimonials</Link>
          <Link href="#contact" className="text-gray-600 hover:text-green-700 transition-colors duration-300 font-medium">Contact</Link>
        </div>
        <Link href="#contact" className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 font-semibold shadow-lg hidden md:block">
          Get a Free Quote
        </Link>
        {/* Mobile menu button (optional, for a simple landing page, often omitted) */}
        {/* <button className="md:hidden text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button> */}
      </div>
    </nav>
  );
}
