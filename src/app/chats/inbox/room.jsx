"use client";
import RoomBody from "./roomBody";
import RoomContext from "./roomContext";
import RoomHeader from "./roomHeader";
import RoomSendBar from "./roomSendBar";

const Room = () => {
  return (
    <div
      id="chatMessageListCon"
      className="relative flex flex-col justify-between w-full h-full bg-gray-200 dark:bg-gray-950"
    >
      <RoomContext>
          <RoomHeader/>
          <RoomBody />
          <RoomSendBar />
      </RoomContext>
    </div>
  )
};

export default Room;
