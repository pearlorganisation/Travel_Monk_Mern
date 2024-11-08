// import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useRazorpay } from 'react-razorpay';
// const ConfirmPackage = () => {
//     const location = useLocation();
//     const { startingPrice, packagename, dayData } = location.state || {};
//     const [numPeople, setNumPeople] = useState(0);

//     // for calculating gst
//     const totalPrice = startingPrice * numPeople;
//     const gst = 0.05 * totalPrice;  
//     const finalPrice = totalPrice + gst;
    
//     // const disbaled for if num peaople increases more than 10
//     let disabled = numPeople === 10 ? true : false;

//     const tenOrMorePeopleMessage = disabled && (
//         <div>
//             <h1 className="text-sm text-red-400 font-medium">
//                 For more than 10 people, kindly directly reach out to our executives.
//             </h1>
//         </div>
//     );

//     return (
//         <div className="p-6 bg-white rounded-lg shadow-md">
//             <div className="mb-6">
//                 <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
//                 <h2 className="text-2xl font-semibold mb-4">{packagename}</h2>
//                 <div className="border rounded-md p-4">
//                     <div className="flex items-center justify-between">
//                         <div>
//                             <span className="text-lg font-semibold">Price: ₹ {startingPrice}/- Person</span>
//                             <div className="text-sm text-gray-600">GST (5%): ₹ {gst.toFixed(2)}/- Person</div>
//                             <div className="text-lg font-bold">Total: ₹ {finalPrice.toFixed(2)}/- {numPeople} Person</div>
//                         </div>

//                         <div className="flex items-center border rounded-md">
//                             <button
//                                 className="px-4 py-2 text-gray-600 hover:bg-gray-200"
//                                 onClick={() => setNumPeople(numPeople - 1)}
//                                 disabled={numPeople <= 0} // Disable if numPeople is 1 or less
//                             >
//                                 -
//                             </button>
//                             <span className="px-4 py-2 border-l border-r">{numPeople}</span>
//                             <button
//                                 className="px-4 py-2 text-gray-600 hover:bg-gray-200"
//                                 onClick={() => setNumPeople(numPeople + 1)}
//                                 disabled={disabled} // disabled for more than 10 people
//                             >
//                                 +
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {tenOrMorePeopleMessage}  {/* message to show if there are more than 10 people */}
//             </div>


//             <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
//                 Continue
//             </button>
//         </div>
//     );
// }

// export default ConfirmPackage;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// razorpay key
const RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;

const ConfirmPackage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state)=> state.user);
    
  

    // extracting the price and  packagename and id of the package.  
    const { startingPrice, packagename, dayData ,id } = location.state || {}; // id is the packageId
   
    const [numPeople, setNumPeople] = useState(1);
    const [loading, setLoading] = useState(false);

    // Calculate GST and total price
    const totalPrice = startingPrice * numPeople;
    const gst = 0.05 * totalPrice;
    const finalPrice = totalPrice + gst;

    // Disable increment button if numPeople exceeds 10
    const disabled = numPeople === 10;

    const handlePayment = async () => {
        setLoading(true);
        try {
            // Step 1: Create order on the backend
            const response = await axios.post(
                "http://localhost:5000/api/v1/bookings",
                {
                    totalPrice: finalPrice,
                    numberOfTravellers: numPeople,
                    user: `${userInfo?._id}`,
                    packageId: id,
                    packageName: packagename,
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
                        const verifyPayment = await axios.post(
                            "http://localhost:5000/api/v1/bookings/verify-payment",
                            response
                        );
                        if(verifyPayment?.data?.success === true){
                            toast.success("🦄Payment Successfull");
                            setTimeout(()=>{
                                navigate("/")
                            },400)                         
                        }
                    } catch (error) {
                        console.log("ERR: ", error);
                        if (error.response && error.response.status === 404) {
                            // alert("Verification route not found. Please contact support.");
                            toast.error('🦄Verification route not found. Please contact support' );
                        } else {
                            // alert("Payment verification failed. Please try again.");
                            toast.error('🦄Payment verification failed. Please try again' );
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
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
                <h2 className="text-2xl font-semibold mb-4">{packagename}</h2>
                <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-lg font-semibold">
                                Price: ₹ {startingPrice} /- per Person
                            </span>
                            <div className="text-sm text-gray-600">
                                GST (5%): ₹ {gst.toFixed(2)} /- per Person
                            </div>
                            <div className="text-lg font-bold">
                                Total: ₹ {finalPrice.toFixed(2)} /- for {numPeople} Person(s)
                            </div>
                        </div>

                        <div className="flex items-center border rounded-md">
                            <button
                                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                                onClick={() => setNumPeople(numPeople - 1)}
                                disabled={numPeople <= 1} // Minimum number of people is 1
                            >
                                -
                            </button>
                            <span className="px-4 py-2 border-l border-r">{numPeople}</span>
                            <button
                                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                                onClick={() => setNumPeople(numPeople + 1)}
                                disabled={disabled} // Disable for more than 10 people
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {disabled && (
                    <div>
                        <h1 className="text-sm text-red-400 font-medium">
                            For more than 10 people, kindly reach out to our executives.
                        </h1>
                    </div>
                )}
            </div>

            <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handlePayment}
                disabled={loading}
            >
                {loading
                    ? "Processing..."
                    : "Continue to Pay ₹ " + finalPrice.toFixed(2)}
            </button>
        </div>
    );
};

export default ConfirmPackage;
