import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmPackage = () => {
    const location = useLocation();
    const { startingPrice } = location.state || {};
    const navigate = useNavigate();


    const [numPeople, setNumPeople] = useState(1);
    const totalPrice = startingPrice * numPeople;

    const handleNumPeopleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setNumPeople(value > 0 ? value : 1);  
    };

     


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-blue-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
                <h1 className="text-5xl font-extrabold text-center text-gray-800">Confirm Package</h1>

                <div>
                    <label
                        htmlFor="numPeople"
                        className="block text-lg font-semibold text-gray-700"
                    >
                        Number of People
                    </label>
                    <input
                        type="number"
                        id="numPeople"
                        name="numPeople"
                        min="1"
                        value={numPeople}
                        onChange={handleNumPeopleChange}
                        className="mt-2 block w-full py-3 px-4 border border-gray-300 bg-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150 ease-in-out"
                    />
                </div>

                <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-800">
                        Starting Price: ₹{startingPrice}/-
                    </p>
                    <p className="text-3xl font-bold text-indigo-600">
                        Total Price: ₹{totalPrice}/-
                    </p>
                </div>

                <button
                    className="w-full py-3 px-6 mt-6 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-colors duration-300"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default ConfirmPackage