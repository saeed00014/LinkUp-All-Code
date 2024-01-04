import Login from "@/app/login/page"

const AuthProvider = ({children}) => {
  if(true) {
    return children
  }
  return <Login />
}

export default AuthProvider