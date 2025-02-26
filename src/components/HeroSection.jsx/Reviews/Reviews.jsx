import React from "react";
import GoogleIcon from "/icons/googleicon.svg";
import TripAdvisorIcon from "/icons/tripadvisorlogo.svg";
import FacebookIcon from "/icons/facebookicon.svg";
import InstagramIcon from "/icons/instagramicon.svg";

const Reviews = () => {
  return (
    <div className="bg-white py-0">
      <div
        className="flex justify-center gap-10 p-4 w-full rounded-lg shadow-md"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        {[
          {
            icon: GoogleIcon,
            alt: "google",
            link: "https://www.google.com/search?client=safari&rls=en&q=travel+monk+adventures&ie=UTF-8&oe=UTF-8&dlnr=1&sei=4mdNZ9CLMbWH4-EPyYGJ8Ac#dlnr=1&topic=mid:/g/11cmh5569r",
            reviews: "(115) reviews",
          },
          {
            icon: TripAdvisorIcon,
            alt: "tripadvisor",
            link: "https://www.tripadvisor.in/Attraction_Review-g319724-d23299649-Reviews-Travel_Monk_Adventures-Dharamsala_Kangra_District_Himachal_Pradesh.html",
            reviews: "(3) reviews",
          },
          {
            icon: FacebookIcon,
            alt: "facebook",
            link: "https://www.facebook.com/imtravelmonk",
            reviews: "(80) reviews",
          },
          {
            icon: InstagramIcon,
            alt: "instagram",
            link: "https://www.instagram.com/imtravelmonk/",
            reviews: "(96) reviews",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => window.open(item.link, "_blank")}
          >
            <div className="flex flex-row">
              <img src={item.icon} alt={item.alt} width={80} height={80} />
              <p className="text-sm font-medium mt-1 flex items-center justify-center">{item.reviews}</p>
            </div>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
