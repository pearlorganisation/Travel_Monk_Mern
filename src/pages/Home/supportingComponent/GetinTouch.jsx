import React from "react";

const GetinTouch = () => {
  return (
    <>
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl container mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-center">Get in touch</h1>
        <p className="text-center mb-6">Please share your specific request</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-gray-700">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-gray-400"
                />
              </div>
              <div>
                <label htmlFor="contact-number" className="block text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact-number"
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-gray-400"
                />
              </div>
              <div>
                <label htmlor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-gray-400"
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
                className="w-full mt-4 p-2 bg-white border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
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
    </>
  );
};

export default GetinTouch;
