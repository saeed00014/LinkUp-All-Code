import { postEdit } from "@/assets/data/data"
import Image from "next/image"
import { useRef, useState } from "react"

const PostEdit = ({clicked}) => {
  const ref = useRef()
  const [media, setMedia] = useState("")

  const hendleSubmit = (e) => {
    e.preventDefault()
    const currentRef = ref.current
    const text = currentRef.text.value
    const image = currentRef.image.value
    const fd = new FormData()
    fd.append('file', media)
  }

  const previewImage = (e) => {
    setMedia(e.target.files[0].name)
    document.getElementById("postImageUpload").src = URL.createObjectURL(e.target.files[0])
  }

  return (
    <form enctype="multipart/form-data" onSubmit={(e) => hendleSubmit(e)} ref={ref} className="flex flex-col w-full gap-8 mb-3 overflow-scroll z-50">
      <div className="flex flex-col justify-between w-full gap-2">
        <label htmlFor="text" className=" text-[.8rem]">
          {postEdit.text}
        </label>
        <textarea 
          type="textarea" 
          name="text" 
          id="text"
          className="flex items-start justify-start text-start align-top w-full min-h-[8rem] max-h-[20rem] py-1 px-1 bg-gray-200 dark:bg-gray-700" 
        />
      </div>
      <div className="flex flex-col justify-center w-full gap-4">
        <div className="flex items-start w-full gap-6">
          <label htmlFor="image" className="min-w-fit h-fit text-[.8rem]">
            {postEdit.image}
          </label>
          <label htmlFor="image" className="flex items-center gap-3">
            <span className={`flex py-1 ${media ? "pb-[.4rem]" : "" } px-4 min-w-max rounded-[.2rem] text-[.9rem] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer`}>
              {postEdit.imageChoose}
            </span>
            <span className="min-w-max">
              {media ? `${media}` : `${postEdit.noChoosenImage}`}
            </span>
          </label>
          <input 
            type="file" 
            name="image" 
            id="image"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => previewImage(e)}  
            className="w-full h-fit invisible bg-gray-200 dark:bg-gray-700" 
          />
        </div>
        <div className={`${media ? "visible" : "invisible max-h-0" } flex items-center justify-between w-full h-fit gap-6`}>
          <span className={`flex ${media ? "min-w-32 max-w-40" : "h-0"}`}> 
            <Image 
              id="postImageUpload" 
              src=""
              alt="your image" 
              style={{objectFit: "contain", width: "fit"}}
            />
          </span>
          <div className={`flex flex-col items-start justify-center w-full`}>
            <span>fds</span>
            <input 
              type="range" 
              name="range"
              id="range"
              className="w-full bg-gray-200 dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="" className="min-w-max text-[.8rem]">
          {postEdit.tag}
        </label>
        <input 
          type="" 
          className="w-full py-1 px-1 bg-gray-200 dark:bg-gray-700"
        />
      </div>
      <div>
        <input 
          type="submit" 
          value={postEdit.submit} 
          className="py-2 px-4 rounded-[.5rem] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
        />
      </div>
    </form>
  )
}

export default PostEdit