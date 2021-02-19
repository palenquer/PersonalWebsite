import React from "react";
import Link from "next/link";

function NavTitle() {
  return (
    <Link href="/">
    <div className="flex h-full items-center border-solid w-52">
      <span className="font-Teko text-3xl cursor-pointer">PAULO ALENQUER</span>
    </div>
    </Link>
  );
}

export default NavTitle;
