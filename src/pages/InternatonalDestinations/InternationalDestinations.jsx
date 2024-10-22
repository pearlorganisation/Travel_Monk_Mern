import { useDispatch, useSelector } from "react-redux";
import { getSingleDestination } from "../../features/trips/tripActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const InternationalDestinations = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.trip.singleDestination);

  console.log(data, "Single Desgdfg");

  useEffect(() => {
    dispatch(getSingleDestination(id));
  }, []);

  return (
    <div>
      <img src={data?.banner?.secure_url} className="w-full h-72" />
      <h1> Name : {data?.name} </h1>
      <h1> Starting Price : {data?.startingPrice} </h1>

      <h1> Available Packages </h1>
    </div>
  );
};

export default InternationalDestinations;

{
  /* {data?.packages.map((mypackage) => (
    <div key={mypackage._id} className="">
      <h1>Destination : {mypackage.destination}</h1>
      <h3>
        Duration : {mypackage.duration.nights} N / {mypackage.duration.days}
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
