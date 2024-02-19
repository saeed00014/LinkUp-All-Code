"use client";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { PostCommentContext } from "@/context/context";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { baseURL } from "@/axios/axios";
import MessageEdit from "../../messageEdit";
import MessageDelete from "../../messageDelete";

const Message = ({ message }) => {
  const { setComments, chooseMessage, setChooseMessage, setEditMessage } =
    useContext(PostCommentContext);

  const commentUser = useQuery({
    queryKey: [`commentUser${message.id}`],
    queryFn: async () => {
      const response = await baseURL.get(
        `/comment/user?user_id=${message.user_id}`
      );
      return response;
    },
  });

  const handleClick = () => {
    message.id == chooseMessage.id && setChooseMessage("");
    message.id != chooseMessage.id && setChooseMessage(message);
  };

  if (!commentUser.isPending) {
    const user = commentUser.data.data.response;
    return (
      <li className="relative flex items-end min-w-full gap-2">
        <span className="relative min-w-10 h-10 rounded-full overflow-hidden">
          <Image
            fill={true}
            src={user.image || defaultImage}
            alt="profile picture"
          />
        </span>
        <div className="w-full">
          <span className="text-[.7rem]">{user.firstname}</span>
          <div
            className={`flex w-full text-[.8rem] ${message.id == chooseMessage.id ? "bg-gray-700" : ""} rounded-r-[1rem] z-20`}
          >
            <span
              onClick={handleClick}
              className="flex py-2 px-3 w-fit max-w-[20rem] text-[.8rem] bg-white dark:bg-gray-800 rounded-[.5rem]"
            >
              {message.text}
            </span>
            {message.id == chooseMessage.id && (
              <div className="flex items-center justify-start text-[1.3rem]  gap-0">
                <MessageDelete
                  chooseMessage={chooseMessage}
                  setChooseMessage={setChooseMessage}
                  setMessages={setComments}
                  edition="comment"
                />
                <MessageEdit
                  setEditMessage={setEditMessage}
                  chooseMessage={chooseMessage}
                  edition="comment"
                />
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }
};

export default Message;
