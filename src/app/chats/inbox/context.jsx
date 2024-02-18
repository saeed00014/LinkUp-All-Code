"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChatContext } from "@/context/context";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";

const Context = ({ children }) => {
  const [chats, setChats] = useState("");
  const [currentChat, setCurrentChat] = useState({});
  const [searchResult, setSearchResult] = useState([]);
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

  if (getLoginUserChats.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    );
  }

  if (!getLoginUser.isPending && !getLoginUserChats.isPending) {
    const loginUser = getLoginUser.data.data.response;
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
  }
};

export default Context;
