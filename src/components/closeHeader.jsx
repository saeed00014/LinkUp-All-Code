import { IoClose } from "react-icons/io5"

const CloseHeader = ({setEvent, title}) => {
  return (
    <header className="flex justify-between items-center w-full py-3">
      <span>
        {title}
      </span>
      <button 
        onClick={() => setEvent(false)} 
        className='relative flex items-center justify-center font-normal text-3xl min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <IoClose />
      </button>
    </header>
  )
}

export default CloseHeader