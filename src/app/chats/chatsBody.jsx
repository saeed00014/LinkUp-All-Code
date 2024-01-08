import Chat from "./chat"
import ChatsSideBar from "./chatsSideBar"

const ChatsBody = () => {
  return (
    <div className="flex justify-start w-full h-screen pb-[57.5px]">
      <ChatsSideBar />
      <Chat />
    </div>
  )
}

export default ChatsBody