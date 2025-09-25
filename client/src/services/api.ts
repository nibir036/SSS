// API service for the export-import website
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  destinations?: string[];
  origins?: string[];
  specifications?: {
    quality: string;
    certifications: string[];
    packaging?: string;
    warranty?: string;
  };
}

export interface ProductsData {
  exports: Product[];
  imports: Product[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Basic fetch wrapper with error handling
const apiRequest = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// API functions
export const productsApi = {
  getAll: (): Promise<ApiResponse<ProductsData>> => 
    apiRequest('/products'),
    
  getByCategory: (category: string): Promise<ApiResponse<ProductsData>> => 
    apiRequest(`/products/category/${category}`),
};

export const healthCheck = (): Promise<{ status: string; timestamp: string }> => 
  apiRequest('/health');

export default {
  productsApi,
  healthCheck,
};