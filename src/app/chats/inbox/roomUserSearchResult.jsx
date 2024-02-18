"use client";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChatContext } from "@/context/context";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { baseURL } from "@/axios/axios";

const RoomUserSearchResult = ({ user }) => {
  const router = useRouter();
  const { loginUser, chats, setChats, setCurrentChat } =
    useContext(ChatContext);
  const getUserChatId = useMutation({
    mutationFn: async () => {
      const response = await baseURL.get(`/chat/${user.id}`);
      const chat_id = response.data.chat_id;
      router.push(`/chats/inbox?chat_id=${chat_id}&targetUser_id=${user.id}`);
      const isChatThere = chats.find((chat) => chat.id === chat_id)
      if (!isChatThere) {
        setChats((prev) => [
          ...prev,
          { id: chat_id, userOne: user.id, userTwo: loginUser.id },
        ]);
      }
      setCurrentChat({
        targetUser: user,
        chat_id: chat_id,
      });

      return response;
    },
  });

  const handleClick = () => {
    getUserChatId.mutate();
  };

  return (
    <div
      onClick={() => handleClick()}
      className="flex w-full py-2 px-3 gap-2 hover:bg-gray-700"
    >
      <span className="flex justify-center">
        <Image
          src={user.image || defaultImage}
          width={50}
          height={50}
          alt="user picture"
          className="object-cover w-12 min-w-12 rounded-full"
        />
      </span>
      <div className="flex flex-col justify-center items-start text-[.9rem]">
        <span>{user.firstname}</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default RoomUserSearchResult;
