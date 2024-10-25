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

const Home = () => {
  const dispatch = useDispatch();

  const { destinations } = useSelector((state) => state.trip);
  
  const userState = useSelector(state=> state.user);
  console.log(userState, "user state")

  useEffect(()=> {
    dispatch(getAuthUserDetails())
  }, [])
  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

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
      <HotelDetails />
      <FindHotel />
    </div>
  );
};

export default Home;
