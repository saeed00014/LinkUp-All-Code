import Chat from "./chat"
import ChatsSideBar from "./chatsSideBar"
import Context from "./context"

const ChatsBody = () => {
  return (
    <div className="flex justify-start w-full h-full">
      <Context>
        <ChatsSideBar />
        <Chat />
      </Context>
    </div>
  )
}

export default ChatsBody