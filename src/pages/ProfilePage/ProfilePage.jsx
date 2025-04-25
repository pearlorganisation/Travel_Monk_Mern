import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserDetails, getPackagesCreatedByAdmin } from "../../features/user/userActions";
import { Link } from "react-router-dom";
import { getUserBookings } from "../../features/previousBookings/previousBookingsActions";
import moment from "moment";
import PreviousBooking from "../../components/PDFDownload/bookingsPdfDownload";
import { getMyPrebuiltEnquiry } from "../../features/PrebuiltPackage/prebuiltPackageAction";
import { getMyFullyCustomizedEnquiries } from "../../features/FullyCustomizePackage/FullCustomizePackageAction";
import Customize_trip_pdf from "../../components/PDFDownload/Customize_trip_pdf";
import DownloadPdfButton from "../../components/PDFDownload/Customized_Trip_Enquiries_PDF";
import DownloadPrebuiltPdfButton from "../../components/PDFDownload/Prebuilt_Enquiries_PDF";
import Pagination from "../../components/Pagination/Pagination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../services/axiosInterceptor";
import DownloadPdfButtonByAdmin from "../../components/PDFDownload/DownloadPdfCreatedByAdmin";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [showBookings, setShowBookings] = useState(false);
  const [showFullyCustomizedEnquiries, setShowFullyCustomizedEnquiries] = useState(false)
  const [showCustomPackagesCreatedByAdmin, setShowCustomPackagesCreatedByAdmin] = useState(false);

  const [showPrebuiltEnquiries, setShowPrebuiltEnquiries] = useState(false);
  const { userInfo, usersCustomPackages, paginate } = useSelector((state) => state?.user);
  const { fullyCustomizedEnquiries, paginateFully } = useSelector((state) => state?.fullyCustomizePackage)
  const { prebuiltEnquiries, paginatePrebuilt} = useSelector((state) => state?.prebuiltPackage)
  const { userBookings, paginateBookings } = useSelector((state) => state?.previousBookings);

  const RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;

  /**-------------------- State for managing all the pagination--------------*/
  const [pageFull, setPageFull] = useState(1) // for fully
  const [currentPrebuiltPage, setCurrentPrebuiltPage] = useState(1) // for prebuilt
  const [currentBookingPage, setCurrentBookingPage] = useState(1)
  const [currentCustomPackagePage, setCurrentCustomPackagePage] = useState(1)
  /** for custom packages */
  const totalCustomPages = Math.ceil(paginate?.total/paginate?.limit)
  /** for booking */
  const totalPagesBooking = Math.ceil(paginateBookings?.total / paginateBookings?.limit)

  /** for fully enquiry */
  const totalPagesFully = Math.ceil(paginateFully?.total / paginateFully?.limit)

  /** for prebuilt enquiry */
  const totalPagesPrebuilt = Math.ceil(paginatePrebuilt?.total/ paginatePrebuilt?.limit)

const handlePageCustomPackageClick =(page)=>{
  if(page >0 && page <= totalCustomPages){
    setCurrentCustomPackagePage(page)
  }
}

  const handlePageBookingClick = (page)=>{
    if(page >0 && page <= totalPagesBooking){
      setCurrentBookingPage(page)
    }
  }

  const handlePageClickFully = (page)=>{
    if(page >0 && page <= totalPagesFully){
      setPageFull(page)
    }
  }

  const handlePageClickPrebuilt =(page)=>{
    if (page > 0 && page <= totalPagesPrebuilt){
      setCurrentPrebuiltPage(page)
    }
  }

  let imageName = [];
  let lastProfileName = "";
  if (userInfo?.name) {
    imageName.push(userInfo.name);
 
    let newImageName = imageName[0].split(" ");
    console.log(newImageName);

    // Extract initials safely
    let firstInitial = newImageName[0]?.[0] || "";
    let secondInitial = newImageName[1]?.[0] || "";

    lastProfileName = firstInitial + secondInitial;
  }
 
  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, []);

useEffect(()=>{
   dispatch(getMyFullyCustomizedEnquiries({page: pageFull,limit:10}))
},[pageFull])

useEffect(()=>{
   dispatch(getMyPrebuiltEnquiry({page: currentPrebuiltPage, limit:10}))   
},[currentPrebuiltPage])

useEffect(() => {
    dispatch(getUserBookings({page:currentBookingPage, limit:10}));
}, [currentBookingPage]);

useEffect(()=>{
  dispatch(getPackagesCreatedByAdmin({page:currentCustomPackagePage, limit:10}))
},[currentCustomPackagePage])
const [isLoading, setLoading] = useState(false)

// api endpoints for booking routes
  const prebuilt_endpoint = `/api/v1/bookings/pre-built-package-enquiry`
  const prebuilt_verify_endpoint = `/api/v1/bookings/pre-built-package-enquiry/verify-payment`
  const fully_Endpoint =`/api/v1/bookings/fully-customize-package-enquiry`
  const fully_verify_endpoint = `/api/v1/bookings/fully-customize-package-enquiry/verify-payment`
  /**  payment handle for the prebuilt package */
  const handlePayment = async (id, createEndpoint, verifyEndpoint) => {
      setLoading(true);
      try {
        // Step 1: Create order on the backend
        const response = await axiosInstance.post(
          `${createEndpoint}/${id}`,
          {
            advancedPayment: 5000,
          }
        );
        console.log(`response:: ${JSON.stringify(response, null, 2)}`);

        const { order } = response.data;

        // Step 2: Set up Razorpay options
        const options = {
          key: RAZORPAY_KEY_ID,
          amount: order.advancedPayment,
          currency: "INR",
          // name: packagename,
          // description: `Payment for ${packagename}`,
          order_id: order.id,
          handler: async function (response) {
            // Step 3: Verify payment on the backend
            try {
              // Step 3: Verify payment on the backend
              const verifyPayment = await axiosInstance.post(verifyEndpoint,
                response
              );
              if (verifyPayment?.data?.success === true) {
                toast.success("🦄Payment Successfull");
                setTimeout(() => {
                  navigate("/");
                }, 400);
              }
            } catch (error) {
              console.log("ERR: ", error);
              if (error.response && error.response.status === 404) {
                // alert("Verification route not found. Please contact support.");
                toast.error(
                  "🦄Verification route not found. Please contact support"
                );
              } else {
                // alert("Payment verification failed. Please try again.");
                toast.error("🦄Payment verification failed. Please try again");
              }
              console.error("Error in payment verification:", error);
            }
          },
          prefill: {
            name: `manish`,
            email: `manishgupta@pearlorganisation.com`,
            contact: "9876543210",
          },
          theme: {
            color: "#3399cc",
          },
          modal: {
            ondismiss: function () {
              alert("Payment cancelled");
            },
          },
        };
          
        // Step 4: Open Razorpay checkout
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error("Error in payment process:", error);
        alert("Error occurred during payment. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  // console.log("the prebuilt enquiries data is", prebuiltEnquiries)
  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      
      {/** user details section */}
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
            {Array.isArray(userBookings) &&
              userBookings?.map((booking, index) => (
                <div
                  key={index}
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
                            <span className="font-bold text-xl">{booking?.totalPrice}</span>
                          </p>
                          <p className="text-gray-500 text-sm">
                            Date: {moment(booking?.createdAt).format("DD MMM YYYY")}
                          </p>
                        </div>
                        <p
                          className={`mt-2 sm:mt-0 font-medium ${booking?.bookingStatus === "Completed"
                            ? "text-green-600"
                            : booking?.bookingStatus === "Upcoming"
                              ? "text-yellow-600"
                              : "text-red-600"
                            }`}
                        >
                          Status: {booking?.bookingStatus}
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <p>Payment Status: {booking?.paymentStatus}</p>
                        <p>Travellers: {booking?.numberOfTravellers}</p>
                        <p>Razorpay Order ID: {booking?.razorpay_order_id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        )}
        <Pagination paginate={paginateBookings} currentPage={currentBookingPage} totalPages={totalPagesBooking} handlePageClick={handlePageBookingClick} />
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
              prebuiltEnquiries?.map((enquiry, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-sm mt-3 border border-gray-200"
                >
                  <div className="flex justify-between gap-6 ">
                    <div ></div>
                    <div className="flex place-items-end w-full flex-col gap-2">
                      <div><DownloadPrebuiltPdfButton data={enquiry} /></div>
                      <button className="bg-red-300 px-7 py-2 rounded-lg mt-4" onClick={() => handlePayment(enquiry?._id, prebuilt_endpoint, prebuilt_verify_endpoint)}> Book the Trip</button>
                    </div>
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
                      <div key={day?._id} className="mt-2 pl-4 border-l-2 border-gray-200">
                        <p className="font-medium text-gray-700">
                          Day {day?.day}: {day?.location}  ({day?.date}) yyyy/mm/dd
                        </p>
                        <p className="text-gray-600">
                          Hotel: {day?.selectedHotel?.name}
                        </p>
                        {day?.selectedActivities?.length > 0 && (
                          <div className="mt-1">
                            <p className="text-gray-600">Activities:</p>
                            {day?.selectedActivities?.map((activity) => (
                              <p key={activity?._id} className="text-gray-600 text-sm pl-2">
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
        <Pagination paginate={paginatePrebuilt} currentPage={currentPrebuiltPage} totalPages={totalPagesPrebuilt} handlePageClick={handlePageClickPrebuilt} />
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
            { fullyCustomizedEnquiries?.length >0 &&
              fullyCustomizedEnquiries?.map((enquiry, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
                >
                 <div className="flex flex-row justify-between">
                  <div></div>
                    <div className="flex flex-col place-items-end">
                      {enquiry && <DownloadPdfButton data={enquiry} />}
                      <div className="mt-4"><button className="bg-red-300 px-7 py-2 rounded-lg" onClick={() => handlePayment(enquiry?._id, fully_Endpoint, fully_verify_endpoint)}>Book the trip</button></div>
                    </div>
                 </div>


                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">
                          Enquiry ID: {enquiry?._id ?? "Not Found"}
                        </p>
                        <p className="text-gray-600 mt-2">
                          Vehicle: {enquiry?.selectedVehicle?.vehicleName ?? "No Vehicle Selected"}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {/* Enquiry Date: {moment(enquiry?.createdAt).format("DD MMM YYYY")} */}
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
        <Pagination paginate={paginateFully} currentPage={pageFull} totalPages={totalPagesFully} handlePageClick={handlePageClickFully} />
      </div>


      {/** custom packages created by the admin */}
      <div className="mt-8 border-t border-gray-300 pt-6">
        <button
          className="w-full text-center sm:text-left text-indigo-600 hover:text-indigo-800 font-semibold"
          onClick={() => setShowCustomPackagesCreatedByAdmin(!showCustomPackagesCreatedByAdmin)}
        >
          {showCustomPackagesCreatedByAdmin ? "Hide Enquiries" : "View My   Custom Packages"}
        </button>

          {showCustomPackagesCreatedByAdmin && (
            <div className="mt-6 space-y-4">
              {usersCustomPackages?.length > 0 &&
                usersCustomPackages?.map((enquiry, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
                  >
                    <div className="flex flex-row justify-between">
                      <div></div>
                      <div className="flex flex-col place-items-end">
                        {enquiry && <DownloadPdfButtonByAdmin data={enquiry} />}
                        {/* <div className="mt-4"><button className="bg-red-300 px-7 py-2 rounded-lg" onClick={() => handlePayment(enquiry?._id, fully_Endpoint, fully_verify_endpoint)}>Book the trip</button></div> */}
                      </div>
                    </div>


                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div>
                          <p className="font-semibold text-gray-800">
                            Enquiry ID: {enquiry?._id ?? "Not Found"}
                          </p>
                          <p className="text-gray-600 mt-2">
                            Vehicle: {enquiry?.selectedVehicle?.vehicleName ?? "No Vehicle Selected"}
                          </p>
                          <p className="text-gray-500 text-sm">

                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                        <p>Name: {enquiry?.user?.name}</p>
                        <p>Email: {enquiry?.user?.email}</p>
                        <p>Mobile: {enquiry?.user?.mobileNumber}</p>
                        <p>Travellers: {enquiry?.numberOfTravellers}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        <div>        <Pagination paginate={paginate} currentPage={currentCustomPackagePage} totalPages={totalCustomPages} handlePageClick={handlePageCustomPackageClick} />
       </div>
    </div>
  </div>

  );
};

export default ProfilePage;
