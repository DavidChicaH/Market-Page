import { useEffect, useContext } from "react";
import CategoriesButtons from "../components/CategoriesButtons";
import ProductsList from "../components/ProductsList";
import ProductContext from "../context/productContext";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
  const { state, dispatch, getProducts, productsAPI } =
    useContext(ProductContext);

  useEffect(() => {
    getProducts(productsAPI, dispatch);
  }, []);
  return (
    <div className="">
      <CategoriesButtons />
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
        <ProductsList
          products={state.products}
          categories={state.categories}
          categoryProducts={state.categoryProducts}
        />
      )}
    </div>
  );
};

export default Home;
