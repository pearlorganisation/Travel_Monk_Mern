import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";

export const searchDestination = async (name) => {
  const response = await axios.get(
    `${backendURL}/api/v1/destinations/search?destination=${name}`
  );

  if (response.data) {
    console.log("Search result", response.data);
    return response.data;
  }
};

export const destinationsService = {
  searchDestination,
};
