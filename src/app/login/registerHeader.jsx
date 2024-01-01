import { register } from "@/assets/data/data"

const RegisterHeader = ({setRegister}) => {
  return (
    <div className="flex justify-between w-full">
      <h1 className="text-2xl pb-1">
        {register.register}
      </h1>
      <button 
        onClick={() => setRegister(false)} 
        className="relative flex items-center justify-center font-normal w-10 h-10 rounded-full hover:bg-bg-hover"
      >
        <i className="absolute w-[.1rem] h-5 rotate-45 bg-black"></i>  
        <i className="absolute w-5 h-[.1rem] rotate-45 bg-black"></i>  
      </button>
    </div>
  )
}

export default RegisterHeader