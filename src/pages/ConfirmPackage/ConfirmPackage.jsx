import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmPackage = () => {
    const location = useLocation();
    const { startingPrice, packagename, dayData } = location.state || {};

    const [numPeople, setNumPeople] = useState(0);

    // for calculating gst
    const totalPrice = startingPrice * numPeople;
    const gst = 0.05 * totalPrice;  
    const finalPrice = totalPrice + gst;
    
    // const disbaled for if num peaople increases more than 10
    let disabled = numPeople === 10 ? true : false;

    const tenOrMorePeopleMessage = disabled && (
        <div>
            <h1 className="text-sm text-red-400 font-medium">
                For more than 10 people, kindly directly reach out to our executives.
            </h1>
        </div>
    );

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
                <h2 className="text-2xl font-semibold mb-4">{packagename}</h2>
                <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-lg font-semibold">Price: ₹ {startingPrice}/- Person</span>
                            <div className="text-sm text-gray-600">GST (5%): ₹ {gst.toFixed(2)}/- Person</div>
                            <div className="text-lg font-bold">Total: ₹ {finalPrice.toFixed(2)}/- {numPeople} Person</div>
                        </div>

                        <div className="flex items-center border rounded-md">
                            <button
                                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                                onClick={() => setNumPeople(numPeople - 1)}
                                disabled={numPeople <= 0} // Disable if numPeople is 1 or less
                            >
                                -
                            </button>
                            <span className="px-4 py-2 border-l border-r">{numPeople}</span>
                            <button
                                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                                onClick={() => setNumPeople(numPeople + 1)}
                                disabled={disabled} // disabled for more than 10 people
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                {tenOrMorePeopleMessage}  {/* message to show if there are more than 10 people */}
            </div>


            <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Continue
            </button>
        </div>
    );
}

export default ConfirmPackage;