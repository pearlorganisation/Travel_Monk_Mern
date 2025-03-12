import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePackage } from "../../features/package/packageActions";
import Select from "react-select";
import { getSingleDestination } from "../../features/trips/tripActions";
import { getDestinationVehicle } from "../../features/DestinationVehicle/destinationVehicleaction";
import moment from "moment/moment";
import { getHotelsByDestination } from "../../features/hotel/hotelActions";
import CustomDropdownIndicator from "../../components/CustomDropdownIcon/CustomDropdownIcon";
import WhatsAppLogo from "../../components/Whatsapp/WhatsLogo";
import { baseURL } from "../../services/axiosInterceptor";

const CustomizeTrip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // id of the package
  const location = useLocation()
  const {inclusion, exclusion} = location.state || {}

  console.log("the inclusion and exclusion array are", inclusion, exclusion)
  /** to get the current page url */
  const fullURL = window.location.href;
  // console.log(`The full URL is: ${fullURL}`);

  const { singleDestination } = useSelector((state) => state.trip);
  const { singlePackage } = useSelector((state) => state.packages);
  console.log("the single package", singlePackage)
  const userState = useSelector((state) => state.user);

  /*---------------- getting the vehicles available for that destination-----------------------------------------------*/
  const [selectedVehicleName, setSelectedVehicle] = useState("");
  const [selectedVehiclePrice, setSelectedVehiclePrice] = useState("");
  const [selectedVehicle, setVehicle] = useState([])

  const [selectedVehicleImage, setSelectedVehicleImage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedVehicleId, setSelectedVehicleId] = useState(null); // for vehicle id
  const { destinationVehicles } = useSelector(
    (state) => state.destination_vehicle
  );

  const { destinationHotels } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotelsByDestination({ id: singleDestination?.data?._id }));
  }, [singleDestination?.data?._id, dispatch]);

  const handleSelect = (vehicleName, vehiclePrice, vehicleId, vehicleImage,vehicle) => {
    setSelectedVehicle(vehicleName);
    setSelectedVehiclePrice(vehiclePrice);
    setSelectedVehicleId(vehicleId); // storing selected vehicle id
    setSelectedVehicleImage(vehicleImage);
    setVehicle(vehicle)

  };
  useEffect(() => {
    dispatch(getSinglePackage(id));
  }, []);

  useEffect(() => {
    dispatch(getDestinationVehicle(singleDestination?.data?._id));
  }, [singleDestination?.data?._id]);

  // useEffect(() => {
  //   dispatch(getDestinationVehicle(singleDestination?.data?._id));
  // }, []);

  useEffect(() => {
    if (singlePackage?.data)
      dispatch(getSingleDestination(singlePackage?.data?.packageDestination));
  }, [singlePackage]);
  // all the hotel data and activity data is stored in dayaData
  const [dayData, setDayData] = useState(
    singlePackage?.data?.itinerary ?.slice(0, -1).map((iti) => ({
      selectedHotel: {},
      selectedActivities: [],
      selectedLocation: "",
      location: {},
      day: "",
    })) || []  
  );
  /**--------------------Selected Activity-----------------------*/
  const handleActivityChange = (selectedOptions, dayIndex) => {
    setDayData((prevDayData) =>
      prevDayData.map((day, index) =>
        index === dayIndex
          ? { ...day, selectedActivities: selectedOptions || [] }
          : day
      )
    );
  };

  useEffect(() => {
     if (singlePackage?.data?.itinerary) {
      setDayData(
        singlePackage.data.itinerary?.slice(0, -1).map(() => ({
          selectedHotel: {},
          selectedActivities: [],
          selectedLocation: "",
          location: {},
          day: "",
        }))
      );
    }
  }, [singlePackage?.data]);
  let noOfDays = singlePackage?.data?.itinerary?.length
   const [hotelPrices, setHotelPrices] = useState([]);  
  useEffect(() => {
    if (singlePackage?.data?.itinerary) {
      setHotelPrices(Array(singlePackage.data.itinerary.length).fill(0));
    }
  }, [singlePackage?.data]);
  const [totalHotelPrices, setTotalHotelPrice] = useState(0);

  const [selectedHotelImages, setSelectedHotelImages] = useState([])
   const handleHotelChange = (index, event, hotels, currentLocation) => {
     const selectedHotelId = event.target.value;
    const selectedHotel = hotels.find((hotel) => hotel._id === selectedHotelId);


    /** for storing the images */
    const newHotelData = [...selectedHotelImages]
    newHotelData[index] = {
      selectedHotel
    }
    setSelectedHotelImages(newHotelData)
    const newDayData = [...dayData];
    newDayData[index].day = index + 1;
    newDayData[index].location = currentLocation;
    newDayData[index].selectedLocation = currentLocation;
    newDayData[index].selectedHotel = {
      name: selectedHotel.name,
      hotel: selectedHotel._id,
    };
    setDayData(newDayData);

    const startingPrice = selectedHotel ? selectedHotel.estimatedPrice : 0;

    const updatedHotelPrices = [...hotelPrices];
    updatedHotelPrices[index] = startingPrice;

    setHotelPrices(updatedHotelPrices);
    setTotalHotelPrice(
      updatedHotelPrices.reduce((total, price) => total + price, 0)
    );
  };

  /**---------------------the final estimated price will be----------------------------*/
  let Total_Estimated_Price = totalHotelPrices + selectedVehiclePrice ? parseInt(selectedVehiclePrice*noOfDays) : 0;
   /**--------------------Handle Enquiry to send to the page for submitting the form-------------------------------------------------*/
  const handleEnquiry = () => {
    const invalidEntry = dayData.find(
      (day) =>
        !day.selectedLocation ||
        !day.selectedHotel ||
        Object.keys(day.selectedHotel).length === 0 ||
        !Array.isArray(day.selectedActivities) ||
        day.selectedActivities.length === 0 ||
        selectedVehicleName.length === 0
    );

    if (invalidEntry) {
      alert(
        "Please ensure all days have a location, hotel, and activities selected."
      );
      return;
    }
    navigate("/prebuilt-package-enquiry", {
      state: {
        Estimate_Price: Total_Estimated_Price,
        packageDetails: { name: singlePackage?.data?.name, packageId: id },
        itinerary: dayData,
        selectedVehicle: {
          name: selectedVehicleName,
          vehicle: selectedVehicleId,
        },
        inclusions:inclusion,
        exclusions: exclusion,
        // vehicleId: selectedVehicleId,
        // vehicleName: selectedVehicle,
        enquiryLocation: fullURL,
      },
    }); 
  };
  const lenOfItinerary = singlePackage?.data?.itinerary?.length;
   return (
    <div className="bg-gray-200 relative">
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
      <div className="px-24 pt-2">
        <h1 className="text-[#1f1f1f] font-bold text-4xl leading-[48px]">
          <span>Customize your Trip to - </span>{singlePackage?.data?.name}
        </h1>

        <h3 className="mt-3 font-normal text-base text-[#1f1f1f]">
          Start planning our trip with Travel Monk's Trip Planner. You can
          further optimize it by selectings hotels and activities
        </h3>
       {/** select a vehicle */}
       
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
                    handleSelect(
                      vehicle?.vehicleName,
                      vehicle?.pricePerDay,
                      vehicle?._id,
                      `${baseURL}/${vehicle?.image?.path}`,
                      vehicle
                    );
                    closeModal(); // Close the modal after selection
                  }}
                  className="p-4 border rounded-lg shadow-md cursor-pointer bg-[#F0F5FF] h-56"
                >
                  <p className="text-lg font-semibold">
                    Vehicle: {vehicle?.vehicleName}
                  </p>
                  {/* <p className="text-gray-600">
                    Price: {vehicle?.pricePerDay} /- per day
                  </p> */}

                  <img
                    src={`${baseURL}/${vehicle?.image?.path}`}
                    className="w-full h-36 rounded-lg mb-2 mt-3"
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

 
      <div className="grid grid-cols-1 mt-4">
        <div className="">
          <div className="text-gray-700 text-sm p-4 flex justify-center items-center rounded-md">
            <div className="mb-2">
              <span className="font-medium">Step 1 |</span> Select Your day to day schedule
            </div>
          </div>
          {singlePackage?.data?.itinerary?.slice(0,-1).map((iti, index) => {
            console.log(iti, "iti");
            const dataForSelect = iti?.activities.map((el) => {
              return {
                label: el?.name || "Something is wrong in name",
                value: el?._id || "Something is wrong in id",
              };
            });

            return (
              <div className="flex flex-row gap-2 items-center justify-start mt-2">
                
                <div className="flex flex-col gap-1 w-28 ml-4">
                  <h1 className="font-bold text-base text-wrap">{iti.location}</h1>
                </div>

                <div className="w-6 h-6 bg-red-500 rounded-full">
                  <h1 className="text-white px-2">{index + 1}</h1>
                </div>

                <div className="bg-white border border-gray-200 rounded-md p-2 mx-8 flex flex-row w-full">
                  <div className="grid grid-cols-1 w-[100%]">
                    <div className="flex flex-row items-start gap-2">
                      <div className="flex flex-col gap-3 w-[20%] items-start mx-4">
                        <h1> Select Hotel </h1>
                        <select
                          value={dayData[index]?.selectedHotel?.[0]}
                          onChange={(event) =>
                            handleHotelChange(
                              index,
                              event,
                              destinationHotels,
                              iti.location
                            )
                          }
                          className="bg-blue-100 border-2 border-[#1f1f1f] rounded-md px-2 py-2 flex flex-row gap-2 w-[70%]"
                        >
                          <option key="choose"> Choose Hotel</option>
                          {Array.isArray(destinationHotels) &&
                            destinationHotels?.map((hotel) => (
                              <option key={hotel._id} value={hotel._id}>
                                {" "}
                                {hotel.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-3 w-[50%] ">
                        <h1> Select Activity </h1>

                        <Select
                          placeholder="Choose Activity"
                          isMulti
                          value={dayData[index]?.selectedActivities}
                          components={{
                            DropdownIndicator: CustomDropdownIndicator,
                          }}
                          onChange={(selectedOptions) =>
                            handleActivityChange(selectedOptions, index)
                          }
                          options={dataForSelect}
                        />
                      </div>
                      {/** DIV FOR SHOWING THE HOTEL */}
                      <div className="w-[30%] p-4 ">
                        {Array.isArray(selectedHotelImages) && selectedHotelImages[index]?.selectedHotel?.image?.path ? (
                          <img
                            src={`${baseURL}/${selectedHotelImages[index]?.selectedHotel?.image?.path}`}
                            className="w-full object-fill max-h-48 min-h-48 rounded-lg"
                            alt="selected hotel"
                          />
                        ) : (
                          <p className="mt-8 text-gray-500">Select a Hotel</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-white shadow-md rounded-lg border border-gray-200 mx-4 sm:mx-10 mt-2">
            <div className="flex flex-col justify-center items-center bg-gray-100 p-4 sm:space-x-4">
              <div className="h-8 flex items-center justify-center">
                <span className="text-black text-sm sm:text-base font-bold">
                  Last Day {lenOfItinerary}
                </span>
              </div>

              <div className="flex items-center justify-center mt-1 sm:mt-0">
                <span className="text-lg sm:text-xl">Airport Drop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** vehicle selecting div */}
      <div className="pl-40 ">
        <div className=" flex flex-col ">
        
          {/* Updated Button */}
          <div className="flex flex-row">
            {/* Left Section */}
            <div className="w-1/2 h-52 m-3">
              <div className="border bg-white rounded-md p-2 relative">
                <div className="h-52 px-3 pt-2">
                  <div className="mb-4">
                    <h2 className="text-sm">
                      <span className="font-medium">Step 2 |</span> Select vehicle available at this location.
                    </h2>

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
                        className="text-black text-sm"
                      >
                        Add a Vehicle ( Compulsory )
                      </button>
                    </button>
                  </div>

                  {selectedVehicleName && (
                    <div className="mt-4 text-sm">
                      <p className="mb-2">
                        You have selected vehicle: <span className="text-blue-600">{selectedVehicleName}</span>
                      </p>

                      <div>
                        <p className="font-medium mb-1">Vehicle Details:</p>
                        <p className="leading-relaxed">
                          Vehicle Capacity: {selectedVehicle?.passengerCapacity}
                        </p>
                        <p className="leading-relaxed">
                          Luggage Capacity: {selectedVehicle?.luggageCapacity}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-1/2 h-52 m-3">
              {selectedVehicleName && (
                <div className="ml-2 rounded-md w-full  bg-white">
                  <div className="rounded-2xl p-2 shadow-md h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedVehicleImage}
                      className="w-[400px] h-52 object-fit rounded-2xl"
                      alt={selectedVehicleName}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleEnquiry}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-md 
            flex items-center justify-center gap-2 hover:bg-blue-600 
            transition-all duration-200 mt-4 mx-2 mb-2"
          >
            <span>Move Forward</span>
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
  );
};

export default CustomizeTrip;
