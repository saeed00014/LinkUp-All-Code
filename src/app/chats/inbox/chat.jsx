"use client"
import { useContext, useState } from "react"
import { ChatContext } from "../../../context/context"
import { IoChatbubbles } from "react-icons/io5"
import ChatBody from "./chatBody"
import UserSearch from "@/components/userSearch"
import ChatSearchResult from "./chatSearchResult"
import { chatPage, explore } from "@/assets/data/data"
import LoadingSpin from "@/components/loadingSpin"

const Chat = () => {
  const [searchResult, setSearchResult] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [isPending, setIsPending] = useState("")
  const { currentChat } = useContext(ChatContext)
  const { targetUser } = currentChat

  return (
    <>
      {targetUser ? 
        <ChatBody />
        : <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-[25rem] rounded-b-[1rem] mb-16 overflow-hidden">
              <div className="w-full rounded-t-[1rem] overflow-hidden">
                <UserSearch 
                  type={"home"} 
                  setSearchResult={setSearchResult}
                  setSearchValue={setSearchValue}
                  setIsPending={setIsPending}
                />
              </div>
              {!searchResult ? <div className="flex flex-col items-center justify-center w-full h-[20rem] bg-gray-800 ">
                {isPending && searchValue && 
                  <div className="flex justify-center w-full">
                    <LoadingSpin />
                  </div>
                }
                {!searchValue &&
                <>
                  <span className="flex items-center justify-center h-10 text-[1rem]">
                    {chatPage.findChat}
                  </span>
                  <span className="text-6xl">
                    <IoChatbubbles />
                  </span>
                </> 
                }
              </div> 
              : <div className="flex flex-col w-full rounded-[.3rem] min-h-[20rem] max-h-[20rem] bg-white dark:bg-gray-800 overflow-y-scroll z-30">
                  {!isPending && !searchResult[0] && searchValue &&
                    <div className="flex items-center justify-center w-full mt-[4rem]">
                      {explore.noResult}
                    </div>
                  }
                  {!isPending && searchResult.map((result) => {
                    return (
                      <ChatSearchResult 
                        user={result} 
                      />
                    )
                  })}
                </div> 
              }
            </div>
        </div>
      }
    </>
  )
}

export default Chat