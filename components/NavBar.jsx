"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "./Categories";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between relative m-4 xl:m-0 pb-8">
      <Image
        src="/logo.svg"
        alt="company logo"
        width={0}
        height={0}
        quality={100}
        className="w-12 h-8 -z-20"
      />
      <button className="text-white w-10 h-10 xl:hidden">
        {open ? (
          <Image
            onClick={() => setOpen(!open)}
            src="icon-menu-close.svg"
            alt="Menu open"
            width={0}
            height={0}
            quality={100}
            className="w-8 h-8 absolute right-0 top-0 z-30 duration-300"
          />
        ) : (
          <Image
            onClick={() => setOpen(!open)}
            src="icon-menu.svg"
            alt="Menu open"
            width={0}
            height={0}
            quality={100}
            className="w-10 h-5 absolute right-0 top-0 translate-y-1/2 z-30 duration-300"
          />
        )}
      </button>

      <div
        className={`${
          open
            ? "h-screen fixed top-4 z-20 -m-4 duration-300 max-w-sm"
            : "hidden"
        } `}
      >
        <div className="grid grid-cols-6 grid-rows-2 ">
          <div className="col-span-2 row-span-2 h-screen bg-opacity-50 bg-darkgrayishblue"></div>
          <div className="col-span-3 w-screen h-screen bg-offwhite">
            <Categories />
          </div>
        </div>
      </div>

      <div className="hidden xl:inline">
        <Categories />
      </div>
    </nav>
  );
}

export default NavBar;
