import React from "react";

type Props = {
  register?: any;
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
};

const Radio = ({ register, type, id, name, value, placeholder }: Props) => {
  return (
    <input
      {...register(name)}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Radio;
