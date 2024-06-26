import React from "react";
import Context from "./home/context";
import PageHeader from "@/components/pageHeader";
import HomeBody from "./home/homeBody";
import LeftSideBar from "./home/sideBar";

export default function Home() {
  return (
    <section className="flex w-full min-h-screen bg-gray-200 dark:bg-gray-950 ">
      <div className="relative flex flex-col w-full h-full xl:ml-[250px]">
        <PageHeader title="خانه" />
        <Context>
          <HomeBody />
          <LeftSideBar />
        </Context>
      </div>
    </section>
  );
}
