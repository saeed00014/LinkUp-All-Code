"use client";
import React from "react";
import ErrorPage from "@/components/errorPage";
import { baseURL } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/app/loading";
import Login from "@/app/login/page";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await baseURL.get("/auth");
      return response;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (data.data.login) {
    return children;
  }

  return <Login />;
};

export default AuthProvider;
