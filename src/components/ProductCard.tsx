import { FaPlus } from "react-icons/fa6";
import { Product } from "../interfaces/productInterface";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../context/cartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } : any = useContext(CartContext);
  return (
    <div>
      <div className="border border-font rounded-sm h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={product.image}
              alt="product-img"
            />
          </div>
        </div>
        <div className="absolute top-1 -right-11 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div
              onClick={() => addToCart(product, product.id)}
              className="flex justify-center items-center text-white w-12 h-12 bg-primary-light hover:bg-primary transition-colors duration-300 rounded-full"
            >
              <FaPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/products/${product.id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-x1"
          >
            <FaEye />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-secondary">
          {product.category}
        </div>
        <Link to={`/products/${product.id}`}>
          <h2 className="font-semibold mb-1 text-font">{product.title}</h2>
        </Link>
        <div className="flex py-1.5">
          <RatingStars rate={product.rating.rate} />
        </div>
        <h2 className="font-semibold text-font">$ {product.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
