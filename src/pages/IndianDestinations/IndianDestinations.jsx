import { useDispatch, useSelector } from "react-redux";
import {
  getAllActivitiesByDestination,
  getSingleDestination,
} from "../../features/trips/tripActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import TripSection from "./TripSection";
import { getPacakgesByDestination } from "../../features/destination/destinationActions";

const IndianDestinations = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // const { singleDestination, isSuccess } = useSelector((state) => state.trip);

  const { packagesByDestination } = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch(getPacakgesByDestination(id));
  }, []);

  console.log("Package by D", packagesByDestination);

  return (
    <div>
      <HeroBanner data={packagesByDestination?.data} />

      <h1 className="text-3xl font-semibold ml-12">
        {" "}
        About {packagesByDestination?.data[0]?.packageDestination?.name} Tour
        Packages{" "}
      </h1>

      <TripSection data={packagesByDestination?.data} />

      <h1> Available Packages </h1>
    </div>
  );
};

export default IndianDestinations;
