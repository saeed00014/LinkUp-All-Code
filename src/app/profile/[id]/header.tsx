"use client";
import React, { useContext } from "react";
import { ProfileContext } from "@/context/context";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";

const Header = () => {
  const { user } = useContext(ProfileContext);

  return (
    <div className="sticky flex items-center w-full lg:h-[200px] h-[160px] z-40">
      <div className="flex h-full w-full bg-gray-400 dark:bg-gray-700">
        {user.background && (
          <Image
            src={user.background}
            width={2000}
            height={500}
            alt=""
            className="min-h-full min-w-full object-cover"
          />
        )}
      </div>
      <div className="absolute lg:right-[10.5rem] right-[3rem] lg:top-[4.75rem] top-[4.3rem] flex lg:h-[130px] h-[100px] lg:w-[130px] w-[100px] z-10 rounded-full overflow-hidden">
        <Image
          src={user.image || defaultImage}
          width={200}
          height={200}
          alt=""
          className="min-h-full min-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;