import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { baseURL } from "../../services/axiosInterceptor";
import HotelContactForm from "../Forms/HotelContactForm";
import { useForm } from "react-hook-form";

const SingleHotelDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  /** states for opening the modal of form */
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e) => {
    // e.stopPropagation()
    setIsOpen(!isOpen);
  };

  const { watch, register, getValues } = useForm({
    defaultValues: {
      passenger: 0,
    },
  });
  const state = location.state ?? {};
  // console.log("------------location state data", state);
  const { hotel, hotelStartDate, HotelEndDate, hotelTravellers } = state;
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
    inclusion
  } = hotel;

  // console.log("the estimated price is", estimatedPrice)
  let splittedInclusion = inclusion?.length >0 ? inclusion?.[0].split(",") : "" 
  // console.log("the splitted inclusion is", splittedInclusion)
  const inclusionHelper = (splittedInclusion) => {
    let newArr = splittedInclusion?.split(",");
    // console.log("the new arr is", newArr);
    return (
      <ul>
        {newArr?.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    );
  }

  /**-------------to calculate the estimated value of the hotel according to the hotel travellers-------------*/
  let Estimated_Hotel_Value = (hotelTravellers, estimatedPrice) => {
    console.log("the hotel travellers", hotelTravellers);
    let travellersCount = parseInt(hotelTravellers);
    let cost = 0;

    if (isNaN(travellersCount) || travellersCount <= 0 || isNaN(estimatedPrice) || estimatedPrice <= 0) {
      return 0;
    }

    if (travellersCount % 2 === 0) {
      // Even number of travellers
      cost = estimatedPrice * (travellersCount / 2);
    } else {
      // Odd number of travellers — rule: price x (travellersCount - 0.5)
      cost = estimatedPrice * (travellersCount - 0.5);
    }

    return cost;
  };

  let finalValue = Estimated_Hotel_Value(hotelTravellers, estimatedPrice);
  finalValue = !isNaN(finalValue) ? finalValue : 0;
   
  // console.log("the final value is", finalValue)
  /** calculating ultimate final value */
  let passenger = watch("passenger");
  let ultimateFinalValue =
    finalValue == 0
      ? Estimated_Hotel_Value(passenger, estimatedPrice)
      : finalValue;

      console.log("the ultimate final value", ultimateFinalValue)
  let startDate = watch("startDate");
  let endDate = watch("endDate");

  // console.log("start and end date", startDate, endDate)
  let finalStartDate = hotelStartDate ?? startDate;
  let finalEndDate = HotelEndDate ?? endDate;
  let finalPassenger = hotelTravellers ?? passenger;
  // console.log("the final start and end date will be", finalStartDate, finalEndDate, finalPassenger)
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
            <h2 className="text-2xl font-semibold mb-4">Inclusion</h2>
            <div className="flex flex-col gap-1">
              {splittedInclusion?.length >0 ?  <>{splittedInclusion?.map((item, index)=>(
                <ul>
                    <li key={index}>• {item}</li>
                </ul>
              ))}</> :<><span>No Inclusion</span></>}
            </div>
          </div>
        </div>

        {/* Right Column - Price and Map */}
        <div className="lg:col-span-1">
       
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Price Details</h2>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ₹{estimatedPrice}
                  <span className="text-sm font-normal text-gray-600">
                  /night for Double Sharing
                  </span>
                </div>
            {finalValue === 0 ? 
            <form className="mb-4">
              <label htmlFor="passenger" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Passengers
              </label>
              <input
                id="passenger"
                type="number"
                defaultValue={1}
                {...register("passenger", { required: "Value is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Start Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  {...register("startDate", { required: "Value is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter End Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  {...register("endDate", { required: "Value is required" })}
                  min={finalStartDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </form>
             : (
              <></>
            )}
            {/* <div className="text-xl font-semibold text-gray-800 mb-4">
              Estimated Cost: ₹
              {finalValue == 0 ? ultimateFinalValue : finalValue}
              <span> for {finalPassenger} people</span>
            </div> */}

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
        <HotelContactForm
          data={location.state}
          startDate={finalStartDate}
          endDate={finalEndDate}
          travellers={finalPassenger}
          estimatedPrice={ultimateFinalValue}
          setFormOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default SingleHotelDetails;
