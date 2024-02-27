import React from "react";
import SearchUserResult from "./searchUserResult";
import LoadingSpin from "@/components/loadingSpin";
import { home } from "@/assets/data/data";
import { UserInfoType } from "@/type/type";

type Props = {
  searchResult: UserInfoType[];
  isPending: boolean;
};

const SearchUser = ({ searchResult, isPending }: Props) => {
  if(isPending) {
    return (
      <div className="flex flex-col w-full rounded-[.3rem] h-screen bg-white dark:bg-gray-800 overflow-y-scroll z-30">
        <div className="flex justify-center w-full mt-9">
          <LoadingSpin />
        </div>
      </div>
    )
  }

  if(!searchResult[0]) {
    return (
      <div className="flex flex-col w-full rounded-[.3rem] h-screen bg-white dark:bg-gray-800 overflow-y-scroll z-30">
        <div className="flex items-center justify-center w-full mt-9">
          {home.noResult}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full rounded-[.3rem] h-screen bg-white dark:bg-gray-800 overflow-y-scroll z-30">
      {searchResult?.map((result) => {
          return (
            <div key={result.id}>
              <SearchUserResult user={result} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchUser;
