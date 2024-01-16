"use client"
import { useContext, useRef, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import CloseHeader from "../closeHeader"
import Input from "./input"
import CheckInput from "./checkInput"
import ImageDragDrop from "../imageDragDrop"
import { baseURL } from "@/axios/axios"
import { postMaker } from "@/assets/data/data"

const PostMaker = ({setIsMakePostActive}) => {
  const ref = useRef()
  const [image, setImage] = useState("")
  const [isCommentsChecked, setIsCommentsChecked] = useState(true)
  const [isMyCommentChecked, setIsMyCommentChecked] = useState(true)
  const [isTagsChecked, setIsTagsChecked] = useState(true)
  const [tag, setTag] = useState("")
  const [text, setText] = useState("")
  const [myComment, setMyComment] = useState("")

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const response = await baseURL.post('/post', newPost)
    }
  })
  
  const hendleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData()
    const blob = new Blob([image], { type: "multipart/form-data" });
    console.log(blob)
    fd.append('file', 'blob')
    
    mutation.mutate({
      text: text,
      isTagsChecked: isTagsChecked,
      isCommentsChecked: isCommentsChecked,
      isMyCommentChecked: isMyCommentChecked,
      tag: tag,
      myComment: myComment,
      image: image
    })
  }

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
    <div className="flex flex-col w-full max-w-[600px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800">
      <CloseHeader 
        setEvent={setIsMakePostActive} 
        title={postMaker.postMaker} 
      />
      <form 
        ref={ref} 
        onSubmit={(e) => hendleSubmit(e)} 
        className="flex flex-col w-full gap-6 mb-3 overflow-scroll z-50"
      >
        <Input
          kind="textarea"
          lable={postMaker.text}
          type="text"
          name="text"
          placeholder={postMaker.textPlaceHolder}
          id="text"
          value={text}
          setValue={setText}
        />
        <ImageDragDrop 
          setImage={setImage} 
        />
        {isTagsChecked && 
          <Input
            kind="input"
            lable={postMaker.tag}
            type="text"
            name="tag"
            placeholder={postMaker.tagPlaceHolder}
            id="tag"
            value={tag}
            setValue={setTag}
          />
        }
        {isMyCommentChecked && isCommentsChecked && 
          <Input
            kind="textarea"
            lable={postMaker.myComment}
            type="text"
            name="myComment"
            placeholder={postMaker.myCommentPlaceHolder}
            id="myComment"
            value={myComment}
            setValue={setMyComment}
          />
        }
        <div className="flex gap-4">
          <CheckInput 
            lable={postMaker.commentCheck}
            type="checkbox"
            name="commentCheck"
            id="commentCheck"
            checked={isCommentsChecked}
            setChecked={setIsCommentsChecked}
          />
          <div className={`flex gap-2 ${!isCommentsChecked && "pointer-events-none opacity-70"}`}>
            <CheckInput 
              lable={postMaker.myComment}
              type="checkbox"
              name="myCommentCheck"
              id="myCommentCheck"
              checked={isMyCommentChecked}
              setChecked={setIsMyCommentChecked}
            />
          </div>
          <CheckInput 
            lable={postMaker.tagCheck}
            type="checkbox"
            name="tagCheck"
            id="tagCheck"
            checked={isTagsChecked}
            setChecked={setIsTagsChecked}
          />
        </div>
        <div>
          <input 
            type="submit" 
            value={postMaker.submit} 
            className="py-2 px-4 rounded-[.5rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
  </div>

  )
}

export default PostMaker