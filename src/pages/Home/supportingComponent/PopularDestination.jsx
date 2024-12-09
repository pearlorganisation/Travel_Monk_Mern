import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const PopularDestination = ({ data }) => {

  console.log(data, "12345678")
  return (
    <div className="bg-[#f5f5f5] py-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-start text-2xl font-bold mb-6">
          Most Popular Indian Destinations
        </h2>

        {/* Featured Destination Section */}
        {/* <div className="flex flex-row gap-4 mb-6">
          {data.map((destination) => (
            <div
              className="bg-cover bg-center w-full sm:w-[400px] h-[300px] rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${destination?.banner?.secure_url})`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full w-full flex items-center rounded-lg">
                <div className="text-left text-white p-8">
                  <h3 className="text-3xl font-bold mb-2">
                    Explore {destination?.name}
                  </h3>
                  <p className="mb-4">
                    A Journey Through Time, Colour And Culture
                  </p>
                  <button className="bg-white text-black py-2 px-4 rounded">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

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
          {Array.isArray(data) &&
            data.map((destination) => (
              <SwiperSlide key={destination?._id}>
                <Link to={`/destination/${destination?._id}`}>
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
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destination?.image?.secure_url})`,
                      }}
                    >
                      <div className=" bg-opacity-50 h-full max-w-full flex items-center rounded-lg">
                        <div className="text-left text-white p-8">
                          <h3 className="text-3xl font-bold mb-2 text-white fixed top-4">
                            {destination?.name}
                          </h3>
                          {/* <p className="mb-4">
                            A Journey Through Time, Colour And Culture
                          </p> */}

                          <button className="bg-[#007E8F] text-white py-2 px-4 rounded justify-end fixed bottom-20">
                            Explore
                          </button>

                          <h1 className="text-base font-semibold text-gray-200 mb-8 fixed bottom-1">
                            Starting Price
                          </h1>

                          <h1 className="text-xl font-bold text-white fixed bottom-[10px]">
                            ₹ {destination?.startingPrice}
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
          <a href="#" className="text-blue-500 hover:underline">
            Explore All →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
