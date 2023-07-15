import { ReactNode, createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

const CartContext = createContext({});

interface Props {
  children: ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = () => {};

  const deleteFromCart = () => {};

  const clearCart = () => {};

  const data = {
    cartState,
    cartDispatch,
    addToCart,
    deleteFromCart,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
