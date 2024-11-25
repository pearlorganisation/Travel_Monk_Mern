import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../features/user/userActions';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const { token } = useParams();
    const { register ,handleSubmit } = useForm();
   
  const submitForm = (data) => {
    dispatch(resetPassword({ token, password: data.password }));
  };
    console.log(token, "Token from the reset password")
  return (
    <>
      <div
        className="h-full flex justify-center p-4 items-center"
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='flex items-center justify-center w-96 bg-opacity-70 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg'>
          <div className='bg-white bg-opacity-30 p-8 rounded-lg shadow-md w-full max-w-md backdrop-blur-sm border border-white border-opacity-40'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Reset Password</h2>
        <form onSubmit={handleSubmit(submitForm)} className='flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <label className='text-gray-700 font-medium'>New Password</label>
            <input
              type='password'
              required
              placeholder='Enter New Password'
              {...register("password")}
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
    </div>
    </>
   
  )
}

export default ResetPassword