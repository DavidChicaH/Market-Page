import { useContext } from "react";
import ProductContext from "../context/productContext";
import { Category } from "../interfaces/productInterface";
import { Link } from "react-router-dom";

const CategoriesButtons = () => {
    const { productState } : any =
    useContext(ProductContext);


    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
      {productState.categories.map((category: Category[], index: number) => (
        <Link
          key={index}
          to={`/category/${category}`}
          className="bg-primary-light hover:bg-primary text-secondary hover:text-font transition-all duration-500 py-3 px-4 font-medium capitalize rounded-md"
        >
          {category}
        </Link>
      ))}
    </div>
    );
};

export default CategoriesButtons;