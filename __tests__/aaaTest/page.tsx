import React from 'react'
import Counter from './counter'

const page = () => {
  return (
    <div className='flex justify-center items-center w-full h-full text-2xl'>
      <Counter defaultCount={0} description="my counter" defaultIncrumentor={1} />
    </div>
  )
}

export default page