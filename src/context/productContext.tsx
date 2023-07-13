import axios from "axios";
import { ReactNode, createContext, useReducer } from "react";
import { Dispatch } from "react";
import {
  productInitialState,
  productReducer,
} from "../reducers/productReducer";
import { ProductActions, ProductTypes } from "../actions/productActions";

const ProductContext = createContext({});

interface ImportMetaEnv {
  VITE_PRODUCTS_URL: string;
  VITE_CATEGORIES_URL: string;
  VITE_CATEGORY_URL: string;
}

const productsAPI: ImportMetaEnv = import.meta.env.VITE_PRODUCTS_URL;
const categoriesAPI: ImportMetaEnv = import.meta.env.VITE_CATEGORIES_URL;
const categoryAPI: ImportMetaEnv = import.meta.env.VITE_CATEGORY_URL;

interface Props {
  children: ReactNode;
}

const ProductProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(productReducer, productInitialState);

  const getProducts = async (
    url: string,
    dispatchFn: Dispatch<ProductActions>
  ): Promise<void> => {
    try {
      dispatchFn({ type: ProductTypes.SET_LOADING_PRODUCTS, payload: true });
      const res = await axios.get(url);
      dispatchFn({ type: ProductTypes.GET_ALL_PRODUCTS, payload: res.data });
      dispatchFn({ type: ProductTypes.SET_LOADING_PRODUCTS, payload: false });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async (
    url: string,
    dispatchFn: Dispatch<ProductActions>
  ): Promise<void> => {
    try {
      const res = await axios.get(url);
      dispatchFn({ type: ProductTypes.GET_CATEGORIES, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async (
    url: string,
    dispatchFn: Dispatch<ProductActions>
  ): Promise<void> => {
    try {
      dispatchFn({ type: ProductTypes.SET_LOADING_PRODUCTS, payload: true });
      const res = await axios.get(url);
      dispatchFn({
        type: ProductTypes.GET_PRODUCTS_BY_CATEGORY,
        payload: res.data,
      });
      dispatchFn({ type: ProductTypes.SET_LOADING_PRODUCTS, payload: false });
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    state,
    dispatch,
    getProducts,
    productsAPI,
    getCategories,
    getProductsByCategory,
    categoriesAPI,
    categoryAPI,
  };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
