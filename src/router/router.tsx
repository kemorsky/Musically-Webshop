import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductPageWrapper from './ProductPageWrapper';
import PurchasePage from '../pages/PurchasePage';
import ConfirmationPage from '../pages/ConfirmationPage';
import ProductList from '../pages/ProductsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product/:productId',
    element: <ProductPageWrapper />,
  },
  {
    path: '/purchase/:d',
    element: <PurchasePage />,
  },
  {
    path: '/confirmation/:id',
    element: <ConfirmationPage />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
 
]);

export default router;