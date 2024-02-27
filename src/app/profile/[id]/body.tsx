"use client";
import React, { useContext } from "react";
import { ProfileContext } from "@/context/context";
import BodyPostList from "./bodyPostList";
import Info from "./info";
import PostMaker from "@/components/postMaker/postMaker";

const Body = () => {
  const { user, isLoginUser } = useContext(ProfileContext);

  return (
    <div className="flex flex-row justify-center items-start gap-2 w-full h-svh px-4 mt-3 pb-[400px] overflow-y-scroll">
      <div className="flex flex-col justify-start items-center w-full gap-6">
        {isLoginUser && <PostMaker image={user?.image} />}
        <div className="lg:hidden flex items-start justify-center lg:w-6/12 w-full">
          <Info />
        </div>
        <BodyPostList />
      </div>
      <div className="sticky top-0 lg:flex hidden items-start justify-center lg:w-6/12 w-full">
        <Info />
      </div>
    </div>
  );
};

export default Body;
