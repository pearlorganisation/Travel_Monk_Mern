import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmPackage = () => {
    const location = useLocation();
    const { startingPrice , packagename } = location.state || {};
    const [numPeople, setNumPeople] = useState(1);
    
  
    const totalPrice = startingPrice * numPeople;
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">  
            <div className="mb-6"> 
                <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
                <h2 className="text-2xl font-semibold mb-4">{packagename}</h2>
                <div className="border rounded-md p-4">  
                    

                    <div className=" flex items-center justify-between"> 
                        <span className="text-xl font-semibold">₹ {totalPrice}/-</span>
                        <div className="flex items-center border rounded-md">  
                            <button
                                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                                onClick={() => setNumPeople(Math.max(0, numPeople - 1))}
                            >
                                -
                            </button>
                            <span className="px-4 py-2 border-l border-r">{numPeople}</span>
                            <button
                                className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                                onClick={() => setNumPeople(numPeople + 1)}

                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>


            </div>

            <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Continue
            </button>

        </div>
    );
}

export default ConfirmPackage