import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full text-white'>
       <div className='max-w-screen-lg  m-auto flex gap-5 '>
        <Card width={"basis-1/3"} para={true} start={false} />
        <Card width={"basis-2/3"} para={false} start={true} hover={true}/>
       </div>
    </div>
  )
}

export default Cards