import React from "react";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center justify-start w-full px-5 bg-white dark:bg-gray-800 dark:text-white min-h-[3.6rem] border-b-[1px] border-gray-400 dark:border-gray-600 z-30 overflow-hidden">
      <span className="text-2xl">{title}</span>
    </header>
  );
};

export default PageHeader;
