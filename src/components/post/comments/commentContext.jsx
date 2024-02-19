import React, { useState } from "react";
import { PostCommentContext } from "@/context/context";

const CommentContext = ({children}) => {
  const [chooseMessage, setChooseMessage] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  
  return (
    <PostCommentContext.Provider
      value={{
        chooseMessage,
        setChooseMessage,
        editMessage,
        setEditMessage,
        comments,
        setComments,
        page,
        setPage,
      }}
    >
      {children}
    </PostCommentContext.Provider>
  );
}

export default CommentContext;
