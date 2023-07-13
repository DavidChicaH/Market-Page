import { ProductActions, ProductTypes } from "../actions/productActions";
import { Products } from "../interfaces/productInterface";

export const productInitialState: Products = {
  products: [],
  categoryProducts: [],
  categories: [],
  loading: false,
};

export const productReducer = (state: Products, action: ProductActions) => {
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
    case ProductTypes.GET_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        categoryProducts: action.payload,
      };
    }
    case ProductTypes.SET_LOADING_PRODUCTS: {
      return {
        ...state,
        loading: action.payload,
      }
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
