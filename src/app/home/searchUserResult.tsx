"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { UserInfoType } from "@/type/type";

const SearchUserResult = ({ user }: { user: UserInfoType }) => {
  const router = useRouter();
  const handleClick = (userId: number) => {
    router.push(`/profile/${userId}`);
  };

  return (
    <div
      onClick={() => handleClick(user.id)}
      className="group relative flex items-center justify-start w-full cursor-pointer border-b-[1px] dark:border-gray-600 border-gray-400"
    >
      <div className="flex w-full py-2 px-3 gap-2 hover:bg-gray-700">
        <span className="flex justify-center">
          <Image
            src={user.image || defaultImage}
            width={50}
            height={50}
            alt="user picture"
            className="object-cover w-12 min-w-12 rounded-full"
          />
        </span>
        <div className="flex flex-col justify-center items-start text-[.9rem]">
          <span>{user.firstname}</span>
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchUserResult;
