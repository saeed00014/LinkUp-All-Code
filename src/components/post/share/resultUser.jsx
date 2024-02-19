import React, { useContext, useState } from "react";
import { PostShareContext } from "@/context/context";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";

const ResultUser = ({ user }) => {
  const { setChooseUsers } = useContext(PostShareContext);
  const [isUserChoosed, setIsUserChoosed] = useState("");
  const handleChooseUser = () => {
    !isUserChoosed && setChooseUsers((oldUsers) => [...oldUsers, user]);
    isUserChoosed &&
      setChooseUsers((oldUsers) =>
        oldUsers.filter((oldUser) => oldUser.id != user.id)
      );
    setIsUserChoosed(!isUserChoosed);
  };
  return (
    <div
      onClick={handleChooseUser}
      className="group relative flex items-center justify-start w-full hover:bg-gray-700 cursor-pointer"
    >
      <div className="flex w-full py-2 gap-2  px-4">
        <span className="flex justify-center">
          <Image
            src={user.image || defaultImage}
            width={50}
            height={50}
            alt="user picture"
            className="object-cover w-12 min-w-12 rounded-full"
          />
        </span>
        <div className="flex flex-col justify-center items-start text-[.9rem]">
          <span>{user.firstname}</span>
          <span>{user.username}</span>
        </div>
      </div>
      <span
        className={`absolute left-5 flex w-[2rem] h-[2rem] ${isUserChoosed ? "bg-gray-300 dark:bg-gray-500" : ""} rounded-full border-2 dark:border-gray-500 border-gray-300`}
      ></span>
    </div>
  );
};

export default ResultUser;
