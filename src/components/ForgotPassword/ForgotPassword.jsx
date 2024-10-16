import React from 'react'
export const ForgotPassword = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Reset Password</h2>
                <form className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>New Password</label>
                        <input
                            type='password'
                            required
                            placeholder='Enter Password'
                            className='border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>Confirm Password</label>
                        <input
                            type='password'
                            required
                            placeholder='Confirm Your Password'
                            className='border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition'>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}
