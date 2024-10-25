import { useDispatch, useSelector } from "react-redux";
import {
  getAllActivitiesByDestination,
  getSingleDestination,
} from "../../features/trips/tripActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import TripSection from "./TripSection";

const IndianDestinations = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const singleD = useSelector((state) => state.trip.singleDestination);

  const activities = useSelector((state) => state.trip.activities);

  useEffect(() => {
    dispatch(getSingleDestination(id));
    dispatch(getAllActivitiesByDestination(id));
  }, []);

  return (
    <div>
      <HeroBanner data={singleD?.data} />

      <h1 className="text-3xl font-semibold ml-12">
        {" "}
        About {singleD?.data?.name} Tour Packages{" "}
      </h1>

      <TripSection data={singleD?.data} />

      <h1> Available Packages </h1>
    </div>
  );
};

export default IndianDestinations;
