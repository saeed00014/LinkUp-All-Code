"use client"

import { useTheme } from "next-themes"
import TungstenIcon from '@mui/icons-material/Tungsten';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="group relative flex justify-center items-center w-full h-12 mt-2 rounded-[.5rem] bg-gray-200 dark:bg-gray-700">
        <button 
          onClick={() => { 
            setTheme("light")
          }}
          className="hidden dark:flex items-center justify-center w-full h-full"
        >
          <span>
            light
          </span>
          <span className="absolute right-0 -top-1 rotate-180 group-hover:text-yellow-400 text-gray-300 scale-75">
            <TungstenIcon />
          </span>
        </button>
        <button 
          onClick={() => {
            setTheme("dark")
          }}
          className="flex items-center justify-center dark:hidden w-full h-full"
        >
          <span>
            dark
          </span>
          <span className="group absolute right-0 -top-1 rotate-180 group-hover:text-gray-700 text-yellow-500 scale-75">
            <TungstenIcon />
          </span>         
        </button>
    </div>  
  )
}

export default ThemeSwitcher