import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="text-primary-600 mb-4 text-5xl">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
  </div>
);

export default function Features() {
  const featuresData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Significant Savings',
      description: 'Reduce or eliminate your electricity bills and protect yourself from rising energy costs with a reliable solar system.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h3.75l2.168 1.884a2.25 2.25 0 001.14 0l2.168-1.884h3.75A2.25 2.25 0 0121 6v2.25m-18 0h18" />
        </svg>
      ),
      title: 'Increased Home Value',
      description: 'Homes with solar panels often sell faster and at a higher price, making solar a smart investment for your property.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.14.075-2.274.227-3.4.455m3.4-.455a2.25 2.25 0 004.5 0m-4.5 0c-1.14.075-2.274.227-3.4.455m3.4-.455a2.25 2.25 0 014.5 0M18.75 6.75h1.5a2.25 2.25 0 010 4.5h-1.5m-4.5-4.5H12m-4.5 4.5H4.5a2.25 2.25 0 010-4.5h1.5M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      title: 'Energy Independence',
      description: 'Generate your own power and reduce reliance on the grid, providing greater stability and control over your energy supply.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21v-4.5m0 0V12m0 0V5.25M12 12a2.25 2.25 0 00-2.25 2.25V18a2.25 2.25 0 002.25 2.25h.75m-4.5-5.625h1.5m-1.5 0h-1.5m1.5 0v-3.375C12 10.375 11.25 9.75 10.5 9.75H9.75a2.25 2.25 0 00-2.25 2.25v2.25m3-2.25h3.375M12 12a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-.75m-4.5-5.625h1.5m-1.5 0h-1.5m1.5 0v-3.375C12 10.375 12.75 9.75 13.5 9.75H14.25a2.25 2.25 0 012.25 2.25v2.25m-3-2.25h3.375M2.25 10.5H4.5a2.25 2.25 0 010 4.5H2.25m19.5-4.5H19.5a2.25 2.25 0 000 4.5h2.25m-2.25-4.5V9.75M4.5 9.75v2.25m-1.5-1.5h1.5m-1.5 0H2.25m19.5-4.5H19.5a2.25 2.25 0 000 4.5h2.25m-2.25-4.5V9.75M4.5 9.75v2.25m-1.5-1.5h1.5m-1.5 0H2.25m19.5-4.5H19.5a2.25 2.25 0 000 4.5h2.25m-2.25-4.5V9.75M4.5 9.75v2.25m-1.5-1.5h1.5m-1.5 0H2.25" />
        </svg>
      ),
      title: 'Environmental Impact',
      description: 'Contribute to a cleaner planet by significantly reducing your carbon footprint and supporting renewable energy sources.',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-poppins">
            Why Choose BrightFuture Solar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the core benefits of switching to solar power with BrightFuture. We make sustainable energy accessible and rewarding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
