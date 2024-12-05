import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Distinguish = () => {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 py-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
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
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/simplotel/image/upload/x_277,y_0,w_1366,h_768,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/symphony-resorts/beach_on_Andaman_and_Nicobar_islands"
                          alt="Andaman & Nicobar Islands"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Estimate on request
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        Andaman & Nicobar
                      </h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">4.3</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">7 days stay</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Clock_Tower%2C_at_Har-ki-Pauri%2C_Haridwar.jpg/1200px-Clock_Tower%2C_at_Har-ki-Pauri%2C_Haridwar.jpg"
                          alt="Haridwar"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Estimate on request
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Haridwar</h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">4.3</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">7 days stay</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://static.toiimg.com/thumb/msid-89747605,width-748,height-499,resizemode=4,imgsize-206002/.jpg"
                          alt="Kerala"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Estimate on request
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Kerala</h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">4.3</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">7 days stay</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://static.toiimg.com/thumb/msid-89747605,width-748,height-499,resizemode=4,imgsize-206002/.jpg"
                          alt="Kerala"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Estimate on request
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Kerala</h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">4.3</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">7 days stay</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://imgcld.yatra.com/ytimages/image/upload/v1466686656/pahalgam_1466686652.jpg"
                          alt="Jammu and Kashmir"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Estimate on request
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        Jammu and Kashmir
                      </h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">4.3</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">7 days stay</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/simplotel/image/upload/x_277,y_0,w_1366,h_768,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/symphony-resorts/beach_on_Andaman_and_Nicobar_islands"
                          alt="Andaman & Nicobar Islands"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Estimate on request
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        Andaman & Nicobar
                      </h3>
                      <div className="flex items-center mt-2">
                        <svg
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.442a1 1 0 00.95.69h3.618c.969 0 1.371 1.24.588 1.81l-2.926 2.124a1 1 0 00-.364 1.118l1.12 3.442c.3.92-.755 1.688-1.538 1.118L10 13.011l-2.926 2.124c-.783.57-1.838-.198-1.538-1.118l1.12-3.442a1 1 0 00-.364-1.118L3.366 8.869c-.783-.57-.381-1.81.588-1.81h3.618a1 1 0 00.95-.69l1.12-3.442z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">4.3</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">7 days stay</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-right mt-4 py-10">
              <a href="#" className="text-blue-500 hover:underline">
                Explore All →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distinguish;
