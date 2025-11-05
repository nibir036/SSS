// ExportsPage.tsx with Auto-Scrolling Hero + Animated Product Images (Fixed)
import React, { useState, useEffect } from 'react';
import { Ship, Globe, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { PageProps } from '../types';

const ExportsPage: React.FC<PageProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [seafoodImageIndex, setSeafoodImageIndex] = useState(0);
  const [garmentsImageIndex, setGarmentsImageIndex] = useState(0);
  const [leatherImageIndex, setLeatherImageIndex] = useState(0);
  const [homeImageIndex, setHomeImageIndex] = useState(0);

  // Smooth scroll handler for navigation
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const exportImages = [
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
      title: "Global Reach, Local Quality",
      subtitle: "Exporting to 50+ countries worldwide"
    },
    {
      url: "/fresh-marine-products.jpg",
      title: "Premium Seafood",
      subtitle: "Fresh from Bangladesh waters to global tables"
    },
    {
      url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200",
      title: "Quality Garments",
      subtitle: "World-class textiles and fashion products"
    },
    {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
      title: "Trusted Export Partner",
      subtitle: "Your gateway to international markets"
    }
  ];

  // Product category images
  const seafoodImages = [
    "https://images.unsplash.com/photo-1710348586462-58659947dcc4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1674066621842-8c830e392618?w=800&h=600&fit=crop",
    "https://img.freepik.com/premium-photo/selective-focus-giant-mud-crab-market_1048944-12848290.jpg?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=800&h=600&fit=crop"
  ];

  const garmentsImages = [
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
    // "https://images.unsplash.com/photo-1558769132-cb1aea0b6e23?w=800&h=600&fit=crop"
  ];

  const leatherImages = [
    "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&h=600&fit=crop"
  ];

  const homeImages = [
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop",
    // "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
  ];

  // Auto-advance hero carousel with zoom effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % exportImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate product images with different intervals
  useEffect(() => {
    const seafoodTimer = setInterval(() => {
      setSeafoodImageIndex((prev) => (prev + 1) % seafoodImages.length);
    }, 4000);
    return () => clearInterval(seafoodTimer);
  }, []);

  useEffect(() => {
    const garmentsTimer = setInterval(() => {
      setGarmentsImageIndex((prev) => (prev + 1) % garmentsImages.length);
    }, 4500);
    return () => clearInterval(garmentsTimer);
  }, []);

  useEffect(() => {
    const leatherTimer = setInterval(() => {
      setLeatherImageIndex((prev) => (prev + 1) % leatherImages.length);
    }, 5000);
    return () => clearInterval(leatherTimer);
  }, []);

  useEffect(() => {
    const homeTimer = setInterval(() => {
      setHomeImageIndex((prev) => (prev + 1) % homeImages.length);
    }, 5500);
    return () => clearInterval(homeTimer);
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Export Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taking Bangladesh's finest products to global markets with excellence
          </p>
        </div>

        {/* Auto-Scrolling Hero Section with Zoom Animation */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-xl relative h-[500px] md:h-[800px]">
          {exportImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transform transition-transform duration-[6000ms]"
                style={{ 
                  backgroundImage: `url(${image.url})`,
                  transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-zoom-in">
                      {image.title}
                    </h2>
                    <p className="text-xl md:text-2xl animate-zoom-in-delay">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {exportImages.map((_, index) => (
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

        {/* Export Categories with Side Index */}
        <div className="mb-16 relative">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Export</h2>
          
          <div className="flex gap-8">
            {/* Side Index Bar */}
            <div className="hidden lg:block sticky top-24 h-fit">
              <div className="bg-white shadow-lg rounded-lg p-4 w-48">
                <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase">Quick Navigate</h3>
                <nav className="space-y-2">
                  {['Seafood', 'Garments', 'Leather Products', 'Home Products'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                      className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Products Content with Animated Images */}
            <div className="flex-1 space-y-12">
              {/* Seafood - Fade Animation */}
              <div id="seafood" className="bg-blue-50 rounded-lg overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <div className="w-full h-full relative overflow-hidden">
                      {seafoodImages.map((img, index) => (
                        <div 
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === seafoodImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <img 
                            src={img}
                            alt={`Seafood ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Seafood</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Bangladesh is renowned for its premium quality seafood exports, with our coastal waters 
                      providing some of the finest marine products in the region. We specialize in exporting 
                      premium shrimps that are prized in international markets for their exceptional taste and 
                      quality. Our product range includes fresh crabs harvested from pristine waters, various 
                      species of fish including eels, and a diverse selection of other seafood delicacies. 
                      Each product undergoes rigorous quality control to ensure it meets international food 
                      safety standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Garments - Slide Animation */}
              <div id="garments" className="bg-green-50 rounded-lg overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <div className="w-full h-full relative overflow-hidden">
                      {garmentsImages.map((img, index) => (
                        <div 
                          key={index}
                          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                            index === garmentsImageIndex 
                              ? 'translate-x-0' 
                              : index < garmentsImageIndex 
                                ? '-translate-x-full' 
                                : 'translate-x-full'
                          }`}
                        >
                          <img 
                            src={img}
                            alt={`Garments ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Garments</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The garment industry is one of Bangladesh's strongest export sectors, and we take pride 
                      in offering world-class textile and fashion products to international buyers. Our ready-made 
                      garments range from casual wear to formal attire, all manufactured with precision and 
                      attention to detail. We work with premium textiles sourced from trusted suppliers, ensuring 
                      that every piece meets the highest quality standards. Our collection includes a wide variety 
                      of accessories that complement our garment line.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leather Products - Scale Animation */}
              <div id="leather-products" className="bg-purple-50 rounded-lg overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <div className="w-full h-full relative overflow-hidden">
                      {leatherImages.map((img, index) => (
                        <div 
                          key={index}
                          className={`absolute inset-0 transition-all duration-1000 ${
                            index === leatherImageIndex 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-110'
                          }`}
                        >
                          <img 
                            src={img}
                            alt={`Leather ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Leather Products</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our leather products showcase the finest craftsmanship and quality materials sourced from 
                      ethical suppliers. We export a comprehensive range of leather goods including premium quality 
                      footwear designed for comfort and durability, stylish bags and accessories that blend 
                      functionality with fashion, and custom items tailored to meet specific client requirements. 
                      Each leather product is crafted with meticulous attention to detail, from the selection of 
                      raw materials to the final finishing touches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Home Products - Blur Transition */}
              <div id="home-products" className="bg-orange-50 rounded-lg overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <div className="w-full h-full relative overflow-hidden">
                      {homeImages.map((img, index) => (
                        <div 
                          key={index}
                          className={`absolute inset-0 transition-all duration-1000 ${
                            index === homeImageIndex 
                              ? 'opacity-100 blur-0' 
                              : 'opacity-0 blur-sm'
                          }`}
                        >
                          <img 
                            src={img}
                            alt={`Home Products ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Home Products</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our home products division offers a curated selection of items that bring elegance and 
                      functionality to living spaces around the world. We export high-quality crockeries that 
                      combine aesthetic appeal with practical utility, perfect for both everyday use and special 
                      occasions. Our decorative items range from contemporary pieces to traditional designs, 
                      each carefully selected to add character to any home. We take special pride in our 
                      handicrafts, which showcase the rich cultural heritage and skilled artistry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Export With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Ship className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Logistics Expertise</h3>
              <p className="text-gray-600">
                Comprehensive shipping solutions including freight forwarding, 
                cargo insurance, and tracking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Quality Certification</h3>
              <p className="text-gray-600">
                All products meet international standards with proper certifications 
                from relevant authorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Market Access</h3>
              <p className="text-gray-600">
                Established networks and relationships in key international markets 
                across all continents.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Export Certifications</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              'ISO Standards',
              'Ministry of Fisheries Approved',
              'Export Authorization',
              'Quality Assurance Certified',
              'Halal Certification',
              'Food Safety Standards'
            ].map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border-2 border-blue-200">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Export Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Countries Served</p>
            </div>
            <div>
              <Globe className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Active Clients</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-blue-100">Quality Guaranteed</p>
            </div>
            <div>
              <Ship className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-blue-100">Shipments Annually</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Export Globally?</h3>
          <p className="text-xl mb-6">Partner with us to reach international markets</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

      <style>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-in {
          animation: zoom-in 1s ease-out;
        }

        .animate-zoom-in-delay {
          animation: zoom-in 1s ease-out 0.3s backwards;
        }
      `}</style>
    </div>
  );
};

export default ExportsPage;