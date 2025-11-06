import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import ContractsTendersPage from './pages/ContractsTendersPage';
import ConstructionPage from './pages/ConstructionPage';
import ImportsPage from './pages/ImportsPage';
import ExportsPage from './pages/ExportsPage';
import CustomisedImportsPage from './pages/CustomisedImportsPage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ProjectModal from './components/ProjectModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import { Product, ProductsData } from './types';
import { fallbackProductsData } from './data/fallbackData';

// Project interface for modal
interface Project {
  id: number;
  title: string;
  status: 'ongoing' | 'completed';
  description: string;
  location: string;
  startDate: string;
  completionDate?: string;
  images: string[];
  client?: string;
  scope?: string[];
  budget?: string;
  team?: string;
  challenges?: string;
  solution?: string;
  outcome?: string;
}

const App: React.FC = () => {
  // Initialize currentPage from localStorage or default to 'home'
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsData, setProductsData] = useState<ProductsData>(fallbackProductsData);
  const [loading, setLoading] = useState(false);
  
  // Product Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  
  // Project Modal State
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Save currentPage to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

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
        
        const response = await fetch('/api/products', {
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
        setProductsData(fallbackProductsData);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Product Modal Functions
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  // Project Modal Functions
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const renderCurrentPage = () => {
    const commonProps = {
      setCurrentPage,
      productsData,
      loading,
      openModal: openProductModal
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
      
      // Service Pages
      case 'contracts-tenders':
        return <ContractsTendersPage setCurrentPage={setCurrentPage} />;
      case 'construction':
        return <ConstructionPage setCurrentPage={setCurrentPage} />;
      case 'imports':
        return <ImportsPage setCurrentPage={setCurrentPage} />;
      case 'exports':
        return <ExportsPage setCurrentPage={setCurrentPage} />;
      case 'customised-imports':
        return <CustomisedImportsPage setCurrentPage={setCurrentPage} />;
      
      // Projects Page
      case 'projects':
        return <ProjectsPage setCurrentPage={setCurrentPage} onProjectClick={openProjectModal} />;
      
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
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        setCurrentPage={setCurrentPage}
      />

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
        setCurrentPage={setCurrentPage}
      />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default App;