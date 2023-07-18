import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import { ProductProvider } from "./context/productContext";
import Categories from "./routes/Categories";
import { CartProvider } from "./context/cartContext";
import ProductInfo from "./routes/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/category/:category" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <CartProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProvider>
    </>
  );
}

export default App;
