import React from "react";
import Logo from "./logo";
import AcountInfo from "./acountInfo";
import More from "./more";
import { navItems } from "@/assets/data/data";
import NavLink from "./navLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 z-40 flex flex-col items-start justify-between h-screen xl:w-[240px] w-[88px] py-2 px-4 border-l-[1px] border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800">
      <ul className="relative flex w-full h-full flex-col xl:gap-1 gap-2">
        <Logo />
        {navItems.map((link, e) => {
          return (
            <li key={e}>
              <NavLink link={link} />
            </li>
          )
        })}
        <More />
        <div className="flex items-end h-full">
          <AcountInfo />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
