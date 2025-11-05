import { ProductsData, CarouselImage } from '../types';

export const fallbackProductsData: ProductsData = {
  "exports": [
    {
      "id": 1,
      "name": "Shrimps",
      "category": "Seafood",
      "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400",
      "description": "High-quality shrimps for international markets",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards", "Ministry of Fisheries"],
        "packaging": "As Per Requirements"
      }
    },
    {
      "id": 2,
      "name": "Crabs",
      "category": "Seafood",
      "image": "https://images.unsplash.com/photo-1553659971-f01207815844?w=400",
      "description": "Premium crabs sourced from local fisheries",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards", "Ministry of Fisheries"],
        "packaging": "As Per Requirements"
      }
    },
    {
      "id": 3,
      "name": "Fish & Eels",
      "category": "Seafood",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400",
      "description": "A grade, sourced locally.",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards", "Ministry of Fisheries"],
        "packaging": "As Per Requirements"
      }
    },
    {
      "id": 4,
      "name": "Others",
      "category": "Seafood",
      "image": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400",
      "description": "A grade, sourced locally.",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards", "Ministry of Fisheries"],
        "packaging": "As Per Requirements"
      }
    },
    {
      "id": 5,
      "name": "Clothes & Accessories",
      "category": "Garments Products",
      "image": "https://images.unsplash.com/photo-1600201319331-27d31ecd7850?w=400",
      "description": "A grade, Manufactured locally.",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards"],
        "packaging": "As Per Requirements"
      }
    },
    {
      "id": 6,
      "name": "Leather Accessories",
      "category": "Leather Products",
      "image": "https://images.unsplash.com/photo-1573227896778-8f378c4029d4?w=400",
      "description": "A grade, Manufactured locally.",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards"],
        "packaging": "As Per Requirements"
      }
    },
    {
      "id": 7,
      "name": "Crockeries",
      "category": "Home Appliances",
      "image": "https://images.unsplash.com/photo-1677591276151-e11ed2e307c6?w=400",
      "description": "A grade, Manufactured locally.",
      "destinations": ["Global Markets"],
      "specifications": {
        "quality": "Premium Grade A",
        "certifications": ["ISO Standards"],
        "packaging": "As Per Requirements"
      }
    }
  ],
  imports: [
    {
      "id": 8,
      "name": "Disposable Items",
      "category": "Health & Care",
      "image": "https://images.unsplash.com/photo-1712995519100-aa14da7414d3?w=400",
      "description": "Medical appliances, primarily disposables.",
      "origins": ["Germany", "Japan", "South Korea", "China"],
      "specifications": {
        "quality": "Industrial Grade",
        "certifications": ["ISO Standards"],
        "warranty": "On Discussion"
      }
    },
    {
      "id": 9,
      "name": "Threads & Cotton",
      "category": "Garments Products",
      "image": "https://images.unsplash.com/photo-1625414501673-ce19fbe5324b?w=400",
      "description": "Materials for manufacturers",
      "origins": ["China", "Taiwan", "Singapore"],
      "specifications": {
        "quality": "Industrial Grade",
        "certifications": ["ISO Standards"],
        "warranty": "On Discussion"
      }
    },
    {
      "id": 10,
      "name": "Bike Accessories",
      "category": "Machineries and Equipments",
      "image": "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?w=400",
      "description": "A grade components, OEM",
      "origins": ["Various Global Sources"],
      "specifications": {
        "quality": "OEM-Authentic",
        "certifications": ["Quality Tested", "Certified"],
        "packaging": "On discussion"
      }
    }
  ]
};

export const carouselImages: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1200",
    title: "Global Trade Excellence",
    subtitle: "Connecting markets worldwide with premium products"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
    title: "Quality Products",
    subtitle: "Sourcing and delivering the finest goods globally"
  },
  {
    url: "/construction/image7.jpg",
    title: "Trusted Partnership",
    subtitle: "Building lasting relationships across continents"
  },
  {
    url: "/construction/image8.jpg",
    title: "Reliable Services",
    subtitle: "Satisfying clients with exceptional solutions"
  }
];