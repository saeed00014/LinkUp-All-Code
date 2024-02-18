"use client";
import React from "react";
import { useTheme } from "next-themes";
import TungstenIcon from "@mui/icons-material/Tungsten";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div className="group/mode relative flex justify-center items-center w-full h-12 rounded-[.5rem] bg-gray-200 dark:bg-gray-700">
      <button
        onClick={() => {
          setTheme("light");
        }}
        className="hidden dark:flex items-center justify-center w-full h-full"
      >
        <span>Light Mode</span>
        <span className="absolute right-0 -top-1 rotate-180 group-hover/mode:text-yellow-400 text-gray-300 scale-75">
          <TungstenIcon />
        </span>
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className="flex items-center justify-center dark:hidden w-full h-full"
      >
        <span>Dark Mode</span>
        <span className="group/mode absolute right-0 -top-1 rotate-180 group-hover/mode:text-gray-700 text-yellow-500 scale-75">
          <TungstenIcon />
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
