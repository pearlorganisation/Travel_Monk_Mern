import React from "react";

import { useForm } from "react-hook-form";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";

import Air from ".././../assets/logos/air.png";
import Star from ".././../assets/logos/star.png";
import FreeB from ".././../assets/logos/breakfast.png";
import Wifi from ".././../assets/logos/wifi.png";
import Parking from ".././../assets/logos/parking.png";

import Sea from ".././../assets/logos/sea.png";
import Cancel from ".././../assets/logos/cancel.png";

const sortByOptions = [
  {
    id: 1,
    name: "Popular",
  },
  {
    id: 2,
    name: "Price - Low to High",
  },
  {
    id: 3,
    name: "Price - High to Low",
  },
  {
    id: 4,
    name: "High Ratings",
  },
  {
    id: 5,
    name: "High Reviews",
  },
  {
    id: 6,
    name: "Popular",
  },
  {
    id: 7,
    name: "Newest First",
  },
];

const ratings = [
  {
    id: 1,
    reviews: "532",
    name: "4.2+",
  },
  {
    id: 2,
    reviews: "224",
    name: "3.5+",
  },
  {
    id: 3,
    reviews: "254",
    name: "3+",
  },
];

const starCategories = [
  {
    id: 1,
    name: "3 Star",
    reviews: "532",
  },
  {
    id: 2,
    name: "4 Star",
    reviews: "224",
  },
  {
    id: 3,
    name: "5 Star",
    reviews: "254",
  },
];

const priceRanges = [
  {
    id: 1,
    name: "₹ 0 - ₹ 2000",
    reviews: "532",
  },
  {
    id: 2,
    name: "₹ 2000 - ₹ 5500",
    reviews: "224",
  },
  {
    id: 3,
    name: "₹ 5500 - ₹ 9000",
    reviews: "254",
  },
  {
    id: 4,
    reviews: "446",
    name: "₹ 9000 - ₹ 12500",
  },
  {
    id: 5,
    name: "₹ 12500 - ₹ 15000",
    reviews: "16",
  },
];

const features = [
  { id: 1, name: "Free Parking", logo: Parking },
  { id: 2, name: "Free Wifi", logo: Wifi },
  { id: 3, name: "Air Conditioner", logo: Air },
  { id: 4, name: "Sea View", logo: Sea },
  { id: 5, name: "Free Breakfast", logo: FreeB },
  { id: 6, name: "Free Cancellation", logo: Cancel },
  { id: 7, name: "Free Parking", logo: Parking },
  { id: 8, name: "Free Wifi", logo: Wifi },
  { id: 9, name: "Air Conditioner", logo: Air },
  { id: 10, name: "Sea View", logo: Sea },
  { id: 11, name: "Free Breakfast", logo: FreeB },
  { id: 12, name: "Free Cancellation", logo: Cancel },
];

const hotelsData = [
  {
    id: 1,
    image: Image1,
    top: "Only One Room Left",
    name: "  ITC Grand Goa - A Luxury Resort Collection",
    price: "17000",
    taxes: "3000",
    rating: "5",
  },
  {
    id: 2,
    image: Image2,
    name: "The Fern Kadamba Hotel and Spa, Goa",
    price: "15000",
    originalPrice: "20000",
    tag: "Limited Time Deal",
    taxes: "3000",
    rating: "5",
    features: [
      { id: 1, name: "Free Parking", logo: Parking },
      { id: 2, name: "Free Wifi", logo: Wifi },
      { id: 3, name: "Air Conditioner", logo: Air },
      { id: 4, name: "Sea View", logo: Sea },
      { id: 5, name: "Free Breakfast", logo: FreeB },
      { id: 6, name: "Free Cancellation", logo: Cancel },
    ],
  },
  {
    id: 3,
    image: Image3,
    name: "Luxury Farm House",
    price: "24890",
    originalPrice: "29000",
    tag: "Limited Time Deal",
    taxes: "3000",
    rating: "4.8",
    features: [
      { id: 1, name: "Free Parking", logo: Parking },
      { id: 2, name: "Free Wifi", logo: Wifi },
      { id: 3, name: "Air Conditioner", logo: Air },
      { id: 4, name: "Sea View", logo: Sea },
    ],
  },
  {
    id: 4,
    image: Image4,
    name: "Country Inn Panjim Goa",
    price: "28790",
    originalPrice: "32000",
    tag: "Limited Time Deal",
    taxes: "3000",
    rating: "4.6",
    features: [
      { id: 1, name: "Free Parking", logo: Parking },
      { id: 2, name: "Free Wifi", logo: Wifi },
      { id: 3, name: "Air Conditioner", logo: Air },
      { id: 4, name: "Sea View", logo: Sea },
    ],
  },
];

const RoomDetails = () => {
  return (
    <div className="flex flex-row gap-8">
      <div className="w-[80%] mt-2">
        <div class="flex space-x-4 mb-4">
          <img src="hotel1.jpg" alt="Hotel Image 1" class="w-1/4 rounded-lg" />
          <img src="hotel2.jpg" alt="Hotel Image 2" class="w-1/4 rounded-lg" />
          <img src="hotel3.jpg" alt="Hotel Image 3" class="w-1/4 rounded-lg" />
          <div class="w-1/4 flex items-center justify-center bg-gray-200 rounded-lg">
            <span class="text-gray-600">50 More</span>
          </div>
        </div>

        <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
          <div className="flex flex-row gap-2 items-center px-3">
            <p className="text-md font-bold  text-black  text-2xl py-1 rounded-md">
              Nainital - A Luxury Collection Resort
            </p>
            <div className="flex flex-row gap-2 items-center">
              <img src={Star} className="w-3 h-3" />
              <h3>5.0</h3>
            </div>
          </div>

          <p className="text-md mt-3 px-3 font-semibold">
            H.No 5-3 askdjhaksd aslkdjasd alskdjlasdj asldkjalsjkd asldkjaljsd
            alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk
            alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd
            lkajsdlkasjlasd lakjsdlkja
          </p>
          <p className="text-sm text-gray-400 mt-3 px-3">
            Offeringthe Ginger Promise askdjhaksd aslkdjasd alskdjlasdj
            asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja
            lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd
            alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja asldkjalsjkd asldkjaljsd
            alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk
            alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd
            lkajsdlkasjlasd lakjsdlkja alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja
            lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd
            alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja
          </p>
        </div>

        <div className="mt-6  rounded-xl w-full bg-gray-200 p-4">
          <div className="px-3">
            <p className="text-md font-bold  text-black  text-lg py-1 rounded-md">
              This property offers :
            </p>

            <div className="grid grid-cols-4 items-center justify-start mt-4">
              {features.map((feature) => (
                <div className="flex flex-row gap-2">
                  <img src={feature.logo} className="w-8 h-8 " />
                  <h3>{feature.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[20%]">
        <div className="">
          <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
            <h1 className="text-lg font-bold">Room Only</h1>
            <h3>Fits 2 Adults</h3>

            <div className="px-4">
              <h3 className="text-gray-400 text-sm"> • No Meals Included </h3>
              <h3 className="text-gray-400 text-sm">
                • Complimentry Early Check in
              </h3>
              <h3 className="text-gray-400 text-sm">
                • Free Welcome Drink on Arrival
              </h3>
              <h3 className="text-gray-400 text-sm"> • Non - Refundable </h3>
            </div>

            <h3 className="text-gray-400 text-sm mt-3">Per Night</h3>

            <div className="flex flex-row gap-4 items-center justify-start">
              <h1 className="font-bold text-3xl"> ₹5999 </h1>

              <h1 className="text-gray-400 text-sm">+₹720 taxes and fees </h1>
            </div>

            <div className="flex items-center justify-start mt-2">
              <button className="bg-blue-400 py-2 px-6 rounded-md text-white ">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-md font-bold bg-red-700 text-white px-3 py-1 rounded-md">
                5.0
              </h1>
              <h3>Excellent</h3>
            </div>

            <div className="">
              <p className="text-gray-700 mt-3 text-sm">
                71% of the guests have rated this property 4 stars and above
              </p>
            </div>

            <h3 className="text-blue-400 text-sm mt-3">Read Reviews</h3>
          </div>

          <div className="mt-2 h-[200px] rounded-xl w-full bg-gray-400">
            Explore on Map
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
