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
    if(data.data.login) {
      return children
    }
    if(!data.data.login) {
      return <Login />
    }
  }
}

export default AuthProvider