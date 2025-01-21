import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection.jsx/HeroSection";
import Distinguish from "./supportingComponent/Distinguish";
import HowitWorks from "./supportingComponent/HowitWorks";
import PopularDestination from "./supportingComponent/PopularDestination";
import PopularItineraries from "./supportingComponent/PopularItineraries";
import Upcoming from "./supportingComponent/Upcoming";
import GetinTouch from "./supportingComponent/GetinTouch";
import HotelDetails from "./supportingComponent/HotelDetails";
import FindHotel from "./supportingComponent/FindHotel";
import Reviews from "../../components/HeroSection.jsx/Reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations } from "../../features/trips/tripActions";
import { getAuthUserDetails } from "../../features/user/userActions";
import { getPopularDestination } from "../../features/destination/destinationActions";
import WhatsAppLogo from "../../components/Whatsapp/WhatsLogo";

import { useNavigate } from "react-router-dom";
import Roadmap from "../../components/TimelineComponent/TimelineComponent";
import GoogleMapsEmbed from "../../components/MyEmbed/MyEmbed";
import { getBestHotels } from "../../features/hotel/hotelActions";
import ChoseTravelMonkSec from "../../components/chooseTravelMonk/choseTravelMonk";
import Testimonials from "./testimonials/testimonals";

const Home = () => {
  const navigate = useNavigate();

  // if (localStorage.getItem("packageDetails")) {
  //   navigate("/full-customize-package-enquiry");
  // }

  const dispatch = useDispatch();

  const { popular } = useSelector((state) => state.destination);

  const { bestHotels } = useSelector((state) => state.hotels);

  const userState = useSelector((state) => state.user);

  console.log(popular?.data, "popular destination names");

  console.log(bestHotels, "Best Hotels");

  // useEffect(() => {
  //   dispatch(getAuthUserDetails());
  // }, []);

  useEffect(() => {
    dispatch(getPopularDestination());
  }, []);

  useEffect(() => {
    dispatch(getBestHotels());
  }, []);

  const indianData = popular?.data?.filter((data) => data.type == "Indian");
  const internationalData = popular?.data?.filter(
    (data) => data.type == "International"
  );

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HeroSection />
      </div>
      <Reviews />
      <HowitWorks />
      <PopularDestination data={indianData ? indianData : []} />
      <PopularItineraries data={internationalData ? internationalData : []} />

      <div className="flex items-center justify-end px-20 mb-6">
        <WhatsAppLogo />
      </div>

      <Upcoming />
      <Distinguish hotels={bestHotels?.data} />
      <ChoseTravelMonkSec />
      <Testimonials />
      <GetinTouch />

      {/* <HotelDetails />
      <FindHotel /> */}
    </div>
  );
};

export default Home;
