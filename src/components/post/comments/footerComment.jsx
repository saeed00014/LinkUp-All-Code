"use client";
import React from "react";
import CommentContext from "./commentContext"
import FooterLikeButton from "../footerLikeButton";
import FooterCommentButton from "../footerCommentButton";
import CommentMessages from "./commentMessages";
import FooterHead from "../footerHead";
import FooterShareButton from "../footerShareButton";

const FooterComment = ({ commentEdition }) => {
  return (
    <footer className="flex flex-col">
      <FooterHead commentEdition={commentEdition} />
      <div className="flex justify-between items-center py-1 px-4 mt-2 border-t-2 border-b-2 dark:border-gray-600 gap-1">
        <FooterLikeButton />
        <FooterCommentButton />
        <FooterShareButton />
      </div>
      <CommentContext>
        <CommentMessages />
      </CommentContext>
    </footer>
  );
};

export default FooterComment;
