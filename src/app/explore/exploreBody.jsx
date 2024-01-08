import Post from "@/components/post/post"

const ExploreBody = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen p-4 pb-[15rem] gap-3 overflow-y-scroll">
      <div className="flex flex-col w-fit gap-3">
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default ExploreBody