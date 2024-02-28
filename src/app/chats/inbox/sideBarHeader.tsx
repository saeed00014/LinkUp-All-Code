import React, { useContext } from "react";
import { ChatContext } from "@/context/context";
import Link from "next/link";
import { chatData } from "@/assets/data/data";
import SideBarHeaderEdit from "./sideBarHeaderEdit";
import { UserInfoType } from "@/type/type";

const SideBarHeader = () => {
  const { setCurrentChat } = useContext(ChatContext);

  const handleClick = () => {
    setCurrentChat({ targetUser: {} as UserInfoType, chat_id: 0 });
  };

  return (
    <div className="flex items-center justify-between w-full px-4 min-h-[57.5px] border-b border-b-gray-500">
      <Link
        href="/chats/inbox"
        onClick={handleClick}
        className="cursor-pointer"
      >
        {chatData.newChat}
      </Link>
      <SideBarHeaderEdit />
    </div>
  );
};

export default SideBarHeader;
