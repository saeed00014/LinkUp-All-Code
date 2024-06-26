"use client";
import React, { useContext, useState } from "react";
import { ChatContext, ChatRoomContext } from "@/context/context";
import MessageDelete from "../../../components/messageDelete";
import MessageEdit from "../../../components/messageEdit";
import MessageShare from "./messageShare";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";

const RoomHeader = () => {
  const { currentChat } = useContext(ChatContext);
  const { targetUser } = currentChat;
  const [editMessage, setEditMessage] = useState("");
  const { setMessages, chooseMessage, setChooseMessage } =
    useContext(ChatRoomContext);

  return (
    <header className=" flex w-full justify-between px-2 py-2 border-b min-h-[57.59px] border-b-gray-400 dark:border-b-gray-500 bg-white dark:bg-gray-800 z-40">
      <Link href={`/profile/${targetUser.id}`} className="flex gap-2">
        <span className="relative flex h-10 w-10">
          <Image
            src={targetUser?.image || defaultImage}
            alt=""
            width={60}
            height={60}
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col justify-around text-[.9rem]">
          <span>{targetUser.firstname}</span>
          <span>{targetUser.username}</span>
        </div>
      </Link>
      {chooseMessage.id >= 0 && (
        <div className="flex items-center text-[1.3rem] gap-1">
          <MessageDelete
            setMessages={setMessages}
            setChooseMessage={setChooseMessage}
            chooseMessage={chooseMessage}
            edition="message"
          />
          {!chooseMessage.post_id ? (
            <MessageEdit
              chooseMessage={chooseMessage}
              setEditMessage={setEditMessage}
              edition="message"
            />
          ): null}
          <MessageShare />
        </div>
      )}
    </header>
  );
};

export default RoomHeader;
