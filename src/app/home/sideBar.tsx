"use client";
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Suggestion from "./suggestion";
import UserSearch from "../../components/userSearch";
import SearchUser from "./searchUser";
import { UserInfoType } from "@/type/type";

const SideBar = () => {
  const [searchResult, setSearchResult] = useState<UserInfoType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [isPending, setIsPending] = useState(false);

  return (
    <div
      className={`fixed ${isOpen ? "xl:left-0 left-0" : "xl:left-0 -left-[250px]"} duration-150 top-0 flex flex-col w-[250px] h-screen border-r border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 z-30`}
    >
      <span
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute -right-[1.65rem] top-0 xl:hidden flex items-center justify-center w-[1.6rem] h-[57.9px] ${isOpen ? "rotate-180 border-l border-t" : " border-r border-b"} border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
      >
        <IoMdArrowDropright className="text-[1.6rem]" />
      </span>
      <UserSearch
        type="home"
        setSearchResult={setSearchResult}
        setSearchValue={setSearchValue}
        setIsPending={setIsPending}
      />
      {searchValue ? (
        <SearchUser
          searchResult={searchResult}
          isPending={isPending}
        />
      ) : (
        <Suggestion />
      )}
    </div>
  );
};

export default SideBar;
