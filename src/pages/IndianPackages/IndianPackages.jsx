import React, { useEffect, useState } from "react";
import DestinationCard from "../../components/DestinationCards/DestinationCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations } from "../../features/trips/tripActions";
import { BestPackages } from "../../components/DestinationCards/BestDestinationCard";
import Pagination from "../../components/Pagination/Pagination";
import { getBestSellerPackages } from "../../features/package/packageActions";

const IndianPackages = () => {
    const destState = useSelector((state) => state.trip.destinations);
    const { bestSellersPackages, bestSellerPaginate } = useSelector((state)=> state.packages)
    /** for the destinations */
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(destState?.pagination?.total / destState?.pagination?.limit)
    // console.log("total pages are", totalPages)
  
    const handlePage =(page)=>{
      if(page >0 && page <= totalPages){
        setCurrentPage(page)
      }
    }
    /** for best-seller packages */
    const [bestCurrentPage, setBestCurrentPage] = useState(1)
    const totalBestPages = Math.ceil(bestSellerPaginate?.total/bestSellerPaginate?.limit)

    const handlePageClickBestSeller =(page)=>{
      if(page >0 && page <= totalBestPages){
        setBestCurrentPage(page)
      }
    }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDestinations({destType:"Indian", page:currentPage, limit:10}));
   }, [currentPage]);

   useEffect(()=>{

     dispatch(getBestSellerPackages({ type: "Indian", page: bestCurrentPage, limit: 10 }))
   },[bestCurrentPage])
  // console.log("Dest", destState);

  return (
    <div>
      <div
        className="h-96"
        style={{
          backgroundImage: `url('/indian.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white lg:pt-20 lg:pl-40">
          <h1 className="text-5xl font-bold">Unparalleled India Tours</h1>
          <h1 className="text-2xl bg-yellow-300 w-max px-2 text-black mt-3 py-1 rounded-sm">
            A Journey Through Time, Colour And Culture
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full ">
        <div className=" my-6">
          <h1 className="text-3xl font-bold">About Indian Tours</h1>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-500 w-full justify-center items-center flex">
          Destinations
        </h1>
        <div className="p-4">
          {Array.isArray(destState?.data)&& 
          <div>
              <DestinationCard data={destState?.data} />
              <Pagination totalPages={totalPages} paginate={destState?.pagination} currentPage={currentPage} handlePageClick={handlePage} />
          </div>
          }
        </div>

        <div className="mt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-blue-500 w-full text-center">
              Best Seller Packages
            </h1>
            <h2 className="text-xl font-normal text-gray-400">
              Find your perfect travel experience with our top-rated packages
            </h2>
          </div>
          <div className="px-10 py-4">
            {Array.isArray(bestSellersPackages) && 
            <div>
                <BestPackages data={bestSellersPackages} />
                <Pagination totalPages={totalBestPages} paginate={bestSellerPaginate} currentPage={bestCurrentPage} handlePageClick={handlePageClickBestSeller} />
            </div>
            }  
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPackages;
