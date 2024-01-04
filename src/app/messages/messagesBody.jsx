import Chat from "./chat"
import MessagesUsers from "./messagesUsers"

const MessagesBody = () => {
  return (
    <div className="flex justify-start w-full h-screen pb-[57.5px]">
      <MessagesUsers />
      <Chat />
    </div>
  )
}

export default MessagesBody