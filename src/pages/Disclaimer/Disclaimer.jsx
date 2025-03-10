import React from "react";

const Disclaimer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-full h-96 justify-center items-center flex">
          <h1 className="text-4xl text-white font-bold">Disclaimer</h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col mx-8  mt-5 mb-3">
          <h1 className="text-3xl text-[#007E8F] font-semibold pb-3 mt-6">
            Disclaimer
          </h1>
          <div className="w-[100%] text-wrap text-justify text-gray-700">
            <p className=" mt-3 mb-3">
              The information and material mentioned in the website is provided
              as general information. The information is strictly provided by
              Travel Monk Adventures and no content, product or services
              represent anything or anybody living or dead. We thrive to keep
              the information up to date and true to our knowledge and do not
              provide warranty about the accuracy, efficiency, completeness,
              timeliness and availability of the contents at any given time. Any
              kind of resemblance you find should be considered at your own
              risk.
            </p>

            <p className=" mt-3 mb-3">
              We will not bear any kind of responsibility for loss or damage
              occurred directly or indirectly or any other form of consequential
              loss or damage occurred from the information provided in our
              website or in connection to it. The other websites which are
              linked to this website are not under, or governed by, Travel Monk
              Adventures. We do not take any guarantee over the information and
              content provided by those websites and the links also does not
              imply that we directly or indirectly endorse or advertise the web
              sites. We ensure a smooth running and efficacy of the website.
              Conversely, we do not take the responsibility for, or be liable
              for, the website’s server being temporarily down due to technical
              issues. This is not in our control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
