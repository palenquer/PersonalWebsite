import React, { useState } from "react";
import NavItem from "./NavItem";
import NavTitle from "./NavTitle";
import MenuIconOpen from "./NavMenu/MenuIconOpen";
import MenuIconClose from "./NavMenu/MenuIconClose";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="w-screen flex text-white items-center flex-wrap bg-purple-400 p-3 md:px-14 fixed z-50">
        <NavTitle />
        <button
          className={`${active ? "bg-purple-500" : ""} hover:bg-purple-500 inline-flex p-3 rounded md:hidden text-white ml-auto hover:text-white outline-none focus:outline-none`}
          onClick={handleClick}
        >
          <MenuIconOpen className={`${active ? "hidden" : ""} `} />
          <MenuIconClose
            className={`${active ? "" : "hidden"} fill-current text-white `}
          />
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full flex md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center flex justify-center items-center flex-col md:h-auto p-4">
            <NavItem href="/" name="Home" />
            <NavItem href="/about" name="About" />
            <NavItem href="/portfolio" name="Portfolio" />
            <NavItem href="/contact" name="Contact" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
