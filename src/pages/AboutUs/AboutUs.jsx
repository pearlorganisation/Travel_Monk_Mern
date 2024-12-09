import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-full h-96 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 sm:px-12 md:px-20 lg:px-48 py-6">
        <div className="flex flex-col justify-center items-center mt-5 mb-3">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-3 mt-6 text-center">
            What do we stand for and how did we reach to it?
          </h1>
          {/* Paragraph */}
          <p className="w-full sm:w-[90%] lg:w-[80%] text-wrap text-justify text-gray-700 mt-6 leading-relaxed">
            Remember the days when we used to fill our slam-books with career
            aspirations like scientist, teacher and doctor? Nobody at that time
            thought there could’ve been a career in Travelling, let alone being
            a travelpreneur! But as life happens, you understand that a career
            could be anything where you can be a problem-solver for the society.
            <br />
            <br />
            And that’s how a few engineers from NIT Kurukshetra found that the
            travel industry in India needed a fresh burst of young energy! The
            need of the hour was to convert a dispersed agent-based model to a
            more friendly, transparent, and accessible community for Indian
            travellers, and hence WanderOn. Let’s have a closer look at the
            hustlers who’re on a mission to stir up people’s life with memorable
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
