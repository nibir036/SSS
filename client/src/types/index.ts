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

export interface CarouselImage {
  url: string;
  title: string;
  subtitle: string;
}

export interface PageProps {
  setCurrentPage: (page: string) => void;
}

export interface ProductPageProps extends PageProps {
  productsData: ProductsData;
  loading: boolean;
  openModal: (product: Product) => void;
}

export interface HomePageProps extends PageProps {
  productsData: ProductsData;
  loading: boolean;
  openModal: (product: Product) => void;
}