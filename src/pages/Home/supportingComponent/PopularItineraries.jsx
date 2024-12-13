// // import React from "react";

// // const PopularDestination = () => {
// //   return (
// //     <>
// //       {" "}
// //       <div className="">
// //         <div className="bg-[#f5f5f5] p-5">
// //           <h1 className="text-3xl font-semibold text-center p-5">
// //             Most Popular Destination{" "}
// //           </h1>

// //           <div className="container max-w-6xl font-medium mx-auto relative">
// //             <div className="z-50 h-[20rem]   relative">
// //               <img
// //                 src="field1.jpg"
// //                 className="size-10 -z-10 absolute top-0 h-full w-full"
// //               />
// //               <div className="bg-gradient-to-tr  flex justify-start items-center  from-black/30 to-black/30 w-full h-full">
// //                 <div className="z-30">
// //                   <h1>Explore India</h1>
// //                   <p>A Journey Through Time, Colour And Culture</p>
// //                   <button className="btn bg-blue-400">Explore</button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default PopularDestination;
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.min.css";

// // const PopularDestinations = () => {
// //   return (
// //     <div className="bg-gray-100 p-8">
// //       <h2 className="text-center text-2xl font-bold mb-6">
// //         Most Popular Destinations
// //       </h2>

// //       <div className="relative">
// //         <div
// //           className="bg-cover bg-center h-64 rounded-lg shadow-lg mb-4"
// //           style={{
// //             backgroundImage: 'url("https://via.placeholder.com/800x400")',
// //           }}
// //         >
// //           <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center rounded-lg">
// //             <div className="text-center text-white">
// //               <h3 className="text-4xl font-bold mb-2">Explore India</h3>
// //               <p className="mb-4">A Journey Through Time, Colour And Culture</p>
// //               <button className="bg-white text-black py-2 px-4 rounded">
// //                 Explore
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <Swiper
// //           spaceBetween={16}
// //           slidesPerView={1}
// //           breakpoints={{
// //             640: {
// //               slidesPerView: 2,
// //             },
// //             768: {
// //               slidesPerView: 3,
// //             },
// //             1024: {
// //               slidesPerView: 4,
// //             },
// //           }}
// //         >
// //           <SwiperSlide>
// //             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //               <img
// //                 className="w-full h-32 sm:h-48 object-cover"
// //                 src="https://via.placeholder.com/400x300"
// //                 alt="Kashmir"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold">Kashmir</h3>
// //                 <p className="text-gray-600">Starting Price Rs. 21,999/-</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //           <SwiperSlide>
// //             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //               <img
// //                 className="w-full h-32 sm:h-48 object-cover"
// //                 src="https://via.placeholder.com/400x300"
// //                 alt="Ladakh"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold">Ladakh</h3>
// //                 <p className="text-gray-600">Starting Price Rs. 21,999/-</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //           <SwiperSlide>
// //             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //               <img
// //                 className="w-full h-32 sm:h-48 object-cover"
// //                 src="https://via.placeholder.com/400x300"
// //                 alt="Spiti Valley"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold">Spiti Valley</h3>
// //                 <p className="text-gray-600">Starting Price Rs. 21,999/-</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //           <SwiperSlide>
// //             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //               <img
// //                 className="w-full h-32 sm:h-48 object-cover"
// //                 src="https://via.placeholder.com/400x300"
// //                 alt="Assam"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold">Assam</h3>
// //                 <p className="text-gray-600">Starting Price Rs. 21,999/-</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //           <SwiperSlide>
// //             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //               <img
// //                 className="w-full h-32 sm:h-48 object-cover"
// //                 src="https://via.placeholder.com/400x300"
// //                 alt="Kerala"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold">Kerala</h3>
// //                 <p className="text-gray-600">Starting Price Rs. 21,999/-</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         </Swiper>

// //         <div className="text-right mt-4">
// //           <a href="#" className="text-blue-500 hover:underline">
// //             Explore All →
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PopularDestinations;
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";
// const PopularItineraries = ({ data }) => {
//   return (
//     <>
//       <div className="bg-[#f5f5f5]">
//         <div className="contianer mx-auto max-w-6xl">
//           <h2 class="text-center text-2xl font-bold mb-6">
//             Popular International Destinations
//           </h2>

//           <div class="flex flex-col gap-4">
//             {/* First Section: Explore Cards */}
//             <div class="flex flex-row gap-4">
//               {/* Card 1 */}
//               <div
//                 className="bg-cover bg-center h-64 rounded-lg shadow-lg mb-4"
//                 style={{
//                   backgroundImage: "url('world.jpg')",
//                 }}
//               >
//                 <div class="bg-black bg-opacity-50 h-full w-full flex items-center rounded-lg">
//                   <div class="text-left text-white p-8">
//                     <h3 class="text-4xl font-bold mb-2">Explore the world</h3>
//                     <p class="mb-4">
//                       A Journey Through Time, Colour And Culture
//                     </p>
//                     <button class="bg-white text-black py-2 px-4 rounded">
//                       Explore
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Card 2 */}
//               <div
//                 className="bg-cover bg-center h-64 rounded-lg shadow-lg mb-4"
//                 style={{
//                   backgroundImage: "url('world.jpg')",
//                 }}
//               >
//                 <div class="bg-black bg-opacity-50 h-full w-full flex items-center rounded-lg">
//                   <div class="text-left text-white p-8">
//                     <h3 class="text-4xl font-bold mb-2">Explore the world</h3>
//                     <p class="mb-4">
//                       A Journey Through Time, Colour And Culture
//                     </p>
//                     <button class="bg-white text-black py-2 px-4 rounded">
//                       Explore
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Card 3 */}
//               <div
//                 className="bg-cover bg-center h-64 rounded-lg shadow-lg mb-4"
//                 style={{
//                   backgroundImage: "url('world.jpg')",
//                 }}
//               >
//                 <div class="bg-black bg-opacity-50 h-full w-full flex items-center rounded-lg">
//                   <div class="text-left text-white p-8">
//                     <h3 class="text-4xl font-bold mb-2">Explore the world</h3>
//                     <p class="mb-4">
//                       A Journey Through Time, Colour And Culture
//                     </p>
//                     <button class="bg-white text-black py-2 px-4 rounded">
//                       Explore
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Second Section: Swiper Carousel */}
//             <div class="flex overflow-x-auto space-x-4 py-4">
//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 pagination={{
//                   clickable: true,
//                 }}
//                 breakpoints={{
//                   640: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                   },
//                   768: {
//                     slidesPerView: 4,
//                     spaceBetween: 40,
//                   },
//                   1024: {
//                     slidesPerView: 5,
//                     spaceBetween: 50,
//                   },
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper"
//               >
//                 {Array.isArray(data) &&
//                   data?.map((destination) => (
//                     <SwiperSlide key={destination._id}>
//                       <Link to={`/destination/${destination?._id}`}>
//                         <div class="max-w-xs mx-auto relative rounded-lg overflow-hidden shadow-lg">
//                           <img
//                             class="w-full h-56 object-cover"
//                             src={destination.image.secure_url}
//                             alt={destination.name}
//                           />
//                           <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full">
//                             <h2 class="text-3xl text-white font-bold">
//                               {destination.name}
//                             </h2>
//                             <p class="text-white">
//                               Starting Price Rs. {destination.startingPrice}/-
//                             </p>
//                           </div>
//                         </div>
//                       </Link>
//                     </SwiperSlide>
//                   ))}
//               </Swiper>
//             </div>

//             {/* Third Section: Explore All Link */}
//             <div class="text-right mt-2 mb-4">
//               <a href="#" class="text-blue-500 hover:underline">
//                 Explore All →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PopularItineraries;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const PopularItineraries = ({ data }) => {
  return (
    <div className="bg-[#f5f5f5] py-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-start text-2xl font-bold mb-6">
          Most Popular International Destinations
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
                            Estimated Starting Price
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

export default PopularItineraries;
