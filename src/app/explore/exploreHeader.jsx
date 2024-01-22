import ExploreSearch from "./exploreSearch"
import ExploreCategory from "./exploreCategory"

const ExploreHeader = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between w-full px-5 bg-white dark:bg-gray-800 dark:text-white h-[3.6rem] border-b-[1px] border-gray-400 dark:border-gray-600">
      <ExploreSearch />
      <ExploreCategory />
    </header>
  )
}

export default ExploreHeader