import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import img4 from '../images/img4.webp'
import img5 from '../images/img5.webp'
import video2 from '../images/glass.webm'

function Products() {
    const data = [
        {title:"Arqitel", description:"area was updated successfully and will be updated in the future without further  processing and will be  updated in the future with additional", live:true, update:false},
        {title:"TTR", description:"area was updated successfully and will be updated in the future without further  processing and will be  updated in the future with additional", live:true, update:false},
        {title:"YIR", description:"area was updated successfully and will be updated in the future without further  processing and will be  updated in the future with additional", live:true, update:true},
        {title:"Yahoo!", description:"area was updated successfully and will be updated in the future without further  processing and will be  updated in the future with additional", live:true, update:true},
        {title:"Sevdesk", description:"area was updated successfully and will be updated in the future without further  processing and will be  updated in the future with additional", live:true, update:true},
        {title:"Singularity", description:"area was updated successfully and will be updated in the future without further  processing and will be  updated in the future with additional", live:true, update:true}
    ]
  const [val, setVal] = useState(0)
  var mover = (pos) =>{
    setVal(pos*15) 
  }
  return (
    <div className='w-full relative mt-20 mb-10'>
       
        {data.map((val, index)=> <Product count={index} mover={mover} val={val} />)}
        <div className='w-full h-full absolute top-0 pointer-events-none'>
          <motion.div 
           initial={{y:val}}
           animate={{y:val+`rem`}}
           transition={{ease:[0.76, 0, 0.24, 1], duration:.6}}
          className='w-[28rem] h-[15rem]  left-[28%] absolute overflow-hidden translate-y-[15rem]' >
              <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:.5}} animate={{y: -val+`rem`}} className='w-full h-full bg-blue-300' >
                <img src={img1} alt="" />
              </motion.div>
              <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:.5}} animate={{y: -val+`rem`}} className='w-full h-full bg-blue-200' >
               <img src={img5} alt="" />
              </motion.div>
              <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:.5}} animate={{y: -val+`rem`}} className='w-full h-full bg-blue-100' >
                <img src={img3} alt="" />
              </motion.div>
              <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:.5}} animate={{y: -val+`rem`}} className='w-full h-full bg-blue-800' >
                <img src={img4} alt="" />
              </motion.div>
              <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:.5}} animate={{y: -val+`rem`}} className='w-full h-full bg-blue-300' >
                <img src={img2} alt="" />
              </motion.div>
              <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:.5}} animate={{y: -val+`rem`}} className='w-full h-full bg-blue-100' >
                <img src={img5} alt="" />
              </motion.div>

          </motion.div>
        </div>
    </div>
  )
}

export default Products