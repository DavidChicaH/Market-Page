import { useContext, useEffect } from "react";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductContext from "../context/productContext";
import { useParams } from "react-router-dom";
import CategoriesButtons from "../components/CategoriesButtons";
import Loader from "../components/Loader";

const Categories = () => {
  const { state, dispatch, getProductsByCategory, categoryAPI } =
    useContext(ProductContext);

  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    getProductsByCategory(`${categoryAPI}${category}`, dispatch);
  }, [category]);
  return (
    <div>
      <CategoriesButtons />
      {state.loading ? (
        <Loader />
      ) : (
        <>
          <ProductCategoryList
            products={state.products}
            categoryProducts={state.categoryProducts}
            categories={state.categories}
          />
        </>
      )}
    </div>
  );
};

export default Categories;
