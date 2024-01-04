import { FaMagnifyingGlass } from "react-icons/fa6"
import { messages } from "@/assets/data/data"

const MessagesSearchBar = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-[65px] px-2 py-3 border-b border-gray-500 dark:border-gray-500 bg-white dark:bg-gray-800 z-20">
      <label 
        htmlFor="text"
        className="absolute right-6"
      >
        <FaMagnifyingGlass />
      </label>
      <input 
        type="text"
        name="text"
        id="text" 
        placeholder={messages.searchBar}
        className="flex items-start justify-center w-full py-2 pl-2 pr-10 bg-gray-200 dark:bg-gray-700 rounded-full"
      />
    </div>
  )
}

export default MessagesSearchBar