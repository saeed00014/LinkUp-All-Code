"use client";
import {
  ChatMessageType,
  ChatSendMessageType,
  ChatType,
  CurrentChat,
  PostType,
  ShareMessageType,
  UserInfoType,
  userFullType,
} from "@/type/type";
import { createContext } from "react";

type HomeContext = {
  loginUser: UserInfoType;
};

export const HomeContext = createContext<HomeContext>({} as HomeContext);

export const HeaderUserLogin = createContext(null);

export const PostContext = createContext(null);
export const PostCommentContext = createContext(null);

export const PostShareContext = createContext(null);

type ProfileContext = {
  user: userFullType;
  isLoginUser: boolean;
  targetUser_id: string;
  follower: number;
  following: number;
  setIsEditActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProfileContext = createContext<ProfileContext>(
  {} as ProfileContext
);

type ChatContext = {
  loginUser: UserInfoType;
  chats: ChatType[];
  setChats: React.Dispatch<React.SetStateAction<ChatType[]>>;
  currentChat: CurrentChat;
  setCurrentChat: React.Dispatch<React.SetStateAction<CurrentChat>>;
  searchResult: UserInfoType[];
  setSearchResult: React.Dispatch<React.SetStateAction<UserInfoType[]>>;
  lastMessage: string;
  setLastMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatContext = createContext<ChatContext>({} as ChatContext);

type ChatRoomContext = {
  messages: ChatMessageType[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
  sendMessage: ChatSendMessageType;
  setSendMessage: React.Dispatch<React.SetStateAction<ChatSendMessageType>>;
  shareMessage: ShareMessageType;
  setShareMessage: React.Dispatch<React.SetStateAction<ShareMessageType>>;
  chooseMessage: ChatMessageType;
  setChooseMessage: React.Dispatch<React.SetStateAction<ChatMessageType>>;
};

export const ChatRoomContext = createContext<ChatRoomContext>(
  {} as ChatRoomContext
);

export type ChatSideBarContext = {
  choosedChatRoom_id: number;
  setChoosedChatRoom_id: React.Dispatch<React.SetStateAction<number>>;
  isEditChatActive: boolean;
  setIsEditChatActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatSideBarContext = createContext<ChatSideBarContext>(
  {} as ChatSideBarContext
);

type ExploreContext = {
  searchResult: PostType[];
  setSearchResult: React.Dispatch<React.SetStateAction<PostType[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isSearchLoading: boolean;
  setIsSearchLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExploreContext = createContext<ExploreContext>(
  {} as ExploreContext
);
