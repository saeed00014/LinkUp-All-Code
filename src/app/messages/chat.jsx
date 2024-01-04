"use client"
import ChatHeader from "./chatHeader"
import ChatSendBar from "./chatSendBar";
import Message from "./message";

const Chat = () => {
  return (
    <div className="relative flex flex-col justify-between w-full h-auto bg-gray-200 dark:bg-gray-950">
      <ChatHeader />
      <div 
        id="chatScroller" 
        onDoubleClick={() => document.getElementById("chatScroller").scrollTo(0, document.body.scrollHeight)} 
        className="flex flex-col w-full h-full justify-start items-start py-2 px-2 gap-1 overflow-y-scroll"
      >
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <ChatSendBar />
    </div>
  )
}

export default Chat