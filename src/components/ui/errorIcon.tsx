import { cn } from "@/lib/utils";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

type Props = {
  text: string;
  classNames?: string;
};

const ErrorIcon = ({ text, classNames }: Props) => {
  return (
    <div
      className={cn(
        "group absolute top-[.6rem] left-2 cursor-pointer",
        classNames
      )}
    >
      <BiSolidErrorAlt className="text-red-600 dark:text-red-500 text-[1.3rem]" />
      <span className="group-hover:flex hidden absolute -left-3 -top-7 min-w-max bg-red-600 dark:bg-red-500 text-white rounded-[.4rem] px-2 py-[.1rem] text-[.9rem]">
        {text}
      </span>
    </div>
  );
};

export default ErrorIcon;
