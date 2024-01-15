"use client"
import { baseURL } from "@/axios/axios"
import { HomeUserLogin } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import Cookies from "universal-cookie"

const Context = ({children}) => {
  const cookies = new Cookies
  const LoginUser = cookies.get("user")

  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const post = await baseURL.get(`/post`)
      const response = {post: post}
      return response
    }
  })
  if(data) {
    const post = data.post.data.response
    return (
      <HomeUserLogin.Provider value={{LoginUser, post}}>
        {children}
      </HomeUserLogin.Provider>
    )
  }
}

export default Context