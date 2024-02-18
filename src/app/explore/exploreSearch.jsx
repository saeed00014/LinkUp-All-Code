"use client";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ExploreContext } from "@/context/context";
import { explore } from "@/assets/data/data";
import { baseURL } from "@/axios/axios";

const ExploreSearch = () => {
  const {
    setSearchResult,
    setSearchValue,
    category,
    setIsSearchLoading,
  } = useContext(ExploreContext);

  const getSearchResult = useMutation({
    mutationFn: (searchValue) => {
      baseURL
        .get(`/post/search?value=${searchValue}&category=${category}`)
        .then((res) => {
          setSearchResult(res.data.response);
          setIsSearchLoading(false);
        })
        .catch(() => {
          setIsSearchLoading(false);
        });
    },
  });

  const handleChange = (e) => {
    const value = e.target.value;
    !value && setSearchValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.text.value;
    value && setSearchValue(value);
    value && setIsSearchLoading(true);
    value && getSearchResult.mutate(value);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="relative flex items-center justify-center w-full max-w-[19rem] z-40"
    >
      <div className="relative flex items-center w-full gap-1 dark:bg-gray-800 bg-white border-b border-b-gray-400 dark:border-b-gray-600 px-2 py-2 min-h-[3.6rem] h-[3.6rem] z-40">
        <label
          htmlFor="text"
          className="absolute right-[1.3rem] font-[900] cursor-text z-50"
        >
          <FaMagnifyingGlass />
        </label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder={explore.searchBar}
          onChange={(e) => handleChange(e)}
          className="w-full py-2 pr-10 pl-1 bg-gray-200 dark:bg-gray-700 rounded-[3rem] z-40"
        />
        <label
          htmlFor="exploreSearchSubmit"
          className="absolute left-[.8rem] flex items-center justify-center h-[2rem] w-[4rem] font-[900] cursor-pointer rounded-full bg-gray-300 dark:bg-gray-800 z-50"
        >
          <span className="pb-1">{explore.search}</span>
          <input
            type="submit"
            id="exploreSearchSubmit"
            className="invisible w-0 h-0"
          />
        </label>
      </div>
    </form>
  );
};

export default ExploreSearch;
