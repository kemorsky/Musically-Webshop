export type ProductCategory = 'Guitar' | 'Bass' | 'Drums' | 'Keyboards' | 'Amplifiers' | 'Accessories' | 'Other';

export type ProductCondition = 'New' | 'Like New' | 'Very Good' | 'Good' | 'Fair' | 'Poor';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  condition: ProductCondition;
  price: number;
  description: string;
  yearMade?: number;
  images: string[];
  stock: number;
  isOnSale: boolean;
  salePrice?: number;
  tags: string[];
  location: string;
}
