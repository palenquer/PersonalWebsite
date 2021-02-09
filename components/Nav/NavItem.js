import React from "react";
import ActiveLink from "../ActivateLink";

function NavItem({ href , name}) {
  return (
    <li className="flex items-center w-20 h-full flex justify-center text-xs">
        <ActiveLink href={href}>
          <a className="hover:text-yellow-200 font-bold">{name}</a>
        </ActiveLink>
    </li>
  );
}

export default NavItem;
