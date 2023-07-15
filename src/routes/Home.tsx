import { useEffect, useContext } from "react";
import CategoriesButtons from "../components/CategoriesButtons";
import ProductsList from "../components/ProductsList";
import ProductContext from "../context/productContext";
import Loader from "../components/Loader";

const Home = () => {
  const { state, dispatch, getProducts, productsAPI } =
    useContext(ProductContext);

  useEffect(() => {
    getProducts(productsAPI, dispatch);
  }, []);
  return (
    <div>
      <CategoriesButtons />
      {state.loading ? (
        <Loader />
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
