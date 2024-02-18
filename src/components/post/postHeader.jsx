import React, { useContext } from "react";
import { PostContext } from "@/context/context";
import Link from "next/link";
import PostHeaderButtonDelete from "./postHeaderButtonDelete";
import PostHeaderButtonInfo from "./postHeaderButtonInfo";
import defaultImage from "@/assets/images/default.jpg";
import Image from "next/image";

const PostHeader = ({ commentEdition }) => {
  const { post, postUser, isMyPost, miniEdition } = useContext(PostContext);
  return (
    <header
      className={`flex justify-between items-center ${miniEdition && !commentEdition ? "px-2" : "px-4"}  text-[.9rem] gap-8`}
    >
      <Link href={`/profile/${post.user_id}`} className="flex gap-4 w-full">
        <span className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            fill={true}
            src={postUser.image || defaultImage}
            alt="profile picture"
          />
        </span>
        <div className="flex flex-col">
          <span>{postUser.firstname}</span>
          <span>{postUser.username}</span>
        </div>
      </Link>
      {isMyPost ? <PostHeaderButtonDelete /> : <PostHeaderButtonInfo />}
    </header>
  );
};

export default PostHeader;
