import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductPage from '../pages/ProductPage';
import PurchasePage from '../pages/PurchasePage';
import ConfirmationPage from '../pages/ConfirmationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/purchase/:id',
    element: <PurchasePage />,
  },
  {
    path: '/confirmation/:id',
    element: <ConfirmationPage />,
  },
 
]);

export default router;