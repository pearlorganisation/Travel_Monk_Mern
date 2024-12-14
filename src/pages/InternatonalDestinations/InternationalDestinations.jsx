import { useDispatch, useSelector } from "react-redux";
import { getSingleDestination } from "../../features/trips/tripActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const InternationalDestinations = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleDestination } = useSelector((state) => state.trip);

  console.log(singleDestination?.data, "Single Desgdfg");

  useEffect(() => {
    dispatch(getSingleDestination(id));
  }, []);

  return (
    <div>
      <img
        src={singleDestination?.data?.banner?.secure_url}
        className="w-full h-72"
      />
      <h1> Name : {singleDestination?.data?.name} </h1>
      <h1> Starting Price : {singleDestination?.data?.startingPrice} </h1>

      <h1> Available Packages </h1>
    </div>
  );
};

export default InternationalDestinations;
