"use client";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "@/context/context";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProfileBodyPostList from "./profileBodyPostList";
import PostMaker from "@/components/postMaker/postMaker";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";
import { home } from "@/assets/data/data";

const ProfileBody = () => {
  const { user, isLoginUser, page, targetUser_id } = useContext(ProfileContext);
  const [newPagePosts, setNewPagePosts] = useState([]);

  const getFirstPosts = useQuery({
    queryKey: [`userPosts${targetUser_id}`],
    queryFn: async () => {
      const post = await baseURL.get(
        `/user/post/${targetUser_id}?page=${page}`
      );
      return post;
    },
  });

  const getNewPosts = useMutation({
    mutationFn: async () => {
      const post = await baseURL.get(
        `/user/post/${targetUser_id}?page=${page}`
      );
      if (post.data.response) {
        post.data.response.map((post) => {
          setNewPagePosts((oldPagePosts) => [...oldPagePosts, post]);
        });
      }
      return post;
    },
  });

  useEffect(() => {
    page != 1 && getNewPosts.mutate();
  }, [page]);

  return (
    <div className="flex justify-center items-start xl:gap-[15rem] w-full h-svh px-4 mt-3 pb-[400px] overflow-y-scroll">
      <div className="flex flex-col justify-start gap-6">
        {isLoginUser && <PostMaker loginUser={user} />}
        {!getFirstPosts.isPending && getFirstPosts.data.data.response[0] ? (
          <ProfileBodyPostList
            posts={getFirstPosts.data.data.response}
            index={0}
          />
        ) : (
          !getFirstPosts.isPending && (
            <div className="flex flex-col items-center justify-center min-w-[550px] rounded-[.5rem] bg-white dark:bg-gray-800 dark:text-white gap-1 py-3">
              {home.noResult}
            </div>
          )
        )}
        {(getNewPosts.isPending || getFirstPosts.isPending) && (
          <div className="flex justify-center w-full">
            <LoadingSpin />
          </div>
        )}
        {!getNewPosts.isPending && getNewPosts.data && (
          <ProfileBodyPostList posts={newPagePosts} index={3} />
        )}
      </div>
    </div>
  );
};

export default ProfileBody;
