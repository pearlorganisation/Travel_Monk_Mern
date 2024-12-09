import React, { useEffect } from "react";
import DestinationCard from "../../components/DestinationCards/DestinationCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations } from "../../features/trips/tripActions";
import { BestPackages } from "../../components/DestinationCards/BestDestinationCard";

const IndianPackages = () => {
  const destState = useSelector((state) => state.trip.destinations);

  const indianDest = destState?.data.filter((data) => data.type == "Indian");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="h-96"
        style={{
          backgroundImage: `url('/indian.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white  md:pt-20 md:pl-40 px-4 py-12">
          <h1 className="text-5xl font-bold">Unparalleled India Tours</h1>
          <h1 className="md:text-2xl text-sm bg-yellow-300 w-max px-2 text-black mt-3 py-1 rounded-sm">
            A Journey Through Time, Colour And Culture
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full ">
        <div className="bg-slate-200 my-6 py-2 px-3">
          <h1 className="text-3xl font-bold">About Indian Tours</h1>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-500 w-full justify-center items-center flex">
          Destinations
        </h1>
        <div className="p-4">
          <DestinationCard data={indianDest} />
        </div>

        <div className='mt-8'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-blue-500 w-full text-center'>Best Seller Packages</h1>
            <h2 className='text-xl font-normal text-gray-400'>Find your perfect travel experience with our top-rated packages</h2>
          </div>
          <div className='px-10 py-4'>

            <BestPackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPackages;
