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
import parse from "html-react-parser";
import { getHotelsByDestination } from "../../features/hotel/hotelActions";
import { getDestinationVehicle } from "../../features/DestinationVehicle/destinationVehicleaction";

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
  const navigate = useNavigate()
  const { id } = useParams();  // destinationId 
  const location= useLocation()
  const { singleDestination, activities } = useSelector((state) => state.trip);
  const { destinationHotels } = useSelector((state)=> state.hotels)  // destination hotels contains all the hotels for that particular destination
  const { destinationVehicles } = useSelector((state) => state.destination_vehicle)

  const { startDate , endDate, destination } = location.state ?? {}
  console.log("------------destination", startDate, endDate, destination);

  /** calculating the days difference */  
  const calculateDaysBetweenDates = (startDate, endDate) => {
    // Convert the date strings into Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in time (milliseconds)
    const timeDifference = end - start;

    // Convert the difference to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
 console.log(daysDifference, "diff")
    return daysDifference;
  };

  const myDays = calculateDaysBetweenDates(startDate, endDate);
  /** duration that is day and nights of the customized package */
 const days = parseInt(myDays);
 const nights = parseInt(myDays -1);

 
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

  const datesRange = getDatesInRange(startDate,endDate)
  const datesObjects = datesRange.map(date => ({ date }));
  
  /**----------------------------States--------------------------------- */

  /** states for claculating the selected hotels price */
  const [hotelPrices, setHotelPrices] = useState([]); // Array to store prices for each day
  const [totalHotelPrices, setTotalHotelPrice] = useState(0); // to get the whole selected hotel prices

  /** for selected vehicle */
  const [selectedVehicleName, setSelectedVehicleName] = useState("")
  const [selectedVehicleId,setSelectedVehicleId] = useState(null)
  const [selectedVehiclePrice,setSelectedVehiclePrice] = useState("")
  const handleSelectVehicle = (vehicleName, vehiclePrice, vehicleId)=>{
    setSelectedVehicleId(vehicleId)
    setSelectedVehicleName(vehicleName)
    setSelectedVehiclePrice(vehiclePrice)
  }

  console.log(selectedVehiclePrice,"-----------------------selected vehicle price")
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
    // singleDestination?.data?.locations?.map((loc) => ({
    //   selectedLocation: {},
    //   selectedHotel: {},
    //   selectedActivities: [],
    //   day:""
    // })) || [] // Initialize based on itinerary length
    Array.from({ length: myDays }, () => ({
      selectedLocation: "",
      selectedHotel: {},
      selectedActivities: [],
      day: "",
      date:""
    }))|| []
  );

  useEffect(() => {
    if (myDays) {
      setDayData(
        // singleDestination?.data?.locations.map(() => ({
        //   selectedLocation: {},
        //   selectedHotel: {},
        //   selectedActivities: [],
        //   day:""
        // }))
        Array.from({ length: myDays }, () => ({
          selectedLocation: "",
          selectedHotel: {},
          selectedActivities: [],
          day: "",
          date:""
        })) || []
      );
    }
  }, [myDays]);

  const handleLocationChange = (index, event, selectedDate) => {
    const newDayData = [...dayData];
    newDayData[index].selectedLocation = event.target.value;
    newDayData[index].date = selectedDate
    newDayData[index].day = index + 1
    setDayData(newDayData);
  };

  /** to selecte hotels and calculate their price */
  const handleHotelChange = (index, event, hotels) => {
  /**------- logic to find out the selected hotel by id--------------*/
  const selectedHotelId = event.target.value;
  const selected_Hotel = hotels.find((hotel)=> hotel._id === selectedHotelId) // this will find the selected hotel by id

    const newDayData = [...dayData];
   
    /** setting the hotel of current index */
    newDayData[index].selectedHotel = event.target.value;
    setDayData(newDayData);
    /** calculating the selected hotel prices */
    const startingPrice = selected_Hotel ? selected_Hotel.startingPrice : 0;
    const updatedHotelPrices = [...hotelPrices];
    updatedHotelPrices[index] = startingPrice;
    setHotelPrices(updatedHotelPrices)
    setTotalHotelPrice(
      updatedHotelPrices.reduce((total,price)=>total+price, 0)
    )
  };
console.log(totalHotelPrices,'-----------------------------------')
  
const handleActivityChange = (selectedOptions, dayIndex) => {
    setDayData((prevDayData) =>
      prevDayData.map((day, index) =>
        index === dayIndex
          ? { ...day, selectedActivities: selectedOptions || [] }
          : day
      )
    );
  };
/** The Total price after selecting hotels and vehicle */
let Total_Estimated_Price = totalHotelPrices + selectedVehiclePrice

console.log("selected hotel and vehicle prices" ,Total_Estimated_Price)
  console.log(dayData, "day data");

  /**------------------Handle for Enquiry-------------------------*/
  const handleEnquiry = () => {
    navigate("/full-customize-package-enquiry", { state: { Estimated_Price: Total_Estimated_Price, itinerary: dayData, destinationId: id, vehicleId: selectedVehicleId, duration: { days: days, nights: nights }, startDate: startDate, endDate: endDate } }) // to send all the required prebuilt package data
  } 
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
          <span>Add Destination</span>
        </button>
      </div>

      <div className="grid grid-cols-1 mt-4">
        <div className="">
            {dayData?.map((day, index) => {
            return (
              <div className="flex flex-row gap-2 items-center justify-start px-8 mt-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="6.5" width="20" height="3" fill="black" />
                  <rect x="2" y="15.5" width="20" height="3" fill="black" />
                  <rect x="2" y="6.5" width="20" height="3" fill="black" />
                  <rect x="2" y="15.5" width="20" height="3" fill="black" />
                </svg>

                <div className="w-6 h-6 bg-red-500 rounded-full">
                  <h1 className="text-white px-2">{index + 1}</h1>
                </div>

                <div className="bg-white border border-gray-200 rounded-md p-2 flex flex-row">
                  <div className="grid grid-cols-2  w-full">
                    <div className="flex flex-row items-center gap-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1779_681)">
                          <path
                            d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                            fill="#323232"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1779_681">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <div className="flex flex-col gap-1">
                     {/**  show date here */}
                        <h2 className="text-gray-700 font-medium">
                          {new Date(datesObjects[index]?.date).toDateString()}
                        </h2>
                      </div>

                      <div className="flex flex-col gap-3 ">
                        <h1> Select Location </h1>
                        <select
                          value={dayData[index]?.selectedLocation}
                          onChange={(event) =>
                            handleLocationChange(index, event, new Date(datesObjects[index]?.date).toISOString())
                          }
                          className="bg-blue-100 border-2 border-[#1f1f1f] rounded-md px-2 py-2 flex flex-row gap-2"
                        >
                          <option key="choose"> Choose Location</option>
                          {singleDestination?.data?.locations?.[index]?.location?.map((loc, index) => (
                            <option key={index} value={loc}>
                              {" "}
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-3 ">
                        <h1> Select Hotel </h1>
                        <select
                          value={dayData[index]?.selectedHotel}
                          onChange={(event) => handleHotelChange(index, event, destinationHotels)}
                          className="bg-blue-100 border-2 border-[#1f1f1f] rounded-md px-2 py-2 flex flex-row gap-2"
                        >
                          <option key="choose"> Choose Hotel</option>
                          {destinationHotels?.map((hotel) => (
                            <option key={hotel._id} value={hotel._id}>
                              {" "}
                              {hotel.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-3 ">
                        <h1> Select Activity </h1>
                  
                        <Select
                          placeholder="Choose Activity"
                          isMulti
                          value={dayData[index]?.selectedActivities || []} // Ensure a default value
                          onChange={(selectedOptions) => handleActivityChange(selectedOptions, index)}
                          options={activitiesOption}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/** select vehicle section */}
        <div className="p-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinationVehicles?.map((vehicle) => (
              <div
                key={vehicle?._id}
                onClick={() => handleSelectVehicle(vehicle?.vehicleName, vehicle?.pricePerDay, vehicle?._id)}
                className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
              >
                <p className="text-lg font-semibold">Name: {vehicle?.vehicleName}</p>
                <p className="text-gray-600">Price: {vehicle?.pricePerDay}</p>
              </div>
            ))}
          </div>
          {selectedVehicleName && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">
                Selected Vehicle
              </h3>
              <p className="text-lg">Name: {selectedVehicleName}</p>
              <p className="text-lg">Price: {selectedVehiclePrice}</p>
            </div>
          )}
        </div>
        <div className="w-full bg-cyan-300">
          <p>Your Estimated price of Trip is: {Total_Estimated_Price}</p>
          <button onClick={handleEnquiry}>To move forward submit this form</button>
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
      {/**------------commented out the listing of itinerary---------------------*/}

{/* 
      <div className="px-24 mt-6 w-full pb-10">
        <h1 className="font-bold text-2xl">Your Trip </h1>

        {dayData.map((iti, index) => (
          <div className="flex flex-row gap-2 justify-start">
            <h3 className="text-[#007E8F]"> Day {index + 1} </h3>

            <Stepper />

            <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
              {iti.selectedLocation === "Choose Location" ? null : (
                <div>
                  <h1 className="text-3xl font-semibold">
                    {iti.selectedLocation}
                  </h1>
                </div>
              )}
              {iti.selectedActivities === "Choose Activity" ? null : (
                <div className="flex flex-row gap-28 bg-white p-2">
                  <img src={Bro} alt="logo" className="w-48 min-h-max" />

                  <div className="mt-4">
                    <h1 className="font-bold text-lg">
                      ACTIVITY : {iti.selectedActivities}{" "}
                    </h1>

                    <h3 className="">
                      Location :{" "}
                      {singleDestination?.data?.locations[index]?.location}
                    </h3>

                    <h3 className="mt-2 font-semibold text-base">
                      Facilities{" "}
                    </h3>

                    <h4 className="mt-1">
                      3 seater . AC . 2 Luggage Bags . First Aid
                    </h4>

                    <div className="flex flex-row gap-3 mt-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base">Distance</h3>
                        <h5>300 km</h5>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base">ETA</h3>
                        <h5>5 h 44 min </h5>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base">Cab Timings</h3>
                        <h5>9 am</h5>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2">
                    <h1 className="text-[#B0404D]"> Timings </h1>
                    <h1 className="text-[#5c5c5c]"> | </h1>
                    <h1 className="text-[#B0404D]"> Change </h1>
                    <h1 className="text-[#5c5c5c]"> | </h1>
                    <h1 className="text-[#B0404D]"> Remove </h1>
                  </div>
                </div>
              )}

              {iti.selectedHotel === "Choose Hotel" ? null : (
                <div className="flex flex-row gap-28 bg-white p-2">
                  <img
                    src={singleDestination?.data?.hotels[0]?.banner.secure_url}
                    alt="logo"
                    className="w-48 "
                  />

                  <div className="mt-4">
                    <h1 className="font-bold text-lg">{iti.selectedHotel}</h1>

                    <div className="flex flex-row gap-2 items-center justify-start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6313 6.11934C14.5894 5.99592 14.5122 5.88747 14.4094 5.80738C14.3066 5.72729 14.1825 5.67908 14.0526 5.66868L10.2519 5.36668L8.60727 1.72601C8.55489 1.60875 8.4697 1.50916 8.36197 1.43925C8.25424 1.36934 8.12858 1.3321 8.00015 1.33203C7.87173 1.33196 7.74603 1.36906 7.63822 1.43885C7.53041 1.50864 7.44511 1.60814 7.3926 1.72534L5.74794 5.36668L1.94727 5.66868C1.81957 5.67879 1.69749 5.72548 1.59564 5.80316C1.49378 5.88084 1.41646 5.98622 1.37293 6.1067C1.3294 6.22717 1.32149 6.35763 1.35017 6.48248C1.37884 6.60733 1.44287 6.72127 1.5346 6.81068L4.34327 9.54868L3.34994 13.85C3.31977 13.9802 3.32944 14.1165 3.37768 14.2411C3.42592 14.3657 3.51051 14.473 3.62047 14.549C3.73043 14.6249 3.86068 14.6661 3.99433 14.6671C4.12797 14.6681 4.25883 14.629 4.36994 14.5547L7.99994 12.1347L11.6299 14.5547C11.7435 14.6301 11.8774 14.6689 12.0137 14.6659C12.15 14.6629 12.2821 14.6183 12.3922 14.538C12.5023 14.4577 12.5853 14.3456 12.6298 14.2167C12.6743 14.0879 12.6783 13.9485 12.6413 13.8173L11.4219 9.55068L14.4459 6.82934C14.6439 6.65068 14.7166 6.37201 14.6313 6.11934Z"
                          fill="#1F1F1F"
                        />
                      </svg>

                      <h3 className="">5.0</h3>
                    </div>

                    <h3 className="mt-2 font-semibold text-base">Amenities </h3>

                    <div className="mt-1">
                      <div className="flex flex-row gap-6">
                        {singleDestination?.data?.hotels[0]?.amenities
                          .slice(0, 3)
                          .map((amenity) => (
                            <div className="flex flex-row gap-4 items-center justify-center">
                              {parse(amenity.icon)}

                              <ol>{amenity.name}</ol>
                            </div>
                          ))}

                        <button className="px-4 py-2 bg-blue-400 text-white rounded-xl">
                          {singleDestination?.data?.hotels[0]?.amenities
                            .length - 3}
                          More
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-row gap-3 mt-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base">Check In</h3>
                        <h5>6:00 PM</h5>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base">Check Out</h3>
                        <h5>9:00 AM</h5>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2">
                    <h1 className="text-[#B0404D]"> Details </h1>
                    <h1 className="text-[#5c5c5c]"> | </h1>
                    <h1 className="text-[#B0404D]"> Change </h1>
                    <h1 className="text-[#5c5c5c]"> | </h1>
                    <h1 className="text-[#B0404D]"> Remove </h1>
                  </div>
                </div>
              )}

               
              
                <div className="flex flex-row gap-2 mb-4">
                {iti.activities.map((activity) => (
                  <div className="flex flex-row bg-white">
                    <img src={Lake} />

                    <div className="flex flex-col px-6 py-3">
                      <h1> {activity.name}</h1>
                      <h3>Spend Approx 1 hour</h3>
                    </div>
                  </div>
                ))}
              </div>

             
            </div>
          </div>
        ))}
      </div> */}

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
