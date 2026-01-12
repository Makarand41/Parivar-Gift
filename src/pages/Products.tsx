// import { useState, useMemo } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Slider } from '@/components/ui/slider';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
// import { Layout } from '@/components/layout/Layout';
// import { ProductCard } from '@/components/products/ProductCard';
// import { products, categories } from '@/data/products';

// const sortOptions = [
//   { value: 'featured', label: 'Featured' },
//   { value: 'price-asc', label: 'Price: Low to High' },
//   { value: 'price-desc', label: 'Price: High to Low' },
//   { value: 'rating', label: 'Highest Rated' },
//   { value: 'newest', label: 'Newest' },
// ];

// const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialCategory = searchParams.get('category');
  
//   const [selectedCategories, setSelectedCategories] = useState<string[]>(
//     initialCategory ? [initialCategory] : []
//   );
//   const [priceRange, setPriceRange] = useState([0, 100]);
//   const [sortBy, setSortBy] = useState('featured');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const filteredProducts = useMemo(() => {
//     let result = [...products];

//     // Category filter
//     if (selectedCategories.length > 0) {
//       result = result.filter(p => selectedCategories.includes(p.categorySlug));
//     }

//     // Price filter
//     result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

//     // Sorting
//     switch (sortBy) {
//       case 'price-asc':
//         result.sort((a, b) => a.price - b.price);
//         break;
//       case 'price-desc':
//         result.sort((a, b) => b.price - a.price);
//         break;
//       case 'rating':
//         result.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         result.sort((a, b) => b.id - a.id);
//         break;
//       default:
//         result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
//     }

//     return result;
//   }, [selectedCategories, priceRange, sortBy]);

//   const toggleCategory = (slug: string) => {
//     setSelectedCategories(prev =>
//       prev.includes(slug) ? prev.filter(c => c !== slug) : [...prev, slug]
//     );
//   };

//   const clearFilters = () => {
//     setSelectedCategories([]);
//     setPriceRange([0, 100]);
//     setSearchParams({});
//   };

//   const FilterContent = () => (
//     <div className="space-y-6">
//       {/* Categories */}
//       <div>
//         <h3 className="font-semibold text-foreground mb-4">Categories</h3>
//         <div className="space-y-3">
//           {categories.map((category) => (
//             <label
//               key={category.slug}
//               className="flex items-center gap-3 cursor-pointer group"
//             >
//               <Checkbox
//                 checked={selectedCategories.includes(category.slug)}
//                 onCheckedChange={() => toggleCategory(category.slug)}
//               />
//               <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
//                 {category.icon} {category.name}
//               </span>
//               <span className="ml-auto text-xs text-muted-foreground">
//                 ({category.productCount})
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Price Range */}
//       <div>
//         <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
//         <Slider
//           value={priceRange}
//           onValueChange={setPriceRange}
//           min={0}
//           max={100}
//           step={5}
//           className="mb-4"
//         />
//         <div className="flex items-center justify-between text-sm text-muted-foreground">
//           <span>${priceRange[0]}</span>
//           <span>${priceRange[1]}</span>
//         </div>
//       </div>

//       {/* Clear Filters */}
//       {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 100) && (
//         <Button variant="outline" className="w-full" onClick={clearFilters}>
//           <X className="h-4 w-4 mr-2" />
//           Clear Filters
//         </Button>
//       )}
//     </div>
//   );

//   return (
//     <Layout>
//       {/* Header */}
//       <section className="bg-muted/30 py-8 md:py-12">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//               Our Products
//             </h1>
//             <p className="text-muted-foreground">
//               Browse our collection of premium plastic household products
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <div className="container py-8">
//         <div className="flex gap-8">
//           {/* Desktop Sidebar */}
//           <aside className="hidden lg:block w-64 shrink-0">
//             <div className="sticky top-24">
//               <h2 className="text-lg font-semibold text-foreground mb-6">Filters</h2>
//               <FilterContent />
//             </div>
//           </aside>

//           {/* Main Content */}
//           <div className="flex-1">
//             {/* Toolbar */}
//             <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//               <p className="text-sm text-muted-foreground">
//                 Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
//               </p>

//               <div className="flex items-center gap-3">
//                 {/* Mobile Filter Button */}
//                 <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
//                   <SheetTrigger asChild>
//                     <Button variant="outline" className="lg:hidden">
//                       <SlidersHorizontal className="h-4 w-4 mr-2" />
//                       Filters
//                       {selectedCategories.length > 0 && (
//                         <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
//                           {selectedCategories.length}
//                         </span>
//                       )}
//                     </Button>
//                   </SheetTrigger>
//                   <SheetContent side="left">
//                     <SheetHeader>
//                       <SheetTitle>Filters</SheetTitle>
//                     </SheetHeader>
//                     <div className="mt-6">
//                       <FilterContent />
//                     </div>
//                   </SheetContent>
//                 </Sheet>

//                 {/* Sort */}
//                 <Select value={sortBy} onValueChange={setSortBy}>
//                   <SelectTrigger className="w-[180px]">
//                     <SelectValue placeholder="Sort by" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {sortOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* Active Filters */}
//             {selectedCategories.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedCategories.map((slug) => {
//                   const category = categories.find(c => c.slug === slug);
//                   return (
//                     <Button
//                       key={slug}
//                       variant="secondary"
//                       size="sm"
//                       onClick={() => toggleCategory(slug)}
//                       className="gap-2"
//                     >
//                       {category?.icon} {category?.name}
//                       <X className="h-3 w-3" />
//                     </Button>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Product Grid */}
//             {filteredProducts.length > 0 ? (
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//                 {filteredProducts.map((product, index) => (
//                   <ProductCard key={product.id} product={product} index={index} />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16">
//                 <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
//                 <Button variant="outline" onClick={clearFilters}>
//                   Clear Filters
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );

  // ✅ INR price range
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p =>
        selectedCategories.includes(p.categorySlug)
      );
    }

    result = result.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev =>
      prev.includes(slug)
        ? prev.filter(c => c !== slug)
        : [...prev, slug]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 2000]);
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <label
              key={category.slug}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Checkbox
                checked={selectedCategories.includes(category.slug)}
                onCheckedChange={() => toggleCategory(category.slug)}
              />
              <span className="text-sm">
                {category.icon} {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-4">Price Range (₹)</h3>
        <Slider
          value={priceRange}
          onValueChange={v => setPriceRange(v as [number, number])}
          min={0}
          max={2000}
          step={50}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      {(selectedCategories.length > 0 ||
        priceRange[0] > 0 ||
        priceRange[1] < 2000) && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted/30 py-8 md:py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Our Products
            </h1>
            <p className="text-muted-foreground">
              Premium plastic household products – Made for India 🇮🇳
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <b>{filteredProducts.length}</b> products
              </p>

              <div className="flex gap-3">
                {/* Mobile Filters */}
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(o => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    price: product.price, // already INR
                  }}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
