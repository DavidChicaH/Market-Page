import { Product } from "./productInterface";

export interface Cart {
  cart: CartItem[];
}

export interface CartItem extends Product {
  quantity: number;
}
