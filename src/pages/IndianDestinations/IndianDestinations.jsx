import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import TripSection from "./TripSection";
import { getPacakgesByDestination } from "../../features/destination/destinationActions";

const IndianDestinations = () => {
  const { id } = useParams();

  console.log(id, "destination ID");
  const dispatch = useDispatch();

  // const { singleDestination, isSuccess } = useSelector((state) => state.trip);

  const { packagesByDestination, isLoading, message } = useSelector(
    (state) => state.destination
  );

  useEffect(() => {
    dispatch(getPacakgesByDestination(id));
  }, []);

  console.log("Package by D", packagesByDestination);

  console.log("Message", message);

  return (
    <div>
      {isLoading ? (
        <h1> Loading .....</h1>
      ) : (
        <div>
          {message != "" ? (
            <div className="flex items-center justify-center w-full mt-20 mb-20">
              <h1 className="font-bold text-4xl">
                No Packages Found For this Destination
              </h1>
            </div>
          ) : (
            <div>
              {Array.isArray(packagesByDestination?.data) &&
                packagesByDestination.success && (
                  <div>
                    <HeroBanner data={packagesByDestination?.data} />

                    <h1 className="text-3xl font-semibold ml-12">
                      {" "}
                      About{" "}
                      {
                        packagesByDestination?.data[0]?.packageDestination?.name
                      }{" "}
                      Tour Packages{" "}
                    </h1>

                    <TripSection data={packagesByDestination?.data} />

                    <h1> Available Packages </h1>
                  </div>
                )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndianDestinations;
