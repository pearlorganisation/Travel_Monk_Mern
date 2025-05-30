import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getHotelsByDestination } from '../../features/hotel/hotelActions'
import { baseURL } from '../../services/axiosInterceptor'
import { useForm } from 'react-hook-form'
import { searchDestination } from '../../features/destination/destinationActions'
import moment from 'moment/moment'
import Pagination from '../../components/Pagination/Pagination'
import { toast } from 'react-toastify'
import { useDebounce } from '../../hooks/useDebounceHook'
const priceRanges =[
    {
        id:1,
        range:[0,3000]
    },
    {
        id:2,
        range:[3000,6000]
    },
    {
        id:3,
        range:[6000,9000]
    },
    {
        id:4,
        range:[9000,12000]
    },
    {
        id:5,
        range:[12000,15000]
    }
]
const Hotels = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [ searchParams, setSearchParams] = useSearchParams({})
    let { hotelStartDate, HotelEndDate, hotelTravellers, locationName } = location.state ?? {}

    const { destinationHotels, paginate } = useSelector((state)=> state.hotels);
    const [selectedRange, setSelectedRange] = useState([])
    const [searchQuery, setSearchQuery] = useState(locationName)   
     const { handleSubmit , register, watch, formState:{errors}} = useForm({
        defaultValues:{
            checkIn: hotelStartDate,
            checkOut: HotelEndDate,
            travellers: hotelTravellers
        }
    })
    console.log("the recieved location name from frontend is", locationName)

    const [newDestinationId,setNewDestinationId] = useState(id)
    // console.log('-------------the new destination id', newDestinationId)
    const [currentPage, setCurrentPage] = useState(1)

    

    /**Pagination Logic */
    const totalPages = Math.ceil(paginate?.total / paginate?.limit)
    // console.log('------------total pages', totalPages)

    const handleChangePage = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    /** hotels page details */
    const hotelPageCheckInDate = watch("checkIn")
    const hotelPageCheckOutDate = watch("checkOut")
    const hotelPageTravellerCount = watch("travellers")
     
    hotelStartDate = hotelPageCheckInDate
    HotelEndDate = hotelPageCheckOutDate
    hotelTravellers = hotelPageTravellerCount


    console.log("the states from hero is ", hotelStartDate, HotelEndDate, hotelTravellers)
    const debouncedSearchQuery = useDebounce(searchQuery, 500)
    useEffect(()=>{
        const searchParams = new URLSearchParams(location.search);
        const existingPriceRange = searchParams.getAll("priceRange")
        // console.log("======= the search query is", typeof searchQuery)
        if(existingPriceRange.sort().join(",") !== selectedRange.sort().join(",")  ){
            searchParams.delete("priceRange")

            selectedRange.forEach((range) => searchParams.append("priceRange", range))   
            navigate({
                pathname: location.pathname,
                search: decodeURIComponent(searchParams.toString())
            },
            {
            })
            dispatch(getHotelsByDestination({ id: newDestinationId,limit:12, priceRange: selectedRange, search: debouncedSearchQuery , page: currentPage }))
        }
        if(searchQuery?.length>=0){
            dispatch(getHotelsByDestination({ id: newDestinationId, limit: 12, priceRange: selectedRange, search: debouncedSearchQuery, page: currentPage })
        )
        }
 
    }, [selectedRange, navigate, location, dispatch, debouncedSearchQuery, newDestinationId, currentPage, locationName]);
 


    /**------------handle for selecting the price range---------------*/
    const handleSelectRange = (e)=>{
      let updatedRange = [...selectedRange];
      if(updatedRange.includes(e.target.value)){
        updatedRange = updatedRange.filter((rg)=> rg !== e.target.value)
      }else{
        updatedRange.push(e.target.value)
      }
      setSelectedRange(updatedRange)
    }
   
    /**----------------------Seaech query handle--------------------*/
    const handleSearchQuery =(e)=>{
        setSearchQuery(e.target.value)
    }

    if(searchQuery==""){
        setSearchQuery(locationName)
    };
    
    console.log("initial search and after search query is", searchQuery)
    const submitForm = async(data)=>{
        const { hotelDestination } = data;
       try {
        const actionResult = await dispatch(
           searchDestination(hotelDestination)
        ).unwrap();
        if(actionResult?.data?.length > 0){
           setNewDestinationId(actionResult.data[0]._id)
            
         }else if(actionResult?.success == false){
            toast.error("No Such destination Available")
            console.log("No results found for the selected destination.");
        }else{
            return ;
        }
       } catch (error) {
           console.error("Failed to fetch destination data:", error);

       }
    }

    const inclusionHelper = (amenities) => {
        let newArr = amenities.split(",");
        console.log("the new arr is", newArr);
        return (
            <ul>
                {newArr.map((item, index) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
        );
    }
    return (
      <div className="container mx-auto p-4">
        {/* Search Bar Section */}
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="w-full mb-6">
                            <div className="flex flex-col md:flex-row md:items-end gap-4">
                                <div className="flex flex-col w-full md:w-1/4">
                                    <label htmlFor="search" className="text-gray-600 mb-1">Search</label>
                                    <input
                                        type='text'
                                        id="search"
                                        onChange={e => handleSearchQuery(e)}
                                        placeholder='Search by Locality or hotel name'
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col w-full md:w-1/4">
                                    <label htmlFor="checkIn" className="text-gray-600 mb-1">Check In</label>
                                    <input
                                        type="date"
                                        id="checkIn"
                                        {...register("checkIn")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col w-full md:w-1/4">
                                    <label htmlFor="checkOut" className="text-gray-600 mb-1">Check Out</label>
                                    <input
                                        type="date"
                                        id="checkOut"
                                        {...register("checkOut")}
                                        min={hotelStartDate}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col w-full md:w-1/4">
                                    <label htmlFor="travellers" className="text-gray-600 mb-1">No Of Travellers</label>
                                    <input
                                        type="text"
                                        id="travellers"
                                        {...register("travellers")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                        </div>
                    </form>


                   <div className="flex flex-col md:flex-row gap-4">
                       <div className="w-full md:w-1/5 bg-gray-50 p-4 rounded-lg">
                           <h2 className="text-lg font-semibold">Filters</h2>
                           {/* <div>
                                <input
                                    type='text'
                                //   value={locationName}
                                    onChange={e=>handleSearchQuery(e)}
                                    placeholder='Search by Locality or hotel name'
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />                            
                           </div> */}
                           {/**------------------Filter by price range-------------------*/}
                                <div className='mt-4'>
                                    <h1>Filter by Estimate Price</h1>
                                        <div>
                                            {priceRanges.map((range) => (
                                                <div key={range.id} className="flex items-center mb-2">
                                                    <input
                                                        type="checkbox"
                                                        value={range.range}
                                                        onChange={e=>handleSelectRange(e)}
                                                        id={`price-range-${range.id}`}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor={`price-range-${range.id}`}>
                                                        ₹{range.range[0]} - ₹{range.range[1]}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                </div>
                                
                    </div>

               <div className="w-4/5 bg-white p-4 rounded-lg">
                   <h1 className="text-2xl font-bold mb-4">Hotels</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Array.isArray(destinationHotels) &&  destinationHotels?.length >0  ? 
                      destinationHotels?.map((hotel) => (
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
                                      <h3 className="font-medium mb-2">Inclusion:</h3>
                                      <div className="flex flex-wrap gap-2">
                                          {hotel?.inclusion?.length >0 ? hotel?.inclusion?.map((amenity, index) => (
                                              <span
                                                  key={index}
                                                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                              >
                                                  {inclusionHelper(amenity)}
                                              </span>
                                          )):<><span>N/A</span></>}
                                      </div>
                                  </div>
                              </div>
                              <Link
                                  to={`/hotel-details/${hotel?._id}`}
                                  state={{
                                      hotel,
                                      hotelStartDate,
                                      HotelEndDate,
                                      hotelTravellers
                                  }}
                                  className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                              >
                                  View Details
                              </Link>
                           
                          </div>
                      )) : <h1 className='text-nowrap'>No Hotels found for <b>{searchQuery.toUpperCase(

                      )}</b> location...</h1>}
                  </div>
              </div>
          </div>
            <Pagination paginate={paginate} currentPage={currentPage} totalPages={totalPages} handlePageClick={handleChangePage} />
      </div>
  )
}

export default Hotels