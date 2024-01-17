const InputSelect = ({id, name, options, setError}) => {
  const handleChange = (e) => {
    const name = e.target.name
    if(name == "years") {
      if(e.target.value >= 1384) { 
        setError(true) 
      } else {
        setError(false)
      }
    }
  }
  return (
    <select 
      id={id}
      name={name} 
      onChange={(e) => handleChange(e)} 
      className="h-10 w-full px-2 border bg-white dark:bg-gray-950 appearance-none bg-arrow bg-no-repeat bg-[length:12px_12px] bg-[center_left_.5rem]"
    >
      {options.map((day, e) => {
        return (
          <option key={e} value={day}>
            {day}
          </option>
        )
      })}
    </select>
  )
}

export default InputSelect