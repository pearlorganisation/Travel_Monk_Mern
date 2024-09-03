import Locations from "./Locations";
import Reviews2 from "./Reviews";
import RoomDetails from "./RoomDetails";

const uniquefeatures = [
  {
    id: 1,
    name: " • Interconnected Room",
  },
  {
    id: 2,
    name: " • Bathroom",
  },
  {
    id: 3,
    name: " • 24 Hour in-room dining",
  },
  {
    id: 4,
    name: " • House Keeping",
  },
  {
    id: 5,
    name: " • Laundry Service ",
  },
];

const roomTypesData = [
  {
    id: 1,
    features: [
      {
        id: 1,
        name: " • Interconnected Room",
      },
      {
        id: 2,
        name: " • Bathroom",
      },
      {
        id: 3,
        name: " • 24 Hour in-room dining",
      },
      {
        id: 4,
        name: " • House Keeping",
      },
      {
        id: 5,
        name: " • Laundry Service ",
      },
    ],
    price: "5999",
    taxes: "720",
  },
  {
    id: 2,
    features: [
      {
        id: 1,
        name: " • Interconnected Room",
      },
      {
        id: 2,
        name: " • Bathroom",
      },
      {
        id: 3,
        name: " • 24 Hour in-room dining",
      },
      {
        id: 4,
        name: " • House Keeping",
      },
      {
        id: 5,
        name: " • Laundry Service ",
      },
    ],
    price: "6599",
    taxes: "780",
  },
  {
    id: 3,
    features: [
      {
        id: 1,
        name: " • Interconnected Room",
      },
      {
        id: 2,
        name: " • Bathroom",
      },
      {
        id: 3,
        name: " • 24 Hour in-room dining",
      },
      {
        id: 4,
        name: " • House Keeping",
      },
      {
        id: 5,
        name: " • Laundry Service ",
      },
    ],
    price: "7049",
    taxes: "840",
  },
];

const HotelDetails = () => {
  return (
    <div className="w-full p-6 bg-white">
      <RoomDetails />

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
                {uniquefeatures.map((uniqueFeature) => (
                  <h3 key={uniqueFeature.id} className="text-gray-400 text-sm">
                    {uniqueFeature.name}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mt-2">
          {roomTypesData.map((roomType) => (
            <div className="mt-8  rounded-xl w-full bg-gray-200 p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Room Only</p>

                  <div className="px-4">
                    {roomType.features.map((feature) => (
                      <h3 className="text-gray-400 text-sm">{feature.name}</h3>
                    ))}
                  </div>

                  <div className="px-4">
                    <h1 className="text-blue-500 text-md">More Details</h1>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold text-3xl mt-2">
                    {" "}
                    ₹{roomType.price}{" "}
                  </h1>

                  <h1 className="text-gray-400 text-sm mt-3">
                    +₹{roomType.taxes} taxes and fees{" "}
                  </h1>

                  <button className="bg-blue-400 py-2 px-6 rounded-md text-white mt-3">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Reviews2 />

      <Locations />
    </div>
  );
};

export default HotelDetails;
