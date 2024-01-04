import { postMaker } from "@/assets/data/data"

const PostMakerHeader = ({setMakePost}) => {
  return (
    <header className="flex justify-between items-center w-full py-3 pr-2">
      <span>
        {postMaker.postMaker}
      </span>
      <button 
        onClick={() => setMakePost('')} 
        className='relative flex items-center justify-center font-normal min-w-[40px] min-h-[40px] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <i className='absolute w-[.1rem] md:h-5 h-5 rotate-45 dark:bg-white bg-black'></i>  
        <i className='absolute md:w-5 w-5 h-[.1rem] rotate-45 dark:bg-white bg-black'></i>  
      </button>
    </header>
  )
}

export default PostMakerHeader