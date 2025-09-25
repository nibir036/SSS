import React from 'react';
import { Globe } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen
}) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-none mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/rsz_logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-gray-800">SSS Soil Engineer's</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'products', 'certifications', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize font-medium transition-colors ${
                  currentPage === page 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {page === 'contact' ? 'Contact Us' : page}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-600 transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {['home', 'about', 'products', 'certifications', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); setIsMenuOpen(false); }}
                className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
              >
                {page === 'contact' ? 'Contact Us' : page}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;