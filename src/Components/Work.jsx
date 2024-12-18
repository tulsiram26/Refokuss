import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left: "49%",
      top: "55%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left: "53%",
      top: "52%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1453133451515-5ff7c1d0d63c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left: "47% ",
      top: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1636081890206-b29817bfb178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left: "51%",
      top: "60%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1725347740937-7315b0bd3cc5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left: "45%",
      top: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1725204038668-f67ccc690384?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left: "53%",
      top: "66%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const showImage = (arr)=>(
         setImages((prev)=>(
          prev.map((item, index)=>(
            arr.indexOf(index) === -1 ? 
            {...item, isActive:false}
            : {...item, isActive:true}
          ))  
         ))
    )

    
    switch (Math.floor(latest * 100)) {
      case 0:
        showImage([])
        break;
      case 1:
        showImage([1])
        break;
      case 3:
        showImage([1,2])
        break;
      case 5:
        showImage([1,2,3])
        break;
      case 7:
        showImage([1,2,3,4])
        break;
      case 9:
        showImage([1,2,3,4,5])
        break;
      case 11:
        showImage([1,2,3,4,5,6])
        break;
    }
  });

  const showNhide = (scrollVal) => {
    console.log(Math.floor(scrollVal * 100));
  };

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl text-center mx-auto relative">
        <h1 className="text-[28vw] text-zinc-100 font-mediam leading-none select-none">
          work
        </h1>
        <div className=" absolute top-0 w-full h-full ">
          {images.map(
            (val, index) =>
              val.isActive == true && (
                <img
                  key={index}
                  className="w-64 absolute -translate-x-[50%] -translate-y-[35%] "
                  style={{ left: val.left, top: val.top }}
                  src={val.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
