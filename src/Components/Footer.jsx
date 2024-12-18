import React from "react";

function Footer() {
  return (
    <div className="w-full text-white">
      <div className="max-w-screen-lg mx-auto flex gap-10 ">
        <div className="basis-1/2">
          <h1 className="text-[10vw] font-semibold tracker-tight">refokus.</h1>
        </div>
        <div className="flex">
          <div className="basis-1/3 ml-5 p-5 ">
            <h1 className="text-zinc-500 mb-10">Social</h1>
            {["Instagram", "Twitter (2x)", "LinkedIn"].map((val, index) => (
              <h1 key={index} className="text-zinc-600 block mt-2">{val}</h1>
            ))}
          </div>
          <div className="basis-1/3 ml-5 p-5 ">
            <h1 className="text-zinc-500 mb-10">Social</h1>
            {["Instagram", "Twitter (2x)", "LinkedIn"].map((val, index) => (
              <h1 key={index} className="text-zinc-600 block mt-2">{val}</h1>
            ))}
          </div>
          <div className="flex flex-col items-end basis-2/3 justify-end py-10">
            <p className="text-right ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              illo?
            </p>
            <img
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
