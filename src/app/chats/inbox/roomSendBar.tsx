"use client";
import { useContext, useState } from "react";
import { ChatContext, ChatRoomContext } from "@/context/context";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { messages } from "@/assets/data/data";
import { ShareMessageType } from "@/type/type";

const RoomSendBar = () => {
  const { loginUser } = useContext(ChatContext);
  const [editMessage, setEditMessage] = useState<{ text: string }>({
    text: "",
  });
  const { shareMessage, setShareMessage, setSendMessage } =
    useContext(ChatRoomContext);
  const [message, setMessage] = useState("");

  const handlePostMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSendMessage({
      user_id: loginUser.id,
      post_id: shareMessage.post_id,
      text: message,
      image: "",
      attachedMessage_id: shareMessage.id,
      attachedMessage: shareMessage.text,
    });
    setMessage("");
    setShareMessage({} as ShareMessageType);
  };

  const handleEditMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={
        editMessage ? (e) => handleEditMessage(e) : (e) => handlePostMessage(e)
      }
      className="sticky bottom-0 top-[15rem] flex flex-col items-center w-full bg-white dark:bg-gray-800 z-50"
    >
      <label
        htmlFor="chatsSubmit"
        className="absolute left-0 bottom-[0] flex items-center justify-center w-[3rem] h-[52px] text-[1.2rem] rotate-180 cursor-pointer"
      >
        <IoSend />
        <input type="submit" id="chatsSubmit" className="invisible w-0 h-0" />
      </label>
      {shareMessage.id && (
        <div className="flex justify-between items-center w-full h-[3rem] pr-2 bg-gray-700/25">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[38px] w-[.15rem] rounded-full bg-white"></span>
            <span>{shareMessage.text}</span>
          </div>
          <span
            onClick={() => setShareMessage({} as ShareMessageType)}
            className="flex justify-center w-[48px] text-2xl"
          >
            <IoClose />
          </span>
        </div>
      )}
      <input
        type="text"
        name="text"
        id="chatsSendBar"
        placeholder={messages.enterMessage}
        value={!editMessage ? message : editMessage.text}
        onChange={
          !editMessage
            ? (e) => setMessage(e.target.value)
            : (e) => setEditMessage({ text: e.target.value })
        }
        className="w-full px-2 pt-3 pb-4 bg-white dark:bg-gray-800"
      />
    </form>
  );
};

export default RoomSendBar;
