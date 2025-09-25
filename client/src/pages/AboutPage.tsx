import React from 'react';
import { CheckCircle, Star, Users, Globe } from 'lucide-react';
import { PageProps } from '../types';

const AboutPage: React.FC<PageProps> = ({ setCurrentPage }) => {
  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About SSS Soil Engineer's</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering international trade since 2016, connecting businesses across continents 
            with premium products and exceptional service.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2016, SSS Soil Engineer's began as a vision to bridge markets and cultures 
                through ethical and sustainable trade practices. From our humble beginnings in Dhaka, 
                we've grown to become a trusted name in international commerce.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous growth, strategic partnerships, and an 
                unwavering commitment to quality. Today, we serve over 500 clients across 50+ countries, 
                facilitating millions of dollars in trade annually.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg bg-cover bg-center"
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600)' }}>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To facilitate seamless international trade by connecting quality suppliers with 
              discerning buyers worldwide, while maintaining the highest standards of integrity, 
              sustainability, and customer service.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading global trade facilitator, recognized for our innovation, 
              ethical practices, and contribution to sustainable economic development across 
              emerging and developed markets.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: "Integrity", desc: "Honest and transparent business practices" },
              { icon: Star, title: "Excellence", desc: "Commitment to the highest quality standards" },
              { icon: Users, title: "Partnership", desc: "Building lasting relationships with all stakeholders" },
              { icon: Globe, title: "Sustainability", desc: "Responsible trade for a better tomorrow" }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <value.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;