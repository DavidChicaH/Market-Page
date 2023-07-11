import axios from "axios";
import { ReactNode, createContext, useReducer } from "react";
import {
  productInitialState,
  productReducer,
} from "../reducers/productReducer";
import { ProductTypes } from "../actions/productActions";

const ProductContext = createContext({});

const productsAPI: string = import.meta.env.VITE_PRODUCTS_URL;
const categories: string = import.meta.env.VITE_CATEGORIES_URL;

interface Props {
  children: ReactNode;
}

const ProductProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(productReducer, productInitialState);

  const getProducts = async (url: string): Promise<void> => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      dispatch({ type: ProductTypes.GET_ALL_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  const data = { state, getProducts, productsAPI };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
