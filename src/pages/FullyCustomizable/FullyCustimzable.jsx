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
import { DestinationLocation } from "../../features/Location/locationAction";
import GoogleMapsEmbed from "../../components/MyEmbed/MyEmbed";
import { axiosInstance, baseURL } from "../../services/axiosInterceptor";
import WhatsAppLogo from "../../components/Whatsapp/WhatsLogo";

 
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
  const { destinationLocations } = useSelector((state) => state.locations); // holds locations based on the destinations

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  const [searchLocation, setSearchLocation] = useState("")

  // console.log(isUserLoggedIn, "fully customize auth state");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedVehicleImage, setSelectedVehicleImage] = useState("");

  const { startDate, endDate, destination, travellers } = location.state ?? {};

  // console.log("the date is", travellers)
  const noOfRoomsRequired = Math.ceil(travellers/2)
// console.log("the no of rooms required is", noOfRoomsRequired)
  /** calculating the days difference */
  const calculateDaysBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDifference = end - start;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    return daysDifference;
  };

  const myDays = calculateDaysBetweenDates(startDate, endDate);
  
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

  const datesRange = getDatesInRange(startDate, endDate); // getting the range of the date
  const datesObjects = datesRange.map((date) => ({ date }));

  console.log("the dates range is", datesRange)
const len = datesObjects.length
 


  /**----------------------------States--------------------------------- */

  /** states for claculating the selected hotels price */
  const [hotelPrices, setHotelPrices] = useState([]); // Array to store prices for each day
  const [totalHotelPrices, setTotalHotelPrice] = useState(0); // to get the whole selected hotel prices

  /** for selected vehicle */
  const [selectedVehicleName, setSelectedVehicleName] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [selectedVehiclePrice, setSelectedVehiclePrice] = useState("");
  const [selectedVehicle, setVehicle] = useState([])
  const [selectedHotelName, setSelectedHotelName] = useState("");
  const [fullyCustomizedLocalStoredData, setFullyCustomizedLocalStoredData] = useState(null);
  const handleSelectVehicle = (
    vehicleName,
    vehiclePrice,
    vehicleId,
    vehicleImage,
    vehicle
  ) => {
    setSelectedVehicleId(vehicleId);
    setSelectedVehicleName(vehicleName);
    setSelectedVehiclePrice(vehiclePrice*(myDays+1));
    setSelectedVehicleImage(`${baseURL}/${vehicleImage}`);
    setVehicle(vehicle)
  };
 
  useEffect(()=>{
    setSelectedVehicleId(fullyCustomizedLocalStoredData?.vehicle?._id ?? null);
    setSelectedVehicleName(fullyCustomizedLocalStoredData?.vehicle?.vehicleName ?? "");
    setSelectedVehiclePrice(fullyCustomizedLocalStoredData?.vehicle?.pricePerDay ?? "");
    setSelectedVehicleImage(`${baseURL}/${fullyCustomizedLocalStoredData?.vehicle?.image?.path}`);
    setVehicle(fullyCustomizedLocalStoredData?.vehicle)
  },[fullyCustomizedLocalStoredData])

  
  /** data prepared for the options to use in the react-select */
  let activitiesOption = activities?.map((activity) => ({
    label: activity?.name,
    value: activity?._id,
  }));


  useEffect(() => {
    dispatch(getAllActivitiesByDestination(id));
    // dispatch(getHotelsByDestination({ id: id }));
    dispatch(getSingleDestination(id));
    dispatch(getDestinationVehicle(id));
    dispatch(DestinationLocation(id));
    const storedData = JSON.parse(localStorage?.getItem('packageDetails'));
    setFullyCustomizedLocalStoredData(storedData)
  }, []);

  useEffect(()=>{
    dispatch(getHotelsByDestination({ id: id, search:searchLocation, source:"website" }));
  },[id, searchLocation])
  {/** this is used for showing the stored value if the user goes ahead and decides to comeback to this page */ }
 

  const [dayData, setDayData] = useState(
    Array.from({ length: myDays }, () => ({
      selectedLocation: "",
      selectedHotel: {},
      selectedActivities: [],
      day: "",
      date: "",
    })) || []
  );

  // console.log("the stored data in local storage is"fullyCustomizedLocalStoredData)
  useEffect(() => {
    if (fullyCustomizedLocalStoredData?.itinerary) {
      // Ensure the itinerary is mapped correctly
      const newDayData = fullyCustomizedLocalStoredData.itinerary.map((el) => ({
        selectedLocation: el.selectedLocation || "",
        selectedHotel: el.selectedHotel
          ? { name: el.selectedHotel.name, hotelId: el.selectedHotel.hotelId }
          : {},
        selectedActivities: el.selectedActivities ?? [],
        day: el.day || "",
        date: el.date || "",
      }));

      setDayData(newDayData); // Update state with prefilled data
    } else {
      // If no stored itinerary, create a new blank structure based on myDays
      setDayData(
        Array.from({ length: myDays || 0 }, () => ({
          selectedLocation: "",
          selectedHotel: {},
          selectedActivities: [],
          day: "",
          date: "",
        }))
      );
    }
  }, [myDays, fullyCustomizedLocalStoredData]); // Ensure dependencies are correct

  // console.log("Current dayData state:", dayData);
  /**---------------------map data-------------------------*/
  const [mapData, setMapData] = useState(
    Array.from({ length: myDays }, () => ({
      latitude: "",
      longitude: "",
    })) || []
  );

  useEffect(() => {
    if (myDays) {
      setMapData(
        Array.from({ length: myDays }, () => ({
          latitude: "",
          longitude: "",
        })) || []
      );
    }
  }, [myDays]);

 
  async function fetchHotels(id,search){

    try{
     

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(
        `/api/v1/destinations/${id}/hotels`,
        {
          params: {
            // priceRange,
            search,
            // page,
            source:"website"
          },
          config,
        }
      );
      return data?.data;

    }catch(err)
    {
      console.log("Error Occured ",err);
      
      return null;
    }

  }
  const handleLocationChange = async (
    index,
    event,
    selectedDate,
    destinationData
  ) => {
    const newDayData = [...dayData];
    newDayData[index].selectedLocation = event.target.value;
     if(event?.target?.value)
    {
      const hotelData = await fetchHotels(id, event?.target?.value);
     
      if(hotelData)
      {
        newDayData[index].hotel_options = hotelData;
      }
    }
    newDayData[index].date = selectedDate;
    newDayData[index].day = index + 1;
    setDayData(newDayData);

    /**----------------this is where we will prepare our map Data---------------------*/
    const locationData = destinationData.find((dest) =>
      dest.location.some((loc) => loc.name === event.target.value)
    );

    const selectedLocation = locationData?.location.find(
      (loc) => loc.name === event.target.value
    );
    const coordinates = selectedLocation?.coordinates;
    mapData[index].latitude = coordinates?.coordinates[0] 
    mapData[index].longitude = coordinates?.coordinates[1] 
   };

console.log("the search location is", searchLocation)
   const [selectedHotelImages, setSelectedHotelImages]= useState([])
   /** to selecte hotels and calculate their price */
  const handleHotelChange = (index, event, hotels) => {
     const selectedHotelId = event.target.value;
    const selected_Hotel = hotels.find(
      (hotel) => hotel._id === selectedHotelId
    ); // this will find the selected hotel by id 
    setSelectedHotelName(selected_Hotel.name);
    ; // storing the previously selected hotels images as well as new images
    const newHotelData = [...selectedHotelImages]
    newHotelData[index] = {
      selected_Hotel
    }
    setSelectedHotelImages(newHotelData)
    const newDayData = [...dayData];
    newDayData[index].selectedHotel = {
      name: selected_Hotel.name,
      hotelId: selected_Hotel._id,
    };
    setDayData(newDayData);
    /** calculating the selected hotel prices */
    const startingPrice = selected_Hotel ? selected_Hotel.estimatedPrice : 0;
    const updatedHotelPrices = [...hotelPrices];
    updatedHotelPrices[index] = startingPrice;
    setHotelPrices(updatedHotelPrices);
    setTotalHotelPrice(
      updatedHotelPrices.reduce((total, price) => total + price, 0)
    );
  };
 
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
  let finalHotelPriceForNoOfRooms = totalHotelPrices* (noOfRoomsRequired ?? 1)  
   /** The Total price after selecting hotels and vehicle */
  let Total_Estimated_Price = finalHotelPriceForNoOfRooms + selectedVehiclePrice;
   /**------------------Handle for Enquiry-------------------------*/
  const handleEnquiry = () => {
    const invalidEntry = dayData.find(
      (day) =>
        !day.selectedLocation ||
        !day.selectedHotel ||
        Object.keys(day.selectedHotel).length === 0 ||
        !Array.isArray(day.selectedActivities) ||
        day.selectedActivities.length === 0 ||
        selectedVehicleName.length ===0
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
        vehicle:selectedVehicle,
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
        vehicleName: selectedVehicleName,
        duration: { days, nights },
        startDate,
        endDate,
        datesRange
      },
    });
  };

 
  return (
    <div className="bg-gray-100 relative">
      <div
        className="flex items-center absolute justify-end px-20 mb-6"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000, // Ensures it appears above other elements
        }}
      >
        <WhatsAppLogo />
      </div>
      <div className="p-6 mt-4 mb-3">
        <h1 className="text-[#1f1f1f] font-bold text-4xl leading-[48px]">
           Customize your Trip
         </h1>

        <h3 className="mt-3 font-normal text-base text-[#1f1f1f]">
          Start planning our trip with Travel Monk's Trip Planner. You can
          further optimize it by changing stays, adding activities and
          destinations.
        </h3>

        <div className="flex flex-row gap-28 mt-3">
          <h1>  <span className="font-bold">Destination :</span>{singleDestination?.data?.name}</h1>
          <h1> <span className="font-bold">Duration :</span>{myDays} days</h1>
        </div> 
        <hr className="border-t border-gray-300 w-full my-4" />
      </div>
        <div className="bg-white min-h-screen p-6">
        <div className="text-gray-700 text-sm p-4 rounded-md">
          <div className="mb-2">
            <span className="font-medium">Step 1 |</span> Select Your day to day schedule
          </div>
          <div className="bg-blue-100 p-3 rounded">
            <span className="font-medium">Please note - </span>
            You can only select a maximum of 3 activities for each day.
          </div>
        </div>
          <div className="mx-auto space-y-4">
            {dayData?.map((day, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg border border-gray-200"
              >

                <div className="grid grid-cols-1 md:grid-cols-[80%_auto]">
                  <div className="w-full">
                    <div className="flex items-center bg-gray-100 p-4 space-x-4 w-full">
                      {/* Menu Icon */}

                      {/* Day Number */}
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-row gap-8 justify-start">
                        {/* Close Icon */}
                        <div className="flex items-center justify-center"></div>

                        {/* Date */}
                        <div className="flex flex-col justify-center items-center">
                          <h2 className="text-sm font-medium text-gray-600 pt-1">
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
                                new Date(datesObjects[index]?.date).toISOString(),
                                destinationLocations
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-200"
                          >
                            <option key="choose">Choose Location</option>

                            {destinationLocations?.[index]?.location?.map(
                              (loc, index) => (
                                <option key={index} value={loc.name}>
                                  {" "}
                                  {loc.name}
                                </option>
                              )
                            )}
                          </select>
                        </div>

                        {/* Hotel Selector */}
                        <div className="flex flex-col">
                          <label className="text-xs font-semibold text-gray-700 mb-1">
                            Select Hotel
                          </label>
                          <select
                            // value={dayData[index]?.selectedHotel?.hotelId}
                            value={dayData[index]?.selectedHotel[0]}
                            onChange={(event) =>
                              handleHotelChange(index, event, dayData[index].hotel_options)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-all duration-200"
                          >
                            <option key="choose">Choose Hotel</option>
                            {Array.isArray(dayData[index]?.hotel_options) &&
                              dayData[index].hotel_options?.map((hotel) => (
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
                  {/** DIV FOR SHOWING THE HOTEL */}
                  <div className="w-full p-4">
                    {Array.isArray(selectedHotelImages) && selectedHotelImages[index]?.selected_Hotel?.image?.path ? (
                      <img
                        src={`${baseURL}/${selectedHotelImages[index]?.selected_Hotel?.image?.path}`}
                        className="w-full object-fill max-h-48 min-h-48 rounded-lg"
                        alt="selected hotel"
                      />
                    ) : (
                      <p className="mt-8 text-gray-500">Select a Hotel</p>
                    )}
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
                {new Date(datesObjects[len-1]?.date).toDateString()}

                <div className="flex items-center justify-center">
                  {" "}
                  Airport Drop
                </div>
                
                <div className="flex items-center justify-center"></div>
              </div>
            </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full p-4">
            {/* Left Section */}
            <div className="w-full rounded-2xl h-56 lg:w-1/2">
              <div className="border bg-white   rounded-2xl relative p-4 h-full">
                <h2 className="text-sm mb-4">
                  <span className="font-medium">Step 2 |</span> Select a vehicle available at this location.
                </h2>

                <button
                  onClick={openModal}
                  className="mt-2 bg-white px-6 py-2 border border-gray-800 rounded-md flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3334 5.16669H7.33341V0.166687H5.66675V5.16669H0.666748V6.83335H5.66675V11.8334H7.33341V6.83335H12.3334V5.16669Z" fill="#1F1F1F" />
                  </svg>
                  <span className="text-black text-sm">Add a Vehicle (Compulsory)</span>
                </button>

                {selectedVehicleImage && (
                  <div className="mt-4 text-sm">
                    <p className="mb-2">
                      You have selected: <span className="text-blue-600 font-medium">{selectedVehicleName}</span>
                    </p>
                    <p className="leading-relaxed">Vehicle Capacity: {selectedVehicle?.passengerCapacity}</p>
                    <p className="leading-relaxed">Luggage Capacity: {selectedVehicle?.luggageCapacity}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full h-56  rounded-lg lg:w-1/2">
              {selectedVehicleName && (
                <div className="rounded-2xl p-2 shadow-md h-full flex items-center bg-white justify-center overflow-hidden">
                  <img
                    src={selectedVehicleImage}
                    className="w-[400px] h-52 object-fit rounded-2xl"
                    alt={selectedVehicleName}
                  />
                </div>
              )}
            </div>


            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                  <h2 className="text-xl font-bold mb-4">Select a Vehicle</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {destinationVehicles?.map((vehicle) => (
                      <div
                        key={vehicle?._id}
                        onClick={() => {
                          handleSelectVehicle(
                            vehicle?.vehicleName,
                            vehicle?.pricePerDay,
                            vehicle?._id,
                            vehicle?.image?.path,
                            vehicle
                          );
                          closeModal();
                        }}
                        className="p-4 border rounded-lg shadow-md cursor-pointer bg-[#F0F5FF] text-center h-56 flex flex-col items-center justify-center"
                      >
                        <p className="text-lg font-semibold">{vehicle?.vehicleName}</p>
                        <img
                          src={`${baseURL}/${vehicle?.image?.path}`}
                          className="w-full h-36 rounded-lg mb-2 mt-3"
                          alt={vehicle?.vehicleName}
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 w-full sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
            <div className="w-full">

              <button onClick={handleEnquiry}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg 
                  flex items-center justify-center gap-2 hover:bg-blue-600 
                  transition-all duration-200 mt-4">
                  <span> {isUserLoggedIn && (
                  <p>Your Estimated price of Trip is: {Total_Estimated_Price}</p>
                )}</span>
                {/* Right Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      
 
       
       {/* mapData.length >0 ? <GoogleMapsEmbed data={mapData} />:
        <div className="flex justify-center items-center">
           <p>Failed to load the map.</p>
        </div> */} 
    </div>
  );
};

export default FullyCustomizeTrip;
