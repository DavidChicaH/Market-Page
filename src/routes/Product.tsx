import { useContext } from "react";
import { Params, useParams } from "react-router-dom";
import ProductContext from "../context/productContext";
import Loader from "../components/Loader";
import { Product } from "../interfaces/productInterface";
import CartContext from "../context/cartContext";

const ProductInfo = () => {
  const { productState } : any = useContext(ProductContext);
  const { addToCart} : any = useContext(CartContext);

  const { id }: Readonly<Params<string>> = useParams();
  

  const product : Product = productState.products.find(
    //@ts-ignore
    (item : Product) => item.id === parseInt(id)
  );

  if (!product) return <Loader />;

  const { title, price, description, image }  = product;
  return (
    <>
      {productState.loading ? (
        <Loader />
      ) : (
        <section className="pt-32 pb-12 lg:py-32 h-full md:h-screen flex items-center">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                <img
                  className="max-w-[200px] lg:max-w-sm"
                  src={image}
                  alt="products-image"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-[26px] font-semibold mb-2 max-w-[450px] mx-auto lg:mx-0">
                  {title}
                </h1>
                <div className="text-3xl text-primary font-bold mb-6">
                  $ {price}
                </div>
                <p className="mb-8 font-medium text-lg">{description}</p>
                <button onClick={() => addToCart(product, product.id)} className="bg-primary hover:bg-secondary transition-colors duration-500 py-4 px-8 text-white rounded-md">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductInfo;
