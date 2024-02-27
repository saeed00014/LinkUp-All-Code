import React from "react";

type Props = {
  register?: any;
  id: string;
  name: string;
  options: string[] | number[];
};

const Select = ({ register, id, name, options }: Props) => {
  return (
    <select
      {...register(name)}
      id={id}
      name={name}
      className="h-10 w-full px-2 border bg-white dark:bg-gray-950 appearance-none bg-arrow bg-no-repeat bg-[length:12px_12px] bg-[center_left_.5rem]"
    >
      {options.map((option, e) => {
        return (
          <option key={e} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
