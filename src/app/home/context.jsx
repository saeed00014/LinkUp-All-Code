"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { HomeContext } from "@/context/context";
import LoadingSpin from "@/components/loadingSpin";
import { baseURL } from "@/axios/axios";

const Context = ({ children }) => {
  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`);
      return response;
    },
  });

  if (getLoginUser.isPending) {
    return (
      <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
        <LoadingSpin />
      </div>
    );
  }

  if (!getLoginUser.isPending) {
    const loginUser = getLoginUser.data.data.response;
    return (
      <HomeContext.Provider
        value={{
          loginUser,
        }}
      >
        {children}
      </HomeContext.Provider>
    );
  }
};

export default Context;
