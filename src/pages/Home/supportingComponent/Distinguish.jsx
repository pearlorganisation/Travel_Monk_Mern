import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { baseURL } from "../../../services/axiosInterceptor";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Distinguish = ({ hotels }) => {
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
    <>
      <div className="bg-[#f5f5f5] py-8">
        <div className="px-10 relative">
          <h2 className="text-start text-2xl font-bold mb-6">
            Distinguished Stays
          </h2>

          {/* Swiper Section */}
          <div className="px-16 relative">
          <Swiper
              onSwiper={setSwiperInstance}
              ref={swiperRef}
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
                spaceBetween: 10,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev2",
              nextEl: ".swiper-button-next2",
            }}
            modules={[ Navigation]}
            className="mySwiper"
          >
            {Array.isArray(hotels) &&
              hotels.map((hotel) => (
                <SwiperSlide key={hotel?._id}>
                  <Link
                    to={`/hotel-details/${hotel?._id}`}
                    state={{ hotel: hotel }}
                  >
                    <div className="w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-[260px] mx-auto rounded-md">
                      <div
                        className="bg-cover bg-center w-full h-[300px] rounded-lg shadow-lg"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseURL}/${hotel?.image?.path})`,
                        }}
                      >
                        <div className="bg-opacity-50 h-full w-full flex items-center rounded-lg">
                          <div className="text-left text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full w-full">
                            {/* Hotel Name */}
                            <div className="mb-4">
                              <h3 className="text-base sm:text-lg md:text-xl font-bold overflow-hidden break-words whitespace-pre-wrap">
                                {hotel?.name}
                              </h3>
                            </div>

                            {/* Bottom Section */}
                            <div className="w-full">
                              <button className="bg-[#007E8F] text-white py-2 px-4 rounded text-sm sm:text-base">
                                Explore
                              </button>
                              <div className="text-sm sm:text-base font-semibold text-gray-200 mt-2">
                                {hotel?.city}
                              </div>
                              <div className="text-lg sm:text-xl font-bold text-white mt-1">
                                ₹ {hotel?.estimatedPrice}
                              </div>
                            </div>
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
        </div>
      </div>
    </>
  );
};

export default Distinguish;
