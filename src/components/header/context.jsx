"use client"
import { baseURL } from "@/axios/axios"
import { HeaderUserLogin } from "@/context/context"
import { useQuery } from "@tanstack/react-query"
import Cookies from "universal-cookie"

const Context = ({children}) => {
  const cookies = new Cookies
  const LoginUser = cookies.get('user')
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const response = await baseURL.get(`/user/${id}`)
  //     return response
  //   }
  // })
  if(LoginUser) {
    return (
      <HeaderUserLogin.Provider value={{LoginUser}}>
        {children}
      </HeaderUserLogin.Provider>
    )
  }
}

export default Context