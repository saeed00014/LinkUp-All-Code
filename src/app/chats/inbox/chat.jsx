import React from "react";
import Context from "./context";
import Room from "./room";
import SideBar from "./sideBar";

const Chat = () => {
  return (
    <div className="flex justify-start w-full h-full !overflow-hidden">
      <Context>
        <SideBar />
        <Room />
      </Context>
    </div>
  );
};

export default Chat;
