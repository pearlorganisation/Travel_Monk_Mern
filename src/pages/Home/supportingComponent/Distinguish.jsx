import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { baseURL } from "../../../services/axiosInterceptor";
import { Link } from "react-router-dom";

const Distinguish = ({ hotels }) => {
  return (
    <>
      {/* <div className="bg-[#f5f5f5]">
        <div className="container mx-auto">
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 py-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                watchOverflow={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                navigation={
                  {
                    prevEl:".swiper-button-prev",
                    nextEl:".swiper-button-next"
                  }
                }
                modules={[Pagination,Navigation]}
                className="mySwiper"
              >
                {Array.isArray(hotels) &&
                  hotels.map((hotel) => (
                    <SwiperSlide>
                      <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                          <div className="h-48 w-1/3 bg-gray-300 flex items-center justify-center">
                            <img
                              src={`${baseURL}/${hotel?.image?.path}`}
                              alt="Andaman & Nicobar Islands"
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {hotel?.estimatedPrice}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {hotel?.name}
                          </h3>
                          <div className="flex items-center mt-2">
                            <svg
                              className="w-4 h-4 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                            </svg>
                            <span className="ml-1 text-sm text-gray-600">
                              4.3
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            {hotel?.city}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="swiper-button-prev absolute  lg:!-left-[80px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></div>

{/* Swiper Next Button */}
      {/* <button className="swiper-button-next absolute lg:!-right-[80px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></button>
            </div>
            <div className="text-right mt-4 py-10">
              <a href="#" className="text-blue-500 hover:underline">
                Explore All →
              </a>
            </div>
          </div>
        </div>
      </div> */}

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
                    {/* <div className="max-w-xs mx-auto relative rounded-lg overflow-hidden shadow-lg">
                          <img
                            className="w-full h-56 object-cover"
                            src={destination?.image?.secure_url}
                            alt={destination?.name}
                          />
                          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full">
                            <h2 className="text-xl font-bold text-white">
                              {destination?.name}
                            </h2>
                            <p className="text-white">
                              Starting Price Rs. {destination?.startingPrice}/-
                            </p>
                          </div>
                        </div> */}

                    <div className="lg:w-[260px] mx-6 rounded-md">
                      <div
                        className="bg-cover bg-center max-w-full sm:w-[400px] h-[300px] rounded-lg shadow-lg bg-opacity-50"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseURL}/${hotel?.image?.path})`,
                        }}
                      >
                        <div className=" bg-opacity-50 h-full max-w-full flex items-center rounded-lg">
                          <div className="text-left text-white p-8">
                            <h3 className="text-3xl font-bold mb-2 text-white fixed top-4">
                              {hotel?.name}
                            </h3>
                            {/* <p className="mb-4">
                                  A Journey Through Time, Colour And Culture
                                </p> */}

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
