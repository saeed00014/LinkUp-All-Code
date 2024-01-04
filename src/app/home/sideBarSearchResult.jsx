import ResultUser from "./resultUser"

const SideBarSearchResult = () => {
  return (
    <div className='absolute top-[57.5px] bg-white dark:bg-gray-800 h-screen w-full px-2 py-3'>
      <div className="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-[.3rem]">
        <ResultUser />
        <ResultUser />
        <ResultUser />
        <ResultUser />
        <ResultUser />
      </div>
    </div>
  )
}

export default SideBarSearchResult