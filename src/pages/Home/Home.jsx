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
import {
  getAllIndianDestinations,
  getAllInternationalDestinations,
} from "../../features/trips/tripsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const indiandestinationState = useSelector(
    (state) => state.trip.indiandestination.data
  );
  const internationalDestinationState = useSelector(
    (state) => state.trip.internationaldestination.data
  );

  useEffect(() => {
    getIndianDestinations();
    getInternationalDestinations();
  }, []);

  const getIndianDestinations = () => {
    dispatch(getAllIndianDestinations());
  };

  const getInternationalDestinations = () => {
    dispatch(getAllInternationalDestinations());
  };

  // console.log("Indian DEstionations", indiandestinationState);
  // console.log("International DEstionations", internationalDestinationState);

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
      <PopularDestination
        data={indiandestinationState ? indiandestinationState : []}
      />
      <PopularItineraries
        data={
          internationalDestinationState ? internationalDestinationState : []
        }
      />
      <Upcoming />
      <Distinguish />
      <GetinTouch />
      <HotelDetails />
      <FindHotel />
    </div>
  );
};

export default Home;
