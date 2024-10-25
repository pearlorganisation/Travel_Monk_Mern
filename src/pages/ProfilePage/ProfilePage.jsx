import React, { useState } from 'react';

const ProfilePage = () => {
    const [showBookings, setShowBookings] = useState(false);

    const userProfile = {
        username: 'JohnDoe123',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        city: 'New York',
        country: 'USA',
        profilePicture: '/HeroImg.jpg',  
    };

    const bookingsData = [
        {
            id: 1,
            destination: 'Paris, France',
            date: '2024-03-15',
            hotel: 'Hotel Eiffel Tower View',
            status: 'Completed',
        },
        {
            id: 2,
            destination: 'Tokyo, Japan',
            date: '2024-05-20',
            hotel: 'Imperial Hotel',
            status: 'Upcoming',
        }, 
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto p-8 md:p-12">  
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">  
                        <img
                            src={userProfile.profilePicture}
                            alt="Profile"
                            className="rounded-full h-24 w-24 mr-6 border-4 border-white shadow-lg"  
                        />
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800">{userProfile.firstName} {userProfile.lastName}</h2>
                            <p className="text-gray-600">@{userProfile.username}</p>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                        <div>
                            <p className="text-gray-700 font-bold">Email:</p>
                            <p className="text-gray-600">{userProfile.email}</p>
                        </div>
                        <div>
                            <p className="text-gray-700 font-bold">Location:</p>
                            <p className="text-gray-600">{userProfile.city}, {userProfile.country}</p>
                        </div>
                    </div>


                    <div className="mt-10 border-t border-gray-200 pt-6">  
                        <button
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                            onClick={() => setShowBookings(!showBookings)}
                        >
                            {showBookings ? 'Hide Bookings' : 'View My Trips'}
                        </button>

                        {showBookings && (
                            <div className="mt-6">
                                {bookingsData.map(booking => (
                                    <div key={booking.id} className="bg-white p-4 rounded-md shadow-sm mt-3 border border-gray-200">
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-semibold text-gray-800"> {booking.destination}</p>
                                                <p className="text-gray-600 text-sm">{booking.date}</p>
                                            </div>
                                            <p className={`text-${booking.status === 'Completed' ? 'green-500' : booking.status === 'Upcoming' ? 'yellow-500' : 'red-500'} font-medium`}>
                                                
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