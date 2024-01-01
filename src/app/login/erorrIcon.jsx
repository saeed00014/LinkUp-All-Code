import { BiSolidErrorAlt } from "react-icons/bi"

const ErorrIcon = ({text}) => {
  return (
    <sapn className="group absolute left-2 cursor-pointer">
      <BiSolidErrorAlt className="text-red-600 text-[1.3rem]"/>
      <span className="group-hover:flex hidden absolute -left-3 -top-7 min-w-max bg-red-600 text-white rounded-[.4rem] px-2 py-[.1rem] text-[.9rem]">
        {text}
      </span>
    </sapn>
  )
}

export default ErorrIcon