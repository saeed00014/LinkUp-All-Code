import React from "react";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { sideBar } from "@/assets/data/data";
import SuggestionUser from "./suggestionUser";
import LoadingSpin from "@/components/loadingSpin";
import ErrorPage from "@/components/errorPage";
import { UserInfoType } from "@/type/type";

const Suggestion = () => {
  const getSuggestionUsers = useQuery({
    queryKey: ["suggestionUser"],
    queryFn: async () => {
      const users = await baseURL.get("/user");
      return users;
    },
  });

  if (getSuggestionUsers.isPending) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingSpin />
      </div>
    );
  }

  if (getSuggestionUsers.error) {
    return <ErrorPage />;
  }

  const suggestionUsers: UserInfoType[] = getSuggestionUsers?.data?.data?.response;

  return (
    <div className="flex flex-col justify-center items-center w-full h-fit px-2 py-2 gap-2">
      <span className="flex items-center justify-start w-full">
        {sideBar.papularUsers}
      </span>
      <div className="grid grid-cols-2 gap-2">
        {suggestionUsers?.map((user) => {
          return (
            <div key={user.id}>
              <SuggestionUser user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggestion;
