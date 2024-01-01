import Post from '@/components/post/post'
import PostMake from '@/components/post/postMake'

const HomeBody = () => {
  return (
    <div className='flex flex-col items-center w-full gap-4 bg-gray-100 dark:bg-gray-950'>
      <PostMake />
      <Post />
    </div>
  )
}

export default HomeBody