import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({ width, start, para, hover="false" }) {
  return (
    <motion.div whileHover={{background: hover=== true && "#7443ff" , padding:"25px"}} className={`${width}   bg-zinc-800 rounded-xl my-10  p-5 flex flex-col justify-between h-[25rem]`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>Whatever heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <div className="w-full ">
        <h1 className="text-2xl font-medium mt-10">what they say</h1>
      </div>
      </div>
      
      <div className="">
        {start && (
          <div>
            <h1 className="text-7xl font-semibold tracking-tight leading-none">Start Project </h1>
            <button className="border-[1px] rounded-full border-zinc-500 py-1 px-4 mt-5">
              Contact us
            </button>
          </div>
        )}
        {para && (
          <p className="text-zinc-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
