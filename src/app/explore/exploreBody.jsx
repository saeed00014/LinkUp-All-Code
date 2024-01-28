"use client"
import { useContext } from "react"
import { ExploreContext } from "@/context/context"
import Post from "@/components/post/post"
import { explore } from "@/assets/data/data"

const ExploreBody = () => {
  const { searchResult, defaultPost, searchValue, category } = useContext(ExploreContext)

  return (
    <div className="flex flex-col justify-start items-center w-full h-screen p-4 pb-[15rem] gap-3 overflow-y-scroll">
      <div className="flex flex-col w-fit gap-3">
        {/* {!searchResult[0] && searchValue &&
          <div className="mt-[4rem]">
            {explore.noResult}
          </div>
        } */}
        {searchResult && 
          searchResult.map((post) => {
            return (
              <Post post={post} />
            )
          })
        }
        {!searchResult && !searchValue && 
          defaultPost.map((post) => {
            return (
              <Post post={post}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreBody