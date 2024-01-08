"use client"
import { useRef, useState } from "react"
import { postMaker } from "@/assets/data/data"
import ImageDragDrop from "../imageDragDrop"
import CloseHeader from "../closeHeader"

const PostMaker = ({setIsMakePostActive}) => {
  const ref = useRef()
  const [image, setImage] = useState("")
  const [isCommentsChecked, setIsCommentsChecked] = useState(true)
  const [isMyCommentChecked, setIsMyCommentChecked] = useState(true)
  const [isTagsChecked, setIsTagsChecked] = useState(true)
  
  const hendleSubmit = (e) => {
    e.preventDefault()
    const currentRef = ref.current
    const text = currentRef.text.value
    const image = currentRef.image.value
    const fd = new FormData()
    fd.append('file', binaryImage)
  }

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center w-screen h-screen bg-gray-700/80 z-40 overflow-hidden">
    <div className="flex flex-col w-full max-w-[600px] my-10 px-4 rounded-[1rem] bg-white dark:bg-gray-800">
      <CloseHeader setEvent={setIsMakePostActive} title={postMaker.postMaker} />
      <form 
      ref={ref} 
      onSubmit={(e) => hendleSubmit(e)} 
      className="flex flex-col w-full gap-6 mb-3 overflow-scroll z-50"
      >
        <div className="flex flex-col justify-between w-full gap-2">
          <label
            id="postMakeTextLable" 
            htmlFor="text" 
            className=" text-[.8rem]"
          >
            {postMaker.text}
          </label>
          <textarea 
            type="textarea" 
            name="text" 
            id="text"
            className="flex items-start justify-start text-start align-top w-full min-h-[8rem] max-h-[20rem] py-1 px-1 bg-gray-200 dark:bg-gray-700" 
          />
        </div>
        <ImageDragDrop setImage={setImage} />
        {isTagsChecked && 
          <div className="flex flex-col gap-1">
            <label 
              htmlFor="tag" 
              className="min-w-max text-[.8rem]"
            >
              {postMaker.tag}
            </label>
            <input 
              type="text" 
              name="tag"
              id="tag"
              className="w-full py-1 px-1 bg-gray-200 dark:bg-gray-700"
            />
          </div>
        }
        {isMyCommentChecked && isCommentsChecked && 
          <div className="flex flex-col gap-1">
            <label 
              htmlFor="myComment" 
              className="min-w-max text-[.8rem]"
            >
              {postMaker.myComment}
            </label>
            <textarea 
              type="text" 
              name="myComment"
              id="myComment"
              className="min-h-[3rem] max-h-[5rem] w-full py-1 px-1 bg-gray-200 dark:bg-gray-700"
            />
          </div>
        }
        <div className="flex gap-4">
          <div className="flex gap-2">
            <input 
              type="checkbox"
              name="commentCheck"
              id="commentCheck" 
              onChange={() => setIsCommentsChecked(!isCommentsChecked)}
              checked={isCommentsChecked}
            />
            <label htmlFor="commentCheck">
              {postMaker.commentCheck}
            </label>
          </div>
          <div className={`flex gap-2 ${!isCommentsChecked && "pointer-events-none opacity-70"}`}>
            <input 
              type="checkbox" 
              name="myCommentCheck"
              id="myCommentCheck" 
              onChange={() => setIsMyCommentChecked(!isMyCommentChecked)}
              checked={isMyCommentChecked}
              />
            <label 
              htmlFor="myCommentCheck"
            >
              {postMaker.myComment}
            </label>
          </div>
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              name="tagCheck"
              id="tagCheck" 
              onChange={() => setIsTagsChecked(!isTagsChecked)}
              checked={isTagsChecked}
            />
            <label htmlFor="tagCheck">
              {postMaker.tagCheck}
            </label>
          </div>
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