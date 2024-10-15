import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconWithName from "./IconWithName";
import { Link } from "react-router-dom";

function CardCarousel({ data }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {data?.packages?.map((cardData, i) => (
          <div key={i} className="h-96  w-40 p-2    flex ">
            <Link to={`/packages/${cardData?._id}`}>
              <div className=" h-full relative z-0 w-full">
                <img
                  className="absolute inset-0  rounded-lg z-0 w-full h-full object-cover"
                  src={cardData.image.secure_url}
                  alt="img"
                />

                <div className=" h-full p-4 rounded-lg  w-full bg-black bg-opacity-50  relative z-20">
                  <div className="h-[70%]">
                    <div className="w-full flex justify-end">
                      <div className="bg-yellow-400 font-semibold w-fit px-2 flex items-center gap-2 rounded-full">
                        {cardData.price}{" "}
                        <span className="text-sm">onwards</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[30%] flex-1 text-sm text-white">
                    <div className="mb-4">{cardData.name}</div>
                    <div className="flex my-2 justify-between">
                      <IconWithName
                        iconName="ri-time-fill"
                        label={`${cardData.duration.days}D/${cardData.duration.nights}N`}
                      />
                      <IconWithName
                        iconName="ri-calendar-2-line"
                        label={cardData?.date}
                      />
                    </div>

                    <div className="flex  justify-between">
                      <IconWithName
                        iconName="ri-map-pin-2-fill"
                        label={cardData?.location}
                      />
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
