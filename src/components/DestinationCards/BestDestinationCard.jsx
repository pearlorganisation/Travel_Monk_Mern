import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../../services/axiosInterceptor";

const TripCard = ({ trip }) => {
  return (
    <a
      href={trip.link}
      className="block shadow-md rounded-lg overflow-hidden relative group bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${baseURL}/${trip?.image?.path})` }}
    >
      {/* Removed <img> tag */}
      <div className="absolute top-4 right-4 bg-yellow-400 px-2 py-1 rounded text-white font-semibold">
        {trip.startingPrice}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-3">
        <h3 className="text-base font-semibold mb-2 text-white">{trip.name}</h3>
        <div className="flex flex-row justify-between items-center mb-2 text-teal-300">
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faClock} color="cyan" className="pr-1" />
            <span>
              {trip.duration.days} D / {trip.duration.nights} N
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              color="cyan"
              className="pr-1"
            />
            <span>{trip.pickDropPoint.pickup}</span>
          </div>
        </div>
        {/* <div className="flex items-center justify-start text-white text-sm pb-1">
          <FontAwesomeIcon icon={faCalendarAlt} color="cyan" className="pr-1" />{" "}
          <span>{trip.dates}</span>
        </div> */}
      </div>
    </a>
  );
};

export const BestPackages = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((trip, index) => (
        <TripCard key={index} trip={trip} />
      ))}
    </div>
  );
};
