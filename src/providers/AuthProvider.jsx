"use client"
import Login from "@/app/login/page"
import { baseURL } from "@/axios/axios"
import { useQuery } from "@tanstack/react-query"

const AuthProvider = ({children}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await baseURL.get('/auth')
      localStorage.setItem("user", JSON.stringify(response.data.user))
      return response
    }
  })
  if(!isPending) {
    const login = data.data.login
    if(login) {
      return children
    }
    if(!login) {
      return <Login />
    }
  }
}

export default AuthProvider