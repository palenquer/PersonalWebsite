import React from "react";
import ActiveLink from "./ActivateLink";

function NavItem({ href , name}) {
  return (
    <li className="flex items-center w-20 h-full justify-center text-xl md:text-base mt-6 md:mt-0">
        <ActiveLink href={href}>
          <a className="hover:text-yellow-200 font-bold">{name}</a>
        </ActiveLink>
    </li>
  );
}

export default NavItem;
