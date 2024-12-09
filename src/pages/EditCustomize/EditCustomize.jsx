import React from "react";
import Help from "./Help";

const inclusions = [
  " Entire travel from Leh to Leh by tempo traveler (For Tempo option)",
  " Bike rent for 5 Days - Day 2 till Day 6 (For Biking option)",
  "Fuel for the bike",
  " Stay for 6 nights – 3 nights in a hotel at Leh, 2 night in a Hotel at Nubra Valley, 1 night in camps at Pangong Tso on triple sharing",
  "A total of 12 meals – 1 meal Day 1 (D) + 2 meals Day 2 (B + D) + 2 meals Day 3 (B+D) + 2 meals Day 4 (B+D) + 2 meals Day 5 (B+D) + 2 meals Day 6 (B+D) + 1 meal Day 7 (B)",
  "Mechanical Backup",
  "All inner line permits for the trip",
  "Team Captain throughout the trip",
  "Riding Gears – Helmet, Riding Gloves ( only for riders), Elbow Guards, Knee Pads (Though it is recommended you carry your own helmet for comfort)",

  "Driver Night Charges, Toll Tax, Parking Charges, etc.",
  "An Oxygen Cylinder and Medical Kit in the car in case of emergency",
  "Airport pick or drop. ( Private taxi won't be provided, taxis will be available on pre-decided slots time as per the Flights timings of combined group).",
];

const exclusions = [
  "GST (5%) is applicable extra.",
  "Any kind of food or beverage that is not included in the package like alcoholic drinks, mineral water, meals/refreshments/lunches on the highway.",
  "Any personal expenses like a tip to the drivers, entry to monuments/monasteries, camera/video camera charges, camel safari, river rafting, laundry, telephone bills, tips, etc",
  "Any cost arising due to natural calamities like landslides, roadblocks etc. (to be borne directly by the customer on the spot)",
  "Anything not mentioned in the inclusions.",
];

const EditCustomize = () => {
  return (
    <div className="">
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-96 object-cover"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[65%_auto] gap-6 px-20 py-6">
        <div>
          <h1 className=" text-2xl md:text-4xl font-semibold">
            8 Days Sri Nagar to Leh Road, Trip via Nubra, Pangong and Sou Moriri
          </h1>
          <div className="flex flex-col md:flex-row gap-12 p-6">
            <div className="flex  flex-row gap-4">
              <img src="https://wanderon.in/assets/images/new-location.svg" />
              <div className="flex flex-col ">
                <h1>Pickup and Drop</h1>
                <h1>Srinagar - Srinagar</h1>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <img src="https://wanderon.in/assets/images/new-clock.svg" />
              <div className="flex flex-col ">
                <h1>Duration</h1>
                <h1>7 N - 8 D</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row gap-4 items-center justify-start md:px-4">
              <img
                src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-click-vector-icon-png-image_1027903.jpg"
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold"> Itinary </h1>
            </div>

            <Help />

            <div className="flex flex-row gap-4 items-center justify-start md:px-4 mt-8">
              <img
                src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-click-vector-icon-png-image_1027903.jpg"
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold"> Inclusions </h1>
            </div>

            <div className="md:px-6 mt-4">
              {inclusions.map((inclusion, index) => (
                <div className="mt-2 flex flex-row gap-4" key={index}>
                  <img
                    src="https://wanderon.in/assets/svg/check-mark.png"
                    className="w-5 h-5"
                  />
                  <h3>{inclusion}</h3>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-4 items-center justify-start  md:px-4 mt-8">
              <img
                src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-click-vector-icon-png-image_1027903.jpg"
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold"> Exclusions </h1>
            </div>

            <div className="md:px-6 mt-4">
              {exclusions.map((exclusion, index) => (
                <div className="mt-2 flex flex-row gap-4" key={index}>
                  <img
                    src="https://wanderon.in/assets/svg/exclude.png"
                    className="w-5 h-5"
                  />
                  <h3>{exclusion}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-4xl font-semibold">Customize</h1>

          <h3 className="mt-2 text-gray-400 text-sm">Starting from</h3>
          <h1 className="text-5xl text-[#2DA5F3] mt-0 flex justify-start items-baseline">
            ₹ 27,999/-{" "}
            <span className="text-xl text-[#2DA5F3] md:ml-3 font-bold">
              {" "}
              per person
            </span>
          </h1>
          <button className="w-[100%]  py-4 rounded-full bg-[#2DA5F3] text-white mt-4">
            {" "}
            BOOK NOW{" "}
          </button>

          <div className="border-2 border-[#2DA5F3] rounded-md mt-8 ">
            <form className="mt-12">
              <h1 className="text-[#2DA5F3] font-semibold">
                Travel Monk Calling ?{" "}
              </h1>
              <h3> Allow us to call Back! </h3>

              <div class="relative my-6">
                <input
                  id="id-l11"
                  type="text"
                  name="id-l11"
                  placeholder="e.g. John Smith"
                  class="relative w-full h-12 px-4 pl-12 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#2DA5F3] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  for="id-l11"
                  class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#2DA5F3] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Full Name
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute w-6 h-6 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-7 description-7"
                  role="graphics-symbol"
                >
                  <title id="title-7">Check mark icon</title>
                  <desc id="description-7">Icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div class="relative my-6">
                <input
                  id="id-l11"
                  type="text"
                  name="id-l11"
                  placeholder="e.g. John Smith"
                  class="relative w-full h-12 px-4 pl-12 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#2DA5F3] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  for="id-l11"
                  class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#2DA5F3] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Phone Number
                </label>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute w-6 h-6 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-7 description-7"
                  role="graphics-symbol"
                >
                  <title id="title-7">Check mark icon</title>
                  <desc id="description-7">Icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div class="relative my-6">
                <input
                  id="id-l11"
                  type="text"
                  name="id-l11"
                  placeholder="e.g. John Smith"
                  className="relative w-full h-12 px-4 pl-12 placeholder-transparent transition-all border-2 rounded outline-none focus-visible:outline-none peer border-gray-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#2DA5F3] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  for="id-l11"
                  class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#2DA5F3] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Email ID
                </label>
                <svg
                  fill="#c8c8c8"
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 75.294 75.294"
                  xml:space="preserve"
                  stroke="#c8c8c8"
                  className="absolute w-6 h-6 top-3 left-4
                  stroke-slate-400 peer-disabled:cursor-not-allowed"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              <div className="flex items-center justify-center mb-4">
                {" "}
                <button className="px-6 py-3 bg-yellow-400 w-[80%]  rounded-full">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomize;
