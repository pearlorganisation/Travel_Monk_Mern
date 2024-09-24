import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";
const localURL = "http://localhost:5000";

const getHotels = async () => {
  const response = await axios.get(`http://localhost:5000/api/v1/hotels`);

  if (response.data) {
    console.log("Hotels", response.data);
    return response.data;
  }
};

const getSingleHotel = async (id) => {
  const response = await axios.get(`http://localhost:5000/api/v1/hotels/${id}`);

  if (response.data) {
    console.log("Single Hotel Data", response.data);
    return response.data;
  }
};

export const hotelsService = {
  getHotels,
  getSingleHotel,
};
