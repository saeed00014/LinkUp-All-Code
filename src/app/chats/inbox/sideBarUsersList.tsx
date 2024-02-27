"use client";
import React, { useContext } from "react";
import { ChatContext } from "@/context/context";
import SideBarUser from "./sideBarUesr";

const SideBarUsersList = () => {
  const { chats } = useContext(ChatContext);

  return (
    <ul className="flex flex-col w-full !overflow-y-scroll">
      {chats[0] && chats?.map((chat) => {
        return (
          <li key={chat.id}>
            <SideBarUser chat={chat} />
          </li>
        );
      })}
    </ul>
  );
};

export default SideBarUsersList;
