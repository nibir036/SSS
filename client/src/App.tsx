import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { Product, ProductsData } from './types';
import { fallbackProductsData } from './data/fallbackData';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsData, setProductsData] = useState<ProductsData>(fallbackProductsData);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Fetch products from API with improved error handling
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log('📄 Attempting to fetch from backend...');
        
        const response = await fetch('http://localhost:5000/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('📡 Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('📦 Received data:', data);
          
          if (data.success && data.data) {
            console.log('✅ Successfully loaded from backend');
            setProductsData(data.data);
          } else {
            throw new Error('Invalid response format');
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('❌ Backend fetch failed:', error);
        console.log('📄 Using fallback data...');
        // Keep using fallback data
        setProductsData(fallbackProductsData);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const renderCurrentPage = () => {
    const commonProps = {
      setCurrentPage,
      productsData,
      loading,
      openModal
    };

    switch (currentPage) {
      case 'home': 
        return <HomePage {...commonProps} />;
      case 'about': 
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'products': 
        return <ProductsPage {...commonProps} />;
      case 'certifications': 
        return <CertificationsPage />;
      case 'contact': 
        return <ContactPage />;
      default: 
        return <HomePage {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;