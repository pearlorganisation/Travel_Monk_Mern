import React, { useEffect } from "react";
import DestinationCard from "../../components/DestinationCards/DestinationCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllInternationalDestinations } from "../../features/trips/tripsSlice";

const InternationalPackages = () => {
  const { data } = useSelector((state) => state.trip.internationaldestination);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInternationalDestinations());
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
        <div className="bg-slate-200 my-6">
          <h1 className="text-3xl font-bold">About International Tours</h1>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-500 w-full justify-center items-center flex">
          Destinations
        </h1>
        <div className="p-4">
          <DestinationCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default InternationalPackages;
