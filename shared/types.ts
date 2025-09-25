export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  destinations?: string[];
  origins?: string[];
  specifications: {
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