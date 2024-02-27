import React, { useContext } from 'react'
import { useMutation } from '@tanstack/react-query';
import { ChatContext, ChatSideBarContext } from '@/context/context';
import { baseURL } from '@/axios/axios';
import { FaTrash } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { chatData } from '@/assets/data/data';

const SideBarHeaderEdit = () => {
  const { chats, setChats } = useContext(ChatContext);
  const { isEditChatActive, setIsEditChatActive, choosedChatRoom_id } =
    useContext(ChatSideBarContext);

  const deleteChat = useMutation({
    mutationFn: async () => {
      try {
        await baseURL.delete(`/chat/${choosedChatRoom_id}`);
        const newChats = chats.filter(
          (chat) => chat.id != choosedChatRoom_id
        );
        if (!newChats[0]) {
          setIsEditChatActive(false);
        }
        setChats(newChats);
      } catch {}
    },
  });

  
  const handleDeleteChat = () => {
    choosedChatRoom_id && deleteChat.mutate();
  };

  if(isEditChatActive) {
    return (
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
    )
  }

  return (
    <span
      onClick={() => setIsEditChatActive(true)}
      className="cursor-pointer"
    >
      {chatData.editChat}
    </span>
  )
  
}

export default SideBarHeaderEdit