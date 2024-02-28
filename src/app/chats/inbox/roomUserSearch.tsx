import React, { useState } from "react";
import UserSearch from "@/components/userSearch";
import { UserInfoType } from "@/type/type";
import RoomUserSearchBody from "./roomUserSearchBody";

const RoomUserSearch = () => {
  const [searchResult, setSearchResult] = useState<UserInfoType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-[25rem] rounded-b-[1rem] mb-16 overflow-hidden">
        <div className="w-full rounded-t-[1rem] overflow-hidden">
          <UserSearch
            type="home"
            setSearchResult={setSearchResult}
            setSearchValue={setSearchValue}
            setIsPending={setIsPending}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-[20rem] bg-white dark:bg-gray-800 ">
          <RoomUserSearchBody
            searchResult={searchResult}
            searchValue={searchValue}
            isPending={isPending}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomUserSearch;
