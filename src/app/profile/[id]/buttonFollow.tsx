"use client";
import React, { useContext, useState } from "react";
import { ProfileContext } from "@/context/context";
import { useMutation, useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { profile } from "@/assets/data/data";

const ButtonFollow = () => {
  const { targetUser_id } = useContext(ProfileContext);
  const [isFollowed, setIsFollowed] = useState(false);

  const getFollowInfo = useQuery({
    queryKey: [`isFollowed${targetUser_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/follow/${targetUser_id}`);
      setIsFollowed(response.data.isFollowed);
      return response;
    },
  });

  const followUnFollow = useMutation({
    mutationFn: async () => {
      await baseURL.delete(`/follow?targetUser_id=${targetUser_id}`);
    },
  });

  const followFollow = useMutation({
    mutationFn: async () => {
      await baseURL.post(`/follow?targetUser_id=${targetUser_id}`);
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

  return (
    <div className="w-full min-w-max h-[1.8rem] px-1 dark:bg-gray-700 bg-gray-200">
      {!getFollowInfo.isPending && (
        <button
          className="flex items-center justify-center w-full h-full"
          onClick={isFollowed ? handleUnFollow : handleFollow}
        >
          {isFollowed ? profile.unfollow : profile.follow}
        </button>
      )}
    </div>
  );
};

export default ButtonFollow;
