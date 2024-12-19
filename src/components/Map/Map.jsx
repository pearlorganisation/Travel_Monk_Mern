 
// export default MapBoxStaticMap;
import React from "react";

const MapBoxStaticMap = () => {
  const accessToken = "pk.eyJ1IjoibWFuaXNoMTE3IiwiYSI6ImNtNHRqaW45ZjBlazkya3M0ZDJmZWxianAifQ.j_H2ZzKixpmHCbH-vCDzWw"; // Replace with your Mapbox access token

  // Map center and zoom
  const lng = -97.0; // Centered roughly between the cities
  const lat = 31.0;
  const zoom = 5.5; // Zoomed out to see all markers

  // Map size
  const width = 800;
  const height = 400;

  // Map style
  const mapStyle = "streets-v11";

  // Define marker locations with colors and labels
  const markers = [
    { lng: -97.7431, lat: 30.2672, color: "ff0000", label: "A" }, // Austin - Red
    { lng: -96.797, lat: 32.7767, color: "0000ff", label: "B" },  // Dallas - Blue
    { lng: -95.3698, lat: 29.7604, color: "00ff00", label: "C" }, // Houston - Green
  ];

  // Build markers string
  const markerString = markers
    .map(({ lng, lat, color }) => `pin-s+${color}(${lng},${lat})`)
    .join(",");

  // Define route as a polyline by joining coordinates
  const routeCoordinates = markers.map(({ lng, lat }) => `${lng},${lat}`).join(";");
  const route = `path-5+0000FF-0.8(${routeCoordinates})`; // Red polyline with opacity 0.8

  // Static map URL
  const staticMapUrl = `https://api.mapbox.com/styles/v1/mapbox/${mapStyle}/static/${markerString},${route}/${lng},${lat},${zoom}/${width}x${height}?access_token=${accessToken}`;

  console.log("Static Map URL:", staticMapUrl); // Log for debugging

  return (
    <div className="flex justify-center">
      <img src={staticMapUrl} alt="Mapbox Static Map with Markers and Route" />
    </div>
  );
};

export default MapBoxStaticMap;
