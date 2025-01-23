import React from "react";
const GoogleMapsEmbed = ({data}) => {
  const apiKey = "AIzaSyCgtfQ3Ys0-OduNM1K2dk1-7mQt5AZ2FgQ"; // Replace with your actual Google Maps API key
// console.log('------------data is', data)
let mapArray =[];
for(const key of data){
  // console.log('------------value is', data[key])
  mapArray.push(Object.values(key))
}

console.log('-------the map array is', mapArray)
/**------------------Dynamic map data praparation---------------------*/
/**-----------get the length of the mapdata----------------*/
const length = mapArray.length;

/**------------origin data is prepared----------*/
let origin2 = mapArray[0][0].toString() +","+ mapArray[0][1].toString()
console.log('the origin is ', length,origin2, typeof origin2)

let destination2 = mapArray[length-1][0].toString() + "," + mapArray[length-1][1].toString()  

let wayPoints2 =[]
 for(let i = 0; i <= length-1;i++){
  let coordinates
  coordinates = mapArray[i][0].toString() + "," + mapArray[i][1].toString()
  console.log('----------the cordinates are', coordinates)
  wayPoints2.push(coordinates)
 }
// console.log('=============the waypoints are',  wayPoints2)

// console.log('-------------the destination data is', destination2)
  // Coordinates for origin, destination, and waypoints
  const origin =  origin2 //"34.1526,77.5770"; // Leh
  const destination =destination2   //"34.1526,77.5770"; // Leh
  const waypoints = wayPoints2 
  console.log("the origin and destination is", origin, destination)
  // [
  //   "34.2431,77.5750", // Khardung La
  //   "34.6621,77.4573", // Nubra Valley
  //   "34.0513,78.4508", // Pangong Lake
  //   "33.8818,78.2639", // Tso Moriri
  // ];

  // Construct waypoints string
  const waypointsStr = waypoints.join("|");
  console.log('----------waypointsStr', waypointsStr)

  // Generate map URL
  // const mapURL = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodeURIComponent(
  //   origin
  // )}&destination=${encodeURIComponent(
  //   destination
  // )}&mode=driving`;
  const mapURL = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&mode=driving`;

  

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <iframe
        title="Google Maps Directions"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapURL}
        allowFullScreen
      ></iframe>
    </div>
  );
};

 

 

export default GoogleMapsEmbed;
