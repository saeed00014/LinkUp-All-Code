import { explore, sideBar } from "@/assets/data/data"
import { FaMagnifyingGlass } from "react-icons/fa6"

const ExploreHeader = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between w-full px-5 bg-white dark:bg-gray-800 dark:text-white h-[3.6rem] border-b-[1px] border-gray-400 dark:border-gray-600">
      <div className="flex items-center">
        <label 
          htmlFor="text"
          className="absolute right-8 font-[900] cursor-text"
        >
          <FaMagnifyingGlass />
        </label>
        <input 
          type="text" 
          id="text"
          placeholder={sideBar.searchBar}
          className="flex justify-center w-full max-w-[20rem] py-2 pr-10 pl-2 bg-gray-200 dark:bg-gray-700 rounded-[3rem]"
        />
      </div>
      <div className="flex gap-3">
        <label htmlFor="sort">
          {explore.sortBy}
        </label>
        <select 
          name="sort" 
          id="sort"
          className="px-2 py-1 rounded-[.2rem] [&>*]:py-1 bg-gray-200 dark:bg-gray-700"
        >
          <option value="date">
            {explore.date}
          </option>
          <option value="related">
            {explore.related}
          </option>
          <option value="papularity">
            {explore.papularity}
          </option>
        </select>
      </div>
    </header>
  )
}

export default ExploreHeader