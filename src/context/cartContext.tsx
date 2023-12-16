import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";
import { Product } from "../interfaces/productInterface";
import { CartActions, CartTypes } from "../actions/cartActions";
import { CartItem } from "../interfaces/cartInterfaces";

const CartContext = createContext({});

interface Props {
    children: ReactNode;
}

const CartProvider = ({ children }: Props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (
        product: Product,
        id: number | string,
        dispatchFn: Dispatch < CartActions > = cartDispatch
    ) => {
        const cart: CartItem = { ...product, quantity: 1 };

        const cartItem = cartState.cart.find((item: Product) => item.id === id);
        if (cartItem) {
            const newCart: CartItem[] = [...cartState.cart].map((item: CartItem) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            dispatchFn({ type: CartTypes.ADD_TO_CART, payload: newCart });
        } else {
            dispatchFn({
                type: CartTypes.ADD_TO_CART,
                payload: [...cartState.cart, cart],
            });
        }
    };

    const deleteOneFromItem = (
        id: string | number,
        dispatchFn: Dispatch < CartActions > = cartDispatch
    ) => {
        const cartItem = cartState.cart.find((item: Product) => item.id === id);
        if (cartItem) {
            const newCart: CartItem[] = [...cartState.cart].map((item: CartItem) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
            dispatchFn({ type: CartTypes.REMOVE_ONE_FROM_CART, payload: newCart });
        }
    };

    const deleteItemFromCart = (
        id: string | number,
        dispatchFn: Dispatch < CartActions > = cartDispatch
    ) => {
        const newCart = cartState.cart.filter((item: CartItem) => item.id !== id);
        dispatchFn({ type: CartTypes.REMOVE_ALL_FROM_CART, payload: newCart });
    };

    const clearCart = (dispatchFn: Dispatch < CartActions > = cartDispatch) => {
        dispatchFn({ type: CartTypes.CLEAR_CART });
    };

    const data = {
        cartState,
        addToCart,
        clearCart,
        deleteOneFromItem,
        deleteItemFromCart,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;