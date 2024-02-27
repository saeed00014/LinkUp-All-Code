"use client";
import React, { useState } from "react";
import { HiHashtag } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import PostMakerButtons from "./postMakerButtons";
import PostMakerForm from "./postMakerForm";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { postMakerData } from "@/assets/data/data";

const PostMaker = ({ image }: { image: string | null }) => {
  const [isMakePostActive, setIsMakePostActive] = useState(false);

  return (
    <div className="flex flex-col lg:w-[550px] w-[500px] h-[123px] pt-3 pb-2 px-4 rounded-[.8rem] bg-white dark:bg-gray-800">
      <div className="flex items-center gap-4 pb-3 mb-1 border-b-2 dark:border-gray-600">
        <span className="relative min-w-12 h-12 rounded-full overflow-hidden">
          <Image
            fill={true}
            src={image || defaultImage}
            alt="profile picture"
          />
        </span>
        <span
          onClick={() => setIsMakePostActive(true)}
          className="flex items-center justify-start w-full h-fit py-2 pr-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer"
        >
          {postMakerData.placeholder}
        </span>
      </div>
      <div className="flex justify-between">
        <PostMakerButtons
          title="video"
          text={postMakerData.video}
          icon={<IoVideocam />}
          setMakePost={setIsMakePostActive}
        />
        <PostMakerButtons
          title="image"
          text={postMakerData.image}
          icon={<IoMdPhotos />}
          setMakePost={setIsMakePostActive}
        />
        <PostMakerButtons
          title="tag"
          text={postMakerData.tag}
          icon={<HiHashtag />}
          setMakePost={setIsMakePostActive}
        />
      </div>
      {isMakePostActive && (
        <PostMakerForm setIsMakePostActive={setIsMakePostActive} />
      )}
    </div>
  );
};

export default PostMaker;
