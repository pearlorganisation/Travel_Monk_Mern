import Stepper from "./Stepper";
import Bro from "../../assets/images/bro.png";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAllActivitiesByDestination,
  getSingleDestination,
} from "../../features/trips/tripActions";
import { getHotelsByDestination } from "../../features/hotel/hotelActions";
import { getDestinationVehicle } from "../../features/DestinationVehicle/destinationVehicleaction";
import moment from "moment";
import CustomDropdownIndicator from "../../components/CustomDropdownIcon/CustomDropdownIcon";

const tripData = [
  {
    label: "Place you want to start your trip",
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
    label: "Place you want to visit",
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

const FullyCustomizeTrip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // destinationId
  const location = useLocation();
  const { singleDestination, activities } = useSelector((state) => state.trip);
  const { destinationHotels } = useSelector((state) => state.hotels); // destination hotels contains all the hotels for that particular destination
  const { destinationVehicles } = useSelector(
    (state) => state.destination_vehicle
  );

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  console.log(isUserLoggedIn, "fully customize auth state");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedVehicleImage, setSelectedVehicleImage] = useState("");

  const { startDate, endDate, destination } = location.state ?? {};
  // console.log("------------destination", startDate, endDate, destination);

  // console.log("------------destination hotels", destinationHotels);

  /** calculating the days difference */
  const calculateDaysBetweenDates = (startDate, endDate) => {
    // Convert the date strings into Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in time (milliseconds)
    const timeDifference = end - start;

    // Convert the difference to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    // console.log(daysDifference, "diff");
    return daysDifference;
  };

  const myDays = calculateDaysBetweenDates(startDate, endDate);
  /** duration that is day and nights of the customized package */
  const days = parseInt(myDays);
  const nights = parseInt(myDays - 1);

  /**------------------Utility function to get the dates between the selected start date and end date----------------------*/
  const getDatesInRange = (start, end) => {
    if (!start || !end) return [];

    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const datesRange = getDatesInRange(startDate, endDate);
  const datesObjects = datesRange.map((date) => ({ date }));

  /**----------------------------States--------------------------------- */

  /** states for claculating the selected hotels price */
  const [hotelPrices, setHotelPrices] = useState([]); // Array to store prices for each day
  const [totalHotelPrices, setTotalHotelPrice] = useState(0); // to get the whole selected hotel prices

  /** for selected vehicle */
  const [selectedVehicleName, setSelectedVehicleName] = useState("")
  const [selectedVehicleId,setSelectedVehicleId] = useState(null)
  const [selectedVehiclePrice,setSelectedVehiclePrice] = useState("")
  const handleSelectVehicle = (
    vehicleName,
    vehiclePrice,
    vehicleId,
    vehicleImage
  ) => {
    setSelectedVehicleId(vehicleId);
    setSelectedVehicleName(vehicleName);
    setSelectedVehiclePrice(vehiclePrice);
    setSelectedVehicleImage(vehicleImage);
  };

  // console.log(
  //   selectedVehiclePrice,
  //   "-----------------------selected vehicle price"
  // );
  /** data prepared for the options to use in the react-select */
  let activitiesOption = activities?.map((activity) => ({
    label: activity?.name,
    value: activity?._id,
  }));

  // console.log("---------------------activites option", activitiesOption)

  useEffect(() => {
    dispatch(getAllActivitiesByDestination(id));
    dispatch(getHotelsByDestination(id));
    dispatch(getSingleDestination(id));
    dispatch(getDestinationVehicle(id));
  }, []);

  const [dayData, setDayData] = useState(
    Array.from({ length: myDays }, () => ({
      selectedLocation: "",
      selectedHotel: {},
      selectedActivities: [],
      day: "",
      date: "",
    })) || []
  );

  useEffect(() => {
    if (myDays) {
      setDayData(
        Array.from({ length: myDays }, () => ({
          selectedLocation: "",
          selectedHotel: {},
          selectedActivities: [],
          day: "",
          date: "",
        })) || []
      );
    }
  }, [myDays]);

  const handleLocationChange = (index, event, selectedDate) => {
    const newDayData = [...dayData];
    newDayData[index].selectedLocation = event.target.value;
    newDayData[index].date = selectedDate;
    newDayData[index].day = index + 1;
    setDayData(newDayData);
  };

  /** to selecte hotels and calculate their price */
  const handleHotelChange = (index, event, hotels) => {
    /**------- logic to find out the selected hotel by id--------------*/
    const selectedHotelId = event.target.value;
    const selected_Hotel = hotels.find(
      (hotel) => hotel._id === selectedHotelId
    ); // this will find the selected hotel by id

    const newDayData = [...dayData];

    /** setting the hotel of current index */
    newDayData[index].selectedHotel = event.target.value;
    setDayData(newDayData);
    /** calculating the selected hotel prices */
    const startingPrice = selected_Hotel ? selected_Hotel.startingPrice : 0;
    const updatedHotelPrices = [...hotelPrices];
    updatedHotelPrices[index] = startingPrice;
    setHotelPrices(updatedHotelPrices);
    setTotalHotelPrice(
      updatedHotelPrices.reduce((total, price) => total + price, 0)
    );
  };
  // console.log(totalHotelPrices, "-----------------------------------");

  const handleActivityChange = (selectedOptions, dayIndex) => {
    if (selectedOptions && selectedOptions.length > 3) {
      return;
    }

    setDayData((prevDayData) =>
      prevDayData.map((day, index) =>
        index === dayIndex
          ? { ...day, selectedActivities: selectedOptions || [] }
          : day
      )
    );
  };
  /** The Total price after selecting hotels and vehicle */
  let Total_Estimated_Price = totalHotelPrices + selectedVehiclePrice;

  console.log("selected hotel and vehicle prices", Total_Estimated_Price);
  console.log(dayData, "day data");

  /**------------------Handle for Enquiry-------------------------*/
  const handleEnquiry = () => {
    const invalidEntry = dayData.find(day =>
      !day.selectedLocation ||  
      !day.selectedHotel || Object.keys(day.selectedHotel).length === 0 || 
      !Array.isArray(day.selectedActivities) || day.selectedActivities.length === 0  
    );

    if (invalidEntry) {
      alert(
        "Please ensure all days have a location, hotel, and activities selected."
      );
      return;
    }

    localStorage.setItem(
      "packageDetails",
      JSON.stringify({
        Estimated_Price: Total_Estimated_Price,
        itinerary: dayData,
        destinationId: id,
        vehicleId: selectedVehicleId,
        duration: { days, nights },
        startDate,
        endDate,
      })
    );
    navigate("/full-customize-package-enquiry", {
      state: {
        Estimated_Price: Total_Estimated_Price,
        itinerary: dayData,
        destinationId: id,
        vehicleId: selectedVehicleId,
        duration: { days, nights },
        startDate,
        endDate,
      },
    });
  } 

  /** */
  return (
    <div className="bg-gray-200 relative">
      <div className="px-24 mt-4">
        <h1 className="text-[#1f1f1f] font-bold text-4xl leading-[48px]">
          {singleDestination?.data?.name}
        </h1>

        <h3 className="mt-3 font-normal text-base text-[#1f1f1f]">
          Start planning our trip with Travel Monk's Trip Planner. You can
          further optimize it by changing stays, adding activities and
          destinations.
        </h3>

        <h1> Duration : {myDays} </h1>

        <button className="mt-4 bg-white px-6 py-1 border border-[#1f1f1f] rounded-sm lg:min-w-72 flex flex-row items-center justify-center gap-2">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3334 5.16669H7.33341V0.166687H5.66675V5.16669H0.666748V6.83335H5.66675V11.8334H7.33341V6.83335H12.3334V5.16669Z"
              fill="#1F1F1F"
            />
          </svg>
          <button
            onClick={openModal}
            className="px-4 py-2  text-black font-bold rounded hover:bg-blue-600 hover:text-white"
          >
            Add a Vehicle ( Compulsory )
          </button>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Select a Vehicle</h2>

            {/* Vehicle List */}
            <div className=" flex flex-row gap-6">
              {destinationVehicles?.map((vehicle) => (
                <div
                  key={vehicle?._id}
                  onClick={() => {
                    handleSelectVehicle(
                      vehicle?.vehicleName,
                      vehicle?.pricePerDay,
                      vehicle?._id,
                      vehicle?.images[0]?.secure_url
                    );
                    closeModal(); // Close the modal after selection
                  }}
                  className="p-4 border rounded-lg shadow-md cursor-pointer bg-purple-300 h-56"
                >
                  <p className="text-lg font-semibold">
                    Name: {vehicle?.vehicleName}
                  </p>
                  <p className="text-gray-600">
                    Price: {vehicle?.pricePerDay} /- per day
                  </p>

                  <img
                    src={vehicle?.images[0]?.secure_url}
                    className="w-28 h-20 mt-8"
                  />
                </div>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="p-4">
        {selectedVehicleName && (
          <div className="mt-6 p-4 bg-orange-300 rounded-lg shadow-md">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-blue-700">
                  Your Selected Vehicle
                </h3>
                <p className="text-lg">Name: {selectedVehicleName}</p>
                <p className="text-lg">Price: {selectedVehiclePrice}</p>
              </div>

              <img src={selectedVehicleImage} className="w-20 h-20" />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center text-center fold-semibold text-4xl">
        Note: You can only select a maximum of 3 activities for each day.
      </div>

      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {dayData?.map((day, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-200"
            >
              <div className="flex items-center bg-gray-100 p-4 space-x-4">
                {/* Menu Icon */}

                {/* Day Number */}
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content Container */}
                <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Close Icon */}
                  <div className="flex items-center justify-center"></div>

                  {/* Date */}
                  <div className="flex flex-col">
                    <h2 className="text-sm font-medium text-gray-600">
                      {new Date(datesObjects[index]?.date).toDateString()}
                    </h2>
                  </div>

                  {/* Location Selector */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-700 mb-1">
                      Select Location
                    </label>
                    <select
                      value={dayData[index]?.selectedLocation}
                      onChange={(event) =>
                        handleLocationChange(
                          index,
                          event,
                          new Date(datesObjects[index]?.date).toISOString()
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-200"
                    >
                      <option key="choose">Choose Location</option>
                      {singleDestination?.data?.locations?.[
                        index
                      ]?.location?.map((loc, index) => (
                        <option key={index} value={loc}>
                          {" "}
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Hotel Selector */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-700 mb-1">
                      Select Hotel
                    </label>
                    <select
                      value={dayData[index]?.selectedHotel}
                      onChange={(event) =>
                        handleHotelChange(index, event, destinationHotels)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-200"
                    >
                      <option key="choose">Choose Hotel</option>
                      {Array.isArray(destinationHotels) &&
                        destinationHotels?.map((hotel) => (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Activities Selector */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Select Activities
                  </label>
                  <Select
                    placeholder="Choose Activities"
                    isMulti
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    value={dayData[index]?.selectedActivities || []}
                    onChange={(selectedOptions) =>
                      handleActivityChange(selectedOptions, index)
                    }
                    options={activitiesOption}
                    closeMenuOnSelect={false}
                    className="text-sm"
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: "#D1D5DB",
                        "&:hover": {
                          borderColor: "#3B82F6",
                        },
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex flex-row justify-between items-center bg-gray-100 p-4 space-x-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {myDays + 1}
                </span>
              </div>

              <div className="flex items-center justify-center">
                {" "}
                Airport Drop
              </div>
              <div className="flex items-center justify-center"></div>
            </div>
          </div>

          <div className="w-full bg-cyan-300">
            {isUserLoggedIn && (
              <p>Your Estimated price of Trip is: {Total_Estimated_Price}</p>
            )}
            <button onClick={handleEnquiry}>
              To move forward submit this form
            </button>
          </div>
        </div>
      </div>

      <div className="px-24 mt-6 w-full ">
        <h1 className="font-bold text-2xl"> You might want to add </h1>

        <div className="flex flex-row gap-2 mt-2">
          <div className="bg-white flex flex-row gap-2 items-center justify-center py-2 px-6 rounded-md mb-2">
            <div className="flex flex-col gap-1">
              <h1>People often visit Kausani</h1>
              <h1>114 km from Nainital</h1>
            </div>

            <div className="">
              <button className="px-2 border border-black rounded-2xl">
                Add to Destination
              </button>
            </div>
          </div>

          <div className="bg-white flex flex-row gap-2 items-center justify-center py-2 px-6 rounded-md mb-2">
            <div className="flex flex-col gap-1">
              <h1>People often visit Rishikesh</h1>
              <h1>186 km from Nainital</h1>
            </div>

            <div className="">
              <button className="px-2 border border-black rounded-2xl">
                Add to Destination
              </button>
            </div>
          </div>
        </div>
      </div>
       <div>
        <EmbedGoogleMap />
        {/* <MapBoxStaticMap /> */}
       </div>
      <div className="fixed bottom-0 bg-white w-full">
        <div className="flex flex-row justify-between p-3">
          <div className="flex flex-col">
            <h1 className="">
              32732 <span>(6 day trip and activities)</span>
            </h1>

            <h1>New Delhi toNainital to Jim Corbett to Mussorie to Delhi</h1>
          </div>

          <button className="text-white rounded-sm bg-[#2DA5F3] px-6 py-2">
            {" "}
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullyCustomizeTrip;

 
/** map section */
const MapBoxStaticMap = () => {
  const accessToken = "pk.eyJ1IjoibWFuaXNoMTE3IiwiYSI6ImNtNHRqaW45ZjBlazkya3M0ZDJmZWxianAifQ.j_H2ZzKixpmHCbH-vCDzWw"; // Replace with your Mapbox access token

  // Map center and zoom
  const lng = -97.0; // Centered roughly between the cities
  const lat = 31.0;
  const zoom = 5.5; // Zoomed out to see all markers

  // Map size
  const width = 800;
  const height = 400;

  // Map style
  const mapStyle = "streets-v11";

  // Define marker locations with colors and labels
  const markers = [
    { lng: -97.7431, lat: 30.2672, color: "ff0000", label: "A" }, // Austin - Red
    { lng: -96.797, lat: 32.7767, color: "0000ff", label: "B" },  // Dallas - Blue
    { lng: -95.3698, lat: 29.7604, color: "00ff00", label: "C" }, // Houston - Green
  ];

  // Build markers string
  const markerString = markers
    .map(({ lng, lat, color }) => `pin-s+${color}(${lng},${lat})`)
    .join(",");

  // Define route as a polyline by joining coordinates
  const routeCoordinates = markers.map(({ lng, lat }) => `${lng},${lat}`).join(";");
  const route = `path-5+0000FF-0.8(${routeCoordinates})`; // Red polyline with opacity 0.8

  // Static map URL
  const staticMapUrl = `https://api.mapbox.com/styles/v1/mapbox/${mapStyle}/static/${markerString},${route}/${lng},${lat},${zoom}/${width}x${height}?access_token=${accessToken}`;

  console.log("Static Map URL:", staticMapUrl); // Log for debugging

  return (
    <div className="flex justify-center">
      <img src={staticMapUrl} alt="Mapbox Static Map with Markers and Route" />
    </div>
  );
};


/** google embed */

const locations = [
  {
    id: 1,
    name: "Dehradun",
    code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.072424594182!2d78.03219111510878!3d30.316494981784732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b80d47f0d9%3A0x131c62a1aee3f5b6!2sDehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1702550518513!5m2!1sen!2sus",
  },
  {
    id: 2,
    name: "Leh",
    code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0428707129274!2d77.56334811532999!3d34.15258498058096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb4f3b8c4b85%3A0xf3077bb2e203b94d!2sLeh%2C%20Ladakh%20194101!5e0!3m2!1sen!2sin!4v1702551108231!5m2!1sen!2sin",
  },
];

const EmbedGoogleMap = () => {
  return (
    <div>
      <h1>Our Location</h1>
      {/* <iframe
        title="Google Map"
        src={`https://maps.googleapis.com/maps/api/staticmap?size=600x450&zoom=13&center=34.1526,77.5771&markers=color:red%7C34.1526,77.5771&markers=color:blue%7C34.1646,77.5871&markers=color:green%7C34.1426,77.5671&key=AIzaSyAex6tUbTsAgUdzxnZyRWvdVjGQG0QxAkI`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe> */}

      <img
        src="https://maps.googleapis.com/maps/api/staticmap?size=600x450&zoom=13&center=34.1526,77.5771&markers=color:red%7C34.1526,77.5771&markers=color:blue%7C34.1646,77.5871&markers=color:green%7C34.1426,77.5671&key=AIzaSyAex6tUbTsAgUdzxnZyRWvdVjGQG0QxAkI"
        alt="Map of Leh with multiple landmarks"
      />
    </div>
  );
};
