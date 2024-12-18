import React from "react";

function Strip({item}) {
  return (
    <div className="w-[16.66%] px-4 py-3 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] border-zinc-500 flex justify-between items-center">
      <img className="w-24" src={item.url} alt="" />
      <span className="text-zinc-100 font-semibold">{item.no}</span>
    </div>
  );
}

export default Strip;
