"use client";
import { useState } from "react";
import { headerLinkMore } from "@/assets/data/data";
import ThemeSwitcher from "../ThemeSwitcher";

const More = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="group relative w-full xl:py-1">
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex items-center xl:justify-start justify-center w-full"
      >
        <div
          className={`group flex items-center w-full xl:py-3 xl:pr-3 xl:pl-6 pr-3 pl-3 py-3 rounded-[.6rem] gap-5 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 ${isActive && "bg-gray-200 dark:bg-gray-700"} duration-100`}
        >
          <span className="text-3xl">{headerLinkMore.icon}</span>
          <span className="xl:flex hidden text-[1.2rem]">
            {headerLinkMore.name}
          </span>
        </div>
      </button>
      {isActive && (
        <div className="absolute -top-4 -left-[14.5rem] w-[14rem] h-fit px-2 py-2 rounded-[.6rem] bg-white dark:bg-gray-800 shadow-dark dark:shadow-light">
          <ThemeSwitcher />
        </div>
      )}
    </li>
  );
};

export default More;
