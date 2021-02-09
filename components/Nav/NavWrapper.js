import React from "react";
import NavItem from "./NavItem";
import MenuIcon from "../MenuIcon";

function NavWrapper() {
  return (
    <ul className="flex justify-between w-full h-14 items-center bg-purple-500 px-4 sm:px-20">
      <div className="flex p-2 h-full items-center border-solid w-52">
        <span className="font-Teko text-2xl">PAULO ALENQUER</span>
      </div>
      <div className="sm:flex w-full h-full justify-evenly items-center md:max-w-2xl hidden">  
        <NavItem href="/" name="Home" />
        <NavItem href="/about" name="About" />
        <NavItem href="/portfolio" name="Portfolio"/>
        <NavItem href="/contact" name="Contact"/>
      </div>
      <div className="sm:hidden">
        <MenuIcon/>
      </div>
    </ul>
  );
}

export default NavWrapper;
