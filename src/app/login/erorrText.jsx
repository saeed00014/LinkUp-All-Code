import React from 'react'

const ErorrText = ({text}) => {
  return (
    <span className="flex justify-start w-full text-[.95rem] text-red-600">
      {text}
    </span>
  )
}

export default ErorrText