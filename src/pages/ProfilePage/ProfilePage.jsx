import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserDetails } from "../../features/user/userActions";
import { Link } from "react-router-dom";
import { getUserBookings } from "../../features/previousBookings/previousBookingsActions";
import moment from "moment";
import PreviousBooking from "../../components/PDFDownload/bookingsPdfDownload";
import { getMyPrebuiltEnquiry } from "../../features/PrebuiltPackage/prebuiltPackageAction";
import { getMyFullyCustomizedEnquiries } from "../../features/FullyCustomizePackage/FullCustomizePackageAction";
import Customize_trip_pdf from "../../components/PDFDownload/Customize_trip_pdf";
import DownloadPdfButton from "../../components/PDFDownload/Customized_Trip_Enquiries_PDF";
import DownloadPrebuiltPdfButton from "../../components/PDFDownload/Prebuilt_Enquiries_PDF";

const ProfilePage = () => {
  const [showBookings, setShowBookings] = useState(false);
  const [showFullyCustomizedEnquiries, setShowFullyCustomizedEnquiries] = useState(false)
  const [showPrebuiltEnquiries, setShowPrebuiltEnquiries] = useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { fullyCustomizedEnquiries } = useSelector((state) => state.fullyCustomizePackage)
  const { prebuiltEnquiries } = useSelector((state) => state.prebuiltPackage)
  const { userBookings } = useSelector((state) => state.previousBookings);
 
  let imageName = []
  let lastProfileName
  if(userInfo){
   imageName.push(userInfo?.name ?? "No Name Available")
    console.log("the image name", imageName)
    let newImageName = imageName[0].split(' ')
    console.log(newImageName)
    lastProfileName = newImageName[0][0] + newImageName[1][0];
  }
   
  console.log("last profile name is", lastProfileName)
  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, []);

  useEffect(() => {
    dispatch(getUserBookings());
    dispatch(getMyPrebuiltEnquiry())
    dispatch(getMyFullyCustomizedEnquiries())
  }, []);

  
  return (
    // <div className="bg-gray-50 min-h-screen">
    //   <div className="container mx-auto p-8 md:p-12">
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <div className="flex items-center mb-6">
    //         <div className="rounded-full h-24 w-24 mr-6 border-4  bg-gray-100border-white shadow-lg flex justify-center items-center ">
    //           <h1 className="text-3xl">{lastProfileName}</h1>
    //         </div>
    //         <div>
    //           <h2 className="text-3xl font-semibold text-gray-800">
    //             {userInfo?.name}
    //           </h2>
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <div>
    //           <p className="text-gray-700 font-bold">Email:</p>
    //           <p className="text-gray-600">{userInfo?.email}</p>
    //           <Link to="/change-password">
    //             <button className="mt-2 bg-blue-400 rounded-md p-2 text-xl">
    //               Change Password
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //       {/** bookings section */}
    //       <div className="mt-10 border-t border-gray-200 pt-6">
    //         <button
    //           className="text-indigo-600 hover:text-indigo-800 font-medium"
    //           onClick={() => setShowBookings(!showBookings)}
    //         >
    //           {showBookings ? "Hide Bookings" : "View My Trips"}
    //         </button>

    //         {showBookings && (
    //           <div className="mt-6">
    //             {Array.isArray(userBookings?.data) &&
    //               userBookings?.data?.map((booking) => (
    //                 <div
    //                   key={booking.bookingId}
    //                   className="bg-white p-4 rounded-md shadow-sm mt-3 border border-gray-200"
    //                 >
    //                   <div className="flex justify-end mb-2">
    //                     <PreviousBooking data={booking} />
    //                   </div>
    //                   <div className="flex justify-between">
    //                     <div>
    //                       <p className="font-semibold text-gray-800">
    //                         {" "}
    //                         Booking ID : {booking?.bookingId ?? "Not Found"}
    //                       </p>

    //                       <p className="font-semibold text-gray-800">
    //                         {" "}
    //                         Package Name : {booking?.packageId?.name}
    //                       </p>

    //                       <p className="text-gray-600 mt-2">
    //                         {" "}
    //                         Total Price : Rs.{" "}
    //                         <span className="font-bold text-4xl">
    //                           {booking.totalPrice}
    //                         </span>
    //                       </p>

    //                       <p className="text-gray-600 mt-2">
    //                         {" "}
    //                         Razorpay Order ID : {booking.razorpay_order_id}
    //                       </p>
    //                       <p className="text-gray-600 text-sm">
    //                         Date:{" "}
    //                         {moment(booking.createdAt).format("DD MMM YYYY")}
    //                       </p>
    //                     </div>
    //                     <p
    //                       className={`text-${
    //                         booking.bookingStatus === "Completed"
    //                           ? "green-500"
    //                           : booking.bookingStatus === "Upcoming"
    //                           ? "yellow-500"
    //                           : "red-500"
    //                       } font-medium`}
    //                     >
    //                       Booking Status : {booking.bookingStatus}
    //                     </p>
    //                   </div>
    //                   <p className="text-gray-600 mt-2">
    //                     {" "}
    //                     Payment Status : {booking.paymentStatus}
    //                   </p>

    //                   <p className="text-gray-600 mt-2">
    //                     {" "}
    //                     Travellers : {booking.numberOfTravellers}
    //                   </p>
    //                 </div>
    //               ))}
    //           </div>
    //         )}
    //       </div>
    //       {/**fully csutomized enquiries */}
    //       <div className="mt-10 border-t border-gray-200 pt-6">
    //         <button
    //           className="text-indigo-600 hover:text-indigo-800 font-medium"
    //           onClick={() => setShowFullyCustomizedEnquiries(!showFullyCustomizedEnquiries)}
    //         >
    //           {showFullyCustomizedEnquiries ? "Hide Enquiries" : "View My Fully Customised Enquiries"}
    //         </button>

    //         {showFullyCustomizedEnquiries && (
    //           <div className="mt-6">
    //             {Array.isArray(fullyCustomizedEnquiries) &&
    //               fullyCustomizedEnquiries.map((enquiry) => (
    //                 <div
    //                   key={enquiry._id}
    //                   className="bg-white p-4 rounded-md shadow-sm mt-3 border border-gray-200"
    //                 >
    //                   <div className="flex justify-end">
    //                     <DownloadPdfButton data={enquiry}/>
    //                   </div>
    //                   <div className="flex justify-between">
    //                     <div>
    //                       <p className="font-semibold text-gray-800">
    //                         Enquiry ID: {enquiry?._id ?? "Not Found"}
    //                       </p>
    //                       <p className="text-gray-600 mt-2">
    //                         Vehicle: {enquiry?.selectedVehicle?.name ?? "No Vehicle Selected"}
    //                       </p>

    //                       <p className="text-gray-600 text-sm">
    //                         Date: {moment(enquiry?.createdAt).format("DD MMM YYYY")}
    //                       </p>
    //                     </div>
    //                   </div>

    //                   <div className="mt-4">
    //                     <p className="text-gray-600">
    //                       Name: {enquiry?.name}
    //                     </p>

    //                     <p className="text-gray-600 mt-2">
    //                       Email: {enquiry?.email}
    //                     </p>

    //                     <p className="text-gray-600 mt-2">
    //                       Mobile: {enquiry?.mobileNumber}
    //                     </p>

    //                     <p className="text-gray-600 mt-2">
    //                       Travellers: {enquiry?.numberOfTravellers}
    //                     </p>

    //                     <p className="text-gray-600 mt-2">
    //                       Message: {enquiry?.message}
    //                     </p>
    //                   </div>

    //                   <div className="mt-4">
    //                     <p className="font-semibold text-gray-800">Itinerary:</p>
    //                     {enquiry?.itinerary?.map((day, index) => (
    //                       <div key={day._id} className="mt-2 pl-4 border-l-2 border-gray-200">
    //                         <p className="font-medium text-gray-700">
    //                           Day {day.day}: {day.location}
    //                         </p>
    //                         <p className="text-gray-600">
    //                           Hotel: {day.selectedHotel?.name}
    //                         </p>
    //                         {day.selectedActivities?.length > 0 && (
    //                           <div className="mt-1">
    //                             <p className="text-gray-600">Activities:</p>
    //                             {day.selectedActivities.map((activity) => (
    //                               <p key={activity._id} className="text-gray-600 text-sm pl-2">
    //                                 • {activity.label}
    //                               </p>
    //                             ))}
    //                           </div>
    //                         )}
    //                       </div>
    //                     ))}
    //                   </div>
    //                 </div>
    //               ))}
    //           </div>
    //         )}
    //       </div>
    //       {/** prebuilt package enquiries */}
          
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="p-6 border-b border-gray-300 bg-gray-100">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-indigo-100 border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-xl font-semibold text-indigo-600">{lastProfileName}</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{userInfo?.name}</h2>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex flex-col lg:flex-row">
                <p className="text-gray-600 font-medium">Email:</p>
                <p className="text-gray-700 pl-2">{userInfo?.email}</p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="text-gray-600 font-medium">Mobile Number:</p>
                <p className="text-gray-600 font-medium pl-2">{userInfo?.mobileNumber}</p>
                
              </div>
              <Link to="/change-password">
                <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 text-sm transition">
                  Change Password
                </button>
              </Link>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <button
              className="w-full text-center sm:text-left text-indigo-600 hover:text-indigo-800 font-semibold"
              onClick={() => setShowBookings(!showBookings)}
            >
              {showBookings ? "Hide Bookings" : "View My Trips"}
            </button>

            {showBookings && (
              <div className="mt-6 space-y-4">
                {Array.isArray(userBookings?.data) &&
                  userBookings?.data?.map((booking) => (
                    <div
                      key={booking.bookingId}
                      className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="w-full">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="font-semibold text-gray-800">
                                Booking ID: {booking?.bookingId ?? "Not Found"}
                              </p>
                              <p className="font-semibold text-gray-800">
                                Package Name: {booking?.packageId?.name}
                              </p>
                            </div>
                            <PreviousBooking data={booking} />
                          </div>

                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                              <p className="text-gray-700 mt-2">
                                Total Price: Rs.{" "}
                                <span className="font-bold text-xl">{booking.totalPrice}</span>
                              </p>
                              <p className="text-gray-500 text-sm">
                                Date: {moment(booking.createdAt).format("DD MMM YYYY")}
                              </p>
                            </div>
                            <p
                              className={`mt-2 sm:mt-0 font-medium ${booking.bookingStatus === "Completed"
                                  ? "text-green-600"
                                  : booking.bookingStatus === "Upcoming"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                                }`}
                            >
                              Status: {booking.bookingStatus}
                            </p>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                            <p>Payment Status: {booking.paymentStatus}</p>
                            <p>Travellers: {booking.numberOfTravellers}</p>
                            <p>Razorpay Order ID: {booking.razorpay_order_id}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Fully Customized Enquiries Section */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <button
              className="w-full text-center sm:text-left text-indigo-600 hover:text-indigo-800 font-semibold"
              onClick={() => setShowFullyCustomizedEnquiries(!showFullyCustomizedEnquiries)}
            >
              {showFullyCustomizedEnquiries ? "Hide Enquiries" : "View My Fully Customised Enquiries"}
            </button>

            {showFullyCustomizedEnquiries && (
              <div className="mt-6 space-y-4">
                {Array.isArray(fullyCustomizedEnquiries) &&
                  fullyCustomizedEnquiries.map((enquiry) => (
                    <div
                      key={enquiry._id}
                      className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
                    >
                      <div className="flex justify-end mb-4">
                        <DownloadPdfButton data={enquiry} />
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div>
                            <p className="font-semibold text-gray-800">
                              Enquiry ID: {enquiry?._id ?? "Not Found"}
                            </p>
                            <p className="text-gray-600 mt-2">
                              Vehicle: {enquiry?.selectedVehicle?.name ?? "No Vehicle Selected"}
                            </p>
                            <p className="text-gray-500 text-sm">
                              Date: {moment(enquiry?.createdAt).format("DD MMM YYYY")}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <p>Name: {enquiry?.name}</p>
                          <p>Email: {enquiry?.email}</p>
                          <p>Mobile: {enquiry?.mobileNumber}</p>
                          <p>Travellers: {enquiry?.numberOfTravellers}</p>
                        </div>

                        <div>
                          <p className="text-gray-600 font-medium">Message:</p>
                          <p className="text-gray-700">{enquiry?.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/** prebuilt package enquiries */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <button
              className="w-full text-center sm:text-left text-indigo-600 hover:text-indigo-800 font-semibold  "
              onClick={() => setShowPrebuiltEnquiries(!showPrebuiltEnquiries)}
            >
              {showPrebuiltEnquiries ? "Hide Enquiries" : "View My Prebuilt Package Enquiries"}
            </button>

            {showPrebuiltEnquiries && (
              <div className="mt-6">
                {Array.isArray(prebuiltEnquiries) &&
                  prebuiltEnquiries.map((enquiry) => (
                    <div
                      key={enquiry._id}
                      className="bg-white p-4 rounded-md shadow-sm mt-3 border border-gray-200"
                    >
                      <div className="flex justify-end">
                        <DownloadPrebuiltPdfButton data={enquiry} />
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="font-semibold text-gray-800">
                            Enquiry ID: {enquiry?._id ?? "Not Found"}
                          </p>

                          <p className="font-semibold text-gray-800">
                            Package Name: {enquiry?.package?.name}
                          </p>
                          <p className="text-gray-600 mt-2">
                            Vehicle: {enquiry?.selectedVehicle?.name ?? "No Vehicle Selected"}
                          </p>

                          <p className="text-gray-600 text-sm">
                            Date: {moment(enquiry?.createdAt).format("DD MMM YYYY")}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-gray-600">
                          Name: {enquiry?.name}
                        </p>

                        <p className="text-gray-600 mt-2">
                          Email: {enquiry?.email}
                        </p>

                        <p className="text-gray-600 mt-2">
                          Mobile: {enquiry?.mobileNumber}
                        </p>

                        <p className="text-gray-600 mt-2">
                          Travellers: {enquiry?.numberOfTravellers}
                        </p>

                        <p className="text-gray-600 mt-2">
                          Message: {enquiry?.message}
                        </p>
                      </div>

                      <div className="mt-4">
                        <p className="font-semibold text-gray-800">Itinerary:</p>
                        {enquiry?.itinerary?.map((day, index) => (
                          <div key={day._id} className="mt-2 pl-4 border-l-2 border-gray-200">
                            <p className="font-medium text-gray-700">
                              Day {day?.day}: {day?.location}
                            </p>
                            <p className="text-gray-600">
                              Hotel: {day?.selectedHotel?.name}
                            </p>
                            {day.selectedActivities?.length > 0 && (
                              <div className="mt-1">
                                <p className="text-gray-600">Activities:</p>
                                {day?.selectedActivities?.map((activity) => (
                                  <p key={activity._id} className="text-gray-600 text-sm pl-2">
                                    • {activity?.label}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
