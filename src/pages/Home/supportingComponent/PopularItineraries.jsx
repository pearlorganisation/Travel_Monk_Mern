import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { baseURL } from "../../../services/axiosInterceptor";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PopularItineraries = ({ data }) => {
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
  
  return (
    <div className="bg-[#f5f5f5] overflow-hidden py-8">
      <div className="px-10 relative">
        <h2 className="text-start text-2xl font-bold mb-6">
          Most Popular International Destinations
        </h2>

        {/* Swiper Section */}
        <div className="px-16 relative">
          <Swiper
            onSwiper={setSwiperInstance}
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
            // navigation={{
            //   prevEl: ".swiper-button-prev",
            //   nextEl: ".swiper-button-next",
            // }}
            modules={[Navigation]}
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
                        <div className="flex flex-col justify-between h-full p-6 text-white">
                          <h3 className="text-xl font-bold">{destination?.name}</h3>
                          <div>
                            <p className="text-sm">Estimated Starting Price</p>
                            <h4 className="text-lg font-bold">
                              ₹ {destination?.startingPrice}
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
