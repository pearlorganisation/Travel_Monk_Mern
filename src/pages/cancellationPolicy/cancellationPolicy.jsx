import React from 'react'
import { PiCheckCircleFill } from "react-icons/pi";

function CancleationPolicy() {
  return (
    <div>
         <div
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-full h-80 justify-start items-center flex">
          <h1 className="text-5xl text-white font-semibold mx-auto"> Cancellations Policy</h1>
        </div>
      </div>
      <div className="px-2 py-10 bg-white">
  <div className="max-w-7xl mx-auto p-8">
    {/* Privacy Policy Statement */}
    {/* <div className="mb-8">
      <h1 className="text-2xl font-bold text-[#344154] mb-4">Privacy Policy Statement</h1>
      <p className="">
        RoutePerfect Ltd. ("we", "us" or "RoutePerfect") respects your right to privacy. Your ability to make informed
        choices about the use of your information is important to us. This Privacy Policy explains our policy regarding
        the collection, use, disclosure, and protection of personal information we receive.
      </p>
    </div> */}

<section className="mb-8 px-6">
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Situations</h2> */}
        <ul className="space-y-3 text-gray-600">
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill className="text-red-900" size={22} />
              </span>
              <span className="ml-2">If cancellations are made 15 days before the start date of the trip, 20% of total tour cost will be charged as cancellation fees. 
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill  className="text-red-900" size={22} />
              </span>
              <span className="ml-2">If cancellations are made within 7-15 days before the start date of the trip, 30% of total tour cost will be charged as cancellation fees.</span>
            </div>
            
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill  className="text-red-900" size={22} />
              </span>
              <span className="ml-2">If cancellations are made within 0-7 days before the start date of the trip, 50% of total tour cost will be charged as cancellation fees.
              </span>
            </div>
            
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6">
                <PiCheckCircleFill  className="text-red-900" size={22} />
              </span>
              <span className="ml-2"> Cancellations are strictly subjected to cancellation policies mentioned on the website & are irrespective of the date of booking.
              In case of unforeseen weather conditions or government restrictions, certain trips or activities may get cancelled. In such cases operator will try their best to provide an alternate feasible. However a cash refund will not be applicable for the same.</span>
            </div>
            
          </li>
        </ul>
      </section>
    {/* Information We Collect */}
  
  
    </div>

    {/* Definition of Personal Information */}

</div>

  

    </div>
  )
}

export default CancleationPolicy
