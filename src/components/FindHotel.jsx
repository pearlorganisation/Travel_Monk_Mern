import React from "react";

const FindHotel = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-white text-black rounded-lg shadow-md p-4 mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src="https://r1imghtlak.mmtcdn.com/cd953b38f02a11e9a4000242ac110003.jpg"
                    alt="Hotel Image"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-lg font-bold">
                    Lakeside Inn - Mall Road Nainital...
                  </h2>
                  <div className="text-yellow-500 flex items-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.167 1.174-5.917 5.753 1.396 8.134L12 18.896l-7.314 3.852 1.396-8.134L.165 9.192l8.167-1.174z" />
                    </svg>
                    <span>5.0 (552)</span>
                  </div>
                  <p>Breakfast • AC • Free wifi</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">₹ 15,000</span>
                    <span className="bg-yellow-500 px-2 rounded font-semibold">
                      Limited time deal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg shadow-md p-4 mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src="https://3.bp.blogspot.com/-GWFipeUYvmA/WVLQ_5vr5HI/AAAAAAAAF7o/7ZIvRx2DeHAM-YQ_HtZ0sAzk7UapnpR-ACLcBGAs/s1600/lime%2Bwood%2Bhotel.jpg"
                    alt="Hotel Image"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-lg font-bold">Hotel Limewood</h2>
                  <div className="text-yellow-500 flex items-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.167 1.174-5.917 5.753 1.396 8.134L12 18.896l-7.314 3.852 1.396-8.134L.165 9.192l8.167-1.174z" />
                    </svg>
                    <span>5.0 (552)</span>
                  </div>
                  <p>Breakfast • AC • Free wifi</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">₹ 9,067</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg shadow-md p-4 mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src="https://gos3.ibcdn.com/1e158ed8da3d11ecb71d0a58a9feac02.jpg"
                    alt="Hotel Image"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-lg font-bold">Lake View Nature Camp</h2>
                  <div className="text-yellow-500 flex items-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.167 1.174-5.917 5.753 1.396 8.134L12 18.896l-7.314 3.852 1.396-8.134L.165 9.192l8.167-1.174z" />
                    </svg>
                    <span>5.0 (552)</span>
                  </div>
                  <p>Breakfast • AC • Free wifi</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">₹ 12,340</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg shadow-md p-4 mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src="https://media.vrbo.com/lodging/30000000/29940000/29932700/29932633/2ef02590.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                    alt="Hotel Image"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-lg font-bold">The Whispering Oaks</h2>
                  <div className="text-yellow-500 flex items-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.167 1.174-5.917 5.753 1.396 8.134L12 18.896l-7.314 3.852 1.396-8.134L.165 9.192l8.167-1.174z" />
                    </svg>
                    <span>5.0 (552)</span>
                  </div>
                  <p>Breakfast • AC • Free wifi</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">₹ 7,387</span>
                    <span className="bg-yellow-500 px-2 rounded font-semibold">
                      Limited time deal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4 hidden lg:block">
            <div className="bg-white rounded-lg shadow-md h-full">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Map"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindHotel;
