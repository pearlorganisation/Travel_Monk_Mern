import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { BusCruizeContact } from '../../features/BusCruizeContactAction/BusCruizeAction';

const BusCruiseContactForm = ({ type }) => {
const dispatch = useDispatch();
const { register , handleSubmit } = useForm()
const submitForm = (data)=>{
    const formData = { ...data, type }
dispatch(BusCruizeContact(formData))
}
    return (
      <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
          <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
              <div>
                  <label className="font-medium">Full name</label>
                  <input
                      type="text"
                      required
                      {...register("name")}
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
              </div>
              <div>
                  <label className="font-medium">Email</label>
                  <input
                      type="email"
                      required
                      {...register("email")}
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
              </div>
              <div>
                  <label className="font-medium">Start Destination</label>
                  <input
                      type="start"
                      required
                      {...register("startDestination")}
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
              </div>

              <div>
                  <label className="font-medium">End Destination</label>
                  <input
                      type="final"
                      required
                      {...register("endDestination")}
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
              </div>
              <div>
                  <label className="font-medium">Number of Seats</label>
                  <input
                      type="number"
                      required
                      {...register("numberOfSeats")}
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
              </div>
              {/* <div>
                                  <label className="font-medium">
                                      Company
                                  </label>
                                  <input
                                      type="text"
                                      required
                                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  />
                              </div> */}
             
                <div>
                    <label className="font-medium">Start Date</label>
                    <input
                        type="date"
                        required
                        {...register("startDate")}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
              <div>
                  <label className="font-medium">Message</label>
                  <textarea
                      required
                      {...register("message")}
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" type='submit'>
                  Submit
              </button>
          </form>
      </div>
  )
}

export default BusCruiseContactForm