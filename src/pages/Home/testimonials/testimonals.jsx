// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";

// const testimonials = [
//   {
//     id: 1,
//     name: "Matěj Šolar",
//     image: "src/assets/images/Ellipse 2.png",
//     text: "Thank you for your help with exploring Assam. One week of amazing experiences. I had problems settling detailed plans of the trip, but Travel Monk helped us with all arrangements.",
//   },
//   {
//     id: 2,
//     name: "Raja Gopal Babu",
//     image: "src/assets/images/Ellipse 2 (1).png",
//     text: "We have just finished our Ladakh trip. The itinerary was well-planned and arrangements were excellent. Travel Monk’s Sourabh did an excellent job! Special thanks to our driver.",
//   },
//   {
//     id: 3,
//     name: "Matěj ",
//     image: "src/assets/images/Ellipse 2.png",
//     text: "Thank you for your help with exploring Assam. One week of amazing experiences. I had problems settling detailed plans of the trip, but Travel Monk helped us with all arrangements.",
//   },
//   {
//     id: 4,
//     name: "Raja Gopal",
//     image: "src/assets/images/Ellipse 2 (1).png",
//     text: "We have just finished our Ladakh trip. The itinerary was well-planned and arrangements were excellent. Travel Monk’s Sourabh did an excellent job! Special thanks to our driver.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="bg-pink-500 py-10 mb-8 px-20">
//       {/* Section Title */}
//       <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
//         Testimonials
//       </h2>
//       <div className="relative  flex items-center justify-center">
//         <Swiper
//           slidesPerView={2}
//           spaceBetween={20}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 30 },
//             1024: { slidesPerView: 3, spaceBetween: 25 },
//           }}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//         >
//           <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center px-4  ">
//             <div className="w-full">
//               {testimonials.map((testimonial) => (
//                 <SwiperSlide key={testimonial.id}>
//                   <div className="w-full md:w-1/3 lg:w-[400px] bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300  overflow-hidden">
//                     {/* Testimonial Card Content */}
//                     <div className="flex items-start gap-4 ">
//                       {/* Image */}
//                       <div className="flex-shrink-0 self-center">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-20 h-20 rounded-full border-2  flex  self-center"
//                         />
//                       </div>

//                       {/* Text Content */}
//                       <div>
//                         <h3 className="font-bold text-lg text-gray-800">
//                           {testimonial.name}
//                         </h3>
//                         <p className="text-gray-700 mt-2 leading-relaxed">
//                           {testimonial.text.length > 100
//                             ? `${testimonial.text.substring(0, 100)}...`
//                             : testimonial.text}
//                         </p>
//                         <a
//                           href="https://www.google.com/search?client=safari&rls=en&q=travel+monk+adventures&ie=UTF-8&oe=UTF-8&dlnr=1&sei=4mdNZ9CLMbWH4-EPyYGJ8Ac#dlnr=1&topic=mid:/g/11cmh5569r"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 font-medium hover:underline mt-4"
//                         >
//                           Read more
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </div>
//           </div>
//         </Swiper>

//         <div className="swiper-button-prev absolute hidden lg:!-left-[60px]  bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 md:flex items-center justify-center"></div>

//         {/* Swiper Next Button */}
//         <button className="swiper-button-next absolute hidden lg:!-right-[60px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 md:flex items-center justify-center"></button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Mayukh Sarkar",
    image: "src/assets/images/Ellipse 2.png",
    text: "We had a Zanskar trip with these guys and like always we were delighted by the arrangements. The itinerary and the accommodations were perfectly curated according to our likings. It's sad that I can only give 5 stars, they deserve 100 stars 🙂",
  },
  {
    id: 2,
    name: "harm",
    image: "src/assets/images/Ellipse 2 (1).png",
    text: "A brief summary of my experience with Travel Monk Adventures. This is my honest review. I wanted to go to India for 51 days, starting with a Ladakh portion but then winding with train and bus down the subcontinent, through Delhi, Chhattisgarh, Kerala, and all the way to Kanyakumari. From north to south. This was the biggest solo trip I had ever taken. Add to that that I was carrying medicine that needed refrigerated storage, even in India in June. Sourabh made an itinerary with me, ensuring that the stays - ranging from lakeside tents to hotels with heated pools - all had the necessary facilities, that transportation was reliable and there were appropriate rest days, and that it fit in my budget. This process was collaborative and helpful, responses in this time period were sometimes delayed but never dangerously so.",
  },
  {
    id: 3,
    name: "Roshan Joy",
    image: "src/assets/images/Ellipse 2.png",
    text: "Me and sruthy recently completed a splendid trip to Spiti Valley organized by Travel Monk Adventures. We came to know about travel monk from our friend KK, who went to a ladakh trip last year organized by them. We thank Sourabh verma for his dedication to plan and follow up the trip, and proper guidance.From the outset, travel monk adventures demonstrated professionalism and dedication, ensuring a seamless and enjoyable experience.",
  },
  {
    id: 4,
    name: "Satarupa Chakraborty",
    image: "src/assets/images/Ellipse 2 (1).png",
    text: "Planned an 8 days trip to Ladakh with Travel Monk Adventures and this was my second with them. Starting from preparing our itinerary, which also had some customizations, to arranging our airport pickup, the permits, the stays everything was perfect. The stays were very good and the car provided was in it's best condition. Thanks for making our trip so comfortable!",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-20">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Testimonials
      </h2>
      <div className="relative flex items-center justify-center">
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-yellow-600 min-h-72 max-h-72 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-2"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-700 mt-2 lg:text-base md:text-sm text-xs">
                      {testimonial.text}
                    </p>
                    <a
                      href="https://www.google.com/search?client=safari&rls=en&q=travel+monk+adventures&ie=UTF-8&oe=UTF-8&dlnr=1&sei=4mdNZ9CLMbWH4-EPyYGJ8Ac#dlnr=1&topic=mid:/g/11cmh5569r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline mt-4 block"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white min-h-64 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-2"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-700 mt-2 lg:text-base md:text-sm text-xs line-clamp-4">
                      {testimonial.text}
                    </p>
                    <a
                      href="https://www.google.com/search?client=safari&rls=en&q=travel+monk+adventures&ie=UTF-8&oe=UTF-8&dlnr=1&sei=4mdNZ9CLMbWH4-EPyYGJ8Ac#dlnr=1&topic=mid:/g/11cmh5569r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline mt-4 block"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Previous Button */}
        <button className="swiper-button-prev absolute hidden md:flex left-2 lg:-left-16 bg-[#007E8F] text-white px-4 py-4 rounded-full h-12 w-12 top-1/2 transform -translate-y-1/2 z-10 text-xs font-semibold items-center justify-center hover:scale-110 transition-transform duration-300"></button>

        {/* Swiper Next Button */}
        <button className="swiper-button-next absolute hidden md:flex right-2 lg:-right-16 bg-[#007E8F] text-white px-4 py-4 rounded-full h-12 w-12 top-1/2 transform -translate-y-1/2 z-10 text-xs font-semibold items-center justify-center hover:scale-110 transition-transform duration-300"></button>
      </div>
    </div>
  );
};

export default Testimonials;
