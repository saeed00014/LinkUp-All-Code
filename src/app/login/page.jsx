import LoginForm from "./loginForm"

const Login = () => {
  return (
    <section className="flex items-center justify-center w-screen h-screen bg-white dark:bg-gray-800">
      <div className='flex flex-col gap-3 w-full py-4 md:px-4 px-3 rounded-[.5rem] z-10 max-w-[392px] shadow-3xl bg-gray-50 '>
        <LoginForm />
      </div>
    </section>
  )
}

export default Login