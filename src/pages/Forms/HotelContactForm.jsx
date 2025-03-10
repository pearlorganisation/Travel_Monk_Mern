import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { hotelContact } from "../../features/contact/contactAction";
import { useLocation } from "react-router-dom";

const HotelContactForm = ({ data, setFormOpen, estimatedPrice, startDate, endDate, travellers }) => {
  const location = useLocation();
  // console.log("============location name", location.pathname)
  const { hotel, hotelStartDate, HotelEndDate, hotelTravellers } = data;
console.log("form data is", hotelStartDate, HotelEndDate, hotelTravellers)
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log("hotel", hotel);
  const submitForm = (data) => {
    const formData = {
      ...data,
      estimatedPrice:estimatedPrice,
      location: hotel.city,
      checkIn: startDate,
      checkOut: endDate,
      numberOfPersons: travellers,
      hotel: hotel._id,
      page: location.pathname,
    };

    dispatch(hotelContact(formData))
      .unwrap()
      .then((actionResult) => {
        console.log("The action result is", actionResult);

        if (actionResult.success) {
          setFormOpen(); // Call the function to close the modal
        }
      })
      .catch((error) => {
        console.log("The error is", error.error);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              {...register("phoneNumber")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              {...register("message")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex flex-row gap-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setFormOpen()}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelContactForm;
