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
  const inputValue = watch("destination", "");

  const navigate = useNavigate();
  const result = useSelector((state) => state.destination);

  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);

  // Debounce function
  // const debounce = (func, delay) => {
  //   let timeoutId;
  //   return (...args) => {
  //     if (timeoutId) clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => func(...args), delay);
  //   };
  // };

  // const fetchDestinations = async (searchQuery) => {
  //   if (!searchQuery) {
  //     setResults([]);
  //     return;
  //   }

  //   setIsSearching(true);
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/api/v1/destinations/search?destination=${searchQuery}`
  //     );
  //     setResults(response.data.data || []);
  //   } catch (error) {
  //     console.error("Error fetching destinations:", error);
  //     setResults([]);
  //   }
  //   setIsSearching(false);
  // };

  // Debounced search handler
  // const debouncedSearch = useCallback(debounce(fetchDestinations, 300), []);

  // Handle input change
  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);
  //   debouncedSearch(value);
  // };

  // Handle result click
  // const handleResultClick = (destination) => {
  //   setQuery(destination.name); // Update input with selected value
  //   setResults([]); // Clear dropdown
  // };

  // const submitForm = async (info) => {
  //   dispatch(searchDestination(info.destination));

  //   {
  //     result?.isSuccess &&
  //       result?.searchResult?.length > 0 &&
  //       navigate(`fully-customize/${result?.searchResult[0]?._id}`);
  //   }
  // };

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
            state: { startDate, endDate, destination },
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
    // const numberTravellers = e.target.value;

    // if (isNaN(numberTravellers)) setTravellers(e.target.value);

    const numberTravellers = parseInt(e.target.value, 10);

    if (!isNaN(numberTravellers) && numberTravellers > 0) {
      setTravellers(numberTravellers);
    } else {
      setTravellers("");
    }
  };

  const hotelsData = [
    {
      label: "City, Property Name Or Location ",
      placeholder: "City or Country",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1398)">
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
      ),
    },
    {
      label: "Start date",
      placeholder: "Not Selected",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1414)">
            <path
              opacity="0.3"
              d="M4.16675 6.66667H15.8334V5H4.16675V6.66667Z"
              fill="#5C5C5C"
            />
            <path
              d="M5.83333 9.16669H7.5V10.8334H5.83333V9.16669ZM15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM12.5 9.16669H14.1667V10.8334H12.5V9.16669ZM9.16667 9.16669H10.8333V10.8334H9.16667V9.16669Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1414">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "End date",
      placeholder: "Not Selected ",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1414)">
            <path
              opacity="0.3"
              d="M4.16675 6.66667H15.8334V5H4.16675V6.66667Z"
              fill="#5C5C5C"
            />
            <path
              d="M5.83333 9.16669H7.5V10.8334H5.83333V9.16669ZM15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM12.5 9.16669H14.1667V10.8334H12.5V9.16669ZM9.16667 9.16669H10.8333V10.8334H9.16667V9.16669Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1414">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Travellers",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1430)">
            <path
              d="M13.7499 10.8334C12.7499 10.8334 11.1916 11.1167 9.99992 11.6667C8.80825 11.1084 7.24992 10.8334 6.24992 10.8334C4.44158 10.8334 0.833252 11.7334 0.833252 13.5417V15.8334H19.1666V13.5417C19.1666 11.7334 15.5583 10.8334 13.7499 10.8334ZM10.4166 14.5834H2.08325V13.5417C2.08325 13.0917 4.21658 12.0834 6.24992 12.0834C8.28325 12.0834 10.4166 13.0917 10.4166 13.5417V14.5834ZM17.9166 14.5834H11.6666V13.5417C11.6666 13.1584 11.4999 12.825 11.2333 12.525C11.9666 12.275 12.8666 12.0834 13.7499 12.0834C15.7833 12.0834 17.9166 13.0917 17.9166 13.5417V14.5834ZM6.24992 10C7.85825 10 9.16658 8.69169 9.16658 7.08335C9.16658 5.47502 7.85825 4.16669 6.24992 4.16669C4.64158 4.16669 3.33325 5.47502 3.33325 7.08335C3.33325 8.69169 4.64158 10 6.24992 10ZM6.24992 5.41669C7.16658 5.41669 7.91658 6.16669 7.91658 7.08335C7.91658 8.00002 7.16658 8.75002 6.24992 8.75002C5.33325 8.75002 4.58325 8.00002 4.58325 7.08335C4.58325 6.16669 5.33325 5.41669 6.24992 5.41669ZM13.7499 10C15.3583 10 16.6666 8.69169 16.6666 7.08335C16.6666 5.47502 15.3583 4.16669 13.7499 4.16669C12.1416 4.16669 10.8333 5.47502 10.8333 7.08335C10.8333 8.69169 12.1416 10 13.7499 10ZM13.7499 5.41669C14.6666 5.41669 15.4166 6.16669 15.4166 7.08335C15.4166 8.00002 14.6666 8.75002 13.7499 8.75002C12.8333 8.75002 12.0833 8.00002 12.0833 7.08335C12.0833 6.16669 12.8333 5.41669 13.7499 5.41669Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1430">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg lg:w-[750px] mx-auto">
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
      {data === "Hotel" && (
        <form>
          <div className="grid grid-cols-[auto_auto_auto_155px_auto] gap-2  ">
            {hotelsData?.map((el, index) => {
              return (
                <div class="relative p-2" key={index}>
                  <div className=" flex justify-start items-center">
                    <label
                      htmlFor="base-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {el.label}
                    </label>
                  </div>

                  <div>
                    <div class="absolute top-8    justify-center inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      {el.img}
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={el.placeholder}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center py-6 ">
            <button
              type="submit"
              class="text-white bg-[#007E8F] hover:bg-[#439ca8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-1/6   h-10  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HeroSupportingComponent;
/**---------------------------for later------------------------- */
// {
//   data === "Hotel" && (
//     <form>
//       <div className="grid grid-cols-[auto_auto_auto_155px_auto] gap-2  ">
//         {hotelsData?.map((el, index) => {
//           return (
//             <div class="relative p-2" key={index}>
//               <div className=" flex justify-start items-center">
//                 <label
//                   htmlFor="base-input"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   {el.label}
//                 </label>
//               </div>

//               <div>
//                 <div class="absolute top-8    justify-center inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                   {el.img}
//                 </div>
//                 <input
//                   type="text"
//                   id="email-address-icon"
//                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder={el.placeholder}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex justify-center items-center py-6 ">
//         <button
//           type="submit"
//           class="text-white bg-[#007E8F] hover:bg-[#439ca8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-1/6   h-10  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   )
// }
