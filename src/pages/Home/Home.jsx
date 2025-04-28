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
import AnimatedImageTabs from "../../components/AnimatedTabs/AnimatedTabs";
import useScrollToTop from "../../hooks/scrollTop";

const Home = () => {
  useScrollToTop()
  const navigate = useNavigate();
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { popular } = useSelector((state) => state.destination);

  const { bestHotels } = useSelector((state) => state.hotels);

  const userState = useSelector((state) => state.user);

  console.log(popular?.data, "popular destination names");

  console.log(bestHotels, "Best Hotels");

  useEffect(() => {
    localStorage.removeItem("packageDetails");
  }, []);
  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getAuthUserDetails());
    }
  }, [dispatch]);

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
  console.log("internationalData: ", internationalData);
  return (
    <div className="relative">
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
      <div><PopularDestination data={indianData ? indianData : []} /></div>
      <div> {internationalData?.length > 0 && (
        <PopularItineraries data={internationalData ? internationalData : []} />
      )}</div>
      

      <div
        className="flex items-center absolute justify-end px-20 mb-6"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000, // Ensures it appears above other elements
        }}
      >
        <WhatsAppLogo />
      </div>

      <Upcoming />
      <div>      <Distinguish hotels={bestHotels?.data} />
</div>
       <ChoseTravelMonkSec />
      <Testimonials />
      <GetinTouch />

      {/* <HotelDetails />
      <FindHotel /> */}
    </div>
  );
};

export default Home;
