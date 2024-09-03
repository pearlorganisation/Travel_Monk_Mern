import React from "react";

const RoomTypes = () => {
  return (
    <div className="flex flex-row mt-12 w-full">
      <div className="w-[25%]">
        <div className="">
          <h1>Choose Room Types </h1>

          <div className="mt-4">
            <img
              src="hotel1.jpg"
              alt="Hotel Image 1"
              className="w-[90%] rounded-lg"
            />
          </div>
          <div className="mt-2  rounded-xl w-[90%] bg-gray-200 p-4">
            <p className="text-lg font-bold">
              ( 210 sq.ft | City View | 1 Queen Bed or 2 Twn Bed(s) )
            </p>

            <div className="px-4">
              <h3 className="text-gray-400 text-sm"> • Interconnected Room </h3>
              <h3 className="text-gray-400 text-sm">• Bathroom</h3>
              <h3 className="text-gray-400 text-sm">
                • 24 Hour in-room dining
              </h3>
              <h3 className="text-gray-400 text-sm"> • House Keeping </h3>
              <h3 className="text-gray-400 text-sm"> • Laundry Service </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-2">
        <div className="mt-6  rounded-xl w-full bg-gray-200 p-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg font-bold">Room Only</p>

              <div className="px-4">
                <h3 className="text-gray-400 text-sm">• Interconnected Room</h3>
                <h3 className="text-gray-400 text-sm">• Bathroom</h3>
                <h3 className="text-gray-400 text-sm">
                  • 24 Hour in-room dining
                </h3>
                <h3 className="text-gray-400 text-sm"> • House Keeping </h3>
                <h3 className="text-gray-400 text-sm"> • Laundry Service </h3>
              </div>

              <div className="px-4">
                <h1 className="text-blue-500 text-md">More Details</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-3xl mt-2"> ₹5999 </h1>

              <h1 className="text-gray-400 text-sm mt-3">
                +₹720 taxes and fees{" "}
              </h1>

              <button className="bg-blue-400 py-2 px-6 rounded-md text-white mt-3">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6  rounded-xl w-full bg-gray-200 p-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg font-bold">Room Only</p>

              <div className="px-4">
                <h3 className="text-gray-400 text-sm">
                  {" "}
                  • Interconnected Room{" "}
                </h3>
                <h3 className="text-gray-400 text-sm">• Bathroom</h3>
                <h3 className="text-gray-400 text-sm">
                  • 24 Hour in-room dining
                </h3>
                <h3 className="text-gray-400 text-sm"> • House Keeping </h3>
                <h3 className="text-gray-400 text-sm"> • Laundry Service </h3>
              </div>

              <div className="px-4">
                <h1 className="text-blue-500 text-md">More Details</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-3xl mt-2"> ₹6599 </h1>

              <h1 className="text-gray-400 text-sm mt-3">
                +₹760 taxes and fees{" "}
              </h1>

              <button className="bg-blue-400 py-2 px-6 rounded-md text-white mt-3">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6  rounded-xl w-full bg-gray-200 p-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg font-bold">Room Only</p>

              <div className="px-4">
                <h3 className="text-gray-400 text-sm">
                  {" "}
                  • Interconnected Room{" "}
                </h3>
                <h3 className="text-gray-400 text-sm">• Bathroom</h3>
                <h3 className="text-gray-400 text-sm">
                  • 24 Hour in-room dining
                </h3>
                <h3 className="text-gray-400 text-sm"> • House Keeping </h3>
                <h3 className="text-gray-400 text-sm"> • Laundry Service </h3>
              </div>

              <div className="px-4">
                <h1 className="text-blue-500 text-md">More Details</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-3xl mt-2"> ₹7049 </h1>

              <h1 className="text-gray-400 text-sm mt-3">
                +₹840 taxes and fees{" "}
              </h1>

              <button className="bg-blue-400 py-2 px-6 rounded-md text-white mt-3">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypes;
