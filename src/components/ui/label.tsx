import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  id?: string;
  text: string;
  classNames?: string;
};

const Label = ({ id, text, classNames }: Props) => {
  return (
    <label
      htmlFor={id}
      className={cn("flex items-center w-full gap-1 text-[.9rem]", classNames)}
    >
      {text}
    </label>
  );
};

export default Label;
