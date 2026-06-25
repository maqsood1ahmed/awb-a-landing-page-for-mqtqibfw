'use client';

import React, { useState, FormEvent } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // In a real application, you would send this data to a backend API.
    // For this example, we'll simulate an API call.
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate a successful submission
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-green-700 to-green-600 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Get Your Free Solar Quote Today
        </h2>
        <p className="text-lg md:text-xl text-center opacity-90 max-w-3xl mx-auto mb-12">
          Ready to start saving and go green? Fill out the form below, and our solar experts will contact you for a personalized consultation.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl shadow-2xl text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
              placeholder="(123) 456-7890"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your home and energy needs
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-y"
              placeholder="e.g., \"I have a 2-story house in sunny California and want to reduce my electricity bill.\""
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white px-6 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-colors duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Request Free Consultation'}
          </button>

          {status === 'success' && (
            <p className="mt-6 text-center text-green-700 font-semibold">Thank you for your inquiry! We will be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p className="mt-6 text-center text-red-600 font-semibold">There was an error submitting your request. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
