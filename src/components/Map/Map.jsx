import React from "react";

const EmbedGoogleMap = () => {
  return (
    <div>
      <h1>Our Location</h1>
      <iframe
        title="Google Map"
        src={`https://maps.googleapis.com/maps/api/staticmap?size=600x450&zoom=13&center=34.1526,77.5771&markers=color:red%7C34.1526,77.5771&markers=color:blue%7C34.1646,77.5871&markers=color:green%7C34.1426,77.5671&key=AIzaSyD06jrd6341qvtpfAp7UbzeiagbQLDBuK8
`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default EmbedGoogleMap;
