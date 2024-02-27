"use client";
import { useState } from "react";
import { ExploreContext } from "@/context/context";
import { PostType } from "@/type/type";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [searchResult, setSearchResult] = useState<PostType[]>([]);
  const [category, setCategory] = useState("date");
  const [searchValue, setSearchValue] = useState("");
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  return (
    <ExploreContext.Provider
      value={{
        searchResult,
        setSearchResult,
        category,
        setCategory,
        searchValue,
        setSearchValue,
        isSearchLoading,
        setIsSearchLoading,
      }}
    >
      {children}
    </ExploreContext.Provider>
  );
};

export default Context;
