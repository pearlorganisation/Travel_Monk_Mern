import Stepper from "./Stepper";
import Bro from "../../assets/images/bro.png";
import Nainital from "../../assets/images/nainital.png";
import Lake from "../../assets/images/lake.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePackage } from "../../features/package/packageActions";
import Select from "react-select";
import parse from "html-react-parser";
import { getSingleDestination } from "../../features/trips/tripActions";

const CustomizeTrip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { singleDestination } = useSelector((state) => state.trip);

  const { singlePackage } = useSelector((state) => state.packages);

  useEffect(() => {
    dispatch(getSinglePackage(id));
  }, []);

  useEffect(() => {
    if (singlePackage?.data)
      dispatch(getSingleDestination(singlePackage?.data?.packageDestination));
  }, [singlePackage]);

  // console.log("Trip days and details ka data", singleDestination);

  console.log("Trip Package ka data", singlePackage);

  // all the hotel data and activity data is stored in dayaData
  const [dayData, setDayData] = useState(
    singlePackage?.data?.itinerary?.map(() => ({
      selectedHotel: "Choose Hotel",
      selectedActivity: [],
    })) || [] // Initialize based on itinerary length
  );

  useEffect(() => {
    // Reset dayData if the itinerary changes
    if (singlePackage?.data?.itinerary) {
      setDayData(
        singlePackage.data.itinerary.map(() => ({
          selectedHotel: "Choose Hotel",
          selectedActivity: [],
        }))
      );
    }
  }, [singlePackage?.data]);

  const handleHotelChange = (index, event) => {
    const newDayData = [...dayData];
    newDayData[index].selectedHotel = event.target.value;
    setDayData(newDayData);
  };

  const handleActivityChange = (index, event) => {
    const newDayData = [...dayData];
    newDayData[index].selectedActivity.push(event.target.value);
    setDayData(newDayData);
  };

  const [selectedActivity, setSelectedActivity] = useState("Choose Activity");
  const [selectedHotel, setSelectedHotel] = useState("Choose Hotel");

  console.log(dayData, "day data");

  // console.log(selectedActivity, "selected activity");
  // console.log(selectedHotel, "selected hotel");
  // console.log(selectedActivity, "selected activity");
  // console.log(selectedHotel, "selected hotel");

  // handle to move to confirm-package

  const handleBookNow = () => {
    navigate("/confirm-package", {
      state: {
        dayData: dayData,
        startingPrice: singlePackage?.data?.startingPrice,
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
          <span>Add Destination</span>
        </button>
      </div>

      <div className="grid grid-cols-[80%_auto]  mt-4">
        <div className="">
          {singlePackage?.data?.itinerary?.map((iti, index) => {
            console.log(iti, "iti");
            const dataForSelect = iti?.activities.map((el) => {
              return {
                label: el?.name || "Something is wrong in name",
                value: el?._id || "Something is wrong in id",
              };
            });

            if (dataForSelect.length === 0)
              return (
                <h1 className="text-center">Arrived Back To Destinatiom !!</h1>
              );
            // console.log(index,"my index");
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
                  <div className="grid grid-cols-1 w-[100%]">
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
                        <h1 className="font-bold text-base">{iti.location}</h1>
                        <h1> 21 June </h1>
                      </div>

                      <div className="flex flex-col gap-3 ">
                        <h1> Select Hotel </h1>
                        <select
                          value={dayData[index]?.selectedHotel}
                          onChange={(event) => handleHotelChange(index, event)}
                          className="bg-blue-100 border-2 border-[#1f1f1f] rounded-md px-2 py-2 flex flex-row gap-2"
                        >
                          <option key="choose"> Choose Hotel</option>
                          {singleDestination?.data?.hotels.map((hotel) => (
                            <option key={hotel.id} value={hotel.id}>
                              {" "}
                              {hotel.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-3 ">
                        <h1> Select Activity </h1>

                        {/* <select
                          value={dayData[index]?.selectedActivity}
                          onChange={(event) =>
                            handleActivityChange(index, event)
                          }

                          className="bg-blue-100 border-2 w-[15rem]
                          border-[#1f1f1f] rounded-md px-2 py-2 flex flex-row
                          gap-2"
                        >
                          <option key="choose-{index}">
                            {" "}
                            Choose Activity{" "}
                          </option>
                          {iti?.activities?.map((activity) => (
                            <option key={activity?._id} value={activity?.name}>
                              {activity?.name}
                            </option>
                          ))}
                        </select> */}
                        <Select
                          placeholder="Choose Activity"
                          isMulti
                          // defaultInputValue={"Choose Activity"}
                          // value={label:}
                          onChange={(event) => console.log(event)}
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
        <div> Google map</div>
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

      <div className="px-24 mt-6 w-full pb-10">
        <h1 className="font-bold text-2xl">Your Trip </h1>

        {dayData.map((iti, index) => (
          <div className="flex flex-row gap-2 justify-start">
            <h3 className="text-[#007E8F]"> Day {index + 1} </h3>

            <Stepper />

            <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
              {iti.selectedActivity === "Choose Activity" ? null : (
                <div className="flex flex-row gap-28 bg-white p-2">
                  <img src={Bro} alt="logo" className="w-48 min-h-max" />

                  <div className="mt-4">
                    <h1 className="font-bold text-lg">
                      ACTIVITY : {iti.selectedActivity}{" "}
                    </h1>

                    <h3 className="">
                      Location :{" "}
                      {singlePackage?.data?.itinerary[index]?.location}
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

              {/*  
              
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

              */}
            </div>
          </div>
        ))}
      </div>

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

{
  /*
      
      <div className="flex flex-row gap-2 justify-start">
      <h3 className="text-[#007E8F]"> Day 1 </h3>

      <Stepper />

      <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Bro} alt="logo" className="w-48 min-h-max" />

          <div className="mt-4">
            <h1 className="font-bold text-lg">New Delhi to Nainital </h1>

            <h3 className="">Swift, Etios ( or Similar )</h3>

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

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

        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Nainital} alt="logo" className="w-48 " />

          <div className="mt-4">
            <h1 className="font-bold text-lg">
              Nainital - A Luxury Collection
            </h1>

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

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

            <h4 className="mt-1">
              Complimentary Breakfast . AC . Free Wifi
            </h4>

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

        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Sattal Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>

          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Nainital Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-row gap-2 justify-start">
      <h3 className="text-[#007E8F]"> Day 2 </h3>

      <Stepper />

      <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Nainital} alt="logo" className="w-48 " />

          <div className="mt-4">
            <h1 className="font-bold text-lg">
              Nainital - A Luxury Collection
            </h1>

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

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

            <h4 className="mt-1">
              Complimentary Breakfast . AC . Free Wifi
            </h4>

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

        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Sattal Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>

          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Nainital Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-row gap-2 justify-start">
      <h3 className="text-[#007E8F]"> Day 3 </h3>

      <Stepper />

      <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Bro} alt="logo" className="w-48 min-h-max" />

          <div className="mt-4">
            <h1 className="font-bold text-lg">New Delhi to Nainital </h1>

            <h3 className="">Swift, Etios ( or Similar )</h3>

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

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

        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Nainital} alt="logo" className="w-48 " />

          <div className="mt-4">
            <h1 className="font-bold text-lg">
              Nainital - A Luxury Collection
            </h1>

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

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

            <h4 className="mt-1">
              Complimentary Breakfast . AC . Free Wifi
            </h4>

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

        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Sattal Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>

          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Nainital Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-row gap-2 justify-start mt-8">
      <h3 className="text-[#007E8F]"> Day 4 </h3>

      <Stepper />

      <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Nainital} alt="logo" className="w-48 " />

          <div className="mt-4">
            <h1 className="font-bold text-lg">
              Nainital - A Luxury Collection
            </h1>

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

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

            <h4 className="mt-1">
              Complimentary Breakfast . AC . Free Wifi
            </h4>

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

        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Sattal Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>

          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Nainital Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-row gap-2 justify-start mt-8">
      <h3 className="text-[#007E8F]"> Day 5 </h3>

      <Stepper />

      <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Bro} alt="logo" className="w-48 min-h-max" />

          <div className="mt-4">
            <h1 className="font-bold text-lg">New Delhi to Nainital </h1>

            <h3 className="">Swift, Etios ( or Similar )</h3>

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

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

        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Nainital} alt="logo" className="w-48 " />

          <div className="mt-4">
            <h1 className="font-bold text-lg">
              Nainital - A Luxury Collection
            </h1>

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

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

            <h4 className="mt-1">
              Complimentary Breakfast . AC . Free Wifi
            </h4>

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

        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Sattal Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>

          <div className="flex flex-row bg-white">
            <img src={Lake} />

            <div className="flex flex-col px-6 py-3">
              <h1> Nainital Lake</h1>
              <h3>Spend Approx 1 hour</h3>
              <button className="px-2 py-1 border border-[#1c1c1c] rounded-xl">
                {" "}
                Add Activity
              </button>

              <h3 className="text-blue-300"> See Information</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-row gap-2 justify-start mt-8">
      <h3 className="text-[#007E8F]"> Day 6 </h3>

      <Stepper />

      <div className="flex flex-col gap-2 w-[100%] justify-between items-start">
        <div className="flex flex-row gap-28 bg-white p-2">
          <img src={Bro} alt="logo" className="w-48 min-h-max" />

          <div className="mt-4">
            <h1 className="font-bold text-lg">Mussorie to Delhi </h1>

            <h3 className="">Swift, Etios ( or Similar )</h3>

            <h3 className="mt-2 font-semibold text-base">Facilities </h3>

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
      </div>
    </div>



      
      
      */
}
