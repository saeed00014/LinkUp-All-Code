"use client";
import { useContext } from "react";
import { ExploreContext } from "@/context/context";
import Post from "@/components/post/post";
import LoadingSpin from "@/components/loadingSpin";
import { explore } from "@/assets/data/data";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import ErrorPage from "@/components/errorPage";
import { PostType } from "@/type/type";

const ExploreBody = () => {
  const { searchResult, searchValue, isSearchLoading } =
    useContext(ExploreContext);

  const getNewestPost = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post`);
      return post;
    },
  });

  if (getNewestPost.isLoading) {
    <div className="flex items-center justify-center w-full mt-[4rem]">
      <LoadingSpin />
    </div>;
  }

  if (getNewestPost.error) {
    return <ErrorPage />;
  }

  const defaultPost: PostType[] = getNewestPost?.data?.data?.response;

  if (!searchValue && defaultPost) {
    return (
      <div className="flex flex-col justify-start items-center w-full h-screen p-4 pb-[15rem] gap-3 overflow-y-scroll">
        <div className="flex flex-col w-fit gap-3">
          {defaultPost.map((post) => {
            return (
              <div key={post.id}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (searchValue && isSearchLoading) {
    return (
      <div className="flex items-center justify-center w-full mt-[4rem]">
        <LoadingSpin />
      </div>
    );
  }

  if (searchValue && !searchResult[0]) {
    return (
      <div className="flex items-center justify-center mt-[4rem]">
        {explore.noResult}
      </div>
    );
  }

  if (searchValue && searchResult[0]) {
    return (
      <div className="flex flex-col justify-start items-center w-full h-screen p-4 pb-[15rem] gap-3 overflow-y-scroll">
        <div className="flex flex-col w-fit gap-3">
          {searchResult.map((post) => {
            return (
              <div key={post.id}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default ExploreBody;
