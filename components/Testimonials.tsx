import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, avatarSrc }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
    <div className="mb-4">
      <Image
        src={avatarSrc}
        alt={`Avatar of ${author}`}
        width={80}
        height={80}
        className="rounded-full object-cover border-4 border-primary-100"
      />
    </div>
    <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">"{quote}"</p>
    <h4 className="font-semibold text-gray-900 font-poppins">{author}</h4>
    <p className="text-sm text-gray-500">{title}</p>
  </div>
);

export default function Testimonials() {
  const testimonialsData = [
    {
      quote: 'Switching to BrightFuture Solar was the best decision for our home. Our energy bills plummeted, and the installation was seamless!',
      author: 'Sarah M.',
      title: 'Homeowner, San Diego',
      avatarSrc: '/avatar-sarah.webp', // Replace with actual image path
    },
    {
      quote: 'The team at BrightFuture Solar was incredibly professional and knowledgeable. They guided us through every step, and we\'re thrilled with our new system.',
      author: 'David R.',
      title: 'Small Business Owner, Austin',
      avatarSrc: '/avatar-david.webp', // Replace with actual image path
    },
    {
      quote: 'Not only am I saving money, but I feel great knowing I\'m contributing to a greener environment. Highly recommend BrightFuture Solar!',
      author: 'Jessica L.',
      title: 'Environmental Advocate, Seattle',
      avatarSrc: '/avatar-jessica.webp', // Replace with actual image path
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-poppins">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear directly from homeowners and businesses who have transformed their energy consumption with BrightFuture Solar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
