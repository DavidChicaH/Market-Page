import { useContext, useEffect } from "react";
import ProductContext from "../context/productContext";
import { Category } from "../interfaces/productInterface";
import { Link } from "react-router-dom";

const CategoriesButtons = () => {
  const { state, dispatch, getCategories, categoriesAPI } =
    useContext(ProductContext);

  useEffect(() => {
    getCategories(categoriesAPI, dispatch);
  }, []);
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
      {state.categories.map((category: Category[], index: number) => (
        <Link
          key={index}
          to={`/category/${category}`}
          className="bg-red-200 py-3 px-4 font-bold rounded-md"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesButtons;
