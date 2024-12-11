import React from "react";
import Filter from "./Filter";
import CardCarousel from "./CardCarousel";
function TripSection({ data }) {
  return (
    <div className=" md:px-40 py-20 px-5 w-full bg-neutral-100">
      {/* <div className="w-full flex justify-center">
        <div className="h-24 p-4 bg-white flex gap-6 ">
          <Filter
            iconName="https://wanderon.in/assets/images/new-calender.svg"
            label1="Duration"
            label2="Select Trip Days"
          />
          <Filter
            iconName="https://wanderon.in/assets/images/new-location.svg"
            label1="Routes"
            label2="Find Your Dream Getaway"
          />

          <div className="flex items-center gap-2 text-white my-1 rounded px-5 bg-[#01afd1]">
            <div>
              <img src="https://wanderon.in/assets/svg/search-icon.svg" />
            </div>
            <div className="font-semibold">Search</div>
          </div>
        </div>
      </div> */}

      <div className="text-[2.5rem] mb-6 font-bold text-[#015f74]">
        Trips From {data[0]?.packageDestination?.name}
      </div>
      <CardCarousel data={data} />
    </div>
  );
}

export default TripSection;
