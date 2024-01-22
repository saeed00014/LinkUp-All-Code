import PageHeader from "@/components/pageHeader"
import ExploreHeader from "./exploreHeader"
import ExploreBody from "./exploreBody"
import Context from "./context"

const Explore = () => {
  return (
    <section>
      <PageHeader title="مرورگر" />
      <Context>
        <ExploreHeader />
        <ExploreBody />
      </Context>
    </section>
  )
}

export default Explore