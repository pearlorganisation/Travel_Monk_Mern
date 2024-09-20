// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const sliderData = [
//   {
//     id: 1,
//     imageUrl: "",
//     title: "Monty",
//     price: "12000",
//     date: "21 Sept",
//     location: "Dhanaulti",
//   },
//   {
//     id: 2,
//     imageUrl: "",
//     title: "Silly",
//     price: "17000",
//     date: "28 Sept",
//     location: "Mussoorie",
//   },
//   {
//     id: 3,
//     imageUrl: "",
//     title: "Billy",
//     price: "21000",
//     date: "2 Sept",
//     location: "Doon",
//   },
//   {
//     id: 4,
//     imageUrl: "",
//     title: "Ashaw",
//     price: "27000",
//     date: "7 Sept",
//     location: "Dharamsala",
//   },
// ];

// function MultipleItems() {
//   let sliderRef = useRef(null);
//   const next = () => {
//     sliderRef.slickNext();
//   };
//   const previous = () => {
//     sliderRef.slickPrev();
//   };

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="">
//       <Slider
//         ref={(slider) => {
//           sliderRef = slider;
//         }}
//         {...settings}
//       >
//         {sliderData.map((cardData, i) => (
//           <div key={i} className="h-96  w-40 p-2    flex ">
//             <div className=" h-full relative z-0 w-full">
//               <img
//                 className="absolute inset-0  rounded-lg z-0 w-full h-full object-cover"
//                 src={cardData.imageUrl}
//                 alt="img"
//               />

//               <div className=" h-full p-4 rounded-lg  w-full bg-black bg-opacity-50  relative z-20">
//                 <div className="h-[70%]">
//                   <div className="w-full flex justify-end">
//                     <div className="bg-yellow-400 font-semibold w-fit px-2 flex items-center gap-2 rounded-full">
//                       {cardData.price} <span className="text-sm">onwards</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="h-[30%] flex-1 text-sm text-white">
//                   <div className="mb-4">{cardData.title}</div>
//                   <div className="flex my-2 justify-between">
//                     <IconWithName
//                       iconName="ri-time-fill"
//                       label={cardData.duration}
//                     />
//                     <IconWithName
//                       iconName="ri-calendar-2-line"
//                       label={cardData.date}
//                     />
//                   </div>

//                   <div className="flex  justify-between">
//                     <IconWithName
//                       iconName="ri-map-pin-2-fill"
//                       label={cardData.location}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       <div className="flex justify-end gap-5">
//         <button className="button" onClick={previous}>
//           <i className="ri-arrow-left-circle-line text-neutral-500 text-3xl"></i>
//         </button>

//         <button className="button" onClick={next}>
//           <i className="ri-arrow-right-circle-line text-neutral-500 text-3xl"></i>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MultipleItems;

// const IconWithName = ({ iconName, label }) => {
//   return (
//     <div className="flex items-center gap-1 justify-center w-fit">
//       <i
//         className={`${iconName}`}
//         style={{ color: "#01afd1", fontSize: "15px" }}
//       ></i>
//       <div className="text-[12px] ">{label}</div>
//     </div>
//   );
// };
