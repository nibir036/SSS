import React from 'react';
import { Globe, Award, Users, TrendingUp, Ship, Plane, Truck, Construction } from 'lucide-react';
import Carousel from '../components/Carousel';
import { HomePageProps } from '../types';

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel setCurrentPage={setCurrentPage} />

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-none mx-auto px-4 xl:px-8 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            <div className="transform hover:scale-105 transition-transform">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Certifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="py-16 bg-white">
        <div className="max-w-none mx-auto px-4 xl:px-8 2xl:px-16">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">CEO's Message</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 bg-cover bg-center"
                     style={{ backgroundImage: 'url(/ceo.jpg)' }}>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "At SSS Soil Engineer's, we believe in building bridges between nations through commerce. 
                    Our commitment to quality, integrity, and sustainable business practices has made us 
                    a trusted partner in the global marketplace. We don't just trade products; we foster 
                    relationships that create lasting value for all stakeholders."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">Md Ayen Uddin</p>
                    <p className="text-gray-600">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-none mx-auto px-4 xl:px-8 2xl:px-16">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive trade solutions for global markets</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Ship className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Export Services</h3>
              <p className="text-gray-600">Premium products to global markets with full logistics support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Plane className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Import Solutions</h3>
              <p className="text-gray-600">Quality goods from worldwide suppliers with customs clearance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Truck className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Logistics</h3>
              <p className="text-gray-600">End-to-end supply management and distribution</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Construction className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contractor</h3>
              <p className="text-gray-600">Contract based construction solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;