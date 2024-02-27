export type userFullType = {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  birth: number;
  job: string | null;
  link: string | null;
  bio: string;
  image: string | null;
  background: string | null;
};

export type UserInfoType = {
  id: number;
  firstname: string;
  username: string;
  image: string | null;
};

export type NewUserType = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  year: number;
  password: string;
};

export type PostType = {
  id: number;
  user_id: number;
  isComments: boolean;
  text: string;
  tag: string;
  myComment: string;
  image: string;
};


export type userEditType = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  job: string | null;
  link: string | null;
  bio: string;
  image: string | null;
  background: string | null;
};

export type ChatType = {
  id: number,
  userOne: number,
  userTwo: number,
  lastMessage?: string | null
}

export type ChatMessageType = {
  id?: number,
  user_id: number,
  post_id: number,
  text: string,
  image: string,
  attachedMessage_id?: number,
  attachedMessage?: string
}

export type ShareMessageType = {
  id: number,
  text: string,
  post_id: number
}

export type ChatSendMessageType = {
  text: string,
  image: string,
  user_id: number,
  post_id: string,
  attachedMessage_id: number,
  attachedMessage: string
}