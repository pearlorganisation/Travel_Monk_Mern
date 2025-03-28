import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { baseURL } from "../../../services/axiosInterceptor";
import { Link } from "react-router-dom";

const Distinguish = ({ hotels }) => {
  return (
    <>
      <div className="bg-[#f5f5f5] py-8">
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-center text-2xl font-bold mb-6">
            Distinguished Stays
          </h2>

          {/* Swiper Section */}
          <div className="relative">
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
                spaceBetween: 10,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {Array.isArray(hotels) &&
              hotels.map((hotel) => (
                <SwiperSlide key={hotel?._id}>
                  <Link
                    to={`/hotel-details/${hotel?._id}`}
                    state={{ hotel: hotel }}
                  >
                    <div className="lg:w-[260px] mx-6 rounded-md">
                      <div
                        className="bg-cover bg-center max-w-full sm:w-[400px] h-[300px] rounded-lg shadow-lg bg-opacity-50"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseURL}/${hotel?.image?.path})`,
                        }}
                      >
                        <div className="bg-opacity-50 h-full max-w-full flex items-center rounded-lg">
                          <div className="text-left text-white p-8 flex flex-col justify-between h-full">
                            {/* Container for Hotel Name (Top) */}
                            <div className="mb-4"> {/* Add some margin-bottom for spacing */}
                              <h3 className="text-lg md:text-xl font-bold overflow-hidden break-words whitespace-pre-wrap">
                                {hotel?.name}
                              </h3>
                            </div>

                            {/* Container for the Bottom Elements (Button, City, Price) */}
                            <div className="w-full">
                              <button className="bg-[#007E8F] text-white py-2 px-4 rounded">
                                Explore
                              </button>
                              <div className="text-base font-semibold text-gray-200 mt-2">
                                {hotel?.city}
                              </div>
                              <div className="text-xl font-bold text-white mt-1">
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
          <div className="swiper-button-prev absolute lg:!-left-[50px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></div>

          {/* Swiper Next Button */}
          <button className="swiper-button-next absolute  lg:!-right-[50px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Distinguish;
