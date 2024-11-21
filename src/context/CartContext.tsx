// src/context/CartContext.tsx

import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from '../interfaces/interfaces';

// Define types for the context state
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  calculateTotalPrice: () => number;
  clearCart: (product: Product) => void;
  isInCart: (productId: string) => boolean;
}

// Set up default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalPrice = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  };

  const isInCart = (productId: string) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      calculateTotalPrice,
      clearCart,
      isInCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};