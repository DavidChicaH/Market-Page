import { Reducer } from "react";
import { ProductActions, ProductTypes } from "../actions/productActions";
import { Products } from "../interfaces/productInterface";

export const productInitialState: Products = {
  products: [],
  categories: [],
  loading: false,
};

export const productReducer: Reducer<any, ProductActions> = (state, action) => {
  switch (action.type) {
    case ProductTypes.GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ProductTypes.GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case ProductTypes.SET_LOADING_PRODUCTS: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
