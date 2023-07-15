export interface Cart {
  cart: CartItem[];
}

export interface CartItem {
  productId: number;
  quantity: number;
}
