import React from "react";

const EmbedGoogleMap = () => {
  return (
    <div>
      <h1>Our Location</h1>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0428707129274!2d77.56334811532999!3d34.15258498058096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb4f3b8c4b85%3A0xf3077bb2e203b94d!2sLeh%2C%20Ladakh%20194101!5e0!3m2!1sen!2sin!4v1702551108231!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* <img
        src="https://maps.googleapis.com/maps/api/staticmap?size=600x450&zoom=13&center=34.1526,77.5771&markers=color:red%7C34.1526,77.5771&markers=color:blue%7C34.1646,77.5871&markers=color:green%7C34.1426,77.5671&key=AIzaSyAex6tUbTsAgUdzxnZyRWvdVjGQG0QxAkI"
        alt="Map of Leh with multiple landmarks"
      /> */}
    </div>
  );
};

export default EmbedGoogleMap;
