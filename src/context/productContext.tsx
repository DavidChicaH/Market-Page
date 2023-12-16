import axios from "axios";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Dispatch } from "react";
import {
    productInitialState,
    productReducer,
} from "../reducers/productReducer";
import { ProductActions, ProductTypes } from "../actions/productActions";
import { ImportMetaEnv } from "../interfaces/apiInterfaces";

const productsAPI: ImportMetaEnv =
    import.meta.env.VITE_PRODUCTS_URL;
const categoriesAPI: ImportMetaEnv =
    import.meta.env.VITE_CATEGORIES_URL;

const ProductContext = createContext({});

interface Props {
    children: ReactNode;
}

const ProductProvider = ({ children }: Props) => {

    const [productState, productDispatch] = useReducer(
        productReducer,
        productInitialState
    );

    useEffect(() => {
        const getProducts = async (
            url: ImportMetaEnv | string,
            dispatchFn: Dispatch < ProductActions >
        ): Promise < void > => {
            try {
                dispatchFn({ type: ProductTypes.SET_LOADING_PRODUCTS, payload: true });
                const res = await axios.get(url);
                dispatchFn({ type: ProductTypes.GET_ALL_PRODUCTS, payload: res.data });
                dispatchFn({ type: ProductTypes.SET_LOADING_PRODUCTS, payload: false });
            } catch (error) {
                console.log(error);
            }
        };
        getProducts(productsAPI, productDispatch);
    }, []);

    useEffect(() => {
        const getCategories = async (
            url: string | ImportMetaEnv,
            dispatchFn: Dispatch < ProductActions >
        ): Promise < void > => {
            try {
                const res = await axios.get(url);
                dispatchFn({ type: ProductTypes.GET_CATEGORIES, payload: res.data });
            } catch (error) {
                console.log(error);
            }
        };
        getCategories(categoriesAPI, productDispatch);
    }, []);

    const data = {
        productState,
    };
    return (
        <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
    );
};

export { ProductProvider };
export default ProductContext;