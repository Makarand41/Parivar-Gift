// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle, Package, Calendar, Truck, Play, MapPin, Clock, Gift } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Layout } from '@/components/layout/Layout';
// import { ProductCard } from '@/components/products/ProductCard';
// import { CategoryCard } from '@/components/products/CategoryCard';
// import { categories, getFeaturedProducts } from '@/data/products';

// const features = [
//   {
//     icon: CheckCircle,
//     title: '100% Virgin Plastic',
//     description: 'Premium quality materials for lasting durability',
//   },
//   {
//     icon: Package,
//     title: 'Wide Range',
//     description: '500+ products for every household need',
//   },
//   {
//     icon: Calendar,
//     title: 'Since 2013',
//     description: 'Over a decade of trusted quality',
//   },
//   {
//     icon: Truck,
//     title: 'Free Shipping',
//     description: 'On orders above ₹500',
//   },
// ];

// const Index = () => {
//   const featuredProducts = getFeaturedProducts();

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative overflow-hidden hero-gradient">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
//         <div className="container relative py-20 md:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
//                 Made with 100% Virgin Plastic
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
//                 Premium Plastic
//                 <br />
//                 <span className="text-primary-foreground/90">Household Products</span>
//               </h1>
//               <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
//                 Transform your home with our durable, stylish, and eco-conscious plastic products. 
//                 Quality crafted for modern living.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Button size="lg" variant="secondary" asChild className="button-primary-glow">
//                   <Link to="/products">
//                     Shop Now
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button 
//                   size="lg" 
//                   variant="outline" 
//                   asChild 
//                   className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
//                 >
//                   <Link to="/about">Learn More</Link>
//                 </Button>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="hidden lg:block"
//             >
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-2xl" />
//                 <img
//                   src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
//                   alt="Premium plastic products"
//                   className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
//                 />
//                 <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg card-elevated">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20">
//                       <CheckCircle className="h-6 w-6 text-success" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-foreground">BPA Free</p>
//                       <p className="text-sm text-muted-foreground">Safe for family</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 md:py-24 bg-muted/30">
//         <div className="container">
//           <div className="text-center mb-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Shop by Category
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Explore our wide range of premium plastic products designed for every room in your home
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {categories.map((category, index) => (
//               <CategoryCard key={category.id} category={category} index={index} />
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <Button variant="outline" size="lg" asChild>
//               <Link to="/products">
//                 View All Products
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Video Section - New Shop Opening */}
//            {/* Video Section - New Shop Opening */}
//       <section className="py-16 md:py-24">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
//               <Gift className="h-4 w-4" />
//               <span className="text-sm font-medium">Special Announcement</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Visit Our New Showroom in Nashik!
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Experience our premium plastic products in person at our newly opened showroom
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             {/* Video Player */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl card-elevated aspect-video">
//   <video
//     className="absolute inset-0 w-full h-full object-cover"
//     controls
//     poster="/shop.jpg"
//   >
//     <source src="/videos/vdo1.mp4" type="video/mp4" />
//   </video>
// </div>

//             </motion.div>

//             {/* Showroom Details */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div className="bg-card rounded-xl p-6 md:p-8 card-elevated">
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
//                     <Gift className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-foreground mb-2">PARIVAR Gift Showroom</h3>
//                     <p className="text-muted-foreground">
//                       Our newest showroom showcasing the finest plastic household products
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <MapPin className="h-5 w-5 text-primary shrink-0" />
//                     <div>
//                       <p className="font-medium text-foreground">Location</p>
//                       <p className="text-sm text-muted-foreground">
//                         Shop No. 15, Gangapur Road, Nashik, Maharashtra 422013
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Clock className="h-5 w-5 text-primary shrink-0" />
//                     <div>
//                       <p className="font-medium text-foreground">Timings</p>
//                       <p className="text-sm text-muted-foreground">
//                         Monday to Sunday: 10:00 AM - 8:00 PM
//                       </p>
//                     </div>
//                   </div>

//                   <div className="pt-4 border-t border-border">
//                     <h4 className="font-semibold text-foreground mb-3">Special Opening Offers</h4>
//                     <ul className="space-y-2 text-sm text-muted-foreground">
//                       <li className="flex items-center gap-2">
//                         <div className="h-1.5 w-1.5 rounded-full bg-primary" />
//                         15% discount on all purchases
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <div className="h-1.5 w-1.5 rounded-full bg-primary" />
//                         Free gift with every purchase above ₹1000
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <div className="h-1.5 w-1.5 rounded-full bg-primary" />
//                         Complimentary home delivery within Nashik
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   <Button className="button-primary-glow">
//                     <MapPin className="h-4 w-4 mr-2" />
//                     Get Directions
//                   </Button>
//                   <Button variant="outline">
//                     <Clock className="h-4 w-4 mr-2" />
//                     Contact Showroom
//                   </Button>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="text-center p-4 rounded-xl bg-primary/5">
//                   <p className="text-2xl font-bold text-primary">5000+</p>
//                   <p className="text-xs text-muted-foreground">Products</p>
//                 </div>
//                 <div className="text-center p-4 rounded-xl bg-primary/5">
//                   <p className="text-2xl font-bold text-primary">100+</p>
//                   <p className="text-xs text-muted-foreground">Brands</p>
//                 </div>
//                 <div className="text-center p-4 rounded-xl bg-primary/5">
//                   <p className="text-2xl font-bold text-primary">24/7</p>
//                   <p className="text-xs text-muted-foreground">Support</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 md:py-24 bg-muted/30">
//         <div className="container">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//                 Featured Products
//               </h2>
//               <p className="text-muted-foreground">
//                 Our most popular items loved by customers
//               </p>
//             </motion.div>
//             <Button variant="ghost" asChild>
//               <Link to="/products">
//                 View All <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {featuredProducts.slice(0, 8).map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 md:py-24 bg-secondary">
//         <div className="container">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
//                   <feature.icon className="h-7 w-7" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative rounded-3xl overflow-hidden hero-gradient p-8 md:p-16 text-center"
//           >
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
//                 Ready to Transform Your Home?
//               </h2>
//               <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
//                 Join thousands of happy customers who trust PARIVAR Premium for their household needs.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <Button size="lg" variant="secondary" asChild>
//                   <Link to="/products">
//                     Browse Products
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button 
//                   size="lg" 
//                   variant="outline" 
//                   asChild 
//                   className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
//                 >
//                   <Link to="/contact">Contact Us</Link>
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Index;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, Calendar, Truck, Play, MapPin, Clock, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { CategoryCard } from '@/components/products/CategoryCard';
import { categories, getFeaturedProducts } from '@/data/products';

const features = [
  {
    icon: CheckCircle,
    title: '100% Virgin Plastic',
    description: 'Premium quality materials for lasting durability',
  },
  {
    icon: Package,
    title: 'Wide Range',
    description: '500+ products for every household need',
  },
  {
    icon: Calendar,
    title: 'Since 2013',
    description: 'Over a decade of trusted quality',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders above ₹500',
  },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Video Section - New Shop Opening - MOVED TO TOP */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Gift className="h-4 w-4" />
              <span className="text-sm font-medium">Special Announcement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our New Showroom in Nashik!
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our premium gift products in person at our newly opened showroom
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl card-elevated aspect-video">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  poster="/shop.jpg"
                >
                  <source src="/videos/vdo1.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>

            {/* Showroom Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-xl p-6 md:p-8 card-elevated">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">PARIVAR Gift Showroom</h3>
                    <p className="text-muted-foreground">
                      Our newest showroom showcasing the finest plastic household products
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Shop No. 15, Gangapur Road, Nashik, Maharashtra 422013
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Timings</p>
                      <p className="text-sm text-muted-foreground">
                        Monday to Sunday: 10:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Special Opening Offers</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        15% discount on all purchases
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Free gift with every purchase above ₹1000
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Complimentary home delivery within Nashik
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className="button-primary-glow">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    Contact Showroom
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-primary/5">
                  <p className="text-2xl font-bold text-primary">5000+</p>
                  <p className="text-xs text-muted-foreground">Products</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/5">
                  <p className="text-2xl font-bold text-primary">100+</p>
                  <p className="text-xs text-muted-foreground">Brands</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/5">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient mt-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                Made with 100% Virgin Plastic
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Premium Plastic
                <br />
                <span className="text-primary-foreground/90">Household Products</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Transform your home with our durable, stylish, and eco-conscious plastic products. 
                Quality crafted for modern living.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild className="button-primary-glow">
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                  alt="Premium plastic products"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg card-elevated">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">BPA Free</p>
                      <p className="text-sm text-muted-foreground">Safe for family</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our wide range of premium plastic products designed for every room in your home
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Our most popular items loved by customers
              </p>
            </motion.div>
            <Button variant="ghost" asChild>
              <Link to="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden hero-gradient p-8 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Home?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of happy customers who trust PARIVAR Premium for their household needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/products">
                    Browse Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;