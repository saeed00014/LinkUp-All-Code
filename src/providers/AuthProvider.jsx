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

  if(error) {
    return (
      <div className="flex items-center justify-center flex-col w-screen h-screen gap-2 ">
        <span>
          {error.message}
        </span>
        <span>
          sorry our servers or your internet might be down
        </span>
        <span 
          onClick={() => location.reload("")}  
          className="px-5 py-2 mt-2 rounded-[.5rem] bg-white dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 cursor-pointer"
        >
          try again
        </span>
      </div>
    )
  }

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