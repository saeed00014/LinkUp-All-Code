"use client"
import { post, postMaker } from "@/assets/data/data"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useCallback } from 'react';
import { useDropzone} from 'react-dropzone';

const PostMaker = ({clicked}) => {
  const ref = useRef()
  const [preview, setPreview] = useState("")
  
  const hendleSubmit = (e) => {
    e.preventDefault()
    const currentRef = ref.current
    const text = currentRef.text.value
    const image = currentRef.image.value
    const fd = new FormData()
    fd.append('file', preview)
  }
  
  const onDrop = useCallback((acceptedFiles) => {
    const file = new FileReader;
  
    file.onload = function() {
      setPreview(file.result);
    }
    
    file.readAsDataURL(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  return (
    <form enctype="multipart/form-data" onSubmit={(e) => hendleSubmit(e)} ref={ref} className="flex flex-col w-full gap-6 mb-3 overflow-scroll z-50">
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
      <div className="flex flex-col justify-center w-full gap-4">
        <div className="flex flex-col items-start w-full gap-2">
          <label 
            htmlFor="image" 
            className="min-w-fit h-fit text-[.8rem]"
          >
            {postMaker.image}
          </label>
          <div 
            {...getRootProps()}
            className="relative w-full" 
          >
            <input {...getInputProps()} />
            <div className={`flex items-center justify-center w-full min-h-[9rem] h-fit ${isDragActive ? "dark:bg-gray-600 bg-gray-300" : "dark:bg-gray-700 bg-gray-200"} cursor-pointer`}>
              {postMaker.dragFile}
            </div>
            {preview && (
              <div className="absolute top-2 right-1">
                <span className="relative flex w-[8rem] h-[8rem]">
                  <Image 
                    fill={true}
                    src={preview} 
                    alt="Upload preview" 
                    className="object-contain"
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
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
      <div className="flex gap-4">
        <div className="flex gap-2">
          <input 
            type="checkbox"
            name="commentCheck"
            id="commentCheck" 
            checked={true}
          />
          <label htmlFor="commentCheck">
            {postMaker.commentCheck}
          </label>
        </div>
        <div className="flex gap-2">
          <input 
            type="checkbox" 
            name="myComment"
            id="myComment" 
            checked={true}
          />
          <label 
            htmlFor="myComment"
          >
            {postMaker.myComment}
          </label>
        </div>
        <div className="flex gap-2">
          <input 
            type="checkbox" 
            name="tagCheck"
            id="tagCheck" 
            checked={true}
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
  )
}

export default PostMaker