import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitContact } from "../../../features/contact/contactAction";

const GetinTouch = () => {
 const {register,handleSubmit,reset}=useForm()
 const dispatch=useDispatch()
  const SubmitForm=(data)=>{
console.log(data)
const formData={data}
dispatch(submitContact(formData))

  }
  return (
    <><div className="bg-gray-100 py-20 ">
         <h1 className="text-2xl font-bold mb-2 text-center">Get in touch</h1>
         <p className="text-center mb-6">Please share your specific request</p>
      <div className="bg-white p-10 rounded-lg shadow-lg  max-w-4xl  container mx-auto mt-10" style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
   
        <form onSubmit={handleSubmit(SubmitForm)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 ">
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-gray-700">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  {...register("name")}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none bg-[#F5F5F5] focus:border-gray-400"
                />
              </div>
              <div>
                <label htmlFor="contact-number" className="block text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact-number"
                  required
                  {...register("phoneNumber")}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none bg-[#F5F5F5] focus:border-gray-400"
                />
              </div>
              <div>
                <label htmlor="email" className="block  text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  {...register("email")}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none bg-[#F5F5F5] focus:border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="message" className="block  text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message")}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none bg-[#F5F5F5] focus:border-gray-400"
                ></textarea>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full mt-4 p-2 bg-white border border-gray-400 rounded-lg text-gray-700  hover:bg-gray-100 transition-colors duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        {/* <div>
          <h1 className="text-3xl text-center font-bold p-5">
            Where are you going to take your next selfie?
          </h1>
        </div>
        <div className="flex justify-center">
          <button className="btn px-16 py-4 bg-[#007e8f] text-white">
            Customise your Trip
          </button>
        </div> */}
      </div>
      <h1 className='text-black font-bold mx-auto text-center py-12 text-3xl '> Where are you going to take your next selfie?</h1>
    <div className="flex items-center">
    <button className=" py-2 px-20 bg-[#007E8F] text-[#f5f5f5] rounded  focus:outline-none  mb-10 mx-auto">
        Customise your Trip
        </button>
    </div>

     </div>
    </>
  );
};

export default GetinTouch;
