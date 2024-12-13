import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = `${import.meta.env.VITE_APP_ADMIN_WHATSAPP}`;
  const message = "Hello, I would like to know more about your services!"; // Optional message
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Connect on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;
