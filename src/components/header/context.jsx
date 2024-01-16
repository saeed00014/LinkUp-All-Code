"use client"
import { baseURL } from "@/axios/axios"
import { HeaderUserLogin } from "@/context/context"
import { useQuery } from "@tanstack/react-query"

const Context = ({children}) => {
  const localUser = localStorage.getItem("user")
  const loginUser = localUser && JSON.parse(localUser)
  
  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/${id}`)
      return response
    }
  })
  if(!isPending || loginUser) {
    return (
      <HeaderUserLogin.Provider value={{loginUser}}>
        {children}
      </HeaderUserLogin.Provider>
    )
  }
}

export default Context