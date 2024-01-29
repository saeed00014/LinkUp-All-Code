import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"

const PostHeaderinfo = () => {
  const [isShowInfo, setIsShowInfo] = useState("")

  const handleClick = () => {
    setEvent &&
      setEvent(value)
  }
  const ButtonCuntra = ({text}) => {    
    return (
      <button className="flex justify-center items-center w-full p-2 h-[48px] border-b cursor-pointer bg-white dark:bg-gray-950  hover:bg-gray-200 dark:hover:bg-gray-800">
        {text}
      </button>
    )
  }
  
  return (
    <>
      <button 
        onClick={() => setIsShowInfo(!isShowInfo)}
        className='flex items-center justify-center md:text-2xl text-[1.7rem] w-[40px] min-w-[40px] h-[40px] rounded-full dark:hover:bg-gray-600'
      >
        <BsThreeDots />
      </button>
      {isShowInfo && 
        <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-700/50 z-50'>
          <div className='flex flex-col items-center justify-between w-[20rem] border rounded-[.6rem] overflow-hidden [&>*:nth-child(5)>*]:border-none'>
            <ButtonCuntra 
              text={"Report"} 
            />
            <ButtonCuntra 
              text={"Report"} 
            />
            <ButtonCuntra 
              text={"Report"} 
            />
            <ButtonCuntra 
              text={"Report"} 
            />
            <span 
              onClick={() => setIsShowInfo(false)}
              className="w-full bg-gray-900/0"
            >
              <ButtonCuntra 
                text={"Cancel"} 
              />
            </span>
          </div>
        </div>
      }
    </>
  )
}

export default PostHeaderinfo