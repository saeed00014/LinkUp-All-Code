import { useContext } from "react";
import { ChatContext, ChatSideBarContext } from "@/context/context";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { ChatType, UserInfoType } from "@/type/type";
import ErrorPage from "@/components/errorPage";

const SideBarUesr = ({ chat }: { chat: ChatType }) => {
  const { setCurrentChat } = useContext(ChatContext);
  const { isEditChatActive, choosedChatRoom_id, setChoosedChatRoom_id } =
    useContext(ChatSideBarContext);
  const router = useRouter();

  const handleClick = (targetUser: UserInfoType) => {
    if (!isEditChatActive) {
      router.push(
        `/chats/inbox?chat_id=${chat.id}&targetUser_id=${targetUser.id}`
      );
      setCurrentChat({
        targetUser: targetUser,
        chat_id: chat.id,
      });
    }
    if (isEditChatActive) {
      chat.id !== choosedChatRoom_id
        ? setChoosedChatRoom_id(chat.id)
        : setChoosedChatRoom_id(0);
    }
  };

  const getChatUserInfo = useQuery({
    queryKey: [`chatUser${chat.id}`],
    queryFn: async () => {
      const user = await baseURL.get(
        `/chat/user?userOne=${chat.userOne}&userTwo=${chat.userTwo}`
      );
      return user;
    },
  });

  if(getChatUserInfo.isPending) {
    return (
      <></>
    )
  }

  if(getChatUserInfo.error) {
    return (
      <ErrorPage />
    )
  }

  const targetUser: UserInfoType = getChatUserInfo?.data?.data?.response;

  return (
    <div
      onClick={() => handleClick(targetUser)}
      className="flex w-full items-center min-h-[4rem] p-2 gap-3 border-b border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
    >
      <span className="relative w-12 min-w-12 h-12">
        <Image
          fill={true}
          src={targetUser.image || defaultImage}
          alt="profile picture"
          className="rounded-full"
        />
      </span>
      <div className="flex flex-col h-full w-full justify-around text-[.9rem] ">
        <div className="flex gap-2">
          <span>{targetUser.firstname}</span>
          <span>|</span>
          <span>{targetUser.username}</span>
        </div>
        <span>{chat.lastMessage}</span>
      </div>
      {isEditChatActive && (
        <span
          className={`absolute left-5 flex w-[2rem] h-[2rem] ${choosedChatRoom_id == chat.id ? "bg-gray-300 dark:bg-gray-500" : ""}  rounded-full border-2 dark:border-gray-500 border-gray-300`}
        ></span>
      )}
    </div>
  );
};

export default SideBarUesr;
