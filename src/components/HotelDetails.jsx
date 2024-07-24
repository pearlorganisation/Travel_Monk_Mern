import React from "react";

const HotelDetails = () => {
  return (
    <>
      {/* <div class="bg-gray-900 flex items-center justify-center min-h-screen"> */}
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto w-full">
        <h2 class="text-xl font-semibold mb-2">
          Nainital - A Luxury Collection Resort
        </h2>
        <div class="flex items-center mb-4">
          <span class="text-yellow-500 text-lg mr-2">★</span>
          <span class="text-gray-600 text-lg">5.0</span>
        </div>
        <div class="flex space-x-4 mb-4">
          <img src="hotel1.jpg" alt="Hotel Image 1" class="w-1/4 rounded-lg" />
          <img src="hotel2.jpg" alt="Hotel Image 2" class="w-1/4 rounded-lg" />
          <img src="hotel3.jpg" alt="Hotel Image 3" class="w-1/4 rounded-lg" />
          <div class="w-1/4 flex items-center justify-center bg-gray-200 rounded-lg">
            <span class="text-gray-600">50 More</span>
          </div>
        </div>
        <p class="text-gray-600 mb-6">
          Offering the 'Ginger Promise', Ginger Goa is a beautiful property with
          plenty of recreational options and comfortable facilities enriched by
          a contemporary ambience.
        </p>
        <h3 class="text-lg font-semibold mb-2">Choose Room Types</h3>
        <div class="flex flex-wrap space-x-2 mb-6">
          <button class="bg-[#007E8F] text-white px-4 py-2 rounded-full mb-2">
            Room Only
          </button>
          <button class="border border-gray-400 text-gray-600 px-4 py-2 rounded-full mb-2">
            Room with Breakfast
          </button>
          <button class="border border-gray-400 text-gray-600 px-4 py-2 rounded-full mb-2">
            Room With Free Cancellation | Breakfast + Lunch/Dinner
          </button>
          <button class="border border-gray-400 text-gray-600 px-4 py-2 rounded-full mb-2">
            Room With Free Cancellation
          </button>
          <button class="border border-gray-400 text-gray-600 px-4 py-2 rounded-full mb-2">
            Room With Free Cancellation | Breakfast only
          </button>
          <button class="border border-gray-400 text-gray-600 px-4 py-2 rounded-full mb-2">
            Room With Free Cancellation | Breakfast + Lunch/Dinner
          </button>
        </div>
        <button class="bg-[#007E8F] text-white px-6 py-2 rounded-lg">
          Change
        </button>
      </div>
    </>
  );
};

export default HotelDetails;
