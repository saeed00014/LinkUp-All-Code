import React from "react";
import { login } from "@/assets/data/data";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen gap-2 ">
      <span>{login.networkErrorMessage}</span>
      <span
        onClick={() => location.reload()}
        className="px-5 py-2 mt-2 rounded-[.5rem] bg-white dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 cursor-pointer"
      >
        {login.tryAgain}
      </span>
    </div>
  );
};

export default ErrorPage;
