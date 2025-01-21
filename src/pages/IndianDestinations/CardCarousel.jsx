import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconWithName from "./IconWithName";
import { Link } from "react-router-dom";
import { baseURL } from "../../services/axiosInterceptor";

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
        {data?.map((cardData, i) => (
          <div key={i} className="h-96  w-40 p-2    flex ">
            <Link to={`/packages/${cardData?._id}`}>
              <div className=" h-full relative z-0 w-full">
                <img
                  className="absolute inset-0  rounded-lg z-0 w-full h-full object-cover"
                  src={`${baseURL}/${cardData?.image?.path}`}
                  alt="img"
                />

                <div className=" h-full p-4 rounded-lg  w-full bg-black bg-opacity-50  relative z-20">
                  <div className="h-[60%]">
                    <div className="w-full flex justify-end">
                      <div className="bg-yellow-400 font-semibold w-fit px-2 flex items-center gap-2 rounded-full">
                        Estimated Price {cardData?.startingPrice}{" "}
                      </div>
                    </div>
                  </div>

                  <div className="h-[40%] flex-1 flex-col text-sm text-white">
                    <div className="mb-4">{cardData?.name}</div>
                    <div className="flex flex-col my-2 justify-between gap-2">
                      <IconWithName
                        iconName="https://wanderon.in/assets/images/new-location.svg"
                        label={`${cardData?.duration?.days}D/${cardData?.duration?.nights}N`}
                      />
                      {/* <IconWithName
                        iconName="https://wanderon.in/assets/images/new-calender.svg"
                        label={`${parseDate(
                          cardData?.startDate
                        )} to ${parseDate(cardData?.endDate)}`}
                      /> */}
                    </div>

                    <div className="flex  justify-between">
                      <IconWithName
                        iconName="https://wanderon.in/assets/images/new-location.svg"
                        label={`${cardData?.pickDropPoint?.pickup} - ${cardData?.pickDropPoint?.drop}`}
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
