import React from 'react'
 
const DestinationCard = ({data}) => {
  return (
      <div>  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-6 shadow-md">
              {data.map((destination, index) => (
                  <div key={index} className="shadow-md rounded-lg overflow-hidden w-full">  
                      <img src={destination.imagePath} alt={destination.name} className="w-full h-48 object-cover" />  
                      <div className="p-4">
                          <h3 className="text-lg font-semibold">{destination.name}</h3> 
                          
                      </div>
                  </div>
              ))}
      </div>
    </div>
  )
}

export default DestinationCard