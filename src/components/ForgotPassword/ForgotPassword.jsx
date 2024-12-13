import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../features/ResetPassword/sendMailAction';
import { resetState } from '../../features/ResetPassword/sendMailSlice';

export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { isSuccess, mailSent } = useSelector((state) => state.password);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }, // Access isSubmitting from formState
    } = useForm();

    // Handle form submission
    const submitForm = async (data) => {
        try {
            dispatch(forgotPassword(data)); // Dispatch the forgotPassword action
            reset(); // Clear the form after successful submission
        } catch (error) {
            console.error('Error sending recovery email:', error);
        }
    };

    // Handle success state to reset after 5 seconds
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                dispatch(resetState());
            }, 10000);

            return () => clearTimeout(timer); // Clean up the timer
        }
    }, [isSuccess, dispatch]);

    return (
        <div
            className="h-full flex justify-center p-4 items-center"
            style={{
                backgroundImage: `url('/HeroImg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {isSuccess ? (
                <div className="flex items-center justify-center w-96 bg-opacity-70 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg">
                    <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-md w-full max-w-md backdrop-blur-sm border border-white border-opacity-40">
                        <h1 className="text-lg font-bold text-gray-800">
                            A mail is sent to your email with a recovery link. Kindly check your inbox or spam folder.

                        </h1>
                        <h1 className='text-orange-500'>You can request again after 10 seconds</h1>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center w-96 bg-opacity-70 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg">
                    <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-md w-full max-w-md backdrop-blur-sm border border-white border-opacity-40">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Enter your verified mail</h2>
                        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col space-y-4">
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter Email"
                                    {...register("email")}
                                    className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting} // Disable the button while submitting
                                className={`py-2 rounded-lg transition ${isSubmitting
                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                        : 'bg-indigo-500 text-white hover:bg-indigo-600'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
