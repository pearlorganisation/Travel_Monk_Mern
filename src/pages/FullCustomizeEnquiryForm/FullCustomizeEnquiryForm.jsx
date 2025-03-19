import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { sendFullyCustomizePackageEnquiry } from "../../features/FullyCustomizePackage/FullCustomizePackageAction";
import RoadmapFully from "../../components/TimelineComponent/FullyCustomizableTimeline";
import FullyCustomizePdfDownload from "../../components/PDFDownload/pdfDownload";
import { PDFDownloadLink } from "@react-pdf/renderer";
const FullCustomizeEnquiryForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isUserLoggedIn } = useSelector((state) => state.auth); // getting isUserLogged in
  const { userInfo } = useSelector((state) => state.user); // getting the userInfo
  /** to get the current page url */
  const fullURL = location.pathname;
 

  useEffect(() => {
    if (!isUserLoggedIn) navigate("/login");
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const {
    Estimated_Price,
    itinerary,
    destinationId,
    vehicleId,
    vehicleName,
    duration,
    startDate,
    endDate,
    datesRange
  } = location.state ?? {};
 

  /** DATA FOR DOWNLOADING THE PDF */ 
  const pdfData = location.state.itinerary;
 

  const newItinery = [...itinerary];
  
  /**-----------taking only the values that we will send to the backend------------*/
  const userData = newItinery.map((item,index)=>{
    const container ={}

    container.selectedLocation = item.selectedLocation
    container.selectedHotel = item.selectedHotel.hotelId
    container.selectedActivities = item.selectedActivities
    container.day= item.day
    container.date = item.date

    return container
  })
  
  const submitForm = (data) => {
    const formData = {
      ...data,
      user: userInfo?._id,
      itinerary: userData,
      estimatedPrice: Estimated_Price,
      selectedVehicle: vehicleId,
      destination: destinationId,
      duration: duration,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    };
    dispatch(sendFullyCustomizePackageEnquiry(formData)).then(
      localStorage.removeItem("packageDetails")
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      {isUserLoggedIn ? (
        <>
          <div className="w-full grid grid-cols-1  bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div
              id="info"
              className="bg-[#007E8F] text-white  flex flex-col justify-center items-start py-6"
            >
              <div className="space-y-4 px-6">
                <h2 className="text-3xl font-bold">Estimated Package Price</h2>
                <div className="text-5xl font-extrabold text-white/90">
                  ₹ {Estimated_Price}
                </div>
                <p className="text-lg text-white/80">
                  Please submit this form, and one of our executives will reach
                  out to you for further processes.
                </p>
              </div>

              <div className="px-6">
                <h1 className="font-bold text-4xl text-white/80">
                  {" "}
                  Vehicle Name :{" "}
                  {/* <span className="text-red-500">{selectedVehicle.name}</span> */}
                  <span className="text-red-500">{vehicleName}</span>
                </h1>
              </div>

              <RoadmapFully events={location.state.itinerary} dateRange ={datesRange} tripEndDateFinal={endDate} />
            </div>

            {/* Form Section */}
            <div className="p-10 flex items-center justify-center">
              <form
                onSubmit={handleSubmit(submitForm)}
                className="w-[80%] space-y-6"
              >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Contact Us
                </h2>

                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Full Name is required" })}
                    className={`w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className={`w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    {...register("mobileNumber", {
                      required: "Mobile Number is required",
                    })}
                    className={`w-full px-4 py-2 border ${
                      errors.mobileNumber ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                    placeholder="Enter your phone number"
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.mobileNumber.message}
                    </p>
                  )}
                </div>

                {/* Number of Travellers */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    No of Travellers
                  </label>
                  <input
                    type="number"
                    {...register("numberOfTravellers", {
                      required: "Number of Travellers is required",
                      min: 1,
                    })}
                    className={`w-full px-4 py-2 border ${
                      errors.numberOfTravellers
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                    placeholder="Enter No Of Travellers"
                  />
                  {errors.numberOfTravellers && (
                    <p className="text-red-500 text-sm">
                      {errors.numberOfTravellers.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`w-full px-4 py-2 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>Please Login Before Submiting the Form</h1>
            <button className="px-4 py-2 bg-purple-500 rounded-md">
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FullCustomizeEnquiryForm;
