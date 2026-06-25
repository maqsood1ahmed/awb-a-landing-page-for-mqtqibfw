import { Lightbulb, DollarSign, Home, Leaf } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center border border-gray-100 transform hover:-translate-y-2">
    <div className="flex justify-center mb-6">
      <Icon className="h-16 w-16 text-green-600" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: DollarSign,
      title: 'Significant Savings',
      description: 'Reduce your monthly electricity bills by up to 90%. Solar energy offers long-term financial benefits and protection against rising utility costs.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Living',
      description: 'Lower your carbon footprint and contribute to a healthier planet. Embrace clean, renewable energy and make a positive environmental impact.',
    },
    {
      icon: Home,
      title: 'Increased Home Value',
      description: 'Installing solar panels can significantly boost your property value. Homes with solar systems often sell faster and for a higher price.',
    },
    {
      icon: Lightbulb,
      title: 'Energy Independence',
      description: 'Generate your own power and gain freedom from grid reliance. Enjoy reliable electricity even during outages and peak demand periods.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose Solar with GreenSun Energy?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Discover the unparalleled benefits of switching to solar power with our expert team and cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
