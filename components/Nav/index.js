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
      <nav className="w-screen flex text-white items-center flex-wrap bg-purple-400 p-3 md:fixed md:px-14 sticky top-0 z-50">
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
            active ? "transition delay-200" : "hidden"
          }   w-full h-screen md:h-full flex md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center flex justify-center items-center flex-col md:h-auto bg-purple-400">
            <NavItem href="/" name="Home" onClick={handleClick}/>
            <NavItem href="/about" name="About" onClick={handleClick}/>
            <NavItem href="/portfolio" name="Portfolio" onClick={handleClick}/>
            <NavItem href="/contact" name="Contact" onClick={handleClick}/>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
