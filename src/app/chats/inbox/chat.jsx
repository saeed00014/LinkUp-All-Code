import Context from "./context"
import ChatRoom from "./chatRoom"
import ChatSideBar from "./chatSideBar"

const Chat = () => {
  return (
    <div className="flex justify-start w-full h-full">
      <Context>
        <ChatSideBar />
        <ChatRoom />
      </Context>
    </div>
  )
}

export default Chat