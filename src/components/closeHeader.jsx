import React from "react";
import { IoClose } from "react-icons/io5";

const CloseHeader = ({ setEvent, title }) => {
  return (
    <header className="flex justify-between items-center w-full py-3">
      <span>{title}</span>
      <button
        onClick={() => setEvent(false)}
        className="relative flex p-1 text-2xl rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <IoClose />
      </button>
    </header>
  );
};

export default CloseHeader;
