import React from "react";
import { IoChatbubbles } from "react-icons/io5";
import RoomUserSearchResult from "./roomUserSearchResult";
import LoadingSpin from "@/components/loadingSpin";
import { chatPage, explore } from "@/assets/data/data";
import { UserInfoType } from "@/type/type";

type Props = {
  searchResult: UserInfoType[];
  searchValue: string;
  isPending: boolean;
};

const RoomUserSearchBody = ({
  searchResult,
  searchValue,
  isPending,
}: Props) => {
  if (!searchValue) {
    return (
      <>
        <span className="flex items-center justify-center h-10 text-[1rem]">
          {chatPage.findChat}
        </span>
        <span className="text-6xl">
          <IoChatbubbles />
        </span>
      </>
    );
  }

  if (isPending) {
    return <LoadingSpin />;
  }

  if (!searchResult[0]) {
    return (
      <div className="flex items-center justify-center w-full">
        {explore.noResult}
      </div>
    );
  }
  return (
    <ul className="flex flex-col w-full h-[20rem] overflow-y-scroll">
      {searchResult.map((user) => {
        return (
          <li
            key={user.id}
            className="group relative flex items-start justify-start w-full cursor-pointer border-b-[1px] dark:border-gray-600 border-gray-400"
          >
            <RoomUserSearchResult user={user} />
          </li>
        );
      })}
    </ul>
  );
};

export default RoomUserSearchBody;
