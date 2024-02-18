"use client";
import React, { useContext } from "react";
import { ProfileContext } from "@/context/context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { profile } from "@/assets/data/data";
import { baseURL } from "@/axios/axios";

const ProfileButtonChat = () => {
  const router = useRouter();
  const { targetUser_id } = useContext(ProfileContext);
  
  const chatStatus = useMutation({
    mutationFn: async () => {
      const response = await baseURL.get(`/chat/${targetUser_id}`);
      if (response.data) {
        const chat_id = response.data.chat_id;
        router.push(
          `/chats/inbox?chat_id=${chat_id}&targetUser_id=${targetUser_id}`
        );
      }
    },
  });

  const handleChat = () => {
    chatStatus.mutate();
  };

  return (
    <button
      onClick={handleChat}
      className="flex items-center justify-center w-full h-[1.8rem] dark:bg-gray-700 bg-gray-200"
    >
      {profile.sendMessage}
    </button>
  );
};

export default ProfileButtonChat;
