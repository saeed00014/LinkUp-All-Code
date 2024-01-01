import SideBarHeader from "./sideBarHeader"
import SideBarPapulars from "./sideBarPapulars"

const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 flex flex-col w-[250px] h-screen border-r border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 z-30">
      <SideBarHeader />
      <SideBarPapulars />
    </div>
  )
}

export default SideBar