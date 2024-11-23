import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../features/user/userActions';
export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }, // Access isSubmitting from formState
    } = useForm();

    const submitForm = async (data) => {
        try {
            dispatch(forgotPassword(data)); // Dispatch the forgotPassword action
            reset(); // Clear the form after successful submission
        } catch (error) {
            console.error('Error sending recovery email:', error);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Reset Password</h2>
                <form onSubmit={handleSubmit(submitForm)} className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>Email</label>
                        <input
                            type='email'
                            required
                            placeholder='Enter Email'
                            {...register("email")}
                            className='border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={isSubmitting} // Disable the button while submitting
                        className={`py-2 rounded-lg transition ${isSubmitting
                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                : 'bg-indigo-500 text-white hover:bg-indigo-600'
                            }`}>
                        {isSubmitting ? 'Sending...' : 'Send Recovery Mail'}
                    </button>
                </form>
            </div>
        </div>
    );
}
