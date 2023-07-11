import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import { ProductProvider } from "./context/productContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App;
