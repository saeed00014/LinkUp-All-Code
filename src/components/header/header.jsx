import React from "react";
import HeaderLinks from "./headerLinks";
import LogoLink from "./logoLink";
import AcountInfo from "./acountInfo";
import MoreLink from "./moreLink";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-40">
      <nav className=" md:flex hidden items-start justify-between flex-col h-screen xl:w-[240px] w-[88px] py-2 px-4 border-l-[1px] border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800">
        <ul className="relative flex w-full h-full flex-col xl:gap-1 gap-2">
          <LogoLink />
          <HeaderLinks />
          <MoreLink />
          <div className="flex items-end h-full">
            <AcountInfo />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
