import React, { useRef, useState } from 'react'
import CloseHeader from '@/components/closeHeader'
import Input from './input'
import { login, patterns, register } from '@/assets/data/data'

const FormForgotPass = ({setForgotPass}) => {
  const ref = useRef()
  const [emailErorr, setEmailErorr] = useState(false)
  const [notValidEmail, setNotValidEmail] = useState(false)
  const handleForgotPass = (e) => {
    e.preventDefault()
    const email = ref.current.email.value
    if(!emailErorr) {

    }
    if(emailErorr || email == "") {
      setNotValidEmail(true)
    }
  }

  return (
    <form 
      ref={ref}
      onSubmit={(e) => handleForgotPass(e)}
      className="flex flex-col bg-white dark:bg-gray-900 md:gap-3 gap-2 shadow-3xl p-4 pt-0 w-[400px] rounded-[.5rem]"
    >
      <CloseHeader
        title={login.forgotPass1}
        setEvent={setForgotPass}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="email">
          {login.forgotpassEmail}
        </label>
        <Input
          type="text" 
          id="email" 
          name="email" 
          placeholder={register.email}
          setError={setEmailErorr}
          pattern={patterns.email}
          isIconError={emailErorr}
          iconErrorText={register.emailErorr}
          textErrorText={register.emailRepeated}
        />
      </div>
      {notValidEmail && 
        <span className="flex justify-start w-full text-[.95rem] text-red-600">
          {login.forgotPassNoValidEmail}
        </span>
      }
      <input 
        type="submit"
        value="تایید"
        className="w-[8rem] h-[2.5rem] pb-1 mt-[1rem] bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-[.3rem] cursor-pointer"
      />
    </form>
  )
}

export default FormForgotPass