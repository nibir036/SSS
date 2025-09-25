import React, { useEffect } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  setCurrentPage 
}) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center p-4 z-50 ${
        isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isOpen 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button with hover animation */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200 group"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Product image with fade-in animation */}
          <div 
            className="h-64 bg-cover bg-center rounded-t-lg animate-fade-in" 
            style={{ backgroundImage: `url(${product.image})` }}
          >
          </div>

          {/* Product details with staggered animation */}
          <div className="p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                {product.category}
              </span>
              <span className="text-gray-500 text-sm">ID: {product.id}</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in" style={{ animationDelay: '200ms' }}>{product.name}</h2>
            
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {product.destinations && (
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Export Destinations</h3>
                <div className="flex flex-wrap gap-2">
                  {product.destinations.map((dest, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm hover:bg-green-200 transition-colors duration-200">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.origins && (
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Import Origins</h3>
                <div className="flex flex-wrap gap-2">
                  {product.origins.map((origin, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm hover:bg-purple-200 transition-colors duration-200">
                      {origin}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.specifications && (
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Quality:</span>
                    <span className="ml-2 text-gray-600">{product.specifications.quality}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Certifications:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {product.specifications.certifications.map((cert, index) => (
                        <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs hover:bg-yellow-200 transition-colors duration-200">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {product.specifications.packaging && (
                    <div>
                      <span className="font-medium text-gray-700">Packaging:</span>
                      <span className="ml-2 text-gray-600">{product.specifications.packaging}</span>
                    </div>
                  )}
                  
                  {product.specifications.warranty && (
                    <div>
                      <span className="font-medium text-gray-700">Warranty:</span>
                      <span className="ml-2 text-gray-600">{product.specifications.warranty}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action buttons with entrance animation */}
            <div className="flex gap-4 pt-4 border-t animate-fade-in" style={{ animationDelay: '600ms' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage('contact');
                  onClose();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Request Quote
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;