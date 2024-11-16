// ProductContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../interfaces/interfaces';
import { generateMockProducts } from '../script/generateProducts';

interface ProductContextProps {
  products: Product[];
}

// Define the context
const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Generate mock products on initial load
  useEffect(() => {
    const mockProducts = generateMockProducts(100);
    setProducts(mockProducts);
    console.log("Products loaded in context:", mockProducts); // Check if products are being set correctly
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use product context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};