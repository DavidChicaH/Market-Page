import { useContext } from "react";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductContext from "../context/productContext";
import { useParams } from "react-router-dom";
import CategoriesButtons from "../components/CategoriesButtons";
import Loader from "../components/Loader";
import { Product } from "../interfaces/productInterface";

const Categories = () => {
  const { productState } = useContext(ProductContext);

  const { category } = useParams<{ category: string }>();

  const productsByCategory = productState.products.filter(
    (product: Product) => product.category === category
  );

  return (
    <div className="min-h-screen">
      <CategoriesButtons />
      {productState.loading ? (
        <Loader />
      ) : (
        <>
          <ProductCategoryList products={productsByCategory} />
        </>
      )}
    </div>
  );
};

export default Categories;
