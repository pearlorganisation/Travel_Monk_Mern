import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../features/user/userActions';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { changePasswordInfo } = useSelector((state) => state?.user)
    const submitForm = (data) => {
        dispatch(changePassword(data));
        reset();  
        if (!changePasswordInfo.isSuccess) {
            alert('try again')
        } else { navigate('/') }

    };
   
   
    const newPassword = watch("newPassword");

    return (
        <div
            className="h-full flex justify-center p-4 items-center"
            style={{
                backgroundImage: `url('/HeroImg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex items-center justify-center w-96 bg-opacity-70 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg">
                <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-md w-full max-w-md backdrop-blur-sm border border-white border-opacity-40">
                    <div className="flex justify-end w-full">
                        <button onClick={() => navigate('/profile')} className="text-red-700 hover:text-gray-800">
                            <RxCross1 />
                        </button>
                    </div>
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Change Password</h2>

                    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700">Current Password</label>
                            <input
                                type="password"
                                {...register('currentPassword', { required: 'Current password is required' })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.currentPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                {...register('newPassword', {
                                    required: 'New password is required',
                                    minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.newPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                {...register('confirmNewPassword', {
                                    required: 'Please confirm your new password',
                                    validate: (value) => value === newPassword || 'Passwords do not match',
                                })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.confirmNewPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirmNewPassword.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ChangePassword;
