import { explore, sideBar } from "@/assets/data/data"
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import test from "@/assets/images/profile.jpg"

const Explore = () => {
  return (
    <section>
      <header className="sticky top-0 flex items-center justify-between w-full px-5 bg-white dark:bg-gray-800 dark:text-white h-[3.6rem] border-b-[1px] border-gray-400 dark:border-gray-600">
        <div className="flex items-center">
          <label 
            htmlFor="text"
            className="absolute right-10 font-[900] cursor-text"
          >
            <FaMagnifyingGlass />
          </label>
          <input 
            type="text" 
            id="text"
            placeholder={sideBar.searchBar}
            className="flex justify-center w-full max-w-[20rem] w-full py-1 pr-14 pl-2 bg-gray-200 dark:bg-gray-700 rounded-[3rem]"
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
      <div className="grid grid-cols-5 w-full p-4 gap-3">
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
        <span className="flex justify-center">
          <Image 
            src={test}
            className="cover max-w-[20rem] w-full"
          />
        </span>
      </div>
    </section>
  )
}

export default Explore