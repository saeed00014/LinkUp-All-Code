"use client"
import { useContext, useState } from "react"
import { HomeContext } from "@/context/context"
import { IoMdArrowDropright } from "react-icons/io"
import SideBarSuggestion from "./sideBarSuggestion"
import UserSearch from "../../components/userSearch"
import UserSearchResult from "./userSearchResult"
import { home, sideBar } from "@/assets/data/data"
import LoadingSpin from "@/components/loadingSpin"

const SideBar = () => {
  const { searchResult, setSearchResult, suggestedUsers } = useContext(HomeContext)
  const [isOpen,  setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isPending, setIsPending] = useState("")

  return (
    <div className={`fixed ${isOpen ? "xl:left-0 left-0" : "xl:left-0 -left-[250px]" } duration-150 top-0 flex flex-col w-[250px] h-screen border-r border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 z-30`}>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute -right-[1.65rem] top-0 xl:hidden flex items-center justify-center w-[1.6rem] h-[57.9px] ${isOpen ? "rotate-180 border-l border-t" : " border-r border-b"} border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
      >
        <IoMdArrowDropright className="text-[1.6rem]"/>
      </span>
      <UserSearch 
        type="home"
        setSearchResult={setSearchResult}
        setSearchValue={setSearchValue}
        setIsPending={setIsPending}
      />
      {searchValue ? 
        <div className="flex flex-col w-full rounded-[.3rem] h-screen bg-white dark:bg-gray-800 overflow-y-scroll z-30">
          {isPending && 
            <div className="flex justify-center w-full mt-9">
              <LoadingSpin />
            </div>
          }
          {searchResult[0] && !isPending && 
            searchResult.map((result) => {
            return (
              <UserSearchResult 
                user={result}
              /> 
            )})
          }
          {!isPending && !searchResult[0] && 
            <div className="flex items-center justify-center w-full mt-9">
              {home.noResult}
            </div>
          }
        </div>
        : 
        <div className="flex flex-col justify-center items-center w-full h-fit px-3 py-2 gap-3">
          <span className="flex items-center justify-start w-full">
            {sideBar.papularUsers}
          </span>
          <div className="grid grid-cols-2 gap-2">
            {suggestedUsers && 
              suggestedUsers.map((user) => {
                return (
                  <div 
                    key={user.id}
                  
                  >
                    <SideBarSuggestion
                      user={user}
                    />  
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default SideBar