"use client";
import { React, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import CloseHeader from "../closeHeader";
import CloseBackground from "../closeBackground";
import Input from "./input";
import CheckInput from "./checkInput";
import ImageDragDrop from "../imageDragDrop";
import { baseURL } from "@/axios/axios";
import { login, postMakerFormData } from "@/assets/data/data";
import LoadingSpin from "../loadingSpin";

const PostMakerForm = ({ setIsMakePostActive }) => {
  const ref = useRef();
  const [image, setImage] = useState("");
  const [isCommentsChecked, setIsCommentsChecked] = useState(true);
  const [isMyCommentChecked, setIsMyCommentChecked] = useState(true);
  const [isTagsChecked, setIsTagsChecked] = useState(true);
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");
  const [myComment, setMyComment] = useState("");
  const [isSendPostLoading, setIsSendPostLoading] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isNetError, setIsNetError] = useState(false);

  const postNewPost = useMutation({
    mutationFn: async (newPost) => {
      baseURL
        .post("/post", newPost)
        .then((res) => {
          setIsSendPostLoading(false);
          setIsNetError(false);
          if (res.data.inserted) {
            location.reload("");
          }
          if (!res.data.inserted) {
            console.log("no result");
          }
        })
        .catch(() => {
          setIsSendPostLoading(false);
          setIsNetError(true);
        });
    },
  });

  const hendleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    // const blob = new Blob([image], { type: "multipart/form-data" });
    fd.append("file", "blob");
    if (text || image) {
      setIsSendPostLoading(true);
      setIsFieldEmpty(false);
      postNewPost.mutate({
        text: text,
        isTagsChecked: isTagsChecked,
        isCommentsChecked: isCommentsChecked,
        isMyCommentChecked: isMyCommentChecked,
        tag: tag,
        myComment: myComment,
        image: image,
      });
    }
    if (!text && !image) {
      setIsFieldEmpty(true);
    }
  };

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
      <CloseBackground setEvent={setIsMakePostActive} />
      <div className="flex flex-col lg:w-[550px] w-[500px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800 z-50">
        <CloseHeader
          setEvent={setIsMakePostActive}
          title={postMakerFormData.postMaker}
        />
        <form
          ref={ref}
          onSubmit={(e) => hendleSubmit(e)}
          className="flex flex-col w-full gap-6 mb-3 overflow-scroll z-50"
        >
          <Input
            kind="textarea"
            lable={postMakerFormData.text}
            type="text"
            name="text"
            placeholder={postMakerFormData.textPlaceHolder}
            id="text"
            value={text}
            setValue={setText}
          />
          <ImageDragDrop
            setImage={setImage}
            lable={postMakerFormData.image}
            edition="post"
          />
          {isTagsChecked && (
            <Input
              kind="input"
              lable={postMakerFormData.tag}
              type="text"
              name="tag"
              placeholder={postMakerFormData.tagPlaceHolder}
              id="tag"
              value={tag}
              setValue={setTag}
            />
          )}
          {isMyCommentChecked && isCommentsChecked && (
            <Input
              kind="textarea"
              lable={postMakerFormData.myComment}
              type="text"
              name="myComment"
              placeholder={postMakerFormData.myCommentPlaceHolder}
              id="myComment"
              value={myComment}
              setValue={setMyComment}
            />
          )}
          <div className="flex gap-4">
            <CheckInput
              lable={postMakerFormData.commentCheck}
              type="checkbox"
              name="commentCheck"
              id="commentCheck"
              checked={isCommentsChecked}
              setChecked={setIsCommentsChecked}
            />
            <div
              className={`flex gap-2 ${!isCommentsChecked && "pointer-events-none opacity-70"}`}
            >
              <CheckInput
                lable={postMakerFormData.myComment}
                type="checkbox"
                name="myCommentCheck"
                id="myCommentCheck"
                checked={isMyCommentChecked}
                setChecked={setIsMyCommentChecked}
              />
            </div>
            <CheckInput
              lable={postMakerFormData.tagCheck}
              type="checkbox"
              name="tagCheck"
              id="tagCheck"
              checked={isTagsChecked}
              setChecked={setIsTagsChecked}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="submit"
              value={postMakerFormData.submit}
              className="py-2 px-4 rounded-[.5rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
            />
            {isSendPostLoading && (
              <div className="scale-75">
                <LoadingSpin />
              </div>
            )}
            {isFieldEmpty && (
              <span className="flex justify-start w-full text-[.95rem] text-red-600">
                {postMakerFormData.emptyFeild}
              </span>
            )}
            {isNetError && (
              <span className="flex justify-start w-full text-[.95rem] text-red-600">
                {login.networkErrorMessage}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostMakerForm;
