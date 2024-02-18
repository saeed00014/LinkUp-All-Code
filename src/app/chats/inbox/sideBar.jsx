"use client";
import React from "react";
import SideBarUsersList from "./sideBarUsersList";
import SideBarHeader from "./sideBarHeader";
import SideBarContext from "./sideBarContext";

const SideBar = () => {
  return (
    <div className="relative flex flex-col w-[300px] min-w-[300px] border-l border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 !overflow-hidden">
      <SideBarContext>
        <SideBarHeader />
        <SideBarUsersList />
      </SideBarContext>
    </div>
  );
};

export default SideBar;
