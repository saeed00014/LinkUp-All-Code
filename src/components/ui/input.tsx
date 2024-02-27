import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  register?: any;
  type: string;
  name: string;
  id: string;
  value?: string;
  placeholder?: string;
  isIconError?: any;
  classNames?: string
};

const Input = ({
  register,
  type,
  id,
  name,
  value,
  placeholder,
  isIconError,
  classNames
}: Props) => {
  return (
    <input
      {...register(name)}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={cn(`h-10 w-full px-2 pb-1 bg-gray-200 dark:bg-gray-800 ${isIconError && "border-text-error border-[1px]"}`, classNames)}
    />
  );
};

export default Input;
