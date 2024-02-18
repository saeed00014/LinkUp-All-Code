"use client";
import { useContext } from "react";
import { ExploreContext } from "@/context/context";
import { explore } from "@/assets/data/data";

const ExploreCategory = () => {
  const { category, setCategory } = useContext(ExploreContext);
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex items-center min-w-max h-[3.6rem] gap-3">
      <label htmlFor="sort">{explore.sortBy}</label>
      <select
        name="sort"
        id="sort"
        value={category}
        onChange={(e) => handleSelect(e)}
        className="px-2 py-1 rounded-[.2rem] [&>*]:py-1 bg-gray-200 dark:bg-gray-700"
      >
        <option value="date">{explore.date}</option>
        <option value="related">{explore.related}</option>
        <option value="papularity">{explore.papularity}</option>
      </select>
    </div>
  );
};

export default ExploreCategory;
