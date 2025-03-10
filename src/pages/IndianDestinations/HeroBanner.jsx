import React from "react";
import { baseURL } from "../../services/axiosInterceptor";

function HeroBanner({ data }) {
  return (
    <div className="w-full h-screen flex items-center  ">
      {Array.isArray(data) && (
        <>
          <img
            className="absolute inset-0 z-0 w-full h-screen  object-cover"
            src={`${baseURL}/${data[0]?.packageDestination?.banner?.path}`}
            alt="banner image"
          />

          <div className=" pl-[10%] z-20 space-y-3">
            <div className="text-[2.5rem] border-l-[6px] border-yellow-400 font-bold text-white px-2 ">
              {data[0]?.packageDestination?.name} Tour Packages
            </div>
            <div className="bg-yellow-400 rounded w-fit text-black text-2xl font-semibold px-4 py-2 flex justify-center items-center">
              Description for {data[0]?.packageDestination?.name}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HeroBanner;
