// src/router/index.ts

import { createBrowserRouter } from 'react-router-dom';
import { ProductProvider } from '../context/ProductContext';  // Import ProductProvider
import { CartProvider } from '../context/CartContext';  // Import CartProvider
import App from '../App';  // Your homepage (App.tsx)
import About from '../pages/About';
import ProductPage from '../pages/ProductPage';
import PurchasePage from '../pages/PurchasePage';
import ConfirmationPage from '../pages/ConfirmationPage';
import ProductList from '../pages/ProductsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductProvider>  {/* Provide context for the homepage */}
        <CartProvider>   {/* Provide context for the cart */}
          <App />
        </CartProvider>
      </ProductProvider>
    ),
  },
  {
    path: '/product/:productId',
    element: (
      <ProductProvider>  {/* Provide context for ProductPage */}
        <CartProvider>   {/* Provide context for the cart */}
          <ProductPage />
        </CartProvider>
      </ProductProvider>
    ),
  },
  {
    path: '/purchase/:productId',
    element: (
      <ProductProvider>  {/* Provide context for PurchasePage */}
        <CartProvider>   {/* Provide context for the cart */}
          <PurchasePage />
        </CartProvider>
      </ProductProvider>
    ),
  },
  {
    path: '/confirmation',
    element: (
      <ProductProvider>  {/* Provide context for PurchasePage */}
        <CartProvider>   {/* Provide context for the cart */}
          <ConfirmationPage />
        </CartProvider>
      </ProductProvider>
    ),
  },
  {
    path: '/products',
    element: (
      <ProductProvider>  {/* Provide context for ProductList */}
        <CartProvider>   {/* Provide context for the cart */}
          <ProductList />
        </CartProvider>
      </ProductProvider>
    ),
  },
  {
    path: '/about',
    element: (
      <ProductProvider>  {/* Provide context for ProductList */}
        <CartProvider>   {/* Provide context for the cart */}
          <About />
        </CartProvider>
      </ProductProvider>
    ),
  },
]);

export default router;
