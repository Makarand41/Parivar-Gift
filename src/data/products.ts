export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  specifications: {
    material: string;
    capacity?: string;
    weight: string;
    dimensions: string;
  };
  stock: number;
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Buckets & Mugs",
    slug: "buckets-mugs",
    icon: "🪣",
    productCount: 15,
    description: "Various sizes and designs for daily use",
    image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400"
  },
  {
    id: 2,
    name: "Storage Containers",
    slug: "storage-containers",
    icon: "🗃️",
    productCount: 22,
    description: "Keep your items organized and fresh",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
  },
  {
    id: 3,
    name: "Bathroom Sets",
    slug: "bathroom-sets",
    icon: "🚿",
    productCount: 18,
    description: "Complete bathroom accessories",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400"
  },
  {
    id: 4,
    name: "Dustbins & Cleaners",
    slug: "dustbins-cleaners",
    icon: "🗑️",
    productCount: 12,
    description: "Hygiene and cleanliness essentials",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
  },
  {
    id: 5,
    name: "Furniture & Stools",
    slug: "furniture-stools",
    icon: "🪑",
    productCount: 10,
    description: "Durable plastic furniture solutions",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400"
  },
  {
    id: 6,
    name: "Planters & Garden",
    slug: "planters-garden",
    icon: "🌿",
    productCount: 20,
    description: "Beautiful planters for your garden",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  },
  {
    id: 7,
    name: "Water Bottles",
    slug: "water-bottles",
    icon: "💧",
    productCount: 16,
    description: "Stay hydrated with style",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"
  },
  {
    id: 8,
    name: "Kitchen Essentials",
    slug: "kitchen-essentials",
    icon: "🔪",
    productCount: 25,
    description: "Essential items for your kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Daisy Bucket - 20L",
    slug: "daisy-bucket-20l",
    category: "Buckets & Mugs",
    categorySlug: "buckets-mugs",
    price: 12.99,
    originalPrice: 15.99,
    discount: 18,
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600"
    ],
    colors: ["Blue", "White", "Green"],
    sizes: ["10L", "15L", "20L", "25L"],
    description: "Premium quality bucket made with 100% virgin plastic. Perfect for household cleaning and storage needs.",
    specifications: {
      material: "Virgin Polypropylene",
      capacity: "20 Liters",
      weight: "850g",
      dimensions: "30x30x35 cm"
    },
    stock: 150,
    featured: true
  },
  {
    id: 2,
    name: "Premium Storage Box Set",
    slug: "premium-storage-box-set",
    category: "Storage Containers",
    categorySlug: "storage-containers",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.8,
    reviews: 256,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
    ],
    colors: ["Transparent", "Blue", "Pink"],
    sizes: ["Small", "Medium", "Large", "XL"],
    description: "Keep your food fresh and organized with our airtight storage containers. BPA-free and microwave safe.",
    specifications: {
      material: "Food-Grade PP Plastic",
      capacity: "Set of 5 (500ml to 3L)",
      weight: "1.2kg",
      dimensions: "Various sizes"
    },
    stock: 89,
    featured: true
  },
  {
    id: 3,
    name: "Elegant Bathroom Set - 6 Pcs",
    slug: "elegant-bathroom-set",
    category: "Bathroom Sets",
    categorySlug: "bathroom-sets",
    price: 34.99,
    rating: 4.6,
    reviews: 189,
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"
    ],
    colors: ["White", "Beige", "Grey"],
    sizes: ["Standard"],
    description: "Complete 6-piece bathroom set including soap dispenser, toothbrush holder, soap dish, tumbler, and more.",
    specifications: {
      material: "ABS Plastic with Chrome Finish",
      weight: "1.5kg",
      dimensions: "Various"
    },
    stock: 67,
    featured: true
  },
  {
    id: 4,
    name: "Smart Dustbin - 12L",
    slug: "smart-dustbin-12l",
    category: "Dustbins & Cleaners",
    categorySlug: "dustbins-cleaners",
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    rating: 4.4,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
    ],
    colors: ["White", "Black", "Grey"],
    sizes: ["8L", "12L", "20L"],
    description: "Modern swing-top dustbin with removable inner bucket for easy cleaning.",
    specifications: {
      material: "High-Grade PP Plastic",
      capacity: "12 Liters",
      weight: "600g",
      dimensions: "25x25x40 cm"
    },
    stock: 200,
    featured: false
  },
  {
    id: 5,
    name: "Comfort Stool - Stackable",
    slug: "comfort-stool-stackable",
    category: "Furniture & Stools",
    categorySlug: "furniture-stools",
    price: 19.99,
    rating: 4.7,
    reviews: 312,
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600"
    ],
    colors: ["Red", "Blue", "Green", "White"],
    sizes: ["Standard"],
    description: "Sturdy and comfortable stackable stool. Supports up to 120kg weight.",
    specifications: {
      material: "Reinforced Polypropylene",
      weight: "1.8kg",
      dimensions: "35x35x45 cm"
    },
    stock: 180,
    featured: true
  },
  {
    id: 6,
    name: "Garden Planter - Large",
    slug: "garden-planter-large",
    category: "Planters & Garden",
    categorySlug: "planters-garden",
    price: 18.99,
    originalPrice: 22.99,
    discount: 17,
    rating: 4.5,
    reviews: 98,
    images: [
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600"
    ],
    colors: ["Terracotta", "White", "Grey", "Green"],
    sizes: ["Small", "Medium", "Large"],
    description: "Beautiful and durable garden planter with drainage holes. UV resistant for outdoor use.",
    specifications: {
      material: "UV-Stabilized PP",
      capacity: "15 Liters",
      weight: "900g",
      dimensions: "35x35x30 cm"
    },
    stock: 120,
    featured: true
  },
  {
    id: 7,
    name: "Sports Water Bottle - 1L",
    slug: "sports-water-bottle-1l",
    category: "Water Bottles",
    categorySlug: "water-bottles",
    price: 8.99,
    rating: 4.3,
    reviews: 445,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600"
    ],
    colors: ["Blue", "Green", "Orange", "Pink"],
    sizes: ["500ml", "750ml", "1L"],
    description: "Leak-proof sports bottle with flip-top lid. BPA-free and dishwasher safe.",
    specifications: {
      material: "BPA-Free Tritan Plastic",
      capacity: "1 Liter",
      weight: "180g",
      dimensions: "8x8x25 cm"
    },
    stock: 350,
    featured: false
  },
  {
    id: 8,
    name: "Kitchen Organizer Set",
    slug: "kitchen-organizer-set",
    category: "Kitchen Essentials",
    categorySlug: "kitchen-essentials",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.9,
    reviews: 567,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
    ],
    colors: ["White", "Grey"],
    sizes: ["Standard"],
    description: "Complete kitchen organization solution with spice rack, utensil holder, and storage containers.",
    specifications: {
      material: "Food-Safe ABS Plastic",
      weight: "2.1kg",
      dimensions: "Various"
    },
    stock: 75,
    featured: true
  },
  {
    id: 9,
    name: "Multipurpose Mug - 1.5L",
    slug: "multipurpose-mug-1-5l",
    category: "Buckets & Mugs",
    categorySlug: "buckets-mugs",
    price: 4.99,
    rating: 4.2,
    reviews: 234,
    images: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600"
    ],
    colors: ["Blue", "Pink", "Green", "Yellow"],
    sizes: ["1L", "1.5L", "2L"],
    description: "Versatile bathroom mug with comfortable grip handle.",
    specifications: {
      material: "Virgin PP Plastic",
      capacity: "1.5 Liters",
      weight: "150g",
      dimensions: "12x12x15 cm"
    },
    stock: 500,
    featured: false
  },
  {
    id: 10,
    name: "Airtight Cereal Container",
    slug: "airtight-cereal-container",
    category: "Storage Containers",
    categorySlug: "storage-containers",
    price: 14.99,
    rating: 4.6,
    reviews: 178,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
    ],
    colors: ["Transparent"],
    sizes: ["2L", "3L", "4L"],
    description: "Keep cereals and dry foods fresh with our airtight pour-lid container.",
    specifications: {
      material: "BPA-Free Plastic",
      capacity: "3 Liters",
      weight: "350g",
      dimensions: "15x10x25 cm"
    },
    stock: 200,
    featured: false
  },
  {
    id: 11,
    name: "Toilet Brush Set",
    slug: "toilet-brush-set",
    category: "Bathroom Sets",
    categorySlug: "bathroom-sets",
    price: 12.99,
    rating: 4.4,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"
    ],
    colors: ["White", "Black", "Grey"],
    sizes: ["Standard"],
    description: "Durable toilet brush with sleek holder. Anti-drip design for hygiene.",
    specifications: {
      material: "PP with Stainless Steel Handle",
      weight: "400g",
      dimensions: "12x12x38 cm"
    },
    stock: 280,
    featured: false
  },
  {
    id: 12,
    name: "Kids Step Stool",
    slug: "kids-step-stool",
    category: "Furniture & Stools",
    categorySlug: "furniture-stools",
    price: 14.99,
    originalPrice: 17.99,
    discount: 17,
    rating: 4.8,
    reviews: 423,
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600"
    ],
    colors: ["Pink", "Blue", "Green", "Yellow"],
    sizes: ["Standard"],
    description: "Safe and sturdy step stool for kids. Non-slip surface and lightweight design.",
    specifications: {
      material: "Child-Safe PP Plastic",
      weight: "800g",
      dimensions: "30x25x20 cm"
    },
    stock: 150,
    featured: false
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
