import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  classNames?: string;
};

const FormItem = ({ children, classNames }: Props) => {
  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full gap-2", classNames)}>
      {children}
    </div>
  );
};

export default FormItem;
