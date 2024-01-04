"use client"

import RegisterForm from "./registerForm"
import { useRef, useState } from "react"
import { login, patterns } from "@/assets/data/data"
import ErorrText from "./erorrText"

const LoginForm = () => {
  const [register, setRegister] = useState(false)
  const [loginErorrMessage, setLoginErorrMessage] = useState(false)
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = ref.current.email.value
    const password = ref.current.password.value
    if(email == "" || password == "" || !patterns.email.test(email) || !patterns.password.test(password)) {
      setLoginErorrMessage(true)
    }
    if(email !== "" && password !== "") {

    }
  }

  return (
    <>
      <form 
        ref={ref}
        onSubmit={(e) => handleSubmit(e)} 
        className="flex flex-col gap-3 w-full [&>input]:bg-gray-200 dark:[&>input]:bg-gray-700 [&>input]:h-[52px] [&>input]:w-full [&>input]:max-w-[368px] [&>input]:px-3 [&>input]:pb-1"
      >
        <input 
          type="text" 
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
            className="w-full h-12 pb-1 bg-blue-600 hover:bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-[.3rem] cursor-pointer"
          />
        </div>
      </form>
      <div className="flex flex-col items-center justify-between pt-2 gap-3">
        <button className="w-full h-10 text-[.8rem] pb-1 border-b border-gray-400 dark:border-gray-500 text-blue-800 dark:text-blue-500">
          {login.forgotPass}
        </button>
        <button 
          onClick={() => setRegister(true)} 
          className="w-[200px] h-12 md:mt-4 mt-2 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-500 text-white rounded-[.3rem]"
        >
          {login.register}
        </button>
      </div>
      {register && 
        <div className='fixed left-0 right-0 bottom-0 flex justify-center items-center h-screen w-screen md:px-4 px-2 bg-gray-400/25 dark:bg-gray-500/50 z-30'>
          <RegisterForm setRegister={setRegister}/> 
        </div>
      }
    </>
  )
}

export default LoginForm