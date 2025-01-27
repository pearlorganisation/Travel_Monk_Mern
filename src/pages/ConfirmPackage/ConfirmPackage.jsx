import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../services/axiosInterceptor";

// razorpay key
const RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;

const ConfirmPackage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  // console.log("the user info is", userInfo)
  // extracting the price and  packagename and id of the package.
  const { startingPrice, packagename, packageData, id } = location.state || {}; // id is the packageId
  console.log("the package data is", packageData)

  const [numPeople, setNumPeople] = useState(1);
  const [loading, setLoading] = useState(false);
   
  // Calculate GST and total price
  const totalPrice = startingPrice * numPeople;
  const gst = 0.05 * totalPrice;
  const finalPrice = totalPrice + gst;
  const advancePayment= 5000
  const remainingPayment = startingPrice - 5000
  const remainingPaymentForSelectedNoOfPeople = finalPrice - 5000

  console.log("the remaining payment", remainingPayment, remainingPaymentForSelectedNoOfPeople)
  // Disable increment button if numPeople exceeds 10
  const disabled = numPeople === 10;

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Step 1: Create order on the backend
      const response = await axiosInstance.post(
        "/api/v1/bookings",
        {
          totalPrice: finalPrice,
          numberOfTravellers: numPeople,
          user: `${userInfo?._id}`,
          packageId: id,
          packageName: packagename,
          advancePayment:advancePayment,
          remainingPayment:remainingPaymentForSelectedNoOfPeople
        }
      );
      console.log(`response:: ${JSON.stringify(response, null, 2)}`);

      const { order } = response.data;

      // Step 2: Set up Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: packagename,
        description: `Payment for ${packagename}`,
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Verify payment on the backend
          try {
            // Step 3: Verify payment on the backend
            const verifyPayment = await axiosInstance.post(
              "/api/v1/bookings/verify-payment",
              response
            );
            if (verifyPayment?.data?.success === true) {
              toast.success("🦄Payment Successfull");
              setTimeout(() => {
                navigate("/");
              }, 400);
            }
          } catch (error) {
            console.log("ERR: ", error);
            if (error.response && error.response.status === 404) {
              // alert("Verification route not found. Please contact support.");
              toast.error(
                "🦄Verification route not found. Please contact support"
              );
            } else {
              // alert("Payment verification failed. Please try again.");
              toast.error("🦄Payment verification failed. Please try again");
            }
            console.error("Error in payment verification:", error);
          }
        },
        prefill: {
          name: `${userInfo?.name}`,
          email: `${userInfo?.email}`,
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            alert("Payment cancelled");
          },
        },
      };
         
      

      // Step 4: Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("Error occurred during payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold mb-4 text-center">{packagename}</h2>
        <div className="border rounded-md p-4">
          <div className="flex lg:flex-row flex-col items-center justify-between mb-4">
            <div>
              <span className="text-lg font-semibold">
                Price: ₹ {startingPrice} /- per Person
              </span>
              <div className="text-sm text-gray-600">
                GST (5%): ₹ {gst.toFixed(2)} /- per Person
              </div>
              <div className="text-lg font-bold">
                Total Estimated Price For The Package : ₹ {finalPrice.toFixed(2)} /- for {numPeople} Person
              </div>
              <div className="text-lg font-bold">
                Total Estimated Price Remaining After Advanced Payment : ₹ {remainingPaymentForSelectedNoOfPeople.toFixed(2)} /- for {numPeople} Person
              </div>
            </div>
            <div> 
              <div className="flex justify-center items-center"> 
            <h1>Enter Travellers</h1>
            </div>
            <div className="flex items-center border rounded-md">
             
              <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                onClick={() => setNumPeople(numPeople - 1)}
                disabled={numPeople <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 border-l border-r">{numPeople}</span>
              <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                onClick={() => setNumPeople(numPeople + 1)}
                disabled={disabled}
              >
                +
              </button>
            </div>
            </div>
          </div>
          {disabled && (
            <div className="text-sm text-red-400 font-medium text-center">
              For more than 10 people, kindly reach out to our executives.
            </div>
          )}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Note</h3>
        <p className="text-sm text-red-500">
          You only have to pay upfront ₹5000. The above pricing is for estimation purposes and the total package price may vary.
        </p>
        <div className="flex flex-col gap-4 px-4 mt-8">
          <h1 className="flex items-start text-2xl font-semibold text-gray-800">Payment Term's and Conditions</h1>
          <ul className="list-inside list-decimal text-gray-700">
            <li className="ml-4 text-sm leading-relaxed">Pay only 5000 upfront for booking the package.</li>
            <li className="ml-4 text-sm leading-relaxed">Pay next 40% of the package price in next 48 hours after our executive gets connected with you.</li>
            <li className="ml-4 text-sm leading-relaxed">Temporary point</li>
          </ul>
        </div>
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Continue to Pay ₹ " + advancePayment.toFixed(2)}
      </button>
    </div>
  );
};

export default ConfirmPackage;
