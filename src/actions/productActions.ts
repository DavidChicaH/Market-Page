import { Products } from "../interfaces/productInterface";

export enum ProductTypes {
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  GET_PRODUCT = "GET_PRODUCT",
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
}

export type ProductActions = {
  type: ProductTypes;
  payload: Products[];
};
