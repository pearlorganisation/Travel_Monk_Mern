import React from "react";
import HowitWorks from "../../components/HowitWorks";
import PopularDestination from "../../components/PopularDestination";
import PopularItineraries from "../../components/PopularItineraries";
import Upcoming from "../../components/Upcoming";
import Distinguish from "../../components/Distinguish";
import GetinTouch from "../../components/GetinTouch";
import HotelDetails from "../../components/HotelDetails";
import FindHotel from "../../components/FindHotel";

const Home = () => {
  return (
    <div className="">
      <HowitWorks />
      <PopularDestination />
      <PopularItineraries />
      <Upcoming />
      <Distinguish />
      <GetinTouch />
      <HotelDetails />
      <FindHotel />
    </div>
  );
};

export default Home;
