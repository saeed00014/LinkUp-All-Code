"use client";
import React, { useContext, useEffect, useState } from "react";
import Post from "@/components/post/post";
import { ProfileContext } from "@/context/context";
import { PostType } from "@/type/type";
import { useMutation } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import ErrorPage from "@/components/errorPage";
import BodyRefPost from "./bodyRefPost";

const BodyPostList = () => {
  const { isLoginUser, targetUser_id } = useContext(ProfileContext);
  const [page, setPage] = useState(1);
  const [pagePosts, setPagePosts] = useState<PostType[]>([]);

  const getPagePosts = useMutation({
    mutationFn: async () => {
      const post = await baseURL.get(
        `/user/post/${targetUser_id}?page=${page}`
      );
      const newPosts: PostType[] = post?.data?.response;
      newPosts?.map((post) => {
        setPagePosts((oldPagePosts) => [...oldPagePosts, post]);
      });
      return true;
    },
  });

  useEffect(() => {
    getPagePosts.mutate();
  }, [page]);

  if (getPagePosts.isPending) {
    return (
      <div className="flex justify-center w-full">
        <LoadingSpin />
      </div>
    );
  }

  if (getPagePosts.error) {
    return <ErrorPage />;
  }

  return (
    <>
      {pagePosts[0]
        ? pagePosts.map((post: PostType, i: number) => {
            const isRef = i === page * 4 - 1;
            if (isRef) {
              return (
                <div key={post.id}>
                  <BodyRefPost setPage={setPage} post={post} />
                </div>
              );
            }
            return (
              <div id={post.id.toString()} key={post.id}>
                <Post isMyPost={isLoginUser} post={post} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default BodyPostList;
