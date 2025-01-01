import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getHotelsByDestination } from '../../features/hotel/hotelActions'
import { baseURL } from '../../services/axiosInterceptor'

const Hotels = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { destinationHotels } = useSelector((state)=> state.hotels);

    useEffect(()=>{
        dispatch(getHotelsByDestination(id))            
    },[])
  return (
      <div className="container mx-auto p-4">
          {/* Search Bar Section */}
          <div className="w-full mb-6">
              <div className="flex gap-2">
                  <input
                      type="text"
                      placeholder="Search hotels..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Search
                  </button>
              </div>
          </div>

           <div className="flex gap-4">
               <div className="w-1/5 bg-gray-50 p-4 rounded-lg">
                   <h2 className="text-lg font-semibold">Filters</h2>
              </div>

               <div className="w-4/5 bg-white p-4 rounded-lg">
                   <h1 className="text-2xl font-bold mb-4">Hotels</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {destinationHotels.length > 0 && destinationHotels?.map((hotel) => (
                          <div key={hotel._id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                              {/* Hotel Image */}
                              <div className="relative h-48 w-full">
                                  <img
                                      src={`${baseURL}/${hotel?.image.path}`}
                                      alt={hotel?.name}
                                      className="w-full h-full object-cover"
                                  />
                              </div>

                              {/* Hotel Details */}
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">{hotel?.name}</h2>

                                  <div className="text-gray-600 text-sm space-y-1">
                                      <p className="flex items-center">
                                          <span className="font-medium">Location:</span>
                                          <span className="ml-2">{hotel?.city}, {hotel?.state}</span>
                                      </p>

                                      <p className="flex items-center">
                                          <span className="font-medium">Destination:</span>
                                          <span className="ml-2">{hotel?.destination?.name}</span>
                                      </p>

                                      <p className="flex items-center">
                                          <span className="font-medium">Price:</span>
                                          <span className="ml-2">₹{hotel?.estimatedPrice} per night</span>
                                      </p>
                                  </div>

                                  {/* Amenities */}
                                  <div className="mt-4">
                                      <h3 className="font-medium mb-2">Amenities:</h3>
                                      <div className="flex flex-wrap gap-2">
                                          {hotel?.amenities?.map((amenity, index) => (
                                              <span
                                                  key={index}
                                                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                              >
                                                  {amenity}
                                              </span>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Hotels