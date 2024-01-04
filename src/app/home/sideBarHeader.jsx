"use client"
import { sideBar } from "@/assets/data/data";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SideBarSearchResult from "./sideBarSearchResult";
import { useState } from "react";

const SideBarHeader = () => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <header className="relative flex items-center justify-center w-full min-h-[57.9px] px-2 py-1 border-b border-b-gray-400 dark:border-b-gray-600 z-40">
      <label 
        htmlFor="text"
        className="absolute right-5 font-[900] cursor-text"
      >
        <FaMagnifyingGlass />
      </label>
      <input 
        type="text" 
        name="text"
        id="text"
        placeholder={sideBar.searchBar}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full py-2 pr-10 pl-2 bg-gray-200 dark:bg-gray-700 rounded-[3rem]"
      />
      {searchValue &&
        <SideBarSearchResult />}
    </header>
  )
}

export default SideBarHeader