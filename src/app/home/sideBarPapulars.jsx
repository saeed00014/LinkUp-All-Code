import { sideBar } from "@/assets/data/data"
import PapularUser from "./papularUser"

const SideBarPapulars = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit px-3 py-2 gap-3">
      <span className="flex items-center justify-start w-full">
        {sideBar.papularUsers}
      </span>
      <PapularUser />
    </div>
  )
}

export default SideBarPapulars