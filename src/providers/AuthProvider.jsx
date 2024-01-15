"use client"
import Login from "@/app/login/page"
import { baseURL } from "@/axios/axios"
import { useQuery } from "@tanstack/react-query"

const AuthProvider = ({children}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await baseURL.get('/auth')
      return response
    }
  })
  if(!isPending && data) {
    const login = data.data.login
    if(login) {
      // localStorage.setItem('user', JSON.stringify(data.data.user))
      return children
    }
    if(!login) {
      return <Login />
    }
  }
}

export default AuthProvider