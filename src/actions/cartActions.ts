import { CartItem } from "../interfaces/cartInterfaces";

export enum CartTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}


export type CartActions = {
  type: CartTypes;
  payload: CartItem;
};
