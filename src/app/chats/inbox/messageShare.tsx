import { ChatRoomContext } from "@/context/context";
import { ChatMessageType } from "@/type/type";
import { useContext } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const MessageShare = () => {
  const { chooseMessage, setShareMessage, setChooseMessage } =
    useContext(ChatRoomContext);

  const handleShare = () => {
    setShareMessage({
      id: chooseMessage.id,
      text: chooseMessage.text,
      post_id: chooseMessage.post_id,
      image: chooseMessage.image,
    });
    setChooseMessage({} as ChatMessageType);
  };

  return (
    <span
      onClick={handleShare}
      className="-rotate-90 p-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
    >
      <FaArrowTurnUp />
    </span>
  );
};

export default MessageShare;
