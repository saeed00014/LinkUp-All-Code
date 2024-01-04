const PostFooterButtons = ({icon, text}) => {
  return (
    <div className="flex items-center justify-center w-full py-[.3rem] rounded-[.3rem] gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 duration-100 cursor-pointer">
      <span className="text-[1.2rem]">
        {icon}
      </span>
      <span className="text-[.9rem]">
        {text}
      </span>
    </div>
  )
}

export default PostFooterButtons