export type ProductCategory =  
| 'Acoustic Guitar'
| 'Electric Guitar'
| 'Drums'
| 'Keyboard'
| 'Accessories';

export type ProductCondition = 'New' | 'Like New' |  'Good' | 'Fair' | 'Stage Tested';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  condition: ProductCondition;
  price: number;
  description: string;
  sellerDescription: string;
  yearMade?: number;
  images: string[];
  numberOfStrings: number;
  width: number;
  isOnSale: boolean;
  salePrice?: number;
  tags: string[];
}
