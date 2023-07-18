export interface Products {
  products: Product[];
  categories?: Category[];
  loading?: boolean;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  rating: Rating;
}

export type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export interface Rating {
  rate: number;
  count: number;
}
