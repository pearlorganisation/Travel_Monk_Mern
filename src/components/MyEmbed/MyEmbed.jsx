import React from "react";
const GoogleMapsEmbed = () => {
  const apiKey = "AIzaSyCgtfQ3Ys0-OduNM1K2dk1-7mQt5AZ2FgQ"; // Replace with your actual Google Maps API key

  // Coordinates for origin, destination, and waypoints
  const origin = "34.1526,77.5770"; // Leh
  const destination = "34.1526,77.5770"; // Leh
  const waypoints = [
    "34.2431,77.5750", // Khardung La
    "34.6621,77.4573", // Nubra Valley
    "34.0513,78.4508", // Pangong Lake
    "33.8818,78.2639", // Tso Moriri
  ];

  // Construct waypoints string
  const waypointsStr = waypoints.join("|");

  // Generate map URL
  const mapURL = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(
    destination
  )}&waypoints=${encodeURIComponent(waypointsStr)}&mode=driving`;

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <iframe
        title="Google Maps Directions"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapURL}
        allowFullScreen
      ></iframe>
    </div>
  );
};

 

 

export default GoogleMapsEmbed;
