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
// import { getAllDestinationNames } from "../../features/destination/destinationActions";

const Home = () => {
  const dispatch = useDispatch();

  const { destinations } = useSelector((state) => state.trip);
  // const { destinationNames } = useSelector((state) => state.destination);

  const userState = useSelector((state) => state.user);
  console.log(userState, "user state");

  // console.log(destinationNames?.destinations, "destination names");

  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, []);
  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

  // useEffect(() => {
  //   dispatch(getAllDestinationNames());
  // }, []);

  const indianData = destinations?.data?.filter(
    (data) => data.type == "Indian"
  );
  const internationalData = destinations?.data?.filter(
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
      <Upcoming />
      <Distinguish />
      <GetinTouch />
      {/* <HotelDetails />
      <FindHotel /> */}
    </div>
  );
};

export default Home;
