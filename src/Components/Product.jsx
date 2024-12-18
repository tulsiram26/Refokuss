import React from 'react'
import Button from './Button'

function Product({val, mover,count}) {
  return (
    <div className='w-full '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg  h-[15rem]   flex mx-auto text-white justify-between items-center hover:bg-blue-800 rounded-lg' >
            <h1 className='text-4xl font-semibold'>{val.title}</h1>
            <div className='w-1/3 mb-5 '>
                <p className='mb-5 text-sm '>{val.description}</p>
               <div className='flex gap-5 items-center'>
               {val.live && <Button />}
               {val.update && <Button title={"Case study"} />}
               </div>
                
            </div>
        </div>
    </div>
  )
}

export default Product