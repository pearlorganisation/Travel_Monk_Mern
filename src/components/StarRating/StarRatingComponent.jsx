import React from "react";

// StarRating Component
const StarRating = ({ rating }) => {
  // Ensure rating is a number between 0 and 5
  const stars = Math.min(Math.max(rating, 0), 5);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ color: index < stars ? "#FFD700" : "#C0C0C0" }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: "8px" }}>{rating} / 5</span>
    </div>
  );
};

export default StarRating;
