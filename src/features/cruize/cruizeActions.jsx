import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";
const localURL = "http://localhost:5000";

const getCruizes = async () => {
  const response = await axios.get(`${backendURL}/api/v1/cruizes`);

  if (response.data) {
    console.log("Cruizes", response.data);
    return response.data;
  }
};

const getSingleCruize = async (id) => {
  const response = await axios.get(`${backendURL}/api/v1/cruizes/${id}`);

  if (response.data) {
    console.log("Single Cruize Data", response.data);
    return response.data;
  }
};

export const cruizesService = {
  getCruizes,
  getSingleCruize,
};
