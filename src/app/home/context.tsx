"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { HomeContext } from "@/context/context";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";
import ErrorPage from "@/components/errorPage";
import { UserInfoType } from "@/type/type";

const Context = ({ children }: { children: React.ReactNode }) => {
  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`);
      return response;
    },
  });

  if (getLoginUser.isPending) {
    return <LoadingSpin />;
  }

  if (getLoginUser.error) {
    return <ErrorPage />;
  }

  const loginUser: UserInfoType = getLoginUser?.data?.data?.response;

  return (
    <HomeContext.Provider
      value={{
        loginUser,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default Context;
