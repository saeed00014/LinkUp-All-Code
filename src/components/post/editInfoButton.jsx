import { FaRegEdit } from "react-icons/fa"
import { RiMoreFill } from "react-icons/ri"

const EditInfoButton = () => {
  return (
    <div className="flex items-center">
      <span className="text-2xl cursor-pointer rounded-full ">
        <FaRegEdit />
      </span>
    </div>
  )
}

export default EditInfoButton