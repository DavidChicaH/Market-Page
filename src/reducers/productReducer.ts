import { ProductActions, ProductTypes } from "../actions/productActions";
import { Products } from "../interfaces/productInterface";

export const productInitialState: Products = {
  products: [],
};

export const productReducer = (state: Products, action: ProductActions) => {
  switch (action.type) {
    case ProductTypes.GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    // case ProductTypes.GET_PRODUCT: {
    //   return;
    // }
    // case ProductTypes.ADD_PRODUCT: {
    //   return;
    // }
    // case ProductTypes.UPDATE_PRODUCT: {
    //   return;
    // }
    // case ProductTypes.DELETE_PRODUCT: {
    //   return;
    // }
    default: {
      return state;
    }
  }
};
