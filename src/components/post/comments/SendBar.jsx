"use client";
import { useContext, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { PostContext } from "@/context/context";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import defaultImage from "@/assets/images/default.jpg";
import { postText } from "@/assets/data/data";
import { baseURL } from "@/axios/axios";

const SendBar = ({
  type,
  setEditMessage,
  editMessage,
  chooseMessage,
  setChooseMessage,
  setComments,
  comments,
}) => {

  const ref = useRef();
  const { post, miniEdition, loginUser } = useContext(PostContext);
  const [inputValue, setInputValue] = useState("");
  const postMessage = useMutation({
    mutationFn: async (newComment) => {
      const response = await baseURL.post(
        `/comment?post_id=${post.id}&loginUser_id=${loginUser.id}`,
        newComment
      );
      setComments([
        ...comments,
        { id: response.data.insertId, user_id: loginUser.id, text: inputValue },
      ]);
      setInputValue("");
    },
  });

  const putMessage = useMutation({
    mutationFn: async (newComment) => {
      await baseURL.put(`/comment/${chooseMessage.id}`, {
        newComment,
      });
      setChooseMessage("");
      setEditMessage("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = ref.current.text.value;
    if (editMessage) {
      const newComments = [];
      comments.forEach((comment) => {
        if (comment.id != chooseMessage.id) {
          newComments.push(comment);
        }
        if (comment.id == chooseMessage.id) {
          const id = comment.id;
          const user_id = comment.user_id;
          const newComment = { id: id, user_id: user_id, text: editMessage };
          newComments.push(newComment);
        }
      });
      setComments(newComments);
      putMessage.mutate(editMessage);
    }
    if (!editMessage && text) {
      postMessage.mutate({ text: text });
      type != "comments" && setInputValue("");
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditMessage = (e) => {
    setEditMessage(e.target.value);
  };

  return (
    <form
      ref={ref}
      onSubmit={(e) => handleSubmit(e)}
      className="relative flex items-center justify-start w-full py-2 gap-2 rounded-b-[1rem]"
    >
      <label
        id={`commentInputLable${post.id}`}
        htmlFor={`commentInput${post.id}`}
        className="relative w-10 min-w-10 h-10 rounded-full overflow-hidden"
      >
        <Image
          src={loginUser.image || defaultImage}
          width={55}
          height={55}
          alt="profile picture"
        />
      </label>
      <input
        type="text"
        name="text"
        id={`commentInput${post.id}`}
        placeholder={postText.input}
        value={editMessage || inputValue}
        onChange={
          !editMessage
            ? (e) => handleInputValue(e)
            : (e) => handleEditMessage(e)
        }
        className="flex items-center justify-start w-full h-fit py-1 pr-4 pl-10 rounded-full bg-gray-200 dark:bg-gray-700 duration-100"
      />
      <label
        htmlFor={`commentInputSubmit${post.id}${type}`}
        className={`absolute ${miniEdition ? "left-0" : "left-0"}  cursor-pointer flex items-center justify-center h-full w-12`}
      >
        <IoSend />
        <input
          type="submit"
          id={`commentInputSubmit${post.id}${type}`}
          className="invisible w-0"
        />
      </label>
    </form>
  );
};

export default SendBar;
