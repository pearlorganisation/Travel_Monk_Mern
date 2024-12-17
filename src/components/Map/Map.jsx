import { GoogleMap, Marker, useJsApiLoader, DirectionsRenderer } from "@react-google-maps/api";
import React, { useCallback, useMemo, useState, useEffect } from "react";

const containerStyle = {
  width: "1000px",
  height: "400px",
};

const EmbedGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: "AIzaSyCgtfQ3Ys0-OduNM1K2dk1-7mQt5AZ2FgQ",
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const markers = useMemo(() => [
    { lat: 18.5204, lng: 73.8567 },
    { lat: 18.5314, lng: 73.8446 },
    { lat: 18.5642, lng: 73.7769 },
  ], []);

  const center = useMemo(() => {
    if (markers.length > 0) return markers[0];
    return { lat: 18.52043, lng: 73.856743 };
  }, [markers]);

  const onLoad = useCallback((map) => {
    setMap(map);

    if (markers.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
      map.fitBounds(bounds);
    }
  }, [markers]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.google?.maps || markers.length < 2) return;  
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: markers[0],
        destination: markers[markers.length - 1],
        waypoints: markers.slice(1, -1).map((marker) => ({
          location: marker,  
          stopover: true,
        })),
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  }, [isLoaded, markers]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}  
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
       
      {directionsResponse && (
        <DirectionsRenderer
          directions={directionsResponse}
          options={{
            polylineOptions: {
              strokeColor: "red",  
              strokeOpacity: 0.8,
              strokeWeight: 6,
            },
          }}
        />
      )}
     
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default EmbedGoogleMap;


// export default React.memo(EmbedGoogleMap)


/** old  a fallback need*/
//   return (
//     <div>
//       <h1>Our Location</h1>
//       <iframe
//         title="Google Map"
//         src={`https://maps.googleapis.com/maps/api/staticmap?size=600x450&zoom=13&center=34.1526,77.5771&markers=color:red%7C34.1526,77.5771&markers=color:blue%7C34.1646,77.5871&markers=color:green%7C34.1426,77.5671&key=AIzaSyD06jrd6341qvtpfAp7UbzeiagbQLDBuK8
// `}
//         width="600"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//       ></iframe>

//       <img
//         src="https://maps.googleapis.com/maps/api/staticmap?size=600x450&zoom=13&center=34.1526,77.5771&markers=color:red%7C34.1526,77.5771&markers=color:blue%7C34.1646,77.5871&markers=color:green%7C34.1426,77.5671&key=YOUR_API_KEY"
//         alt="Map of Leh with multiple landmarks"
//       />
//     </div>
//   );




const locations = [
  {
    id: 1,
    name: "Dehradun",
    code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.072424594182!2d78.03219111510878!3d30.316494981784732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b80d47f0d9%3A0x131c62a1aee3f5b6!2sDehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1702550518513!5m2!1sen!2sus",
  },
  {
    id: 2,
    name: "Leh",
    code: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0428707129274!2d77.56334811532999!3d34.15258498058096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb4f3b8c4b85%3A0xf3077bb2e203b94d!2sLeh%2C%20Ladakh%20194101!5e0!3m2!1sen!2sin!4v1702551108231!5m2!1sen!2sin",
  },
];