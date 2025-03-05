import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { baseURL } from "../../../services/axiosInterceptor";

const PopularItineraries = ({ data }) => {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden py-8">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-start text-2xl font-bold mb-6">
          Most Popular International Destinations
        </h2>

        {/* Swiper Section */}
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {Array.isArray(data) &&
              data.map((destination) => (
                <SwiperSlide key={destination?._id}>
                  <Link to={`/destination/${destination?._id}`}>
                    <div className="lg:w-[260px] mx-auto rounded-md">
                      <div
                        className="bg-cover bg-center max-w-full sm:w-[400px] h-[300px] rounded-lg shadow-lg"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseURL}/${destination?.image?.path})`,
                        }}
                      >
                        <div className="h-full flex flex-col justify-between p-6 text-white rounded-lg">
                          <h3 className="text-lg md:text-xl font-bold line-clamp-2">
                            {destination?.name}
                          </h3>
                          <div>
                            <h1 className="text-sm font-semibold text-gray-200">
                              Estimated Starting Price
                            </h1>
                            <h1 className="text-xl font-bold">₹ {destination?.startingPrice}</h1>
                          </div>
                          <button className="bg-[#007E8F] text-white py-2 px-4 rounded">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Swiper Navigation Buttons */}
          {/* Swiper Prev Button */}
          <div className="swiper-button-prev absolute lg:!-left-[50px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></div>

          {/* Swiper Next Button */}
          <button className="swiper-button-next absolute  lg:!-right-[50px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></button>
        </div>

        {/* Explore All Link */}
        <div className="text-right mt-4">
          <Link to="/international_packages" className="text-blue-500 hover:underline">
            Explore All →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularItineraries;
