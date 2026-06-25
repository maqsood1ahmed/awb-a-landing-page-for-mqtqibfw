import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gray-900 text-white overflow-hidden py-24 sm:py-32 lg:py-40">
      <Image
        src="/hero-solar.webp" // Replace with your actual hero image path
        alt="Solar panels on a modern house with a bright sky"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="absolute inset-0 z-0 opacity-40"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-poppins">
          Power Your Future with BrightFuture Solar
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Harness the abundant energy of the sun. We provide sustainable, cost-effective solar solutions for homes and businesses, ensuring a brighter, greener tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105">
            Get a Free Quote
          </Link>
          <Link href="#features" className="inline-flex items-center justify-center px-8 py-4 border border-2 border-white text-base font-medium rounded-md shadow-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 transform hover:scale-105">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
