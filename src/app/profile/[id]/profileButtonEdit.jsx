import React, { useContext } from "react";
import { ProfileContext } from "@/context/context";
import { profile } from "@/assets/data/data";

const ProfileButtonEdit = () => {
  const { setIsEditActive } = useContext(ProfileContext);
  return (
    <button
      onClick={() => setIsEditActive(true)}
      className="w-full min-w-max h-[1.8rem] px-1 dark:bg-gray-700 bg-gray-200"
    >
      {profile.editProfile}
    </button>
  );
};

export default ProfileButtonEdit;
