import React from "react";
import Filter from "./Filter";
import CardCarousel from "./CardCarousel";
function TripSection({ data }) {
  return (
    <div className=" md:px-40 py-20 px-5 w-full bg-neutral-100">
      {Array.isArray(data) && (
        <div className="text-[2.5rem] mb-6 font-bold text-[#015f74]">
          Trips From {data[0]?.packageDestination?.name}
        </div>
      )}
      <CardCarousel data={data} />
    </div>
  );
}

export default TripSection;
