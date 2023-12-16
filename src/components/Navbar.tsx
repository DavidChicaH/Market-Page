import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const { cartState  } : any = useContext(CartContext);

  const { cart } = cartState;

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className="container mx-auto py-4 px-8 border-b-2 w-full flex">
      <div className="flex flex-1">
        <Link to="/" className="font-bold text-3xl text-primary">
          My Market
        </Link>

        <FaCartShopping className="text-secondary"/>
      </div>
      <div className="flex items-center text-secondary">
        <FaCartShopping
          className="cursor-pointer text-3xl"
          onClick={toggleSideBar}
        />
      </div>

      <div
        className={`fixed top-16 ${
          sidebar ? "right-0" : "-right-full"
        } h-full w-full md:max-w-[600px] border pb-6 overflow-y-scroll bg-white rounded-tl-md z-20 px-4 transition-all duration-300`}
      >
        <div className="flex justify-between py-6 border-b items-center">
          <h1 className="uppercase text-lg font-semibold">
            shopping cart ({cart.length})
          </h1>
          <CgClose
            className="text-3xl cursor-pointer"
            onClick={toggleSideBar}
          />
        </div>
        <CartItems />
      </div>
    </nav>
  );
};

export default Navbar;
