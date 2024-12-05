import React from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaClipboardList,
  FaSuitcase,
} from "react-icons/fa";

const HowitWorks = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 pt-4">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* Item 1 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center border-2 bg-[#F0F9FF] border-[#98D1FF] rounded-full w-40 h-40 p-4">
      <FaMapMarkerAlt className="text-[#98D1FF] text-6xl mb-4" />
      <p className="font-medium text-center text-sm text-black">
        Choose <br /> destinations <br />
        and dates
      </p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center border-2 bg-[#F0F9FF] border-[#98D1FF] rounded-full w-40 h-40 p-4">
      <FaSearch className="text-[#98D1FF] text-6xl mb-4" />
      <p className="font-medium text-center text-sm text-black">
        Select flights, hotels, <br />
        car rentals, and city <br />
        experiences.
      </p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center border-2 bg-[#F0F9FF] border-[#98D1FF] rounded-full w-40 h-40 p-4">
      <FaClipboardList className="text-[#98D1FF] text-6xl mb-4" />
      <p className="font-medium text-center text-sm text-black">
        Book and get a Trip <br /> Organizer for your <br /> convenience
      </p>
    </div>
  </div>

  {/* Item 4 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center border-2 bg-[#F0F9FF] border-[#98D1FF] rounded-full w-40 h-40 py-2  ">
      <FaSuitcase className="text-[#98D1FF] text-6xl mb-2 mt-2 " size={30} />
      <p className="font-medium text-center text-sm text-black mt-4 ">
        Use the crowdsourced <br /> database and travelz <br />
        expertise system for <br /> refinement.
      </p>
    </div>
  </div>
</div>

        <button className="mt-8 py-2 px-20 bg-red-500 text-white rounded  focus:outline-none  mb-10">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default HowitWorks;
