import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import ProductPage from '../pages/ProductPage';
import PurchasePage from '../pages/PurchasePage';
import ConfirmationPage from '../pages/ConfirmationPage';
import ProductList from '../pages/ProductsPage';
import { ProductProvider } from '../context/ProductContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductProvider> {/* Wrap in ProductProvider to ensure context is available */}
        <App />
      </ProductProvider>
    ),
  },
  {
    path: '/product/:productId',
    element: (
      <ProductProvider> {/* Wrap in ProductProvider to ensure context is available */}
        <ProductPage />
      </ProductProvider>
    ),
  },
  {
    path: '/purchase/:productId',
    element: (
      <ProductProvider> {/* Wrap in ProductProvider to ensure context is available */}
        <PurchasePage />
      </ProductProvider>
    ),
  },
  {
    path: '/confirmation/:id',
    element: <ConfirmationPage />,
  },
  {
    path: '/products',
    element: (
      <ProductProvider> {/* Wrap in ProductProvider for consistent context */}
        <ProductList />
      </ProductProvider>
    ),
  },
  {
    path: '/about',
    element: <About />,
  },
 
]);

export default router;