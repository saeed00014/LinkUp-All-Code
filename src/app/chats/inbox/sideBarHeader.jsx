import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { ChatContext, ChatSideBarContext } from "@/context/context";
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { baseURL } from "@/axios/axios";
import { chatData } from "@/assets/data/data";

const SideBarHeader = () => {
  const { chats, setChats, setCurrentChat } = useContext(ChatContext);
  const { setIsEditChatActive, isEditchatActive, choosedChatRoom } =
    useContext(ChatSideBarContext);

  const deleteChat = useMutation({
    mutationFn: () => {
      baseURL
        .delete(`/chat/${choosedChatRoom.chat_id}`)
        .then(() => {
          const newChats = chats.filter(
            (chat) => chat.id != choosedChatRoom.chat_id
          );
          if (!newChats[0]) {
            setIsEditChatActive(false);
          }
          setChats(newChats);
        })
        .catch((err) => {
          throw err;
        });
    },
  });

  const handleDeleteChat = () => {
    choosedChatRoom && deleteChat.mutate();
  };

  const handleClick = () => {
    setCurrentChat("");
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
      {isEditchatActive ? (
        <div className="flex items-center gap-3">
          <button
            onClick={handleDeleteChat}
            className="relative flex p-[.85rem] text-[1rem] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FaTrash />
          </button>
          <button
            onClick={() => setIsEditChatActive(false)}
            className="relative flex p-[.5rem] text-[1.7rem] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <IoClose />
          </button>
        </div>
      ) : (
        <span
          onClick={() => setIsEditChatActive(true)}
          className="cursor-pointer"
        >
          {chatData.editChat}
        </span>
      )}
    </div>
  );
};

export default SideBarHeader;
