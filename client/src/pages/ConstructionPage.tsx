// ConstructionPage.tsx with Auto-Scrolling Hero
import React, { useState, useEffect } from 'react';
import { Hammer, HardHat, Building2, Ruler, CheckCircle, Award, TrendingUp } from 'lucide-react';
import { PageProps } from '../types';

const ConstructionPage: React.FC<PageProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const constructionImages = [
    {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200",
      title: "Building Excellence",
      subtitle: "Quality construction for lasting infrastructure"
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      title: "Engineering Innovation",
      subtitle: "Modern solutions for complex projects"
    },
    {
      url: "/construction/image1.jpg",
      title: "Infrastructure Development",
      subtitle: "Fuel Treatment Plant"
    },
    {
      url: "/construction/image2.jpg",
      title: "Infrastructure Development",
      subtitle: "Tank Area"
    },
    {
      url: "/construction/image3.jpg",
      title: "Infrastructure Development",
      subtitle: "Mosque"
    },
    {
      url: "/construction/image4.jpg",
      title: "Infrastructure Development",
      subtitle: "Jetty Construction"
    },
    {
      url: "/construction/image5.jpg",
      title: "Civil Services",
      subtitle: "Road Construction"
    },
    {
      url: "/construction/image6.jpg",
      title: "Infrastructure Development",
      subtitle: "Substation Construction"
    },
    {
      url: "https://images.unsplash.com/photo-1590496793907-4d2b2b6c5fba?w=1200",
      title: "Sustainable Building",
      subtitle: "Eco-friendly construction practices"
    }
  ];

  // Auto-advance carousel with fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % constructionImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Construction Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building tomorrow's infrastructure with quality, precision, and expertise
          </p>
        </div>

        {/* Auto-Scrolling Hero Section with Fade Animation */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-xl relative h-[500px] md:h-[900px]">
          {constructionImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                      {image.title}
                    </h2>
                    <p className="text-xl md:text-2xl animate-fade-in-up-delay">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {constructionImages.map((_, index) => (
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

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Construction Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Civil Engineering</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Road and highway construction</li>
                <li>• Bridge and flyover projects</li>
                <li>• Drainage and sewerage systems</li>
                <li>• Water supply infrastructure</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <HardHat className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Building Construction</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Residential complexes</li>
                <li>• Commercial buildings</li>
                <li>• Industrial facilities</li>
                <li>• Institutional structures</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Hammer className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Renovation & Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Building renovations</li>
                <li>• Structural repairs</li>
                <li>• Facility upgrades</li>
                <li>• Preventive maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Ruler className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Site supervision</li>
                <li>• Quality control</li>
                <li>• Timeline management</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Certified Engineers</h4>
              <p className="text-gray-600">Licensed professionals with extensive experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Assured</h4>
              <p className="text-gray-600">ISO certified processes and materials</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">On-Time Delivery</h4>
              <p className="text-gray-600">Proven track record of timely completion</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Start Your Construction Project</h3>
          <p className="text-xl mb-6">Get a free consultation and project estimate today</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.3s backwards;
        }
      `}</style>
    </div>
  );
};

export default ConstructionPage;