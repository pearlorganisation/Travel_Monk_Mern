import React from "react";

import { useForm } from "react-hook-form";
import Image1 from "../../assets/images/bus1.png";
import Image2 from "../../assets/images/bus2.png";
import Image3 from "../../assets/images/bus3.png";
import Image4 from "../../assets/images/image4.png";

import Air from ".././../assets/logos/air.png";
import Star from ".././../assets/logos/star.png";
import FreeB from ".././../assets/logos/breakfast.png";
import Wifi from ".././../assets/logos/wifi.png";
import Parking from ".././../assets/logos/parking.png";

import Sea from ".././../assets/logos/sea.png";
import Cancel from ".././../assets/logos/cancel.png";

 

const features = [
    { id: 1, name: "CCTV", logo: Parking },
    { id: 2, name: "Water Bottle", logo: Wifi },
    { id: 3, name: "USB Port for charger", logo: Air },
    { id: 4, name: "Air Conditioner", logo: Sea },
    { id: 5, name: "E Ticket", logo: FreeB },
]

 

const RoomDetails = () => {
    return (
        <div className="flex flex-row gap-8 pl-6">
            <div className="w-[80%] mt-2">
                <div class="flex space-x-4 mb-4">
                    <img src="hotel1.jpg" alt="Hotel Image 1" class="w-1/4 rounded-lg" />
                    <img src="hotel2.jpg" alt="Hotel Image 2" class="w-1/4 rounded-lg" />
                    <img src="hotel3.jpg" alt="Hotel Image 3" class="w-1/4 rounded-lg" />
                    <div class="w-1/4 flex items-center justify-center bg-gray-200 rounded-lg">
                        <span class="text-gray-600">50 More</span>
                    </div>
                </div>

                <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
                    <div className="flex flex-row gap-2 items-center px-3">
                        <p className="text-md font-bold  text-black  text-2xl py-1 rounded-md">
                            NeuGo A Luxury Bus Experience
                        </p>
                        <div className="flex flex-row gap-2 items-center">
                            <img src={Star} className="w-3 h-3" />
                            <h3>5.0</h3>
                        </div>
                    </div>

                    <p className="text-md mt-3 px-3 font-semibold">
                        H.No 5-3 askdjhaksd aslkdjasd alskdjlasdj asldkjalsjkd asldkjaljsd
                        alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk
                        alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd
                        lkajsdlkasjlasd lakjsdlkja
                    </p>
                    <p className="text-sm text-gray-400 mt-3 px-3">
                        Offeringthe Ginger Promise askdjhaksd aslkdjasd alskdjlasdj
                        asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja
                        lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd
                        alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja asldkjalsjkd asldkjaljsd
                        alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk
                        alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd
                        lkajsdlkasjlasd lakjsdlkja alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja
                        lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd
                        alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja
                    </p>
                </div>

                <div className="mt-6  rounded-xl w-full bg-gray-200 p-4">
                    <div className="px-3">
                        <p className="text-md font-bold  text-black  text-lg py-1 rounded-md">
                            This Bus offers :
                        </p>

                        <div className="grid grid-cols-4 items-center justify-start mt-4">
                            {features.map((feature) => (
                                <div className="flex flex-row gap-2">
                                    <img src={feature.logo} className="w-8 h-8 " />
                                    <h3>{feature.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6  rounded-xl w-full bg-gray-200 p-4 mb-6">
                    <div className="px-3">
                        <p className="text-md font-bold  text-black  text-xl py-1 rounded-md">
                            Travel Related Policies :
                        </p>
                        <p className="text-md font-bold  text-black  text-lg rounded-md pt-4"> Child Passenger Policy</p>
                        <p>Children Above 5 will need a Ticket</p>

                        <p className="text-md font-bold  text-black  text-lg rounded-md pt-3">Luggage Policy</p>
                        <p>2 Pieces of luggage will be accepted free of charge per passenger.Excess items will be chargeable.</p>
                        
                        <p className="text-md font-bold  text-black  text-lg rounded-md pt-3">Pets Policy</p>
                        <p>Pets are not allowed</p>
                        
                        <p className="text-md font-bold  text-black  text-lg rounded-md pt-3"> Liquor Policy</p>
                        <p>Carrying or consuming liquor inside bus is prohibited.Bus opertaor reserves the right to deboard the drunk passenger.</p>

                        <p className="text-md font-bold  text-black  text-lg rounded-md pt-3">Pickup Time Policy</p>
                         <p>Bus operator is not obligated to wait beyond the scheduled departure time of the bus. No refund request will be entertained for late arriving passengers.</p>



                    </div>
                </div>
            </div>

            <div className="w-[20%]">
                <div className="">
                    <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
                        <h1 className="text-lg font-bold">Neuo Go</h1>
                        <h3>56 Seats</h3>

                        <div className="px-4">
                            <h3 className="text-gray-400 text-sm"> • Water Bottles </h3>
                            <h3 className="text-gray-400 text-sm">
                                • CCTV
                            </h3>
                            <h3 className="text-gray-400 text-sm">
                                • USB Port for charger
                            </h3>
                            <h3 className="text-gray-400 text-sm"> • Air Conditioner </h3>
                            <h3 className="text-gray-400 text-sm"> • E-Ticket </h3>

                        </div>

                        <h3 className="text-gray-400 text-sm mt-3">Per Passenger</h3>

                        <div className="flex flex-row gap-4 items-center justify-start">
                            <h1 className="font-bold text-3xl"> ₹1000 </h1>

                            <h1 className="text-gray-400 text-sm">+18% taxes and fees </h1>
                        </div>

                        <div className="flex items-center justify-start mt-2">
                            <button className="bg-blue-400 py-2 px-6 rounded-md text-white ">
                                BOOK NOW
                            </button>
                        </div>
                    </div>

                    {/* <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
                        <div className="flex flex-row gap-2 items-center">
                            <h1 className="text-md font-bold bg-red-700 text-white px-3 py-1 rounded-md">
                                5.0
                            </h1>
                            <h3>Excellent</h3>
                        </div>

                        <div className="">
                            <p className="text-gray-700 mt-3 text-sm">
                                71% of the guests have rated this property 4 stars and above
                            </p>
                        </div>

                        <h3 className="text-blue-400 text-sm mt-3">Read Reviews</h3>
                    </div> */}

                    <div className="mt-2 max-h-max rounded-xl w-full bg-gray-200">
                        <div className="flex flex-col p-3">
                           <div className="pt-2">
                            <h1 className="font-bold text-xl">Boarding Point</h1>
                                <ol className="pl-3">
                                    <li>• 12:35 ISBT, Delhi</li>
                                    <li>• 12:40 Kashmiri Gate, Delhi</li>
                                    <li>• 13:25 Jamuna Bazar</li>
                                    <li>• 14:05 Anand Vihar</li>
                                </ol>

                            </div>
                            <div className="pt-2">
                                <h1 className="font-bold text-xl">Dropping Point</h1>
                                <ol className="pl-3">
                                    <li>• 8:00 Nepali Pharm, Dehradun</li>
                                    <li>• 8:30 ISBT, Dehradun</li>

                                </ol>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
