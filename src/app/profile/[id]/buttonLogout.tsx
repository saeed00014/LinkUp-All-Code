import React from "react";
import Cookies from "universal-cookie";
import { profile } from "@/assets/data/data";

const ButtonLogout = () => {
  const handleClick = () => {
    const cookies = new Cookies();
    cookies.set("user", "", { path: "/" });
    location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full min-w-max h-[1.8rem] px-1 dark:bg-gray-700 bg-gray-200"
    >
      {profile.logout}
    </button>
  );
};

export default ButtonLogout;