import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserDetails } from "../../features/user/userActions";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [showBookings, setShowBookings] = useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, []);
  console.log(userInfo, "user data in profile");

  const bookingsData = [
    {
      id: 1,
      destination: "Paris, France",
      date: "2024-03-15",
      hotel: "Hotel Eiffel Tower View",
      status: "Completed",
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      date: "2024-05-20",
      hotel: "Imperial Hotel",
      status: "Upcoming",
    },
  ];
  const bookingsData = [
    {
      id: 1,
      destination: "Paris, France",
      date: "2024-03-15",
      hotel: "Hotel Eiffel Tower View",
      status: "Completed",
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      date: "2024-05-20",
      hotel: "Imperial Hotel",
      status: "Upcoming",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-8 md:p-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <img
              src={userInfo?.profilePicture}
              alt="Profile"
              className="rounded-full h-24 w-24 mr-6 border-4 border-white shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                {userInfo?.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 font-bold">Email:</p>
              <p className="text-gray-600">{userInfo?.email}</p>
              <Link to="/change-password">
                <button className="mt-2 bg-blue-400 rounded-md p-2 text-xl">
                  Change Password
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <button
              className="text-indigo-600 hover:text-indigo-800 font-medium"
              onClick={() => setShowBookings(!showBookings)}
            >
              {showBookings ? "Hide Bookings" : "View My Trips"}
            </button>

            {showBookings && (
              <div className="mt-6">
                {bookingsData.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white p-4 rounded-md shadow-sm mt-3 border border-gray-200"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {" "}
                          {booking.destination}
                        </p>
                        <p className="text-gray-600 text-sm">{booking.date}</p>
                      </div>
                      <p
                        className={`text-${
                          booking.status === "Completed"
                            ? "green-500"
                            : booking.status === "Upcoming"
                            ? "yellow-500"
                            : "red-500"
                        } font-medium`}
                      >
                        {booking.status}
                      </p>
                    </div>
                    <p className="text-gray-600 mt-2">{booking.hotel}</p>
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
