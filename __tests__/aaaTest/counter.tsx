"use client"
import { useState } from "react"

export interface CounterProps {
  defaultCount: number,
  description: string,
  defaultIncrumentor: number
}

const Counter = ({ defaultCount, description, defaultIncrumentor }: CounterProps) => {
  const [ counter, setCounter ] = useState(defaultCount)
  const [ incrumentor, setIncrumentor ] = useState(defaultIncrumentor)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const tempChange = Number((e.target as HTMLInputElement).value)
  //   setTimeout(() => {
  //     setIncrumentor(tempChange)
  //   }, 1000)
  // }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>
        description: {description} ,,,,,,,,,,,,,, default: {defaultCount}
      </h2>
      <label aria-label="incrumentor" htmlFor="">
        <input 
          aria-label="input"
          type="text" 
          value={incrumentor}
          onChange={(e) => setIncrumentor(Number(e.target.value))}  
        />
        incrumentor: {incrumentor}
      </label>
      <div className="flex gap-3">
        <button aria-label="incrument" onClick={() => setCounter(counter + incrumentor)}>+++</button>
        <span>
          current count: {counter}
        </span>
        <button aria-label="decrument" onClick={() => setTimeout(() => setCounter(counter - incrumentor), 1000)}>---</button>
      </div>
    </div>      
  )
}

export default Counter 