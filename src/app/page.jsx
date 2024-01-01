import PageHeader from "@/components/pageHeader";
import HomeBody from "./home/homeBody";
import LeftSideBar from "./home/leftSideBar";

export default function Home() {
  return (
    <section className="flex w-full h-screen bg-gray-100 dark:bg-gray-950">
      <div className="relative flex flex-col w-full ml-[250px] gap-3">
        <PageHeader title={"خانه"} />
        <HomeBody />
        <LeftSideBar />
      </div>
    </section>
  )
}
