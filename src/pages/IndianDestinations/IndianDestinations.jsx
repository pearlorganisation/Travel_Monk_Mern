import { useDispatch, useSelector } from "react-redux";
import {
  getAllIndianDestinations,
  getSingleIndianDesstination,
} from "../../features/trips/tripsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import TripSection from "./TripSection";

const IndianDestinations = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.trip.singleDestination);

  useEffect(() => {
    getIndianDestination();
  }, []);

  const getIndianDestination = () => {
    dispatch(getSingleIndianDesstination(id));
  };

  return (
    <div>
      <HeroBanner data={data} />

      <h1 className="text-3xl font-semibold ml-12">
        {" "}
        About {data?.name} Tour Packages{" "}
      </h1>

      <TripSection data={data} />

      <h1> Available Packages </h1>
    </div>
  );
};

export default IndianDestinations;

{
  /*  {data?.packages.map((mypackage) => (
    <div key={mypackage._id} className="">
      <h1>Destination : {mypackage.destination}</h1>
      <h3>
        Duration : {mypackage.duration.nights} N / {mypackage.duration.days}{" "}
        D
      </h3>

      <div className="">
        <h1>Exclusions </h1>

        {mypackage?.exclusions.map((exclusion) => (
          <h1 className="ml-5"> : {exclusion}</h1>
        ))}
      </div>

      <div className="mt-4">
        <h1> Inclusions </h1>

        {mypackage?.inclusions?.map((inclusion) => (
          <h1 className="ml-5"> : {inclusion}</h1>
        ))}
      </div>
    </div>
  ))}*/
}
