"use client";
import React, { useContext } from "react";
import { PostContext } from "@/context/context";
import { FaRegComment } from "react-icons/fa";
import { postText } from "@/assets/data/data";

const PostFooterButtonComment = () => {
  const { post } = useContext(PostContext);
  const handleClick = () => {
    document.getElementById(`commentInputLable${post.id}`).click();
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center w-full py-[.3rem] rounded-[.3rem] gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer"
    >
      <span className="text-[1.2rem]">
        <FaRegComment />
      </span>
      <span className="text-[.9rem]">{postText.comment}</span>
    </div>
  );
};

export default PostFooterButtonComment;
