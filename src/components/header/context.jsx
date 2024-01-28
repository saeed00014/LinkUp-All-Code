"use client"
import { baseURL } from "@/axios/axios"
import { HeaderUserLogin } from "@/context/context"
import { useQuery } from "@tanstack/react-query"

const Context = ({children}) => {
  const localUser = localStorage.getItem("user")
  const localLoginUser = localUser && JSON.parse(localUser)
  
  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userInfo`)
      return response
    }
  })
  
  if(!isPending) {
    const loginUser = data.data.response
    return (
      <HeaderUserLogin.Provider 
        value={{
          loginUser,
          localLoginUser
        }}
      >
        {children}
      </HeaderUserLogin.Provider>
    )
  }
}

export default Context