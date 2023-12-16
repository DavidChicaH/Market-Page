import { useContext } from "react";
import CategoriesButtons from "../components/CategoriesButtons";
import ProductsList from "../components/ProductsList";
import ProductContext from "../context/productContext";
import Loader from "../components/Loader";

const Home = () => {
  const { productState } : any = useContext(ProductContext);

  return (
    <div>
      <CategoriesButtons />
      {productState.loading ? (
        <Loader />
      ) : (
        <ProductsList
          products={productState.products}
          categories={productState.categories}
        />
      )}
    </div>
  );
};

export default Home;
