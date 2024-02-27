"use client";
import React from "react";
import { RiMoreFill } from "react-icons/ri";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { UserInfoType } from "@/type/type";

const AcountInfo = () => {
  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`);
      return response;
    },
  });
  if (!getLoginUser?.isPending) {
    const loginUser: UserInfoType = getLoginUser?.data?.data?.response;
    return (
      <div className="sticky bottom-0 flex xl:justify-between justify-start items-center w-full h-fit xl:pr-2 xl:py-1 xl:rounded-[.6rem] rounded-full xl:bg-gray-100 hover:bg-gray-200 dark:xl:bg-gray-700 dark:hover:bg-gray-600 duration-100 cursor-pointer">
        <Link
          href={`/profile/${loginUser.id}`}
          className="flex w-full h-fit gap-2"
        >
          <span className="relative w-14 h-14">
            <Image
              fill={true}
              src={loginUser.image || defaultImage}
              alt="profile picture"
              className="rounded-full"
            />
          </span>
          <div className="xl:flex hidden flex-col">
            <span>{loginUser.firstname}</span>
            <span>{loginUser.username}</span>
          </div>
        </Link>
        <span className="xl:flex hidden text-2xl p-2 rounded-full">
          <RiMoreFill />
        </span>
      </div>
    );
  }
};

export default AcountInfo;
