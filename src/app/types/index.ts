export interface IProductCard {
  name: string;
  description: string;
  sku: string;
  imageUrl: string;
  onAddToCart: () => void;
  price?: string;
  className?: string;
}