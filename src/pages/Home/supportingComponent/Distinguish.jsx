import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { baseURL } from "../../../services/axiosInterceptor";
import { Link } from "react-router-dom";

const Distinguish = ({ hotels }) => {
  return (
    <>
      <div className="bg-[#f5f5f5] py-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold mb-6">
            Distinguished Stays
          </h2>

          {/* Swiper Section */}
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
            modules={[Pagination]}
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
                        <div className=" bg-opacity-50 h-full max-w-full flex items-center rounded-lg">
                          <div className="text-left text-white p-8">
                            <h3 className="text-lg md:text-xl font-bold line-clamp-2 fixed top-4">
                              {hotel?.name}
                            </h3>
                            <button className="bg-[#007E8F] text-white py-2 px-4 rounded justify-end fixed bottom-20">
                              Explore
                            </button>

                            <h1 className="text-base font-semibold text-gray-200 mb-8 fixed bottom-1">
                              {hotel?.city}
                            </h1>

                            <h1 className="text-xl font-bold text-white fixed bottom-[10px]">
                              ₹ {hotel?.estimatedPrice}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Explore All Link */}
          <div className="text-right mt-4 mb-6">
            <Link
              to="/indian_packages"
              className="text-blue-500 hover:underline"
            >
              Explore All →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distinguish;
