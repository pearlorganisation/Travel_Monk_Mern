import React from "react";
import MyImage from "../../assets/images/tm_about_us_image.jpg"

 
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
 

const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-full h-96 justify-start items-center flex">
          <h1 className="text-4xl text-white font-bold ml-32">About us</h1>
        </div>
      </div>

   
      <div>
        <div className="flex flex-col mx-48 justify-center items-center mt-5 mb-3">
          <h1 className="text-3xl font-semibold pb-3 mt-6">
            Our Mission
          </h1>
          <div className="w-[80%] text-wrap text-justify text-gray-700">
            <p className="text-center mt-3 mb-3">At <span className="text-[#007E8F]">Travel Monk</span>, we are dedicated to transforming every journey into an unforgettable adventure, tailored uniquely for each traveler.
             </p>
            <p className="text-center mt-3 mb-3">
              Our mission is to curate personalized itineraries that reflect the dreams and desires of every customer —be it solo, family, couple, or a group of friends.
            </p>
            
            <p className="text-center mt-3 mb-3">
              <span className="text-[#007E8F]">We are here to help you create best memories</span> 😊
            </p>
            <p className="text-center mt-3 mb-3">
              We believe that every traveler deserves a personal touch and best-in-class experience throughout their journey. Our team is committed to ensuring that each trip not only meets but exceeds expectations, making memories that last a lifetime.
            </p>
 
          </div>
        </div>

        <div>
          <h1 className="text-center font-bold text-3xl">Why Choose Travel Monk?</h1>
          <div className="flex justify-center items-center flex-row">
           <div>
              <img src={MyImage} className="w-72 h-72" alt="1234" />
           </div>
           <div>
            Hell2
              <div className="card flex justify-content-center">
                <Button label="Check" icon="pi pi-check" />
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
