import { messages } from "@/assets/data/data"

const Message = () => {
  return (
    <div className="flex w-full">
      <div className={`flex ${false ? "justify-start" : "justify-end" } min-w-full`}>
        <span> 

        </span>
        <span className="flex py-2 px-3 w-full max-w-[20rem] text-[.8rem] bg-white dark:bg-gray-800 rounded-[.5rem]">
          {messages.lastMassege}
          &nbsp;
          {messages.lastMassege}
          &nbsp;
          {messages.lastMassege}
          &nbsp;
          {messages.lastMassege}
          &nbsp;
          {messages.lastMassege}
        </span>
      </div>
    </div>
  )
}

export default Message