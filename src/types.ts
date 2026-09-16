export type ProductCategory = 
  | 'All'
  | 'Samurai'
  | 'Cyber Anime'
  | 'Dark Fantasy'
  | 'Japanese Art'
  | 'Mythical'
  | 'Minimal Anime'
  | 'Cinematic'
  | 'Shonen-Inspired';

export interface ProductSize {
  id: string;
  name: string;
  dimensions: string;
  priceModifier: number; // multiplier or base price
  popular?: boolean;
}

export interface FrameOption {
  id: string;
  name: string;
  material: string;
  price: number;
  borderStyle: string;
  previewColor: string;
}

export interface Product {
  id: string;
  artId: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  description: string;
  lore: string;
  tags: string[];
  sizes: ProductSize[];
  isBestSeller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewsCount: number;
  aspectRatio: '3:4' | '16:9' | '1:1';
  palette: {
    primary: string;
    secondary: string;
    glow: string;
  };
  edition: string;
  resolution: string;
  kanjiTitle: string;
  artistNote: string;
}

export interface CartItem {
  id: string; // unique combo of product.id + size + frame
  product: Product;
  size: ProductSize;
  frame: FrameOption;
  quantity: number;
  unitPrice: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export type SortOption = 'featured' | 'popular' | 'newest' | 'price-asc' | 'price-desc';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'cart' | 'wishlist';
}
