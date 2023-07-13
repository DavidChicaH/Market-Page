import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/productContext";
import { TailSpin } from "react-loader-spinner";

const Product = () => {
  const { state, dispatch, getProducts, productsAPI } =
    useContext(ProductContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getProducts(`${productsAPI}${id}`, dispatch);
  }, []);

  const { title, price, description, image } = state.products;
  return (
    <>
      {state.loading ? (
        <div className="flex justify-center items-center h-screen">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
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
                <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                  {title}
                </h1>
                <div className="text-xl text-red-500 font-medium mb-6">
                  {price}
                </div>
                <p className="mb-8">{description}</p>
                <button className="bg-black py-4 px-8 text-white">
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

export default Product;
