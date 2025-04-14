import React, { useCallback, useEffect, useState } from "react";
import { searchDestination } from "../../features/destination/destinationActions";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import addDays from "date-fns/addDays";
import axios from "axios";
import { axiosInstance } from "../../services/axiosInterceptor";

const HeroSupportingComponent = ({ data }, ref) => {
  // --------------------------------------------States--------------------------------------

  const [destination, setDestination] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  /**-----------------for dates------------------*/
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 
  
  const [travellers, setTravellers] = useState("");
  let maxDate = null;
  if (startDate) {
    maxDate = addDays(startDate, 10);
  }
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, setValue, getValues } = useForm();
 
  const navigate = useNavigate();
  const result = useSelector((state) => state.destination);  

  /** getting the value of the destination field */
  const destinationFieldName = getValues("destination");
  console.log("-------------------destination name", destinationFieldName);

  /** new addition */
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  const fetchDestinations = async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await axiosInstance.get(
        `/api/v1/destinations/search?destination=${searchQuery}`
      );
      setResults(response.data.data || []);
    } catch (error) {
      console.error("Error fetching destinations:", error);
      setResults([]);
    }
    setIsSearching(false);
  };

  // Debounced search handler
  const debouncedSearch = useCallback(debounce(fetchDestinations, 300), []);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    // setQuery(value);
    setDestination(value);
    console.log(value, "my qury value");
    debouncedSearch(value);
    setValue("destination", value);
  };

  // Handle result click
  const handleResultClick = (destinationP) => {
    // setQuery(destinationP.name); // Update input with selected value
    setDestination(destinationP.name);

    setValue("destination", destinationP.name);
    // console.log(query, "query after click")
    setResults([]); // Clear dropdown
  };

  const submitForm = async (data) => {
    console.log(data, "my sent data");
    const { destination } = data;

    if (travellers == "") return alert("Travellers is a required field");
    if (startDate == null || endDate == null) {
      return alert("Both the dates are required");
    } else {
      try {
        const actionResult = await dispatch(
          searchDestination(destination)
        ).unwrap();

        if (actionResult?.data?.length > 0) {
          navigate(`fully-customize/${actionResult.data[0]._id}`, {
            state: { startDate, endDate, destination , travellers},
          });
        } else {
          console.log("No results found for the selected destination.");
        }
      } catch (error) {
        console.error("Failed to fetch destination data:", error);
      }
    }
  };

  const handleTravellers = (e) => {
    const numberTravellers = parseInt(e.target.value, 10);
    if (!isNaN(numberTravellers) && numberTravellers > 0) {
      setTravellers(numberTravellers);
    } else {
      setTravellers("");
    }
  };
 
  // console.log("the travellers are",typeof travellers)
/**---------------------------------this is for the hotels section-------------------------------*/

/**----------------------------------states for hotels searching----------------------------*/
const [hotelDestination, setHotelDestination] = useState("")
const [hotelResult, setHotelResult] = useState([])
const [isHotelSearching, setIsHotelSearching] = useState(false)
const [hotelStartDate, setHotelStartDate] = useState(null);
const [HotelEndDate, setHotelEndDate] = useState(null);
const [hotelTravellers, setHotelTravellers] = useState("");
// console.log(" start end dates are", hotelStartDate, HotelEndDate)
//handle input change for hotels//
  const handleInputChangeHotel = (e) => {
    const value = e.target.value;
    // setQuery(value);
    setHotelDestination(value);
    // console.log(value, "my qury value");
    debouncedSearchHotel(value);
    setValue("hotelDestination", value);
  };
  const handleResultClickHotel = (destinationP) => {
    setHotelDestination(destinationP.name);
    setValue("hotelDestination", destinationP.name);
    setHotelResult([]);  
  };
  /** debounce logic for the  */
  const debounceHotel = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  const fetchHotelDestinations = async (searchQuery) => {
    if (!searchQuery) {
      setHotelResult([]);
      return;
    }

    setIsHotelSearching(true);
    try {
      const response = await axiosInstance.get(
        `/api/v1/destinations/search?destination=${searchQuery}`
      );
      setHotelResult(response.data.data || []);
    } catch (error) {
      // console.error("Error fetching destinations:", error);
      setHotelResult([]);
    }
    setIsHotelSearching(false);
  };
/**----------------------------Handle for selecting the no of hotel travellers--------------------------------*/
const handleHotelTraveller = (e)=>{
  setHotelTravellers(parseInt(e.target.value))
}

  // Debounced search handler
  const debouncedSearchHotel = useCallback(debounceHotel(fetchHotelDestinations, 300), []);

  const hotelDest = watch("hotelDestination")
  const [locationName, setLocationName] =useState("")

  const handleChangeLocation =(e)=>{
    setLocationName(e.target.value)
  }

  console.log("the location name is", locationName)
  /** handle to submit the form and get the hotels at that destination */
  const submitHotelForm = async(data)=>{
    const { hotelDestination } = data;
    // console.log("the hotel destination is",hotelDestination)
    try{
    const actionResult = await dispatch(
      searchDestination(hotelDestination)
    ).unwrap();
console.log('----------------- the actionsresult value is', actionResult)
    if (actionResult?.data?.length > 0) {
      navigate(`hotels-dest/${actionResult.data[0]._id}`
        , {
          state: { hotelStartDate, HotelEndDate, hotelTravellers, locationName },
      }
    );
    } else {
      console.log("No results found for the selected destination.");
    }
  } catch (error) {
    console.error("Failed to fetch destination data:", error);
  }
  }
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg lg:w-[950px] mx-auto">
      {data === "Trip" && (
        <div className="space-y-6">
          <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Left Side: Destination Search */}

            <div className="flex-grow">
              <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
                <div className="flex flex-row gap-4">
                  <div className="relative">
                    <label
                      htmlFor="destination"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Search Destination
                    </label>
                    <div className="relative rounded-md">
                      <div className="absolute inset-y-0 left-4 pl-[-2] flex items-center pointer-events-none ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_972_1398)">
                            <path
                              d="M9.99996 1.66669C6.77496 1.66669 4.16663 4.27502 4.16663 7.50002C4.16663 11.875 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.875 15.8333 7.50002C15.8333 4.27502 13.225 1.66669 9.99996 1.66669ZM5.83329 7.50002C5.83329 5.20002 7.69996 3.33335 9.99996 3.33335C12.3 3.33335 14.1666 5.20002 14.1666 7.50002C14.1666 9.90002 11.7666 13.4917 9.99996 15.7334C8.26663 13.5084 5.83329 9.87502 5.83329 7.50002Z"
                              fill="#5C5C5C"
                            />
                            <path
                              d="M9.99996 9.58335C11.1506 9.58335 12.0833 8.65061 12.0833 7.50002C12.0833 6.34943 11.1506 5.41669 9.99996 5.41669C8.84937 5.41669 7.91663 6.34943 7.91663 7.50002C7.91663 8.65061 8.84937 9.58335 9.99996 9.58335Z"
                              fill="#5C5C5C"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_972_1398">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <input
                        type="text"
                        autoComplete={false}
                        autoCorrect={false}
                        {...register("destination")}
                        value={destination}
                        onChange={handleInputChange}
                        placeholder="Search"
                        className="w-full px-4 py-2 pl-10 border border-black/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007E8F]"
                      />
                      {results.length > 0 && (
                        <ul className="absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                          {results.map((destinationP, index) => (
                            <li
                              key={index}
                              onClick={() => handleResultClick(destinationP)}
                              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            >
                              {destinationP.name}
                            </li>
                          ))}
                        </ul>
                      )}
                      {isSearching && (
                        <div className="absolute z-10 mt-1 text-gray-500">
                          Searching...
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="travellers"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Number of Travellers
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        {...register("travellers")}
                        value={travellers}
                        placeholder="Travellers"
                        onChange={handleTravellers}
                        className="w-full px-4 py-2 border border-black/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007E8F]"
                      />
                    </div>

                    {/* Action Buttons */}
                  </div>

                  <div className="flex flex-col ">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <DatePicker
                      required
                      selectsStart
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="yyyy-MM-dd"
                      className="w-full px-3 py-2 border border-black/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007E8F] focus:border-transparent"
                      placeholderText="Select Start Date"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <DatePicker
                      required
                      selectsEnd
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      minDate={startDate}
                      maxDate={maxDate}
                      dateFormat="yyyy-MM-dd"
                      className="w-full px-3 py-2 border border-black/50  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007E8F] focus:border-transparent"
                      placeholderText="Select End Date"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="text-white bg-[#007E8F] items-center justify-center flex hover:bg-[#439ca8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-6 py-2.5 text-center transition duration-300 ease-in-out"
                  >
                    Customize Your Trip
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Date Pickers */}
            <div className="flex flex-row gap-4 w-full md:w-auto"></div>
          </div>
        </div>
      )}
      {/**------------------------------------------------------------------Hotel Section--------------------------------------------------------------*/}
      {data === "Hotel" && (
        
          <div className="space-y-6">
            <div className="flex flex-col-reverse md:flex-row gap-6">
              {/* Left Side: Destination Search */}

              <div className="flex-grow">
                <form onSubmit={handleSubmit(submitHotelForm)} className="space-y-4">
                  <div className="flex flex-row gap-4">
                    <div className="relative">
                      <label
                        htmlFor="hotelDestination"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Search Destination
                      </label>
                      <div className="relative rounded-md">
                        <div className="absolute inset-y-0 left-4 pl-[-2] flex items-center pointer-events-none ">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_972_1398)">
                              <path
                                d="M9.99996 1.66669C6.77496 1.66669 4.16663 4.27502 4.16663 7.50002C4.16663 11.875 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.875 15.8333 7.50002C15.8333 4.27502 13.225 1.66669 9.99996 1.66669ZM5.83329 7.50002C5.83329 5.20002 7.69996 3.33335 9.99996 3.33335C12.3 3.33335 14.1666 5.20002 14.1666 7.50002C14.1666 9.90002 11.7666 13.4917 9.99996 15.7334C8.26663 13.5084 5.83329 9.87502 5.83329 7.50002Z"
                                fill="#5C5C5C"
                              />
                              <path
                                d="M9.99996 9.58335C11.1506 9.58335 12.0833 8.65061 12.0833 7.50002C12.0833 6.34943 11.1506 5.41669 9.99996 5.41669C8.84937 5.41669 7.91663 6.34943 7.91663 7.50002C7.91663 8.65061 8.84937 9.58335 9.99996 9.58335Z"
                                fill="#5C5C5C"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_972_1398">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>

                        <input
                          type="text"
                          autoComplete={false}
                          autoCorrect={false}
                          {...register("hotelDestination")}
                          value={hotelDestination}
                          onChange={handleInputChangeHotel}              
                          placeholder="Search"
                          className="w-full px-4 py-2 pl-10 border border-black/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007E8F]"
                        />
                        {hotelResult.length > 0 && (
                          <ul className="absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                            {hotelResult?.map((destinationP, index) => (
                              <li
                                key={index}
                                onClick={() => handleResultClickHotel(destinationP)}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                              >
                                {destinationP.name}
                              </li>
                            ))}
                          </ul>
                        )}
                        {isHotelSearching && (
                          <div className="absolute z-10 mt-1 text-gray-500">
                            Searching...
                          </div>
                        )}
                      </div>
                    </div>
                  {/** location section */}
                  <div className="relative">
                    <label
                      htmlFor="hotelLocation"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Enter Location
                    </label>
                    <div className="relative rounded-md">
                      <div className="absolute inset-y-0 left-4 pl-[-2] flex items-center pointer-events-none ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_972_1398)">
                            <path
                              d="M9.99996 1.66669C6.77496 1.66669 4.16663 4.27502 4.16663 7.50002C4.16663 11.875 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.875 15.8333 7.50002C15.8333 4.27502 13.225 1.66669 9.99996 1.66669ZM5.83329 7.50002C5.83329 5.20002 7.69996 3.33335 9.99996 3.33335C12.3 3.33335 14.1666 5.20002 14.1666 7.50002C14.1666 9.90002 11.7666 13.4917 9.99996 15.7334C8.26663 13.5084 5.83329 9.87502 5.83329 7.50002Z"
                              fill="#5C5C5C"
                            />
                            <path
                              d="M9.99996 9.58335C11.1506 9.58335 12.0833 8.65061 12.0833 7.50002C12.0833 6.34943 11.1506 5.41669 9.99996 5.41669C8.84937 5.41669 7.91663 6.34943 7.91663 7.50002C7.91663 8.65061 8.84937 9.58335 9.99996 9.58335Z"
                              fill="#5C5C5C"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_972_1398">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <input
                        type="text"
                        onChange={(e) => handleChangeLocation(e)}
                        placeholder="Search"
                        className="w-full px-4 py-2 pl-10 border border-black/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007E8F]"
                      />
                      
                    </div>
                  </div>

                    <div className="relative">
                      <label
                        htmlFor="hotelTraveller"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Number of Travellers
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          {...register("hotelTravellers")}
                          value={hotelTravellers}
                          placeholder="Travellers"
                          onChange={handleHotelTraveller}
                          className="w-full px-4 py-2 border border-black/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007E8F]"
                        />
                      </div>

                      {/* Action Buttons */}
                    </div>

                    <div className="flex flex-col ">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Check In
                      </label>
                      {/* <DatePicker
                        required
                        selectsStart
                        selected={hotelStartDate}
                        onChange={(date) => setHotelStartDate(date)}
                        dateFormat="MM-dd-yyyy"
                        className="w-full px-3 py-2 border border-black/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007E8F] focus:border-transparent"
                        placeholderText="Select Start Date"
                      /> */}
                    <input
                      type="date"
                      id="checkIn"
                      {...register("checkIn")}
                      onChange={(e)=> setHotelStartDate(e.target.value)}
                      required
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                    <div className="flex flex-col">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Check Out
                      </label>
                      {/* <DatePicker
                        required
                        selectsEnd
                        selected={HotelEndDate}
                        onChange={(date) => setHotelEndDate(date)}
                        minDate={startDate}
                        // maxDate={maxDate}
                        dateFormat="MM-dd-yyyy"
                        className="w-full px-3 py-2 border border-black/50  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007E8F] focus:border-transparent"
                        placeholderText="Select End Date"
                      /> */}
                    <input
                      type="date"
                      id="checkOut"
                      {...register("checkOut")}
                      onChange={(e)=> setHotelEndDate(e.target.value)}
                      required
                      min={hotelStartDate}
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="text-white bg-[#007E8F] items-center justify-center flex hover:bg-[#439ca8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-6 py-2.5 text-center transition duration-300 ease-in-out"
                    >
                      Find Your Hotel
                    </button>
                  </div>
                </form>
              </div>
 
            </div>
          </div>
        
      )}
    </div>
  );
};

export default HeroSupportingComponent; 