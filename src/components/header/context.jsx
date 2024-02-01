"use client"
import { baseURL } from "@/axios/axios"
import { HeaderUserLogin } from "@/context/context"
import { useQuery } from "@tanstack/react-query"

const Context = ({children}) => {
  const getLoginUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get(`/user/loginUser/userfull`)
      return response
    }
  })
  
  if(!getLoginUser.isPending) {
    const loginUser = getLoginUser.data.data.response
    return (
      <HeaderUserLogin.Provider 
        value={{
          loginUser
        }}
      >
        {children}
      </HeaderUserLogin.Provider>
    )
  }
}

export default Context