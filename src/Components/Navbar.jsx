import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="max-w-screen-lg mx-auto p-3 flex items-center justify-between">
      <div className="flex items-center gap-16">
      <img
        className="h-16"
        src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png"
        alt=""
      />
      <div className="flex gap-6 ">
        {["Home", "Work", "Culture", "", "Team"].map((value, index) => (
           value.length === 0 ? <span key={index} className="w-[2px] h-7 bg-zinc-700 ml-10 mr-3"></span> : <a key={index} className="text-zinc-100 text-sm flex items-center gap-1" href="#">
            {index === 1 ? <span style={{boxShadow: "0 0 0.25 #00ff19"}} key={index} className="inline-block bg-green-500 rounded-full h-1 w-1"></span> : null} 

            {value}
          </a>
          
        ))}
      </div>
      </div>
      <Button />
    </div>
  
  );
}

export default Nav;
