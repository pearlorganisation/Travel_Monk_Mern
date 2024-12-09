import React from "react";
import Filter from "./Filter";
import CardCarousel from "./CardCarousel";
import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

function TripSection({ data }) {
  return (
    <div className="  md:px-40 py-20 px-5 w-full  h-full">
      {/* <div className="w-full flex md:flex-row flex-col justify-center">
        <div className="h-24 p-4 bg-white flex md:flex-row item-center gap-6 ">
          <CgCalendarDates
            className=" font-bold text-[#01AFD1] mt-4"
            size={30}
          />
          <div>
            <div className="flex flex-col mt-4">
              <div> Duration</div>
            </div>
            <div className="text-sm  text-gray-500">Select Trip Days</div>{" "}
          </div>
        </div>
        <div className="h-24 p-4 bg-white flex flex-row item-center gap-6 ">
          <CiLocationOn className=" font-bold text-[#01AFD1] mt-4" size={30} />
          <div>
            <div className="flex flex-col mt-4">
              <div> Routes</div>
            </div>
            <div className="text-sm  text-gray-500">
              Find Your Dream Getaway
            </div>
            
          </div>

        


     

          <div className="flex items-center gap-2 text-white my-1 rounded px-5 bg-[#01afd1]">
            <div>
            <IoMdSearch  size={30}/>
            </div>
            <div className="font-semibold">Search</div>
          </div>
        </div>
   </div> */}

      <div className="text-[2.5rem] mb-6 font-bold text-[#015f74]">
        Trips From {data?.name}
      </div>
      <CardCarousel data={data} />
    </div>
  );
}

export default TripSection;
