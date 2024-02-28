import React from "react";
import { ChatMessageType } from "@/type/type";
import { AiFillEdit } from "react-icons/ai"

type Props = {
  chooseMessage: ChatMessageType;
  setEditMessage: React.Dispatch<React.SetStateAction<string>>;
  edition: string;
};

const MessageEdit = ({ chooseMessage, setEditMessage, edition }: Props) => {
  
  const handleEdit = () => {
    setEditMessage(chooseMessage.text)
  }

  return (
    <span
    onClick={handleEdit}
      className={`${edition == "message" ? "p-3" : "px-3 py-2"} hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
    >
      <AiFillEdit />
    </span>
  )
}
export default MessageEdit