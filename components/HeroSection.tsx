import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-32 md:py-48 flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: 'url(\'/solar-hero-bg.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for better text readability */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Power Your Home with Clean Solar Energy
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up animation-delay-300">
          Harness the sun&apos;s potential for a sustainable future, significant savings, and energy independence. Join the green revolution today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-600">
          <Link
            href="#contact"
            className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 shadow-xl transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#features"
            className="border border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
