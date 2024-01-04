import Post from '@/components/post/post'
import PostMake from '@/components/post/postMake'

const HomeBody = () => {
  return (
    <div className='flex flex-col items-center w-full h-screen pt-4 pb-[10rem] gap-4 bg-gray-200 dark:bg-gray-950 overflow-y-scroll'>
      <PostMake />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default HomeBody