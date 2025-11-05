// ImportsPage.tsx with Auto-Scrolling Hero (Slide Animation)
import React, { useState, useEffect } from 'react';
import { Plane, Package, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageProps } from '../types';

const ImportsPage: React.FC<PageProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const importImages = [
    {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
      title: "Global Sourcing Solutions",
      subtitle: "Quality products from worldwide suppliers"
    },
    {
      url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200",
      title: "Seamless Logistics",
      subtitle: "End-to-end import management"
    },
    {
      url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200",
      title: "Quality Assured",
      subtitle: "Rigorous quality checks and certifications"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
      title: "Fast Delivery",
      subtitle: "Efficient shipping and customs clearance"
    }
  ];

  // Auto-advance carousel with slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % importImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % importImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + importImages.length) % importImages.length);
  };

  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Import Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global sourcing solutions delivering quality products from worldwide suppliers
          </p>
        </div>

        {/* Auto-Scrolling Hero Section with Slide Animation */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-xl relative h-[500px] md:h-[600px]">
          {importImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in">
                      {image.title}
                    </h2>
                    <p className="text-xl md:text-2xl animate-slide-in-delay">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {importImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Import With Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Trusted suppliers across multiple continents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Logistics</h3>
              <p className="text-gray-600">Complete shipping and customs clearance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality checks and certifications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Efficient documentation and delivery</p>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Import Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medical & Healthcare</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Disposable medical items</li>
                <li>• Surgical instruments</li>
                <li>• Laboratory equipment</li>
                <li>• Pharmaceutical supplies</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Origins:</strong> Germany, Japan, South Korea, China
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Industrial Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Threads & cotton</li>
                <li>• Raw materials</li>
                <li>• Manufacturing components</li>
                <li>• Industrial chemicals</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Origins:</strong> China, Taiwan, Singapore
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Automotive Parts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bike accessories</li>
                <li>• OEM components</li>
                <li>• Spare parts</li>
                <li>• Maintenance supplies</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Origins:</strong> Various Global Sources
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Import Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: '1', title: 'Requirement Analysis', desc: 'Understanding your specific product needs and specifications' },
                { step: '2', title: 'Supplier Selection', desc: 'Identifying and vetting reliable international suppliers' },
                { step: '3', title: 'Negotiation', desc: 'Securing the best prices and terms on your behalf' },
                { step: '4', title: 'Documentation', desc: 'Handling all import licenses, permits, and paperwork' },
                { step: '5', title: 'Shipping & Customs', desc: 'Managing logistics and customs clearance' },
                { step: '6', title: 'Delivery', desc: 'Final delivery to your specified location' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Need to Import Products?</h3>
          <p className="text-xl mb-6">Let us handle the complexity of international sourcing</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Importing
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }

        .animate-slide-in-delay {
          animation: slide-in 0.8s ease-out 0.3s backwards;
        }
      `}</style>
    </div>
  );
};

export default ImportsPage;