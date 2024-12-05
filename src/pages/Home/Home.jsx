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
<<<<<<<<< Temporary merge branch 1
import { getAllDestinationNames, getPopularDestination } from "../../features/destination/destinationActions";
=========
// import { getAllDestinationNames } from "../../features/destination/destinationActions";
>>>>>>>>> Temporary merge branch 2

const Home = () => {
  const dispatch = useDispatch();

  const { destinations } = useSelector((state) => state.trip);
<<<<<<<<< Temporary merge branch 1
  const { popular } = useSelector((state) => state.destination);
=========
  // const { destinationNames } = useSelector((state) => state.destination);
>>>>>>>>> Temporary merge branch 2

  const userState = useSelector((state) => state.user);
  console.log(userState, "user state");

<<<<<<<<< Temporary merge branch 1
  console.log(popular, "destination names");
=========
  // console.log(destinationNames?.destinations, "destination names");
>>>>>>>>> Temporary merge branch 2

  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, []);
  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

<<<<<<<<< Temporary merge branch 1
  useEffect(() => {
    dispatch(getPopularDestination());
  }, []);
=========
  // useEffect(() => {
  //   dispatch(getAllDestinationNames());
  // }, []);
>>>>>>>>> Temporary merge branch 2

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
      {/* <Upcoming />
      <Distinguish />
      <GetinTouch /> */}
      {/* <HotelDetails />
      <FindHotel /> */}
    </div>
  );
};

export default Home;
