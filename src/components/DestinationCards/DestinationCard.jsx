import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ data }) => {
  console.log(data, "destination card data");
  return (
    <div className="px-8 py-2">
      <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center items-stretch gap-6 shadow-md">
        {data?.map((destination, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden">
            <Link to={`/${destination.type}/${destination._id}`}>
              <img
                src={destination?.image?.secure_url}
                alt={destination?.name}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{destination?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCard;
