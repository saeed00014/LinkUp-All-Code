"use client"

import RegisterForm from "./registerForm"
import { useRef, useState } from "react"
import { login } from "@/assets/data/data"
import ErorrText from "./erorrText"

const LoginForm = () => {
  const [register, setRegister] = useState(false)
  const [loginErorrMessage, setLoginErorrMessage] = useState(false)
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = ref.current.email.value
    const password = ref.current.password.value
    if(email == "" || password == "") {
      setLoginErorrMessage(true)
    }
    if(email !== "" && password !== "") {

    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} ref={ref} className="flex flex-col gap-3 w-full [&>input]:bg-gray-200 [&>input]:h-[52px] [&>input]:w-full [&>input]:max-w-[368px] [&>input]:px-3 [&>input]:pb-1">
        <input 
          type="name" 
          id="email" 
          name="email" 
          autoComplete="on"
          placeholder={login.email}
        />
        <input 
          id="password" 
          name="password" 
          type="password" 
          autoComplete="off"
          placeholder={login.pass}
        />
        {loginErorrMessage &&
          <ErorrText text={login.errorMessage} />}
        <div className="flex flex-col items-center justify-between w-full pt-2 gap-3">
          <input 
            type="submit" 
            value={login.submit} 
            className="bg-blue-600 w-full h-12 pb-1 text-white rounded-[.3rem] cursor-pointer"
          />
        </div>
      </form>
      <div className="flex flex-col items-center justify-between pt-2 gap-3">
        <button className="w-full h-10 text-[.8rem] text-blue-800 pb-1 border-b-2">
          {login.forgotPass}
        </button>
        <button onClick={() => setRegister(true)} className="bg-green-500 hover:bg-green-600 w-[200px] h-12 text-white rounded-[.3rem] md:mt-4 mt-2">
          {login.register}
        </button>
      </div>
      {register ? 
      <div className='fixed left-0 right-0 bottom-0 flex justify-center items-center h-screen w-screen md:px-4 px-2 bg-gray-50/75 z-30'>
        <RegisterForm setRegister={setRegister}/> 
      </div>
      : ""}
    </>
  )
}

export default LoginForm