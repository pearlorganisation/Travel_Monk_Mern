import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePackage } from "../../features/package/packageActions";
import Select from "react-select";
import { getSingleDestination } from "../../features/trips/tripActions";
import { getDestinationVehicle } from "../../features/DestinationVehicle/destinationVehicleaction";
import moment from "moment/moment";
import { getHotelsByDestination } from "../../features/hotel/hotelActions";

const CustomizeTrip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // id of the package

  /** to get the current page url */
  const fullURL = window.location.href;
  // console.log(`The full URL is: ${fullURL}`);

  const { singleDestination } = useSelector((state) => state.trip);
  const { singlePackage } = useSelector((state) => state.packages);

  /*---------------- getting the vehicles available for that destination-----------------------------------------------*/
  const [selectedVehicleName, setSelectedVehicle] = useState("");
  const [selectedVehiclePrice, setSelectedVehiclePrice] = useState("");

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
    dispatch(getHotelsByDestination(singleDestination?.data?._id));
  }, []);

  const handleSelect = (vehicleName, vehiclePrice, vehicleId, vehicleImage) => {
    setSelectedVehicle(vehicleName);
    setSelectedVehiclePrice(vehiclePrice);
    setSelectedVehicleId(vehicleId); // storing selected vehicle id
    setSelectedVehicleImage(vehicleImage);
  };
  useEffect(() => {
    dispatch(getSinglePackage(id));
  }, []);

  useEffect(() => {
    dispatch(getDestinationVehicle(singleDestination?.data?._id));
  }, []);

  useEffect(() => {
    dispatch(getDestinationVehicle(singleDestination?.data?._id));
  }, []);

  useEffect(() => {
    if (singlePackage?.data)
      dispatch(getSingleDestination(singlePackage?.data?.packageDestination));
  }, [singlePackage]);

  console.log("Trip Package ka data", singlePackage);

  // all the hotel data and activity data is stored in dayaData
  const [dayData, setDayData] = useState(
    singlePackage?.data?.itinerary?.map((iti) => ({
      selectedHotel: {},
      selectedActivities: [],
      selectedLocation: "",
      location: {},
      day: "",
    })) || [] // Initialize based on itinerary length
  );
  /**--------------------Selected Activity-----------------------*/
  const handleActivityChange = (selectedOptions, dayIndex) => {
    // Update the specific day's selectedActivity field
    setDayData((prevDayData) =>
      prevDayData.map((day, index) =>
        index === dayIndex
          ? { ...day, selectedActivities: selectedOptions || [] }
          : day
      )
    );
  };

  useEffect(() => {
    // Reset dayData if the itinerary changes
    if (singlePackage?.data?.itinerary) {
      setDayData(
        singlePackage.data.itinerary.map(() => ({
          selectedHotel: {},
          selectedActivities: [],
          selectedLocation: "",
          location: {},
          day: "",
        }))
      );
    }
  }, [singlePackage?.data]);

  const [hotelPrices, setHotelPrices] = useState([]); // Array to store prices for each day
  const [totalHotelPrices, setTotalHotelPrice] = useState(0);
  const handleHotelChange = (index, event, hotels, currentLocation) => {
    console.log("---------------location", currentLocation);
    const selectedHotelId = event.target.value;
    const selectedHotel = hotels.find((hotel) => hotel._id === selectedHotelId);

    /**  data for sending in the newDayData for selected hotel */

    const newDayData = [...dayData];
    newDayData[index].day = index + 1;
    newDayData[index].location = currentLocation;
    newDayData[index].selectedLocation = currentLocation;
    newDayData[index].selectedHotel = {
      name: selectedHotel.name,
      hotelId: selectedHotel._id,
    };
    setDayData(newDayData);

    const startingPrice = selectedHotel ? selectedHotel.startingPrice : 0;

    const updatedHotelPrices = [...hotelPrices];
    updatedHotelPrices[index] = startingPrice;

    setHotelPrices(updatedHotelPrices);
    setTotalHotelPrice(
      updatedHotelPrices.reduce((total, price) => total + price, 0)
    );
  };

  /**---------------------the final estimated price will be----------------------------*/
  let Total_Estimated_Price = totalHotelPrices + selectedVehiclePrice;

  /**--------------------Handle Enquiry to send to the page for submitting the form-------------------------------------------------*/
  const handleEnquiry = () => {
    navigate("/prebuilt-package-enquiry", {
      state: {
        Estimate_Price: Total_Estimated_Price,
        packageDetails: { name: singlePackage?.data?.name, packageId: id },
        itinerary: dayData,
        selectedVehicle: {
          name: selectedVehicleName,
          vehicle: selectedVehicleId,
        },
        // vehicleId: selectedVehicleId,
        // vehicleName: selectedVehicle,
        enquiryLocation: fullURL,
      },
    }); // to send all the required prebuilt package data
  };

  console.log("-----------hotelprice new calculated", hotelPrices);
  console.log(
    "--------------------selected vehicle price",
    selectedVehiclePrice
  );

  // console.log("--------------------selected vehicle name", selectedVehicle);

  // const [selectedActivity, setSelectedActivity] = useState("Choose Activity");
  // const [selectedHotel, setSelectedHotel] = useState("Choose Hotel");

  console.log(dayData, "day data");
  const handleBookNow = () => {
    navigate("/confirm-package", {
      state: {
        dayData: dayData,
        startingPrice: singlePackage?.data?.startingPrice,
        vehicleName: selectedVehicleName,
      },
    });
  };
  return (
    <div className="bg-gray-200 relative">
      <div className="px-24 pt-2">
        <h1 className="text-[#1f1f1f] font-bold text-4xl leading-[48px]">
          {singlePackage?.data?.name}
        </h1>

        <h3 className="mt-3 font-normal text-base text-[#1f1f1f]">
          Start planning our trip with Travel Monk's Trip Planner. You can
          further optimize it by selectings hotels and activities
        </h3>

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
            Add a Vehicle (Compulsory)
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
                    handleSelect(
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

      <div className="grid grid-cols-1 mt-4">
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
        <div className="">
          {singlePackage?.data?.itinerary?.map((iti, index) => {
            console.log(iti, "iti");
            const dataForSelect = iti?.activities.map((el) => {
              return {
                label: el?.name || "Something is wrong in name",
                value: el?._id || "Something is wrong in id",
              };
            });

            return (
              <div className="flex flex-row gap-2 items-center justify-start px-4 mt-2">
                <div className="flex flex-col gap-1 min-w-20">
                  <h1 className="font-bold text-base">{iti.location}</h1>

                  <h1>
                    {moment(singlePackage?.data?.startDate)
                      .add(index, "days")
                      .format("DD MMM")}
                  </h1>
                </div>

                <div className="w-6 h-6 bg-red-500 rounded-full">
                  <h1 className="text-white px-2">{index + 1}</h1>
                </div>

                <div className="bg-blue-400 border border-gray-200 rounded-md p-2 ml-8 flex flex-row w-full">
                  <div className="grid grid-cols-1 w-[100%]">
                    <div className="flex flex-row items-start gap-2">
                      <div className="flex flex-col gap-3 w-[20%] items-start mx-4">
                        <h1> Select Hotel </h1>
                        <select
                          value={dayData[index].selectedHotel[0]}
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

                      <div className="flex flex-col gap-3 ">
                        <h1> Select Activity </h1>

                        <Select
                          placeholder="Choose Activity"
                          isMulti
                          value={dayData[index]?.selectedActivities} // Bind the value to the specific day's selectedActivity
                          onChange={(selectedOptions) =>
                            handleActivityChange(selectedOptions, index)
                          }
                          options={dataForSelect}
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

        <div> Google map</div>
      </div>
      {/** section containing the total price of all the hotels in the destination */}
      <div className="pl-20 bg-emerald-300">
        <div className="m-4">
          <h1 className="">
            Estimated Total cost of trip can be around this figure for
            proceeding ahead fill this contact form and one of our executive
            will reach out to you.{Total_Estimated_Price}{" "}
          </h1>
          <button onClick={handleEnquiry}>Fill the Enquiry Form</button>
        </div>
      </div>
      {/* <div className="px-24 mt-6 w-full ">
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
      </div> */}

      <div className="fixed bottom-0 bg-white w-full">
        <div className="flex flex-row justify-between p-3">
          <div className="flex flex-col">
            <h1 className="">
              32732 <span>(6 day trip and activities)</span>
            </h1>

            <h1>New Delhi toNainital to Jim Corbett to Mussorie to Delhi</h1>
          </div>

          <button
            onClick={handleBookNow}
            className="text-white rounded-sm bg-[#2DA5F3] px-6 py-2"
          >
            {" "}
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeTrip;
