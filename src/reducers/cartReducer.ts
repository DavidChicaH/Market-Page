import { CartActions, CartTypes } from "../actions/cartActions";
import { Cart, CartItem } from "../interfaces/cartInterfaces";

export const cartInitialState: Cart = {
  cart: [],
};

export const cartReducer = (cartState: Cart, cartAction: CartActions) => {
  switch (cartAction.type) {
    case CartTypes.ADD_TO_CART: {
      return {
        ...cartState,
        cart: cartAction.payload,
      };
    }
    case CartTypes.REMOVE_ONE_FROM_CART: {
      return {
        ...cartState,
        cart: cartAction.payload,
      };
    }
    case CartTypes.REMOVE_ALL_FROM_CART: {
      return {
        ...cartState,
        cart: cartAction.payload,
      };
    }
    case CartTypes.CLEAR_CART: {
      return {
        cart: []
      };
    }
    default: {
      return cartState;
    }
  }
};
