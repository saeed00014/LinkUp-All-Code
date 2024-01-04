import Image from "next/image"
import PageHeader from "@/components/pageHeader"
import ExploreHeader from "./exploreHeader"
import ExploreBody from "./exploreBody"

const Explore = () => {
  return (
    <section>
      <PageHeader title="مرورگر" />
      <ExploreHeader />
      <ExploreBody />
    </section>
  )
}

export default Explore