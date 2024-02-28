"use client";
import React, { useContext, useState } from "react";
import { ChatContext, ChatRoomContext } from "@/context/context";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RoomUserSearch from "./roomUserSearch";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";
import {
  ChatMessageType,
  ChatSendMessageType,
  ShareMessageType,
  UserInfoType,
} from "@/type/type";

const RoomContext = ({ children }: { children: React.ReactNode }) => {
  const { setCurrentChat, currentChat } = useContext(ChatContext);

  const searchParams = useSearchParams();
  const chat_id = searchParams?.get("chat_id");
  const targetUser_id = searchParams?.get("targetUser_id");

  const [sendMessage, setSendMessage] = useState<ChatSendMessageType>(
    {} as ChatSendMessageType
  );
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [shareMessage, setShareMessage] = useState<ShareMessageType>(
    {} as ShareMessageType
  );
  const [chooseMessage, setChooseMessage] = useState<ChatMessageType>(
    {} as ChatMessageType
  );

  const getCurrentChat = useQuery({
    queryKey: [`profileUser${chat_id}`],
    queryFn: async () => {
      if (chat_id && targetUser_id) {
        const targetUser = await baseURL.get(`/user/${targetUser_id}`);
        const isChat_idTrue = await baseURL.get(
          `/chat/check?chat_id=${chat_id}&targetUser_id=${targetUser_id}`
        );
        if (isChat_idTrue.data.response[0]) {
          const targetUserInfo: UserInfoType = targetUser.data.response;
          setCurrentChat({
            targetUser: targetUserInfo,
            chat_id: Number(chat_id),
          });
          return targetUser;
        }
        setCurrentChat({ targetUser: {} as UserInfoType, chat_id: 0 });
        return null;
      }
      return null;
    },
  });

  if (getCurrentChat.isPending) {
    return <LoadingSpin />;
  }

  if (getCurrentChat.error) {
    return <RoomUserSearch />;
  }

  return (
    <ChatRoomContext.Provider
      value={{
        messages,
        setMessages,
        sendMessage,
        setSendMessage,
        shareMessage,
        setShareMessage,
        chooseMessage,
        setChooseMessage,
      }}
    >
      {currentChat.chat_id ? children : <RoomUserSearch />}
    </ChatRoomContext.Provider>
  );
};

export default RoomContext;
