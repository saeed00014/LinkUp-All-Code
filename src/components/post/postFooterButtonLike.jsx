import React, { useContext } from "react";
import { PostContext } from "@/context/context";
import { useMutation } from "@tanstack/react-query";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { postText } from "@/assets/data/data";
import { baseURL } from "@/axios/axios";

const PostFooterButtonLike = () => {
  const { post, isLiked, setIsLiked, setLikeCount } = useContext(PostContext);
  const post_id = post.id;
  const likedPostsIdStorage = JSON.parse(localStorage.getItem("likedPostsId"));

  const postLike = useMutation({
    mutationFn: async () => {
      const response = await baseURL.post(`/like?post_id=${post.id}`);
      setLikeCount((count) => count + 1);
      if (response) {
        likedPostsIdStorage
          ? likedPostsIdStorage.push({ post_id }) &&
            localStorage.setItem(
              "likedPostsId",
              JSON.stringify(likedPostsIdStorage)
            )
          : localStorage.setItem("likedPostsId", JSON.stringify([{ post_id }]));
      }
    },
  });

  const deleteLike = useMutation({
    mutationFn: async () => {
      const response = await baseURL.delete(`/like?post_id=${post.id}`);
      setLikeCount((count) => count - 1);
      if (response) {
        const filteredPostsStorage = likedPostsIdStorage.filter(
          (post_id) => post_id.post_id != post.id
        );
        localStorage.setItem(
          "likedPostsId",
          JSON.stringify(filteredPostsStorage)
        );
      }
    },
  });

  const handleLike = () => {
    !isLiked && postLike.mutate();
    isLiked && deleteLike.mutate();
    setIsLiked(!isLiked);
  };
  return (
    <div
      onClick={handleLike}
      className="flex items-center justify-center w-full py-[.3rem] rounded-[.3rem] gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer"
    >
      <span className="text-[1.2rem]">
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </span>
      <span className="text-[.9rem]">{postText.like}</span>
    </div>
  );
};

export default PostFooterButtonLike;
