import MessagesSearchBar from "./messagesSearchBar"
import MessagesChats from "./messagesChats"

const MessagesUsers = () => {
  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 ">
      <MessagesSearchBar />
      <MessagesChats />
    </div>
  )
}

export default MessagesUsers