import { useParams } from "react-router-dom";
import ChooseRoomType from "./ChooseRoomType";
import Locations from "./Locations";
import Reviews2 from "./Reviews";
import RoomDetails from "./RoomDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleHotel } from "../../features/hotel/hotelSlice";

const HotelDetails = () => {
  const { id } = useParams();

  const { singleHotel } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleHotel(id));
  }, []);

  return (
    <div className="w-full p-6 bg-white">
      <RoomDetails />

      <ChooseRoomType />

      <Reviews2 />

      <Locations />
    </div>
  );
};

export default HotelDetails;
