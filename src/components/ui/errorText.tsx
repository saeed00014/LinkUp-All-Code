import React from 'react'

type Props = {
  text: string
}

const ErrorText = ({ text }: Props) => {
  return (
    <span className="flex justify-start w-full text-[.95rem] text-red-600">
      {text}
    </span>
  )
}

export default ErrorText