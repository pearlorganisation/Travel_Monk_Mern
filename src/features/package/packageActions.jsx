import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";

const getPackages = async () => {
  const response = await axios.get(`${backendURL}/api/v1/packages`);

  if (response.data) {
    console.log("Packages", response.data);
    return response.data;
  }
};

const getSinglePackage = async (id) => {
  const response = await axios.get(`${backendURL}/api/v1/packages/${id}`);

  if (response.data) {
    console.log("Single Package Data", response.data);
    return response.data;
  }
};

export const packagesService = {
  getPackages,
  getSinglePackage,
};

// `${backendURL}/api/v1/trips/indian`
