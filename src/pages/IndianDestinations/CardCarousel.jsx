import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconWithName from "./IconWithName";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { FaMountainSun } from "react-icons/fa6";
function CardCarousel({ data }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {

    speed: 500,
    slidesToShow: 4, // Default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // For large tablets and smaller desktops
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // For tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For large phones and small tablets
        settings: {
          slidesToShow: 2, // Adjusted for better layout
        },
      },
      {
        breakpoint: 480, // For small phones
        settings: {
          slidesToShow: 1,
          arrows: false, // Optional: Hide arrows for small screens
        },
      },
    ],
  };
  
    

  const parseDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  };

  // Options for formatting

  return (
    <div className="">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {data?.packages?.map((cardData, i) => (
          <div key={i} className="h-96  w-40 p-2    flex flex-col ">
            <Link to={`/packages/${cardData?._id}`}>
              <div className=" h-full relative z-0 w-full">
                <img
                  className="absolute inset-0  rounded-lg z-0 w-full h-full object-cover"
                  src={cardData.image.secure_url}
                  alt="img"
                />

                <div className=" h-full p-4 rounded-lg  w-full bg-black bg-opacity-50  relative z-20">
                  <div className="h-[60%]">
                    <div className="w-full flex justify-end">
                      <div className="bg-white font-semibold w-fit px-2 flex items-center gap-2 rounded-full">
                        {cardData.startingPrice}{" "}
                        <span className="text-sm">onwards</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[40%] flex-1 flex-col text-sm text-white">
                    <div className="mb-4">{cardData.name}</div>
                    <div className=" flex flex-row gap-2 items-center">
                    <FaMountainSun className="text-[#01AFD1] mt-2" size={20} />
                 
                      {`${cardData.duration.days}D/${cardData.duration.nights}N`}
                     </div>
                <div className=" flex flex-row gap-2 items-center">
                  <CgCalendarDates className="text-[#01AFD1] mt-2" size={20} />
                        {`${parseDate(
                          cardData?.startDate
                        )} to ${parseDate(cardData?.endDate)}`}
                  
                    </div>

                    <div className=" flex flex-row gap-2 items-center">
                 <MdLocationOn className="text-[#01AFD1] mt-2"  size={20}/>
                       {`${cardData?.pickDropPoint?.pickup} - ${cardData?.pickDropPoint?.drop}`}
                 
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>

      <div className="flex justify-end gap-5">
        <button
          className="button px-6 py-2 border-2 border-[#2A5D6E] rounded-md"
          onClick={previous}
        >
          Previous
        </button>

        <button
          className="button px-6 py-2 border-2 border-[#2A5D6E] rounded-md"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardCarousel;
