import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const tripData = [
    {
        imagePath: "Gradient.png",   // Replace with your actual image URLs
        price: "₹8,999/- onwards",
        title: "3 Days Tirthan Valley Expedition: A Nature Lover's Retreat",
        duration: "2N/3D",
        location: "Delhi - Delhi",
        dates: "25 Oct, 8 Nov +5 batches",
        link: "/trip/manali-lahaul",  // Example link
    },
    {
        imagePath: "Gradient.png",  
        price: "₹8,499/- onwards",
        title: "3 Days Manali to Lahaul Adventure: A Thrilling Himalayan Journey",
        duration: "2N/3D",
        location: "Delhi - Delhi",
        dates: "25 Oct, 8 Nov +5 batches",
        link: "/trip/manali-lahaul", // Example link
    },
    // ... more trip data
];

const TripCard = ({ trip }) => {
    return (
        <a href={trip.link} className="block shadow-md rounded-lg overflow-hidden relative group bg-cover bg-center h-96"   
            style={{ backgroundImage: `url(${trip.imagePath})` }}>  
            {/* Removed <img> tag */}
            <div className="absolute top-4 right-4 bg-yellow-400 px-2 py-1 rounded text-white font-semibold">
                {trip.price}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-3">  
                <h3 className="text-base font-semibold mb-2 text-white">{trip.title}</h3>
                <div className="flex flex-row justify-between items-center mb-2 text-teal-300">
                    <div className="flex items-center space-x-1">  
                        <FontAwesomeIcon icon={faClock} color='cyan' className='pr-1' />
                        <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">  
                        <FontAwesomeIcon icon={faMapMarkerAlt} color='cyan' className='pr-1' />
                        <span>{trip.location}</span>
                    </div>
                </div>
                <div className="flex items-center justify-start text-white text-sm pb-1">  
                    <FontAwesomeIcon icon={faCalendarAlt} color='cyan' className='pr-1' /> <span>{trip.dates}</span>
                </div>
            </div>
        </a>
    );
};


export const BestPackages = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tripData.map((trip, index) => (
                <TripCard key={index} trip={trip} />
            ))}
        </div>
    );
};

