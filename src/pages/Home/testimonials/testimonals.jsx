import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Matěj Šolar",
    image: "src/assets/images/Ellipse 2.png",
    text: "Thank you for your help with exploring Assam. One week of amazing experiences. I had problems settling detailed plans of the trip, but Travel Monk helped us with all arrangements.",
  },
  {
    id: 2,
    name: "Raja Gopal Babu",
    image: "src/assets/images/Ellipse 2 (1).png",
    text: "We have just finished our Ladakh trip. The itinerary was well-planned and arrangements were excellent. Travel Monk’s Sourabh did an excellent job! Special thanks to our driver.",
  },
  {
    id: 3,
    name: "Matěj ",
    image: "src/assets/images/Ellipse 2.png",
    text: "Thank you for your help with exploring Assam. One week of amazing experiences. I had problems settling detailed plans of the trip, but Travel Monk helped us with all arrangements.",
  },
  {
    id: 4,
    name: "Raja Gopal",
    image: "src/assets/images/Ellipse 2 (1).png",
    text: "We have just finished our Ladakh trip. The itinerary was well-planned and arrangements were excellent. Travel Monk’s Sourabh did an excellent job! Special thanks to our driver.",
  },
  
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 mb-8 px-10">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Testimonials
      </h2>
<div className="relative">
<Swiper
        slidesPerView={2}
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
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center  px-4  ">
         <div className="w-[60%]">
         {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="w-full md:w-1/3 lg:w-[400px] bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300  overflow-hidden">
                {/* Testimonial Card Content */}
                <div className="flex items-start gap-4 ">
                  {/* Image */}
                  <div className="flex-shrink-0 self-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-2  flex  self-center"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      {testimonial.text.length > 100
                        ? `${testimonial.text.substring(0, 100)}...`
                        : testimonial.text}
                    </p>
                    <a
                  href="https://www.google.com/search?client=safari&rls=en&q=travel+monk+adventures&ie=UTF-8&oe=UTF-8&dlnr=1&sei=4mdNZ9CLMbWH4-EPyYGJ8Ac#dlnr=1&topic=mid:/g/11cmh5569r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline mt-4"
                >
                  Read more
                </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
         </div>
        </div>
      </Swiper>
          
      <div className="swiper-button-prev absolute lg:!-left-[60px]  bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></div>

{/* Swiper Next Button */}
<button className="swiper-button-next absolute lg:!-right-[60px] bg-[#007E8F] !text-[#ffff] !px-8 !py-8 !rounded-full !h-6 !w-6 !mt-4 top-1/2 transform -translate-y-1/2 z-10 !text-xs !font-semibold scale-50 flex items-center justify-center"></button>

</div>

    </div>
  );
};

export default Testimonials;
