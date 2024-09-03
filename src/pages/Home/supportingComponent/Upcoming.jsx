import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

const Upcoming = () => {
  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center min-h-[15rem]  border">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-6 ">Join Upcoming Group Trips</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              January
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              February
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              March
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              April
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              May
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              June
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              July
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              August
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4 py-2">
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              September
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              October
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              November
            </div>
            <div class="px-4 py-2 border rounded-full text-gray-700 border-gray-400 hover:bg-gray-200">
              December
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
