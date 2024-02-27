"use client";
import React, { useContext, useState } from "react";
import { ChatContext, ChatRoomContext } from "@/context/context";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RoomUserSearch from "./roomUserSearch";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";
import { ChatMessageType, ShareMessageType, UserInfoType } from "@/type/type";
import ErrorPage from "@/components/errorPage";

const RoomContext = ({ children }: { children: React.ReactNode }) => {
  const { setCurrentChat, currentChat } = useContext(ChatContext);

  const searchParams = useSearchParams();
  const chat_id = searchParams?.get("chat_id");
  const targetUser_id = searchParams?.get("targetUser_id");

  const [sendMessage, setSendMessage] = useState<ChatMessageType | undefined>();
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [shareMessage, setShareMessage] = useState<
    ShareMessageType | undefined
  >(undefined);
  const [chooseMessage, setChooseMessage] = useState<
    ChatMessageType | undefined
  >(undefined);

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
        setCurrentChat({ targetUser: undefined, chat_id: 0 });
        return undefined;
      }
      return undefined;
    },
  });

  if (getCurrentChat.isPending) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingSpin />
      </div>
    );
  }

  if (getCurrentChat.error) {
    return <ErrorPage />;
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
      {currentChat?.targetUser ? children : <RoomUserSearch />}
    </ChatRoomContext.Provider>
  );
};

export default RoomContext;
