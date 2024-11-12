// ProductPageWrapper.tsx
import React from 'react';
import ProductPage from '../pages/ProductPage';
import { ProductProvider } from '../context/ProductContext';

const ProductPageWrapper: React.FC = () => (
  <ProductProvider>
    <ProductPage />
  </ProductProvider>
);

export default ProductPageWrapper;
