import { useContext, useEffect } from "react";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductContext from "../context/productContext";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import CategoriesButtons from "../components/CategoriesButtons";

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
