import React from "react";

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

const EmbedGoogleMap = () => {
  return (
    <div>
      <h1>Our Location</h1>
      <iframe
        title="Google Map"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0428707129274!2d77.56334811532999!3d34.15258498058096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb4f3b8c4b85%3A0xf3077bb2e203b94d!2sLeh%2C%20Ladakh%20194101!5e0!3m2!1sen!2sin!4v1702551108231!5m2!1sen!2sin`}
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
