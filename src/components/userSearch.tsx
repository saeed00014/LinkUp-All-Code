"use client";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { baseURL } from "@/axios/axios";
import { postShare, sideBar } from "@/assets/data/data";
import { UserInfoType } from "@/type/type";

type Props = {
  type: string;
  setSearchResult: React.Dispatch<React.SetStateAction<UserInfoType[]>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserSearch = ({
  type,
  setSearchResult,
  setSearchValue,
  setIsPending,
}: Props) => {
  const mutation = useMutation({
    mutationFn: async (searchValue: string) => {
      const response = await baseURL.get(
        `/user/search?username=${searchValue}`
      );
      if (response.data) {
        setSearchResult(response.data.response);
        setIsPending(false);
      }
    },
  });

  const handleChange = (e: React.SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchValue(value);
    value && setIsPending(true);
    !value && setSearchResult([]);
    value && mutation.mutate(value);
  };

  return (
    <div className="relative flex items-center justify-center w-full z-40">
      <div
        className={`relative flex items-center w-full gap-1 dark:bg-gray-800 bg-white ${type == "home" ? "border-b border-b-gray-400 dark:border-b-gray-600 px-2 py-2 min-h-[3.6rem]" : "pb-[1rem]"} z-40`}
      >
        <label
          id="userSearchlable"
          htmlFor="text"
          className={`absolute ${type == "home" ? "right-[1.25rem]" : "right-[5.2rem]"} font-[900] cursor-text z-50`}
        >
          <FaMagnifyingGlass />
        </label>
        {type == "postShare" && (
          <label htmlFor="text" className="min-w-max">
            {postShare.sendTo} :
          </label>
        )}
        <input
          type="text"
          name="text"
          id="text"
          placeholder={sideBar.searchBar}
          onChange={(e) => handleChange(e)}
          className={`w-full py-2 ${type == "home" ? "pr-10" : "pr-11"} pl-1  bg-gray-200 dark:bg-gray-700 rounded-[3rem] z-40`}
        />
      </div>
    </div>
  );
};

export default UserSearch;
