import React from "react";

const LoadingSpin = () => {
  return (
    <div>
      <div className="flex items-center justify-center animate-spin w-[1.8rem] h-[1.8rem] border-[.2rem] border-black dark:border-white border-l-transparent dark:border-l-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingSpin;
