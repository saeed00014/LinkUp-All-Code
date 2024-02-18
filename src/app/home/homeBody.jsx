"use client";
import { useContext } from "react";
import { HomeContext } from "@/context/context";
import { useQuery } from "@tanstack/react-query";
import Post from "@/components/post/post";
import PostMaker from "@/components/postMaker/postMaker";
import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";

const HomeBody = () => {
  const { loginUser } = useContext(HomeContext);

  const getRandomPost = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post/random`);
      return post;
    },
  });

  return (
    <div className="flex flex-col items-center w-full h-screen pt-4 pb-[10rem] gap-4 bg-gray-200 dark:bg-gray-950 overflow-y-scroll">
      <PostMaker loginUser={loginUser} />
      {!getRandomPost.isPending ? (
        getRandomPost.data.data.response?.map((post) => {
          return (
            <div key={post.id}>
              <Post post={post} />
            </div>
          );
        })
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <LoadingSpin />
        </div>
      )}
    </div>
  );
};

export default HomeBody;
