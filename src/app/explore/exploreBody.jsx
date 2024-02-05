"use client"
import { useContext } from "react"
import { ExploreContext } from "@/context/context"
import Post from "@/components/post/post"
import LoadingSpin from "@/components/loadingSpin"
import { explore } from "@/assets/data/data"

const ExploreBody = () => {
  const { searchResult, defaultPost, searchValue, category, isSearchLoading } = useContext(ExploreContext)
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen p-4 pb-[15rem] gap-3 overflow-y-scroll">
      <div className="flex flex-col w-fit gap-3">
        {isSearchLoading && searchValue &&
          <div className="flex items-center justify-center w-full mt-[4rem]">
            <LoadingSpin />
          </div>
        }
        {!isSearchLoading && !searchResult[0] && searchValue &&
          <div className="mt-[4rem]">
            {explore.noResult}
          </div>
        }
        {!isSearchLoading && searchResult[0] && searchValue &&
          searchResult.map((post) => {
            return (
              <div key={post.id}>
                <Post post={post} />
              </div>
            )
          })
        }
        {!isSearchLoading && !searchValue &&
          defaultPost.map((post) => {
            return (
              <div key={post.id}>
                <Post post={post}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreBody