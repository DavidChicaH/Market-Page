import { useContext } from "react";
import { FaDollarSign, FaTrashCan } from "react-icons/fa6";
import { CartItem } from "../interfaces/cartInterfaces";
import CartContext from "../context/cartContext";
import ProductContext from "../context/productContext";


const CartItems = () => {
  const {
    cartState,
    addToCart,
    clearCart,
    deleteOneFromItem,
    deleteItemFromCart,
  }: any = useContext(CartContext);

  const { productState }: any = useContext(ProductContext);

  const { products } = productState;
  const { cart } = cartState;

  const total: number = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="w-full flex flex-col py-4 mb-11">
        {cart.map((item: CartItem) => (
          <div key={item.id} className="flex gap-x-4 border-b py-4">
            <img className="w-24 h-max" src={item.image} alt="product-image" />
            <div className="flex flex-col gap-y-1">
              <h2 className="text-xl font-semibold">{item.title}</h2>

              <div className="my-4">
                <button
                  onClick={() => deleteOneFromItem(item.id)}
                  className={`px-3.5 py-2 border font-bold rounded-md transition-colors duration-300 ${
                    item.quantity === 1
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-primary-light"
                  } `}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="px-3 py-2">{item.quantity}</span>
                <button
                  onClick={() => addToCart(products, item.id)}
                  className="px-3 py-2 border font-bold rounded-md hover:bg-primary-light transition-colors duration-300"
                >
                  +
                </button>
              </div>

              <div className="flex gap-x-4 items-center">
                <h2 className="text-xl font-semibold text-primary">
                  Total for this item:{" "}
                </h2>
                <span className="font-semibold text-lg text-font">
                  $ {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <div
              onClick={() => deleteItemFromCart(item.id)}
              className="ml-auto flex items-center text-secondary cursor-pointer text-3xl"
            >
              <FaTrashCan />
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <>
            <h2 className="text-center p-4 text-xl font-semibold text-font">
              Summary: <span className="text-primary font-bold">$ {total}</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-evenly mt-2 gap-4">
              <button
                onClick={() => clearCart()}
                className="flex items-center flex-1 justify-center  bg-secondary text-white font-semibold py-2 px-4 rounded"
              >
                <FaTrashCan />
                <span>Clear cart</span>
              </button>
              <button className="flex items-center flex-1 justify-center  bg-primary text-white font-semibold py-2 px-4 rounded">
                <FaDollarSign />
                <span>Checkout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartItems;
