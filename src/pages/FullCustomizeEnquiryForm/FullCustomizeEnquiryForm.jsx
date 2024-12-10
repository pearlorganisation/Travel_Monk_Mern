import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { sendFullyCustomizePackageEnquiry } from '../../features/FullyCustomizePackage/FullCustomizePackageAction'

const FullCustomizeEnquiryForm = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { isUserLoggedIn } = useSelector((state) => state.auth) // getting isUserLogged in
    const { userInfo } = useSelector((state) => state.user) // getting the userInfo 
    /** to get the current page url */
    const fullURL = location.pathname;
    console.log(`The full URL is: ${fullURL}`);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm()
    
    const { Estimated_Price, itinerary, destinationId, vehicleId } = location.state ?? {};
    console.log('----------------------------estimated data is', Estimated_Price, itinerary, destinationId, vehicleId)
    const submitForm = (data) => {
        const formData ={
            ...data,
            user:userInfo?._id,
            itinerary:itinerary,
            estimatedPrice: Estimated_Price,
            selectedVehicle:vehicleId,
            destination: destinationId

        }
        dispatch(sendFullyCustomizePackageEnquiry(formData))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
            {isUserLoggedIn ? <>
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Information Section */}
                    <div id='info' className="bg-indigo-600 text-white p-10 flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Estimated Package Price</h2>
                            <div className="text-5xl font-extrabold text-white/90">
                                
                            </div>
                            <p className="text-lg text-white/80">
                                Please submit this form, and one of our executives will reach out to you for further processes.
                            </p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3">What to Expect</h3>
                            <ul className="space-y-2 text-white/80">
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Quick Response</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Personalized Consultation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Detailed Information</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-10 flex items-center justify-center">
                        <form onSubmit={handleSubmit(submitForm)} className="w-full space-y-6">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

                            {/* Full Name */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Full Name is required' })}
                                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    {...register('email', { required: 'Email Address is required' })}
                                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                                    placeholder="you@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                                <input
                                    type="tel"
                                    {...register('mobileNumber', { required: 'Mobile Number is required' })}
                                    className={`w-full px-4 py-2 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                                    placeholder="Enter your phone number"
                                />
                                {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
                            </div>

                            {/* Number of Travellers */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">No of Travellers</label>
                                <input
                                    type="number"
                                    {...register('numberOfTravellers', { required: 'Number of Travellers is required', min: 1 })}
                                    className={`w-full px-4 py-2 border ${errors.numberOfTravellers ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                                    placeholder="Enter No Of Travellers"
                                />
                                {errors.numberOfTravellers && <p className="text-red-500 text-sm">{errors.numberOfTravellers.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                                    placeholder="Write your message here..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div></> : <><div>Login Before Submiting the Form</div></>}

        </div>
    )
}

export default FullCustomizeEnquiryForm