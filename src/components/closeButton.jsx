const CloseButton = ({setEvent}) => {
  return (
    <button 
      onClick={() => setEvent(false)} 
      className='relative flex items-center justify-center font-normal min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'
    >
      <i className='absolute w-[.1rem] md:h-5 h-5 rotate-45 dark:bg-white bg-black'></i>  
      <i className='absolute md:w-5 w-5 h-[.1rem] rotate-45 dark:bg-white bg-black'></i>  
    </button>
  )
}

export default CloseButton