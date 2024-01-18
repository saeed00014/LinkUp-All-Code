import ChatsSearchBar from "./chatsSearchBar"
import ChatsUsers from "./chatsUsersCon"

const ChatsSideBar = () => {
  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 ">
      <ChatsSearchBar />
      <ChatsUsers />
    </div>
  )
}

export default ChatsSideBar