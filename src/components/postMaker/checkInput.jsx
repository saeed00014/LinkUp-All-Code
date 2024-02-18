import React from "react";

const CheckInput = ({ lable, type, name, id, checked, setChecked }) => {
  return (
    <div className="flex flex-row-reverse gap-2">
      <label htmlFor={id}>{lable}</label>
      <input
        type={type}
        name={name}
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default CheckInput;
