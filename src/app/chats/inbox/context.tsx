"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChatContext } from "@/context/context";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";
import ErrorPage from "@/components/errorPage";
import { ChatType, CurrentChat, UserInfoType } from "@/type/type";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<ChatType[]>([]);
  const [currentChat, setCurrentChat] = useState<CurrentChat>(
    {} as CurrentChat
  );
  const [searchResult, setSearchResult] = useState<UserInfoType[]>(
    [] as UserInfoType[]
  );
  const [lastMessage, setLastMessage] = useState("");

  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`);
      return response;
    },
  });

  const getLoginUserChats = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await baseURL.get("/chat");
      setChats(response.data.response);
      return response;
    },
  });

  if (getLoginUser.isPending || getLoginUserChats.isPending) {
    return <LoadingSpin />;
  }

  if (getLoginUser.error) {
    return <ErrorPage />;
  }

  const loginUser = getLoginUser?.data?.data?.response;

  return (
    <ChatContext.Provider
      value={{
        loginUser,
        chats,
        setChats,
        currentChat,
        setCurrentChat,
        searchResult,
        setSearchResult,
        lastMessage,
        setLastMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default Context;
