import React, { useState } from "react";
import { IoChatbubbles } from "react-icons/io5";
import UserSearch from "@/components/userSearch";
import RoomUserSearchResult from "./roomUserSearchResult";
import LoadingSpin from "@/components/loadingSpin";
import { chatPage, explore } from "@/assets/data/data";

const RoomUserSearch = () => {
  const [searchResult, setSearchResult] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isPending, setIsPending] = useState("");

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
        {!searchResult ? (
          <div className="flex flex-col items-center justify-center w-full h-[20rem] bg-white dark:bg-gray-800 ">
            {isPending && searchValue && (
              <div className="flex justify-center w-full">
                <LoadingSpin />
              </div>
            )}
            {!searchValue && (
              <>
                <span className="flex items-center justify-center h-10 text-[1rem]">
                  {chatPage.findChat}
                </span>
                <span className="text-6xl">
                  <IoChatbubbles />
                </span>
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col w-full rounded-[.3rem] min-h-[20rem] max-h-[20rem] bg-white dark:bg-gray-800 overflow-y-scroll z-30">
            {!isPending && !searchResult[0] && searchValue && (
              <div className="flex items-center justify-center w-full mt-[4rem]">
                {explore.noResult}
              </div>
            )}
            {!isPending &&
              searchResult.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="group relative flex items-center justify-start w-full cursor-pointer border-b-[1px] dark:border-gray-600 border-gray-400"
                  >
                    <RoomUserSearchResult user={user} />
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomUserSearch;
