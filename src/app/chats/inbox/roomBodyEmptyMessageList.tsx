import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { chatData } from "@/assets/data/data";
import { ChatContext } from "@/context/context";

const RoomBodyEmptyMessageList = () => {
  const { currentChat } = useContext(ChatContext);
  const { targetUser } = currentChat;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-1">
      <span className="relative flex h-24 w-24">
        <Image
          src={targetUser.image || defaultImage}
          alt="profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />
      </span>
      <div className="flex items-center gap-1">
        <span className="pb-[.3rem]">{targetUser.firstname}</span>
        <span>|</span>
        <span>{targetUser.username}</span>
      </div>
      <Link
        href={`/profile/${targetUser.id}`}
        className="px-4 py-2 rounded-[.5rem] bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {chatData.viewProfile}
      </Link>
    </div>
  );
};

export default RoomBodyEmptyMessageList;
