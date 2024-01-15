"use client"
import Cookies from "universal-cookie"
import { ProfileContext } from "@/context/context"
import { baseURL } from "@/axios/axios"
import { useQuery } from "@tanstack/react-query"

const Context = ({children}) => {
  const userId = window.location.href.split("/")[window.location.href.split("/").length - 1]
  const { isPending, error, data } = useQuery({
    queryKey: ["profileUser"],
    queryFn: async () => {
      const user = await baseURL.get(`/user/${userId}`)
      return user
    }
  })
  if(data) {
    const user = data.data.response
    return (
      <ProfileContext.Provider value={{user}}>
        {children}
      </ProfileContext.Provider>
    )
  }
}

export default Context