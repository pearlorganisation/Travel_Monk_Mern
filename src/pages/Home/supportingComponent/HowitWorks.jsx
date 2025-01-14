import React from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaClipboardList,
  FaSuitcase,
} from "react-icons/fa";

const HowitWorks = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 pt-4">How it works</h2>
        <div className="flex md:flex-row  flex-col items-center justify-center">
  {/* Item 1 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center   w-40 h-40 ">
 <img src="src\assets\images\Group 39.png" alt="" />
      <p className="font-medium text-center text-sm text-black">
        Choose <br /> destinations <br />
        and dates
      </p>
    </div>
  </div>
  <div className="flex items-center">
    <img src="src\assets\images\Line 18.png" alt=""  className="w-20"/>

  </div>
  {/* Item 2 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center  w-40 h-40 ">
    <img src="src\assets\images\Group 40.png" alt="" />
      <p className="font-medium text-center text-sm text-black">
      Select Cruise, hotels, bus experiences

      </p>
    </div>
  </div>
  <div className="flex items-center">
    <img src="src\assets\images\Line 18.png" alt=""  className="w-20"/>

  </div>
  {/* Item 3 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center  w-40 h-40 ">
     <img src="src\assets\images\Group 41.png" alt="" />
      <p className="font-medium text-center text-sm text-black">
      Book and get a Trip Organizer for your convenience
      </p>
    </div>
  </div>
  <div className="flex items-center">
    <img src="src\assets\images\Line 18.png" alt=""  className="w-20"/>

  </div>
  {/* Item 4 */}
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center  w-40 h-40   ">
    <img src="src\assets\images\Group 42.png" alt="" />
    <p className="font-medium text-center text-sm text-[#121212] leading-snug w-40">
  Use the crowdsourced database and travel expertise system for refinement.
</p>

    </div>
  </div>
</div>

        <button className="mt-24 py-2 px-20 bg-[#007E8F] text-[#f5f5f5] rounded  focus:outline-none  mb-10">
        Customise your Trip
        </button>
      </div>
    </div>
  );
};

export default HowitWorks;
