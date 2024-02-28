import React from "react";
import { cn } from "@/lib/utils";

const LoadingSpin = ({ classNames }: { classNames?: string }) => {
  return (
    <div className={cn("flex justify-center items-center w-full h-full", classNames)}>
      <div className="flex items-center justify-center animate-spin w-[1.8rem] h-[1.8rem] border-[.2rem] border-black dark:border-white border-l-transparent dark:border-l-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingSpin;
