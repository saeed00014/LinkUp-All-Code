"use client";
import React, { useState } from "react";
import { PostShareContext } from "@/context/context";
import { useQuery } from "@tanstack/react-query";
import CloseHeader from "../closeHeader";
import UserSearch from "@/components/userSearch";
import PostShareUserPageFooter from "./postShareUserPageFooter";
import PostShareUserResultUser from "@/components/post/postShareUserResultUser";
import PostShareUserResultUserInfo from "./postShareUserResultUserInfo";
import LoadingSpin from "../loadingSpin";
import { postShare } from "@/assets/data/data";
import { baseURL } from "@/axios/axios";

const PostShareUserPage = ({ setIsShareActive }) => {
  const [searchResult, setSearchResult] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [choosedUsers, setChooseUsers] = useState("");

  const loginUserFreind = useQuery({
    queryKey: ["loginUserFreind"],
    queryFn: async () => {
      const response = await baseURL.get(`/follow`);
      return response.data.response;
    },
  });

  return (
    <PostShareContext.Provider
      value={{
        choosedUsers,
        setChooseUsers,
      }}
    >
      <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/20 dark:bg-white/20 z-[90]">
        <div className="flex flex-col w-full max-w-[550px] bg-white dark:bg-gray-800 rounded-[1rem]">
          <div className="px-4">
            <CloseHeader setEvent={setIsShareActive} title={postShare.share} />
            <UserSearch
              type="postShare"
              setSearchResult={setSearchResult}
              setSearchValue={setSearchValue}
              setIsPending={setIsPending}
            />
          </div>
          <div className="flex flex-col h-screen min-h-full max-h-[25rem] bg-gray-900 gap-1">
            <span className="text-[.9rem] px-3">{postShare.suggested}</span>
            <div className="flex flex-col overflow-y-scroll">
              {(isPending || loginUserFreind.isPending) && (
                <div className="flex items-center justify-center w-full h-[6rem]">
                  <LoadingSpin />
                </div>
              )}
              {!isPending &&
                !loginUserFreind.isPending &&
                !searchValue &&
                loginUserFreind.data.map((user) => {
                  return (
                    <div key={user.id}>
                      <PostShareUserResultUserInfo user={user} />
                    </div>
                  );
                })}
              {!isPending &&
                !loginUserFreind.isPending &&
                searchResult &&
                searchResult.map((user) => {
                  return (
                    <div key={user.id}>
                      <PostShareUserResultUser user={user} />
                    </div>
                  );
                })}
            </div>
          </div>
          <PostShareUserPageFooter />
        </div>
      </div>
    </PostShareContext.Provider>
  );
};

export default PostShareUserPage;
