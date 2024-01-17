import { BiSolidErrorAlt } from "react-icons/bi"

const Input = ({type, id, name, placeholder, setError, pattern, isIconError, iconErrorText, isTextError, textErrorText}) => {
  const handleChangeBlur = (e) => {
    const value = e.target.value
    pattern.test(value) ? 
      setError(false)
      : setError(true)
  }
  return (
    <div className="relative flex flex-col items-center justify-center gap-2">
      <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder}
        onBlur={(e) => handleChangeBlur(e)} 
        onChange={(e) => handleChangeBlur(e)} 
        className={`h-10 w-full px-2 pb-1 bg-gray-200 dark:bg-gray-800 ${isIconError ? "border-text-error border-[1px]" : ""}`}
      />
      {isIconError && 
        <sapn className="group absolute top-[.6rem] left-2 cursor-pointer">
          <BiSolidErrorAlt className="text-red-600 dark:text-red-500 text-[1.3rem]"/>
          <span className="group-hover:flex hidden absolute -left-3 -top-7 min-w-max bg-red-600 dark:bg-red-500 text-white rounded-[.4rem] px-2 py-[.1rem] text-[.9rem]">
            {iconErrorText}
          </span>
        </sapn>
      }
      {isTextError && 
        <span className="flex justify-start w-full text-[.95rem] text-red-600">
          {textErrorText}
        </span>
      }
    </div>
  )
}

export default Input