import Image from "next/image"
import profile from "@/assets/images/profile.jpg"
import { messages } from "@/assets/data/data"

const MessagesChats = () => {
  return (
    <ul className="flex flex-col w-full mt-[4rem] !overflow-y-scroll">
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>
              {messages.name}
            </span>
            <span>|</span>
            <span>
              {messages.id}
            </span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>
              {messages.name}
            </span>
            <span>
              |
            </span>
            <span>
              {messages.id}
            </span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>
              {messages.name}
            </span>
            <span>
              |
            </span>
            <span>
              {messages.id}
            </span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
      <li className="flex w-full min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer  ">
        <span className="relative w-12 min-w-12 h-12 rounded-full">
          <Image 
            fill={true}
            src={profile}
            alt="profile picture"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
          <div className="flex gap-2">
            <span>{messages.name}</span>
            <span>|</span>
            <span>{messages.id}</span>
          </div>
          <span>
            {messages.lastMassege}
          </span>
        </div>
      </li>
    </ul>
  )
}

export default MessagesChats