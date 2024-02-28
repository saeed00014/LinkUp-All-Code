import React, { useContext, useEffect } from "react";
import LoadingSpin from "@/components/loadingSpin";
import { ChatContext, ChatRoomContext } from "@/context/context";
import { useMutation, useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { io } from "socket.io-client";
import { ChatSendMessageType } from "@/type/type";
import ErrorPage from "@/components/errorPage";
import RoomBodyMessageList from "./roomBodyMessageList";
import RoomBodyEmptyMessageList from "./roomBodyEmptyMessageList";

const RoomBody = () => {
  const { messages, setMessages, sendMessage } = useContext(ChatRoomContext);
  const { currentChat } = useContext(ChatContext);
  const { chat_id } = currentChat;

  const getCurrentChatMessages = useQuery({
    queryKey: [`messages${chat_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/message?chat_id=${chat_id}`);
      setMessages(response.data.response);
      return response;
    },
  });

  const postNewMessage = useMutation({
    mutationFn: async ({
      sendMessage,
    }: {
      sendMessage: ChatSendMessageType;
    }) => {
      const response = await baseURL.post(
        `/message?chat_id=${chat_id}&user_id=${sendMessage.user_id}`,
        {
          user_id: sendMessage.user_id,
          text: sendMessage.text,
          post_id: sendMessage.post_id,
          image: sendMessage.image,
          attachedMessage_id: sendMessage.attachedMessage,
          attachedMessage: sendMessage.attachedMessage,
        }
      );
      const socket = io({ path: "/api/socket" });
      if (response.data) {
        socket.emit("newMessage", {
          message: { ...sendMessage, id: response.data.response },
        });
      }
      return response.data.response;
    },
  });

  useEffect(() => {
    const socket = io({ path: "/api/socket" });
    socket.emit("join", { chat_id: chat_id });
    if (sendMessage.text || sendMessage.image || sendMessage.post_id) {
      postNewMessage.mutate({ sendMessage });
    }
    socket.on("serverMessage", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    return () => {
      socket.disconnect();
    };
  }, [sendMessage]);

  if (getCurrentChatMessages.isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LoadingSpin />
      </div>
    );
  }

  if (getCurrentChatMessages.error) {
    return <ErrorPage />;
  }

  if (!messages[0]) {
    return <RoomBodyEmptyMessageList />;
  }

  return <RoomBodyMessageList />;
};

export default RoomBody;
