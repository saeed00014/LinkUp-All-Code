import React from "react";

const Input = ({
  kind,
  lable,
  type,
  name,
  placeholder,
  id,
  setValue,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="min-w-max text-[.8rem]">
        {lable}
      </label>
      {kind == "input" && (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={(e) => setValue(e.target.value)}
          className="w-full py-1 px-1 bg-gray-200 dark:bg-gray-700"
        />
      )}
      {kind == "textarea" && (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={(e) => setValue(e.target.value)}
          className="flex items-start justify-start text-start align-top w-full min-h-[8rem] max-h-[20rem] py-1 px-1 bg-gray-200 dark:bg-gray-700"
        />
      )}
    </div>
  );
};

export default Input;
