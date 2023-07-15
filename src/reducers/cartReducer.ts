import { CartActions, CartTypes } from "../actions/cartActions";
import { Cart } from "../interfaces/cartInterfaces";

export const cartInitialState: Cart = {
  cart: [],
};


export const cartReducer = (cartState: Cart, cartAction: CartActions) => {
  switch(cartAction.type){
    case CartTypes.ADD_TO_CART:{
      return {}
    }
    case CartTypes.REMOVE_ONE_FROM_CART: {
      return {}
    }
    case CartTypes.REMOVE_ALL_FROM_CART: {
      return {}
    }
    case CartTypes.CLEAR_CART: {
      return {}
    }
    default: {
      return cartState;
    }
  }
}