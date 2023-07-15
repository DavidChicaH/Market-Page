import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className="container mx-auto py-4 px-8 border-b-2 w-full flex">
      <div className="flex flex-1">
        <a href="/" className="font-bold text-3xl">
          My Market
        </a>
        <FaCartShopping />
      </div>
      <div className="flex items-center">
        <FaCartShopping
          className="cursor-pointer text-3xl"
          onClick={toggleSideBar}
        />
      </div>

      <div
        className={`fixed top-16 ${
          sidebar ? "right-0" : "-right-full"
        } h-full w-full md:max-w-[600px] border bg-white rounded-tl-md z-20 px-4 transition-all duration-300`}
      >
        <div className="flex justify-between py-6 border-b items-center">
          <h1 className="uppercase text-lg font-semibold">shopping cart (0)</h1>
          <CgClose
            className="text-3xl cursor-pointer"
            onClick={toggleSideBar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
