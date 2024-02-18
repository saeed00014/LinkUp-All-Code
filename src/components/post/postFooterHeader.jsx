"use client";
import React, { useContext } from "react";
import { PostContext } from "@/context/context";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { postText } from "@/assets/data/data";

const PostFooterHeader = ({ commentEdition }) => {
  const { isLiked, miniEdition, likeCount, commentCount } =
    useContext(PostContext);
    
  return (
    <div
      className={`flex justify-between w-full pt-1 ${miniEdition && !commentEdition ? "px-2 text-[.8rem]" : "px-4"}`}
    >
      <div className="relative flex items-center justify-end w-fit gap-2 cursor-pointer z-10">
        <span>{isLiked ? <FaHeart /> : <FaRegHeart />}</span>
        <span>{likeCount}</span>
        {isLiked && <span>{postText.like}</span>}
      </div>
      <div className="flex gap-2">
        <span>{commentCount}</span>
        <span>{postText.comments}</span>
      </div>
    </div>
  );
};

export default PostFooterHeader;
