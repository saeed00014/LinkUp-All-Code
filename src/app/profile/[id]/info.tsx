import React, { useContext } from "react";
import { ProfileContext } from "@/context/context";
import ButtonChat from "./buttonChat";
import ButtonLogout from "./buttonLogout";
import ButtonFollow from "./buttonFollow";
import ButtonEdit from "./buttonEdit";
import { FaLink } from "react-icons/fa";
import { profile } from "@/assets/data/data";

const Info = () => {
  const { user, isLoginUser, follower, following } = useContext(ProfileContext);

  return (
    <div className="flex flex-col justify-between h-fit lg:w-fit w-[500px] pt-1 pb-3 px-4 dark:bg-gray-800 bg-white z-10 rounded-[.6rem]">
      <div className="fle flex-col gap-1">
        <span className="min-w-max">{profile.username}</span>
        <div className="flex justify-center flex-wrap w-full gap-2 text-[1.1rem]">
          <span>
            {user.firstname}&nbsp;{user.lastname}
          </span>
          <span>|</span>
          <span>{user.username}</span>
        </div>
      </div>
      {user.job && (
        <div className="flex flex-col items-center w-full gap-1">
          <span className="flex justify-start w-full">{profile.job}:</span>
          <span>{user.job}</span>
        </div>
      )}
      {user.link && (
        <div className="flex flex-col justify-center w-full gap-1">
          <span className="flex justify-start w-full">{profile.link}:</span>
          {user.link && (
            <a
              href={`http://${user.link}`}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center gap-1"
            >
              <span>
                <FaLink />
              </span>
              <span>{user.link}</span>
            </a>
          )}
        </div>
      )}
      {user.bio && (
        <div className="flex flex-col items-center w-full gap-1 pb-2">
          <span className="flex justify-start w-full">{profile.bio}:</span>
          <span>{user.bio}</span>
        </div>
      )}
      <div className="flex w-full gap-2">
        <div className="flex gap-2">
          <div className="flex justify-between h-[1.8rem] gap-1">
            <span className="min-w-[70px]">{profile.following}</span>
            <span className="flex justify-center">{follower}</span>
          </div>
          <div className="flex justify-between h-[1.8rem] gap-1">
            <span className="min-w-[70px]">{profile.followers}</span>
            <span className="flex justify-center">{following}</span>
          </div>
        </div>
        {isLoginUser ? (
          <div className="flex items-center justify-between w-full gap-2">
            <ButtonEdit />
            <ButtonLogout />
          </div>
        ) : (
          <div className="flex items-center justify-between w-full gap-2">
            <ButtonFollow />
            <ButtonChat />
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
