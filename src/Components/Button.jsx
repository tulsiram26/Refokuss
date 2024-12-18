import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function Button({title = "Get's Started"}) {
  return (
    <div className='w-40 bg-zinc-100 text-black px-4 py-2 rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <FaAngleRight className='ml-2 text-zinc-600' />
    </div>
  )
}

export default Button