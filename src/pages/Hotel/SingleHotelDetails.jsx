import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { baseURL } from "../../services/axiosInterceptor";
import HotelContactForm from "../Forms/HotelContactForm";

const SingleHotelDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  /** states for opening the modal of form */
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e) => {
    // e.stopPropagation()
    setIsOpen(!isOpen);
  };

  const state = location.state ?? {};
  console.log("------------location state data", state);
  const { hotel, hotelStartDate, hotelEndDate, hotelTravellers } = state;
  const {
    name,
    city,
    state: hotelState,
    country,
    estimatedPrice,
    amenities,
    googleMapsUrl,
    image,
    createdAt,
  } = hotel;

  /**-------------to calculate the estimated value of the hotel according to the hotel travellers-------------*/
  let Estimated_Hotel_Value = (hotelTravellers, estimatedPrice) => {
    let travellersCount = parseInt(hotelTravellers);
    let cost = estimatedPrice * Math.ceil(travellersCount / 3);
    return cost;
  };
  let finalValue = Estimated_Hotel_Value(hotelTravellers, estimatedPrice);
  finalValue = !isNaN(finalValue) ? finalValue : 0;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      {/* Hotel Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-lg text-gray-600">
          {city}, {hotelState}, {country}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Image and Amenities */}
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            {image?.path && (
              <img
                // src={`${baseURL}/${hotel?.image.path}`}
                src={`${baseURL}/${image.path}`}
                alt={name}
                className="w-full h-96 object-cover"
              />
            )}
          </div>

          {/* Amenities Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities?.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Price and Map */}
        <div className="lg:col-span-1">
          {/* Price Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Price Details</h2>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              ₹{estimatedPrice}
              <span className="text-sm font-normal text-gray-600">
                /night for Triple Sharing
              </span>
            </div>
            {/* {finalValue &&  <div className="text-3xl font-bold text-blue-600 mb-2">
              The Estimate Price for hotel will be around - ₹{finalValue ?? "No Value "} for
              <span className="text-3xl pl-2 font-bold text-gray-600">{hotelTravellers} people</span>
            </div>} */}

            {finalValue}
            <button
              onClick={() => handleOpen()}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Book Through Our Travel Advisor
            </button>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div
              className="w-full h-64 rounded-lg overflow-hidden"
              dangerouslySetInnerHTML={{ __html: googleMapsUrl }}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Location: </span>
              {city}, {hotelState}, {country}
            </p>
          </div>
          {/**-----------in future might change this-------------*/}
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Listed Since: </span>
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <HotelContactForm data={location.state} setFormOpen={setIsOpen} />
      )}
    </div>
  );
};

export default SingleHotelDetails;
