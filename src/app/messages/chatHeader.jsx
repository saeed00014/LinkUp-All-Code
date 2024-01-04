import Image from "next/image"
import profile from "@/assets/images/profile.jpg"
import { messages } from "@/assets/data/data"

const ChatHeader = () => {
  return (
    <header className="flex w-full px-2 py-2 border-b border-b-gray-400 dark:border-b-gray-500 bg-white dark:bg-gray-800">
      <div className="flex gap-2">
        <span className="relative flex h-12 w-12">
          <Image
            src={profile}
            alt=""
            className="rounded-full"        
          />
        </span>
        <div className="flex flex-col justify-around text-[.9rem]">
          <span>{messages.name}</span>
          <span>{messages.id}</span>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader