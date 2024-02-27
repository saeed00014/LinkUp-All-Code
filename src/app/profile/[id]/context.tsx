"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProfileContext } from "@/context/context";
import EditForm from "./editForm";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";
import ErrorPage from "@/components/errorPage";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [isEditActive, setIsEditActive] = useState(false);

  const url = window.location.href;
  const targetUser_id = url.split("/")[url.split("/").length - 1];

  const getProfileUser = useQuery({
    queryKey: [`profileUser${targetUser_id}`],
    queryFn: async () => {
      const user = await baseURL.get(`/user/${targetUser_id}`);
      return user;
    },
  });

  const getFollowInfo = useQuery({
    queryKey: [`followInfo${targetUser_id}`],
    queryFn: async () => {
      const follow = await baseURL.get(
        `/follow/following?targetUser_id=${targetUser_id}`
      );
      return follow;
    },
  });

  if (getProfileUser.isPending || getFollowInfo.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    );
  }

  if (getProfileUser.error || getFollowInfo.error) {
    return <ErrorPage />;
  }

  const user = getProfileUser.data.data.response;
  const isLoginUser = getProfileUser.data.data.isLoginUser;
  const follower = getFollowInfo.data.data.follower;
  const following = getFollowInfo.data.data.following;

  return (
    <ProfileContext.Provider
      value={{
        user,
        isLoginUser,
        targetUser_id,
        follower,
        following,
        setIsEditActive,
      }}
    >
      {children}
      {isEditActive && <EditForm />}
    </ProfileContext.Provider>
  );
};

export default Context;
