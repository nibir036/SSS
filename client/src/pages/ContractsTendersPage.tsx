// ContractsTendersPage.tsx
import React from 'react';
import { FileText, CheckCircle, Award, TrendingUp, Truck, Settings, Search, Globe } from 'lucide-react';
import { PageProps } from '../types';

const ContractsTendersPage: React.FC<PageProps> = ({ setCurrentPage }) => {
  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contracts & Tenders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert contract management and tender bidding services for government and private sector projects
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-gray-700 leading-relaxed">
              With over a decade of experience in government and private sector contracts, SSS Soil Engineer's 
              provides comprehensive tender management services. We help businesses navigate complex procurement 
              processes and secure valuable contracts across multiple sectors.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Requirements</h3>
              <p className="text-gray-600">Tell us exactly what you need - specifications, quantity, quality standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Search</h3>
              <p className="text-gray-600">We leverage our worldwide network to find the perfect suppliers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Verification</h3>
              <p className="text-gray-600">Samples, testing, and certification to ensure quality meets your standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Complete logistics management from factory to your doorstep</p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Can Source</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <Search className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialized Equipment</h3>
              <p className="text-gray-700 mb-4">
                Industrial machinery, medical devices, laboratory equipment, and specialized tools 
                from leading manufacturers worldwide.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Manufacturing equipment</li>
                <li>• Medical diagnostic tools</li>
                <li>• Laboratory instruments</li>
                <li>• Agricultural machinery</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <Settings className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Components</h3>
              <p className="text-gray-700 mb-4">
                Tailor-made parts and components manufactured to your exact specifications 
                and quality requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• OEM parts with custom specs</li>
                <li>• Specialized raw materials</li>
                <li>• Modified industrial components</li>
                <li>• Branded merchandise</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bulk Orders</h3>
              <p className="text-gray-700 mb-4">
                Large volume procurement with negotiated pricing and consistent quality 
                for institutional and industrial clients.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Government contracts</li>
                <li>• Corporate supply chains</li>
                <li>• Wholesale distribution</li>
                <li>• Long-term agreements</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <Truck className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialty Items</h3>
              <p className="text-gray-700 mb-4">
                Hard-to-find products, discontinued items, region-specific goods, 
                and niche market products.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Rare materials</li>
                <li>• Specialty chemicals</li>
                <li>• Vintage parts</li>
                <li>• Regional exclusives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Customised Imports */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Benefits of Our Customised Service</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Access to Global Markets</h4>
              <p className="text-gray-600">
                Our network spans every major manufacturing hub worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Quality Assurance</h4>
              <p className="text-gray-600">
                Rigorous vetting and testing before shipment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Cost Optimization</h4>
              <p className="text-gray-600">
                Competitive pricing through bulk negotiation
              </p>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              'Manufacturing',
              'Healthcare',
              'Construction',
              'Agriculture',
              'Pharmaceuticals',
              'Education',
              'Hospitality',
              'Automotive',
              'Telecommunications',
              'Energy',
              'Food Processing',
              'Textiles'
            ].map((industry, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center hover:border-purple-600 hover:shadow-md transition-all">
                <p className="font-semibold text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Specialized Medical Equipment</h4>
              <p className="text-sm text-gray-600 mb-3">
                Sourced rare diagnostic machinery from Germany for a leading hospital
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Custom Industrial Parts</h4>
              <p className="text-sm text-gray-600 mb-3">
                Manufactured bespoke components for textile factory automation
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Bulk Raw Materials</h4>
              <p className="text-sm text-gray-600 mb-3">
                Secured long-term supply agreement for pharmaceutical ingredients
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Have a Unique Import Requirement?</h3>
          <p className="text-xl mb-6">Let's discuss how we can source exactly what you need</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};
              

export default ContractsTendersPage;