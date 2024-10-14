import React from "react";

function HeroBanner({ data }) {
  return (
    <div className="w-full h-screen flex items-center  ">
      <img
        className="absolute inset-0 z-0 w-full h-screen  object-cover"
        src={data?.banner?.secure_url}
        alt="banner image"
      />

      <div className=" pl-[10%] z-20 space-y-3">
        <div className="text-[2.5rem] border-l-[6px] border-yellow-400 font-bold text-white px-2 ">
          Leh Ladakh Tour Packages
        </div>
        <div className="bg-yellow-400 rounded w-fit text-black text-2xl font-semibold px-4 py-2 flex justify-center items-center">
          Step Foot in the Himalayan Wonderland
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
