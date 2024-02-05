const Input = ({lable, type, name, id, value, maxValue, setValue}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between px-1">
        <label 
          htmlFor={id}
        >
          {lable}
        </label>
        <div>
          <span>
            {maxValue}
          </span>
          <span>/</span>
          <span>
            {value.length}
          </span>
        </div>

      </div>
      <input 
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full py-2 px-2 border-2 border-gray-500 dark:border-gray-400 rounded-[.2rem] bg-gray-100 dark:bg-gray-700"
      />
    </div>
  )
}

export default Input