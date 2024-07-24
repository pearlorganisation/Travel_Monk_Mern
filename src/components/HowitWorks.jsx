import React from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaClipboardList,
  FaSuitcase,
} from "react-icons/fa";

const HowitWorks = () => {
  return (
    <div className="bg-[#f5f5f5] py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="border-4 border-[#007e8f] rounded-full p-8">
              <FaMapMarkerAlt className="text-[#007e8f] text-6xl" size={30} />
            </div>
            <p className="font-medium mt-4">
              Choose <br /> destinations <br />
              and dates
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-4 border-[#007e8f] rounded-full p-8">
              <FaSearch className="text-[#007e8f] text-6xl" size={30} />
            </div>
            <p className="font-medium text-center mt-4">
              Select flights, hotels, <br />
              car rental and city <br />
              experiences
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-4 border-[#007e8f] rounded-full p-8">
              <FaClipboardList className="text-[#007e8f] text-6xl" size={30} />
            </div>
            <p className="font-medium text-center mt-4">
              Book and get a Trip <br /> Organizer for your <br /> convenience
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-4 border-[#007e8f] rounded-full p-8">
              <FaSuitcase className="text-[#007e8f] text-6xl " size={30} />
            </div>
            <p className="font-medium text-center mt-4">
              Use the crowdsourced <br /> database and travelz
              <br /> expertise system for <br /> refinement.
            </p>
          </div>
        </div>
        <button className="mt-8 py-2 px-20 bg-[#007e8f] text-white rounded  focus:outline-none ">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default HowitWorks;
