/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import DrawSvg from "./DrawSvg";

const RoadmapFully = ({ events }) => {
  console.log(events, "Events");
  return (
    <section className="min-h-screen w-screen relative p-6">
      <h1 className="text-4xl capitalize flex justify-center items-center m-4 mx-auto border-b-2 border-black w-fit">
        Timeline
      </h1>

      <div className="w-4/5 min-h-max mx-auto flex justify-center items-center relative">
        <div className="flex justify-center items-center">
          <DrawSvg />
        </div>

        <ul className="list-none w-full h-full flex flex-col justify-center items-center bg-blue-200 px-6 py-10">
          <li className="w-full h-full flex">&nbsp;</li>

          {Array.isArray(events) &&
            events.map((iti, index) => (
              <TimelineItemFully
                day={`Day ${index + 1}`}
                activities={iti?.selectedActivities}
                hotel={iti?.selectedHotel}
                location={iti.selectedLocation}
                index={index}
              />
            ))}

          <li className="w-full h-full flex odd:justify-start even:justify-end invisible">
            <div className="w-2/5 h-14"></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const TimelineItemFully = ({ activities, hotel, day, location, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  return (
    <li
      ref={itemRef}
      className={`w-full h-full flex odd:justify-start even:justify-end transition-all duration-700 ease-in-out ${
        isVisible
          ? index % 2 === 0
            ? "translate-x-0 opacity-100"
            : "translate-x-0 opacity-100"
          : index % 2 === 0
          ? "-translate-x-32 opacity-0"
          : "translate-x-32 opacity-0"
      }`}
    >
      <div
        className="w-2/5 h-fit p-4 border-4 border-black 
        odd:rounded-[50px_0_50px_0] even:rounded-[0_50px_0_50px] 
        odd:text-right even:text-left"
      >
        <div
          className="relative p-4 bg-white text-red-500 border border-green-500 
          odd:rounded-[40px_0_40px_0] even:rounded-[0_40px_0_40px]"
        >
          <span className="block text-2xl capitalize text-black">{day}</span>
          <span className="block text-2xl capitalize font-normal mt-2 text-green-500">
            Activities
          </span>

          <ul className="">
            {Array.isArray(activities) &&
              activities.map((activity) => (
                <li className="text-red-500">{activity.label}</li>
              ))}
          </ul>

           <span className="block text-2xl capitalize font-normal mt-2 text-green-500">
            Hotel
          </span>

          <span className="block text-2xl capitalize font-normal mt-2 text-red-500">
            {hotel.name}
          </span> 

          <span className="block text-2xl capitalize font-normal mt-2 text-green-500">
            Location
          </span>

          <span className="block text-2xl capitalize font-normal mt-2 text-red-500">
            {location}
          </span>
        </div>
      </div>
    </li>
  );
};

export default RoadmapFully;
