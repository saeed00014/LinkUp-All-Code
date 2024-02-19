import React, { useContext } from "react";
import { PostContext } from "@/context/context";
import { IoShareSocialOutline } from "react-icons/io5";
import { postText } from "@/assets/data/data";

const FooterShareButton = () => {
  const { setIsShareActive } = useContext(PostContext);
  return (
    <span onClick={() => setIsShareActive(true)} className="w-full">
      <div className="flex items-center justify-center w-full py-[.3rem] rounded-[.3rem] gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer">
        <span className="text-[1.2rem]">
          <IoShareSocialOutline />
        </span>
        <span className="text-[.9rem]">{postText.share}</span>
      </div>
    </span>
  );
};

export default FooterShareButton;
