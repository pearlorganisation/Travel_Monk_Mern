import React, { useState } from "react";
import { axiosInstance, baseURL } from "../../../services/axiosInterceptor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const monthArr = [
  { id: 1, name: "January", value: "January" },
  { id: 2, name: "February", value: "February" },
  { id: 3, name: "March", value: "March" },
  { id: 4, name: "April", value: "April" },
  { id: 5, name: "May", value: "May" },
  { id: 6, name: "June", value: "June" },
  { id: 7, name: "July", value: "July" },
  { id: 8, name: "August", value: "August" },
  { id: 9, name: "September", value: "September" },
  { id: 10, name: "October", value: "October" },
  { id: 11, name: "November", value: "November" },
  { id: 12, name: "December", value: "December" },
];

const Upcoming = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [packagesData, setPackagesData ]= useState(null)
  
  
  const handleMonthClick = async (month) => {
    console.log("Selected Month:", month);
    setSelectedMonth(month);

    if (month) {
      try {
        const res = await axiosInstance.get(`/api/v1/packages?paging=false&month=${month}`);
        console.log("Response Data:", res.data);

        if (res.data?.data) {
          setPackagesData(res.data.data); // Update state with fetched data
        } else {
          setPackagesData([]); // Clear state if no data found
          toast.error("No packages found for this month.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch packages.");
      }
    }
  };


  return (
    <div className="bg-gray-100 flex items-center justify-center flex-col min-h-[15rem] border">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Join Upcoming Group Trips</h2>
        <div className="flex w-[600px] flex-wrap justify-center gap-4">
          {monthArr.map((month) => (
            <div
              key={month.id}
              onClick={() => handleMonthClick(month.value)}
              className={`px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200 cursor-pointer ${selectedMonth === month.value ? "bg-gray-300" : ""
                }`}
            >
              {month.name}
            </div>
          ))}
        </div>
      </div>
      {packagesData !== null &&  <>
        <div className="bg-[#f5f5f5] py-8">
          <div className="container mx-auto max-w-6xl relative">
            <h2 className="text-start text-2xl font-bold mb-6">
              Upcoming Trips
            </h2>
 
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {packagesData !== null &&
                packagesData.map((packagename) => (
                  <SwiperSlide key={packagename?._id}>
                    <Link to={`/packages/${packagename?._id}`}>
                      <div className="lg:w-[260px] mx-auto rounded-md overflow-hidden shadow-lg">
                        <div
                          className="bg-cover bg-center w-full h-[300px] rounded-lg"
                          style={{
                            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseURL}/${packagename?.image?.path})`,
                          }}
                        >
                          <div className="flex flex-col justify-between h-full p-6 text-white">
                            <h3 className="text-xl font-bold">{packagename?.name}</h3>
                            <div>
                              <p className="text-sm">Estimated Starting Price</p>
                              <h4 className="text-lg font-bold">
                                ₹ {packagename?.startingPrice}
                              </h4>
                              <button className="bg-[#007E8F] text-white py-2 px-4 rounded mt-4">
                                Explore
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>


            {/* Swiper Prev Button */}
            <div className="swiper-button-prev absolute lg:!-left-[50px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></div>

            {/* Swiper Next Button */}
            <button className="swiper-button-next absolute  lg:!-right-[50px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></button>
          </div>
        </div>
      </>}
    </div>
  );
};

export default Upcoming;
