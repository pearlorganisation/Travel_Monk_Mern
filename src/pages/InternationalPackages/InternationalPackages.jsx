import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../../components/DestinationCards/DestinationCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations } from "../../features/trips/tripActions";

const InternationalPackages = () => {
  const destState = useSelector((state) => state.trip.destinations);
  console.log("destState", destState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDestinations("International"));
  }, []);

  return (
    <div>
      <div
        className="h-96"
        style={{
          backgroundImage: `url('https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Bali_tv_destination_img_1_l_771_1158.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white lg:pt-20 lg:pl-40">
          <h1 className="text-5xl font-bold">Exquisite International Tours</h1>
          <h1 className="text-2xl bg-yellow-300 w-max px-2 text-black mt-3 py-1 rounded-sm">
            The Journey for New Beginnings.
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full ">
        <div className=" my-6">
          <h1 className="text-3xl font-bold">About International Tours</h1>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-500 w-full justify-center items-center flex">
          Destinations
        </h1>

        {destState?.data.length > 0 ? (
          <div className="p-4">
            <DestinationCard data={destState?.data} />
          </div>
        ) : (
          /* Improved No Destinations Found */
          <div className="flex flex-col justify-center items-center mt-10 mb-20">
            <h1 className="text-3xl font-bold text-gray-700 mt-4">
              No Packages Found
            </h1>
            <p className="text-gray-500 mt-2">
              We couldn’t find any packages at the moment. Check back later or
              explore other trips.
            </p>
            <Link to="/indian_packages">
              <button className="mt-4 px-6 py-2 bg-[#007E8F] text-white rounded-md hover:bg-[#006673]">
                Explore Indian Packages
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternationalPackages;
