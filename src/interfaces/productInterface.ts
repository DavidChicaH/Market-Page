export interface Products {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
