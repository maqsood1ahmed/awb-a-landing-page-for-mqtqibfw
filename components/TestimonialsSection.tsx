import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, city, rating }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
    <div className="flex items-center mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} />
      ))}
    </div>
    <p className="text-gray-700 text-lg italic mb-6 flex-grow">"{quote}"</p>
    <div className="text-gray-900 font-semibold text-xl">{name}</div>
    <div className="text-gray-500 text-sm">{city}</div>
  </div>
);

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Switching to GreenSun Energy was the best decision we made. Our electricity bills are practically non-existent, and the installation process was seamless!',
      name: 'Sarah J.',
      city: 'San Francisco, CA',
      rating: 5,
    },
    {
      quote: 'The team at GreenSun Energy was incredibly professional and knowledgeable. They guided us through every step, and now we\u0027re proud to power our home with clean energy.',
      name: 'Mark T.',
      city: 'Austin, TX',
      rating: 5,
    },
    {
      quote: 'I was hesitant at first, but GreenSun Energy made the entire process easy and understandable. My home value increased, and I feel good about my environmental impact.',
      name: 'Emily R.',
      city: 'Denver, CO',
      rating: 4,
    },
    {
      quote: 'Excellent customer service and top-notch equipment. Our solar system has been performing perfectly, and we\u0027ve seen significant savings. Highly recommend!',
      name: 'David L.',
      city: 'Portland, OR',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Hear directly from homeowners who have transformed their energy consumption and embraced a sustainable future with GreenSun Energy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
