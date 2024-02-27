import React, { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import ForgotPassForm from "./forgotPassForm";
import { login } from "@/assets/data/data";

const Forms = () => {
  const [register, setRegister] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  return (
    <>
      <LoginForm />
      <div className="flex flex-col items-center justify-between pt-2 gap-3">
        <button
          onClick={() => setForgotPass(true)}
          className="w-full h-10 text-[.8rem] pb-1 border-b border-gray-400 dark:border-gray-500 text-blue-800 dark:text-blue-500"
        >
          {login.forgotPass}
        </button>
        <button
          onClick={() => setRegister(true)}
          className="w-[200px] h-12 md:mt-4 mt-2 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-500 text-white rounded-[.3rem]"
        >
          {login.register}
        </button>
      </div>
      {register && (
        <div className="fixed left-0 right-0 bottom-0 flex justify-center items-center h-screen w-screen md:px-4 px-2 bg-gray-400/25 dark:bg-gray-500/25 z-30">
          <RegisterForm setRegister={setRegister} />
        </div>
      )}
      {forgotPass && (
        <div className="fixed left-0 right-0 bottom-0 flex justify-center items-center h-screen w-screen md:px-4 px-2 bg-gray-400/25 dark:bg-gray-500/50 z-30">
          <ForgotPassForm setForgotPass={setForgotPass} />
        </div>
      )}
    </>
  );
};

export default Forms;
