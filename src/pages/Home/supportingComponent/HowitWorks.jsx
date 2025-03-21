import React from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaClipboardList,
  FaSuitcase,
} from "react-icons/fa";
import Group1Icon from "/images/group39.png"
import Group2Icon from "/images/group40.png"
import Group3Icon from "/images/group41.png"
import Group4Icon from "/images/group42.png"
import LineIcon from "/images/line18.png"

const HowitWorks = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 pt-4">How it works</h2>
        <div className="flex md:flex-row  flex-col items-center justify-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center   w-40 h-40 ">
              <img src={Group1Icon} alt="" />
              <p className="font-medium text-center text-sm text-black">
                Choose <br /> destinations <br />
                and dates
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={LineIcon} alt="" className="w-20" />
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center  w-40 h-40 ">
              <img src={Group2Icon} alt="" />
              <p className="font-medium text-center text-sm text-black">
                Select Cruise, hotels, bus experiences
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={LineIcon} alt="" className="w-20" />
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center  w-40 h-40 ">
              <img src={Group3Icon} alt="" />
              <p className="font-medium text-center text-sm text-black">
                Book and get a Trip Organizer for your convenience
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={LineIcon} alt="" className="w-20" />
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center  w-40 h-40   ">
              <img src={Group4Icon} alt="" />
              <p className="font-medium text-center text-sm text-[#121212] leading-snug w-40">
                Use the crowdsourced database and travel expertise system for
                refinement.
              </p>
            </div>
          </div>
        </div>
      <div className="mt-24">

      </div>
        {/* <button className="mt-24 py-2 px-20 bg-[#007E8F] text-[#f5f5f5] rounded-lg  focus:outline-none  mb-10">
          Customise your Trip
        </button> */}
      </div>
    </div>
  );
};

export default HowitWorks;
