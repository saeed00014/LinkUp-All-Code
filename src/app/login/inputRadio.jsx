import React from "react";

const InputRadio = ({ label, type, id, name, value, setError, pattern }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    pattern.test(value) ? setError(false) : setError(true);
  };

  return (
    <span className="flex items-center justify-between h-10 w-full px-4 border border-bg-theme-darker bg-white dark:bg-gray-950">
      <label htmlFor={id} className="w-full">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </span>
  );
};

export default InputRadio;
