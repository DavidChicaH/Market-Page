import { useContext, useEffect } from "react";
import ProductContext from "../context/productContext";

const Home = () => {
  const { state, getProducts, productsAPI } = useContext(ProductContext);

  useEffect(() => {
    getProducts(productsAPI);
  }, []);

  console.log(state);
  return (
    <div>
    </div>
  );
};

export default Home;
