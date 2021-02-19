import React, { useState } from "react";
import NavItem from "./NavItem";
import NavTitle from "./NavTitle";
import MenuIconOpen from "./NavMenu/MenuIconOpen";
import MenuIconClose from "./NavMenu/MenuIconClose";
import { motion } from "framer-motion";

export const Navbar = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="w-screen flex text-white items-center flex-wrap bg-purple-400 p-3 md:fixed md:px-14 sticky top-0 z-50">
        <NavTitle />
        <button
          className={`${
            active ? "bg-purple-500" : ""
          } hover:bg-purple-500 inline-flex p-3 rounded md:hidden text-white ml-auto hover:text-white outline-none focus:outline-none`}
          onClick={handleClick}
        >
          <MenuIconOpen className={`${active ? "hidden" : ""} `} />
          <MenuIconClose
            className={`${active ? "" : "hidden"} fill-current text-white `}
          />
        </button>
        <div className=" hidden md:inline-flex flex-row ml-auto w-auto md:items-center justify-center items-center h-auto bg-purple-400">
          <NavItem href="/" name="Home" onClick={handleClick} />
          <NavItem href="/about" name="About" onClick={handleClick} />
          <NavItem href="/portfolio" name="Portfolio" onClick={handleClick} />
          <NavItem href="/contact" name="Contact" onClick={handleClick} />
        </div>

        <motion.div
          animate={active ? "open" : "closed"}
          variants={variants}
          className={`${
            active ? "" : "hidden"
          } md:hidden w-full h-screen flex text-white`}
        >
          <div className=" w-full flex justify-center items-center flex-col bg-purple-400">
            <NavItem href="/" name="Home" onClick={handleClick} />
            <NavItem href="/about" name="About" onClick={handleClick} />
            <NavItem href="/portfolio" name="Portfolio" onClick={handleClick} />
            <NavItem href="/contact" name="Contact" onClick={handleClick} />
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
