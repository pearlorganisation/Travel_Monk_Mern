import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";

const getPartners = async () => {
  const response = await axios.get(`${backendURL}/api/v1/partners`);

  if (response.data) {
    console.log("Partners", response.data);
    return response.data;
  }
};

export const partnersService = {
  getPartners,
};
