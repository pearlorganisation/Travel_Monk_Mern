import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";
const localURL = "http://localhost:5000";
const getPackages = async () => {
  const response = await axios.get(`${localURL}/api/v1/packages`);

  if (response.data) {
    console.log("Packages", response.data);
    return response.data;
  }
};

const getSinglePackage = async (id) => {
  const response = await axios.get(`${localURL}/api/v1/packages/${id}`);

  if (response.data) {
    console.log("Single Package Data", response.data);
    return response.data;
  }
};

export const packagesService = {
  getPackages,
  getSinglePackage,
};
