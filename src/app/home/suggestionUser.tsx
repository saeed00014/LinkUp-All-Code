"use client";
import React, { useState } from "react";
import { profile } from "@/assets/data/data";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { baseURL } from "@/axios/axios";
import { UserInfoType } from "@/type/type";

const SuggestionUser = ({ user }: { user: UserInfoType }) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const getFollowInfo = useQuery({
    queryKey: [`isFollowed${user.id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/follow/${user.id}`);
      setIsFollowed(response.data.isFollowed);
      return response;
    },
  });

  const followUnFollow = useMutation({
    mutationFn: async () => {
      await baseURL.delete(`/follow?targetUser_id=${user.id}`);
    },
  });

  const followFollow = useMutation({
    mutationFn: async () => {
      await baseURL.post(`/follow?targetUser_id=${user.id}`);
    },
  });

  const handleFollow = () => {
    setIsFollowed(true);
    followFollow.mutate();
  };

  const handleUnFollow = () => {
    setIsFollowed(false);
    followUnFollow.mutate();
  };

  if (!getFollowInfo.isPending) {
    return (
      <div className="flex flex-col items-center justify-center w-full px-3 pt-3 pb-3 bg-gray-200 dark:bg-gray-700 rounded-[1rem] gap-2">
        <Link
          href={`/profile/${user.id}`}
          className="relative min-w-14 h-14 rounded-full overflow-hidden cursor-pointer"
        >
          <Image
            fill={true}
            src={user.image || defaultImage}
            alt="profile picture"
          />
        </Link>
        <div className="flex flex-col justify-center items-center text-[.9rem]">
          <span>{user.firstname}</span>
          <span>{user.username}</span>
        </div>
        <button
          onClick={isFollowed ? handleUnFollow : handleFollow}
          className="flex items-center justify-center h-fit min-w-max py-2 px-4 text-[.8rem] bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-[.4rem]"
        >
          {isFollowed ? profile.unfollow : profile.follow}
        </button>
      </div>
    );
  }
};

export default SuggestionUser;
