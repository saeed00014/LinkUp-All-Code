import { ChatRoomContext } from "@/context/context";
import React, { useContext } from "react";
import Message from "./message";

const RoomBodyMessageList = () => {
  const { messages } = useContext(ChatRoomContext);

  return (
    <ul
      id="chatMessageList"
      className="relative flex flex-col-reverse w-full h-full overflow-y-scroll justify-start items-start py-2 px-2 gap-1"
    >
      <div className="flex-col-revers w-full h-fit">
        {messages.map((message) => {
          return (
            <div key={message.id} className="w-full">
              <Message message={message} />
            </div>
          );
        })}
      </div>
    </ul>
  );
};

export default RoomBodyMessageList;
