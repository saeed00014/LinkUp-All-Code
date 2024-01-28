const Loading = () => {
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center z-[110] bg-gray-200 dark:bg-gray-800/75">
      <div className="flex gap-1">
        <span className="w-[.8rem] h-[.8rem] bg-white animate-[loading_1s_ease-in-out_infinite_.1s] rounded-full"></span>
        <span className="w-[.8rem] h-[.8rem] bg-white animate-[loading_1s_ease-in-out_infinite_.4s] rounded-full"></span>
        <span className="w-[.8rem] h-[.8rem] bg-white animate-[loading_1s_ease-in-out_infinite_.7s] rounded-full"></span>
        <span className="w-[.8rem] h-[.8rem] bg-white animate-[loading_1s_ease-in-out_infinite_1s] rounded-full"></span>
      </div>
    </div>
  )
}

export default Loading