import React from 'react';
import { Globe, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-none mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Globe className="h-8 w-8 text-blue-400" /> */}
              <img src="/rsz_logo.png" alt="Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">SSS Soil Engineer's</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting global markets with premium products <br/> and exceptional service since 2016.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-blue-400 transition-colors">Products</button></li>
              <li><button onClick={() => setCurrentPage('certifications')} className="hover:text-blue-400 transition-colors">Certifications</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-blue-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Arma Mazeda Malik Tower, (5th Floor)</p>
                  <p>House no. kha-215, kha-215/1, Pragati Sharani,</p>
                  <p>Merul Badda, Dhaka, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +880 1716942018
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@ssssoilengineers.cloud
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SSS Soil Engineer's. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;