export type ProductCategory =  
| 'Acoustic Guitar'
| 'Electric Guitar'
| 'Drums'
| 'Flutes'
| 'Saxophones';

export type ProductCondition = 'New' | 'Like New' |  'Good' | 'Fair' | 'Stage Tested';

export interface SellerReview {
  rating: number;
  comment: string;
  reviewer: string;
}

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
  width: number;
  tags: string[];
  sellerReviews: SellerReview[];
}
