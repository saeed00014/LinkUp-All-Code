import React, { useContext, useState } from "react";
import { PostContext } from "@/context/context";
import { useMutation } from "@tanstack/react-query";
import { IoClose } from "react-icons/io5";
import { baseURL } from "@/axios/axios";
import LoadingSpin from "../loadingSpin";
import { postText } from "@/assets/data/data";

const HeaderDeleteButton = () => {
  const { post } = useContext(PostContext);
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverProblem, setServerProblem] = useState(false);

  const deletePost = useMutation({
    mutationFn: async () => {
      baseURL
        .delete(`/post/${post.id}`)
        .then(() => {
          setIsLoading(false);
          setServerProblem(false);
          location.reload("");
        })
        .catch(() => {
          setIsLoading(false);
          setServerProblem(true);
        });
    },
  });

  const handleDelete = () => {
    setIsLoading(true);
    deletePost.mutate();
  };

  return (
    <>
      <button
        onClick={() => setIsDeleteActive(true)}
        className="relative flex items-center justify-center font-normal text-3xl min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <IoClose />
      </button>
      {isDeleteActive && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full bg-gray-500/25 dark:bg-gray-300/25 z-50">
          <div className="flex flex-col items-center justify-between w-[20rem] p-3 rounded-[.3rem] bg-white dark:bg-gray-800 z-40">
            <span className="mb-[1rem]">{postText.delete}</span>
            <div className="flex w-full gap-2">
              <button
                onClick={handleDelete}
                className="relative flex items-center justify-center w-full h-[2rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {isLoading && (
                  <span className="absolute right-0 scale-75">
                    <LoadingSpin />
                  </span>
                )}
                <sapn>{postText.deleteOk}</sapn>
              </button>
              <button
                onClick={() => setIsDeleteActive(false)}
                className="w-full h-[2rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {postText.deleteCancel}
              </button>
            </div>
            {serverProblem && (
              <span className="flex justify-start w-full text-[.95rem] mt-[.5rem] text-red-600">
                {postText.problem}
              </span>
            )}
          </div>
          <div
            onClick={() => setIsDeleteActive(false)}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full"
          ></div>
        </div>
      )}
    </>
  );
};

export default HeaderDeleteButton;
