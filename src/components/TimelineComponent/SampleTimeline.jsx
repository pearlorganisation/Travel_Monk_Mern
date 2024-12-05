import React from "react";

const events = [
  { day: 1, info: "Event in 2000" },
  { day: 2, info: "Event in 2005" },
  { day: 3, info: "Event in 2010" },
  { day: 4, info: "Event in 2015" },
  { day: 5, info: "Event in 2020" },
];

const Timeline = () => {
  return (
    <div className="relative w-full flex flex-col items-center pt-24">
      {events.map((event, index) => (
        <div
          className={`relative flex justify-center items-center w-full h-72 mb-12  ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
          key={index}
        >
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full w-4 h-4 z-99"></div>
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 bg-black w-1 z-0"></div>

          <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#007E8F] rounded-full z-10 flex items-center justify-center text-white font-bold">
            Day {event.day}
          </div>
          {/* Year - Positioned in the center */}
          {/* <div className="absolute top-1/2 transform -translate-y-1/2 text-2xl font-bold z-10 mx-6">
            Day {event.day}
          </div> */}

          <div className="bg-black h-40 w-2 "></div>

          {/* Info Box */}
          <div
            className={`p-4 bg-gray-100 rounded-lg shadow-md w-[40%] h-56 text-left ${
              index % 2 === 0 ? "mr-auto" : "ml-auto"
            }`}
          >
            {event.info}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
