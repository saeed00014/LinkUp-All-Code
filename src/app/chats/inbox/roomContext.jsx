"use client";
import React, { useContext, useState } from "react";
import { ChatContext, ChatRoomContext } from "@/context/context";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RoomUserSearch from "./roomUserSearch";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";

const RoomContext = ({ children }) => {
  const { setCurrentChat, currentChat } = useContext(ChatContext);
  const searchParams = useSearchParams();
  const chat_id = searchParams?.get("chat_id");
  const targetUser_id = searchParams?.get("targetUser_id");
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [shareMessage, setShareMessage] = useState("");

  const getCurrentChat = useQuery({
    queryKey: [`profileUser${chat_id}`],
    queryFn: async () => {
      if (chat_id && targetUser_id) {
        const targetUser = await baseURL.get(`/user/${targetUser_id}`);
        const isChat_idTrue = await baseURL.get(
          `/chat/check?chat_id=${chat_id}&targetUser_id=${targetUser_id}`
        );
        if (isChat_idTrue.data.response[0]) {
          const targetUserInfo = targetUser.data.response;
          setCurrentChat({ targetUser: targetUserInfo, chat_id: chat_id });
        }
        if (!isChat_idTrue.data.response[0]) {
          setCurrentChat({ targetUser: "", chat_id: "" });
        }
        return targetUser;
      }
      return null
    },
  });

  if(getCurrentChat.isPending) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingSpin />
      </div>
    )
  }

  if (!getCurrentChat.isPending) {
    return (
      <ChatRoomContext.Provider
        value={{
          messages,
          setMessages,
          sendMessage,
          setSendMessage,
          shareMessage,
          setShareMessage,
        }}
      >
        {currentChat?.targetUser ? children : <RoomUserSearch />}
      </ChatRoomContext.Provider>
    );
  }
};

export default RoomContext;
