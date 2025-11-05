import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (projectsRef.current && !projectsRef.current.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceItems = [
    { id: 'contracts-tenders', label: 'Contracts / Tenders' },
    { id: 'construction', label: 'Construction' },
    { id: 'imports', label: 'Imports' },
    { id: 'exports', label: 'Exports' },
    { id: 'customised-imports', label: 'Customised Imports' }
  ];

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage(serviceId);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setIsMenuOpen(false);
  };

  const handleProjectClick = (projectId: string) => {
    setCurrentPage(projectId);
    setProjectsOpen(false);
    setMobileProjectsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-none mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/rsz_logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-gray-800">SSS Soil Engineer's</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => setCurrentPage('home')}
              className={`capitalize font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setCurrentPage('about')}
              className={`capitalize font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </button>

            {/* Our Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  ['contracts-tenders', 'construction', 'imports', 'exports', 'customised-imports'].includes(currentPage)
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleServiceClick(item.id)}
                      className={`w-full text-left px-4 py-2 transition-colors ${
                        currentPage === item.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Our Projects Dropdown */}
            <div className="relative" ref={projectsRef}>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  currentPage === 'projects'
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>Our Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {projectsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                  <div className="px-4 py-3 text-gray-500 text-sm italic">
                    Coming soon...
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setCurrentPage('certifications')}
              className={`capitalize font-medium transition-colors ${
                currentPage === 'certifications' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Certifications
            </button>

            <button
              onClick={() => setCurrentPage('contact')}
              className={`capitalize font-medium transition-colors ${
                currentPage === 'contact' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
            >
              Home
            </button>

            <button
              onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
            >
              About
            </button>

            {/* Mobile Our Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleServiceClick(item.id)}
                      className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Our Projects */}
            <div>
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                <span>Our Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProjectsOpen && (
                <div className="pl-4">
                  <div className="py-2 text-sm text-gray-500 italic">
                    Coming soon...
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => { setCurrentPage('certifications'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
            >
              Certifications
            </button>

            <button
              onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
              className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;