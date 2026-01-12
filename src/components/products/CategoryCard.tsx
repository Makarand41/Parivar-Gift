import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="group block"
      >
        <div className="card-elevated rounded-xl overflow-hidden bg-card">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            
            {/* Icon */}
            <div className="absolute top-4 left-4 text-4xl">
              {category.icon}
            </div>
            
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-background">
              <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-background/80 mb-2">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-background/70">
                  {category.productCount} products
                </span>
                <span className="flex items-center gap-1 text-sm font-medium opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
