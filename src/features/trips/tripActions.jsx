import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";
const localURL = "http://localhost:5000";

const getIndianDestinations = async () => {
  const response = await axios.get(`${backendURL}/api/v1/trips/indian`);

  if (response.data) {
    console.log("Data", response.data);
    return response.data;
  }
};

const getSingleIndianDestination = async (id) => {
  const response = await axios.get(
    `${backendURL}/api/v1/trips/indian/${id}`
  );

  if (response.data) {
    console.log("Data", response.data);
    return response.data;
  }
};

const getSingleInternationalDestination = async (id) => {
  const response = await axios.get(
    `${backendURL}/api/v1/trips/international/${id}`
  );

  if (response.data) {
    console.log("Data", response.data);
    return response.data;
  }
};

const getInternationalDestinations = async () => {
  console.log("Hit International API");
  const response = await axios.get(
    `${backendURL}/api/v1/trips/international`
  );

  if (response.data) {
    console.log("Data", response.data);
    return response.data;
  }
};

export const tripService = {
  getIndianDestinations,
  getInternationalDestinations,
  getSingleIndianDestination,
  getSingleInternationalDestination,
};

// `${backendURL}/api/v1/trips/indian`
