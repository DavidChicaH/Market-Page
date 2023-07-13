import { Products } from "../interfaces/productInterface";

export enum ProductTypes {
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  GET_PRODUCT = "GET_PRODUCT",
  GET_CATEGORIES = "GET_CATEGORIES",
  GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY",
  SET_LOADING_PRODUCTS = "SET_LOADING_PRODUCTS",
}

export type ProductActions = {
  type: ProductTypes;
  payload: Products[] | Products | boolean;
};
