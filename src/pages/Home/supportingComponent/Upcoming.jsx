import React, { useRef, useState } from "react";
import { axiosInstance, baseURL } from "../../../services/axiosInterceptor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
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
  const [isMonthSelected, setIsMonthSelected] = useState(false)
  const [packagesData, setPackagesData] = useState(null);
    const swiperRef = useRef()
    const [swiperInstance, setSwiperInstance] = useState(null);
    const prevSlide = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      }
    };
  
    const nextSlide = () => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    };
  const handleMonthClick = async (month) => {
    console.log("Selected Month:", month);
    setSelectedMonth(month);
    setIsMonthSelected(true)

    if (month) {
      try {
        const res = await axiosInstance.get(`/api/v1/packages?paging=false&month=${month}`);
        // console.log("Response Data:", res.data);
        console.log("the response is", res)

        if (res?.data?.data) {
          setPackagesData(res?.data?.data);
        } 
      } catch (error) {
        setPackagesData(null)
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch packages.");
      }
    }
  };

  console.log("the packages data is", packagesData)
  return (
    <div className="w-full min-h-[15rem] bg-gray-100 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Join Upcoming Group Trips</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
            {monthArr.map((month) => (
              <div
                key={month.id}
                onClick={() => handleMonthClick(month.value)}
                className={`px-3 md:px-4 py-1 md:py-2 text-sm md:text-base border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200 cursor-pointer transition-colors ${selectedMonth === month.value ? "bg-gray-300" : ""
                  }`}
              >
                {month.name}
              </div>
            ))}
          </div>
        </div>
        {/**bg-[#f5f5f5] */ }
        {!isMonthSelected ? (<div className="w-full text-center">Please Select a month</div>): 
        packagesData !== null && packagesData?.length >0 ? (
          <div className="bg-[#f5f5f5] py-6 md:py-8 px-4 md:px-6 rounded-lg">
            <div className="relative">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Our upcoming group packages are
              </h2>
               
              <div className="px-16 relative">
                <Swiper
                  onSwiper={setSwiperInstance}
                  ref={swiperRef}
                  slidesPerView={1}
                  spaceBetween={16}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    480: {
                      slidesPerView: 1.5,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                  }}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {packagesData.map((packagename) => (
                    <SwiperSlide key={packagename?._id}>
                      <Link to={`/packages/${packagename?._id}`} className="block w-full">
                        <div className="w-full rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                          <div
                            className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center rounded-lg"
                            style={{
                              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseURL}/${packagename?.image?.path})`,
                            }}
                          >
                            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white">
                              <h3 className="text-lg md:text-xl font-bold line-clamp-2">
                                {packagename?.name}
                              </h3>
                              <div>
                                <p className="text-sm">Estimated Starting Price</p>
                                <h4 className="text-base md:text-lg font-bold">
                                  ₹ {packagename?.startingPrice}
                                </h4>
                                <button className="w-full sm:w-auto bg-[#007E8F] text-white py-2 px-4 rounded mt-3 text-sm md:text-base hover:bg-[#006674] transition-colors">
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
               </div>
              
              {/* Swiper Prev Button */}
              <button
                  className="absolute  left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#007E8F] text-white p-1 rounded-full"
                  onClick={prevSlide}
                >
                  <HiChevronLeft size={24} />
                </button>
              
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#007E8F] text-white p-1 rounded-full"
                onClick={nextSlide}
              >
                <HiChevronRight size={24} />
              </button>
            </div>
          </div>
        ) : <><div className="w-full text-center">No Packages available in this month please select a different month.</div></>}
        {/* {packagesData ===null &&  } */}
      </div>
    </div>
  );
};

export default Upcoming;