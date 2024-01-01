import { sideBar } from "@/assets/data/data";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SideBarHeader = () => {
  return (
    <header className="relative flex items-center justify-center w-full h-[57.5px] px-2 py-2 border-b border-b-gray-400 dark:border-b-gray-600">
      <label 
        htmlFor="text"
        className="absolute right-5 font-[900] cursor-text"
      >
        <FaMagnifyingGlass />
      </label>
      <input 
        type="text" 
        id="text"
        placeholder={sideBar.searchBar}
        className="w-full py-2 pr-10 pl-2 bg-gray-200 dark:bg-gray-700 rounded-[3rem]"
      />
    </header>
  )
}

export default SideBarHeader