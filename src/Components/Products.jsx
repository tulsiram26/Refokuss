import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "Arque en el product de arquivo de ar limitation   de arqu     Dimensions de arquiv   Dimensions de arquiv Dimensions de arquiv Dimensions de arquiv",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23); //humne ek function banaya hai mover name se use humne product me bhej dena ahi.
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
