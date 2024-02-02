const PostMakerButtons = ({title, text, icon, setMakePost}) => {
  return (
    <div 
      onClick={() => setMakePost(title)} 
      className="flex items-center justify-center w-full py-1 gap-2 mt-1 rounded-[.5rem] hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer"
    >
      <span className={`text-[1.6rem] ${title == "video" && "text-red-600"}  ${title == "image" && "text-green-600"}  ${title == "tag" && "text-orange-600"}`}>
        {icon}
      </span>
      <span>
        {text}
      </span>
    </div>
  )
}

export default PostMakerButtons