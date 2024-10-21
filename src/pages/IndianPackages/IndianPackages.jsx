import React from 'react'
import DestinationCard from '../../components/DestinationCards/DestinationCard'
const destinationData = [
    {
        name: "Ladakh",
        imagePath: "Gradient.png"
    },
    {
        name: "Massori",
        imagePath: "Gradient.png"
    },
    {
        name: "leh",
        imagePath: "Gradient.png"
    },
    {
        name: "Manali",
        imagePath: "Gradient.png"
    },
    {
        name: "Shimla",
        imagePath: "Gradient.png"
    },
    {
        name: "Gartang",
        imagePath: "Gradient.png"
    },

]
const IndianPackages = () => {
  return (
    <div>
          <div className='h-96'
              style={{
                  backgroundImage: `url('/indian.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }}
          >
              <div className='text-white lg:pt-20 lg:pl-40'>
                  <h1 className='text-5xl font-bold'>Unparalleled India Tours</h1>
                  <h1 className='text-2xl bg-yellow-300 w-max px-2 text-black mt-3 py-1 rounded-sm'>A Journey Through Time, Colour And Culture</h1>
              </div>
          </div>
          <div className='flex justify-center items-center h-full '>
              <div className='bg-slate-200 my-6'>
                  <h1 className='text-3xl font-bold'>About India Tours</h1>
              </div>
          </div>
          <div>
              <h1 className='text-4xl font-bold text-blue-500 w-full justify-center items-center flex'>Destinations</h1>
              <div className='p-4'>
                <DestinationCard data={destinationData} />
              </div>
          </div>

    </div>
  )
}

export default IndianPackages