import React, { useState } from "react";
// React
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) => // set images me gaye 
        prev.map((item, index) => // har element ko map kr rahe h 
          arr.indexOf(index) === -1 // jo array receive hua h blank array us blank array pe liya gaya h uska index , 
            ? { ...item, isActive: false } // agar nhi mila toh show nhi hoga
            : { ...item, isActive: true } // agar aa gaya toh show karega
        )
      );
    }

    switch (Math.floor(data * 100)) { // scroll krne par jo value aa rha h use % me convert kiya hai
      case 0:
        imagesShow([]); // agar 0% hai toh blank array bheja h
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-20">
      <div className=" relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-sm select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  key={index}
                  style={{ top: elem.top, left: elem.left }}
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
