export interface IProductCard {
  name: string;
  description: string;
  sku: string;
  imageUrl: string;
  className?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  sku: string;
  imageUrl: string;
  relatedProducts?: Product[];
}

