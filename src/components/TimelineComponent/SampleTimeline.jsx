import React from "react";

const Timeline = ({ events }) => {
  console.log("my events data from Days", events);
  return (
    <div className="relative w-full flex flex-col items-center pt-24">
      {events.map((event, index) => (
        <div
          className={`relative flex justify-center items-center w-full h-72 mb-12  ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
          key={index}
        >
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full w-8 h-8 "></div>
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 bg-black w-1.5"></div>

          <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#007E8F] rounded-full z-10 flex items-center justify-center text-white text-nowrap font-bold">
            Day {index + 1}
          </div>

          <div className="bg-black h-40 w-2 "></div>

          {/* Info Box */}
          <div
            className={`p-4 bg-gray-100 rounded-lg shadow-md w-[40%] h-max text-left ${
              index % 2 === 0 ? "mr-auto" : "ml-auto"
            }`}
          >
            <div className="">
              <h1 className="text-black"> Activities</h1>

              {event?.selectedActivity?.map((activity, index) => (
                <h1 className="text-red-400 text-sm ">
                  {index + 1} . {activity.label}
                </h1>
              ))}

              <h1 className="text-black"> Hotel </h1>
              <h1 className="text-pink-400"> {event?.selectedHotel?.name}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
