import React from 'react';
import { Ship, Plane, ArrowRight } from 'lucide-react';
import { ProductPageProps } from '../types';

const ProductsPage: React.FC<ProductPageProps> = ({ 
  setCurrentPage, 
  productsData, 
  loading, 
  openModal 
}) => {
  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Premium products connecting global markets with local excellence
          </p>
          <p className="text-sm text-gray-500 mt-2">Click on any product to view detailed information</p>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading products...</p>
          </div>
        )}

        {/* Export Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Ship className="w-8 h-8 text-blue-600 mr-3" />
            Export Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productsData.exports.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => openModal(product)}
              >
                <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                     style={{ backgroundImage: `url(${product.image})` }}>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  {product.destinations && (
                    <div className="text-sm text-gray-500">
                      <strong>Destinations:</strong> {product.destinations.join(", ")}
                    </div>
                  )}
                  <div className="mt-3 text-xs text-blue-600 font-medium">
                    Click for details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Import Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Plane className="w-8 h-8 text-green-600 mr-3" />
            Import Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productsData.imports.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => openModal(product)}
              >
                <div className="h-100 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                     style={{ backgroundImage: `url(${product.image})` }}>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  {product.origins && (
                    <div className="text-sm text-gray-500">
                      <strong>Origins:</strong> {product.origins.join(", ")}
                    </div>
                  )}
                  <div className="mt-3 text-xs text-green-600 font-medium">
                    Click for details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Looking for Something Specific?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team can source almost any product globally. 
            Contact us for custom requirements.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;