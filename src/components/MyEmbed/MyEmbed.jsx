import React from "react";

const GoogleMapsEmbed = () => {
  const apiKey = "AIzaSyAex6tUbTsAgUdzxnZyRWvdVjGQG0QxAkI"; // Replace with your actual Google Maps API key
  const origin = "Leh, India";
  const destination = "Leh, India";
  const waypoints = ["Nubra, India", "Pangong, India"];

  // Construct waypoints string
  const waypointsStr = waypoints.join("|");

  const mapURL = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(
    destination
  )}&waypoints=${encodeURIComponent(waypointsStr)}`;

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
