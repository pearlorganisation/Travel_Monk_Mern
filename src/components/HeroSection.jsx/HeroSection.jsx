// ----------------------------imports-----------------------------------------
import React, { useRef, useState } from "react";
import HeroSupportingComponent from "./HeroSupportingComponent";
import Reviews from "./Reviews/Reviews";
import { useNavigate } from "react-router-dom";

const heroData = [
  {
    title: "Trip",
    img: (
      <svg
        className="fill-black group-hover:fill-blue-400"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.7921 26.6666H8.66675C6.82808 26.6666 5.33341 25.172 5.33341 23.3333C5.33341 21.4946 6.82808 20 8.66675 20H18.0001C20.5734 20 22.6667 17.9066 22.6667 15.3333C22.6667 12.76 20.5734 10.6666 18.0001 10.6666H11.5187C11.0291 11.6265 10.4227 12.5221 9.71341 13.3333H18.0001C19.1027 13.3333 20.0001 14.2306 20.0001 15.3333C20.0001 16.436 19.1027 17.3333 18.0001 17.3333H8.66675C5.35875 17.3333 2.66675 20.0253 2.66675 23.3333C2.66675 26.6413 5.35875 29.3333 8.66675 29.3333H21.4574C20.8031 28.5103 20.2445 27.6157 19.7921 26.6666ZM6.66675 2.66663C4.46141 2.66663 2.66675 4.46129 2.66675 6.66663C2.66675 10.9173 6.66675 13.3333 6.66675 13.3333C6.66675 13.3333 10.6667 10.916 10.6667 6.66663C10.6667 4.46129 8.87208 2.66663 6.66675 2.66663ZM6.66675 8.66663C6.40402 8.66654 6.14388 8.6147 5.90118 8.51408C5.65848 8.41346 5.43798 8.26601 5.25226 8.08017C5.06654 7.89433 4.91925 7.67373 4.81878 7.43097C4.71832 7.1882 4.66666 6.92802 4.66675 6.66529C4.66684 6.40256 4.71867 6.14242 4.81929 5.89972C4.91992 5.65702 5.06736 5.43652 5.2532 5.2508C5.43904 5.06509 5.65964 4.91779 5.90241 4.81733C6.14517 4.71687 6.40535 4.66521 6.66808 4.66529C7.19869 4.66547 7.7075 4.87642 8.08257 5.25175C8.45764 5.62707 8.66826 6.13602 8.66808 6.66663C8.6679 7.19724 8.45695 7.70604 8.08163 8.08112C7.70631 8.45619 7.19736 8.6668 6.66675 8.66663Z" />
        <path d="M25.3333 18.6666C23.1279 18.6666 21.3333 20.4613 21.3333 22.6666C21.3333 26.9173 25.3333 29.3333 25.3333 29.3333C25.3333 29.3333 29.3333 26.916 29.3333 22.6666C29.3333 20.4613 27.5386 18.6666 25.3333 18.6666ZM25.3333 24.6666C25.0705 24.6665 24.8104 24.6147 24.5677 24.5141C24.325 24.4135 24.1045 24.266 23.9188 24.0802C23.733 23.8943 23.5858 23.6737 23.4853 23.431C23.3848 23.1882 23.3332 22.928 23.3333 22.6653C23.3333 22.4026 23.3852 22.1424 23.4858 21.8997C23.5864 21.657 23.7339 21.4365 23.9197 21.2508C24.1055 21.0651 24.3261 20.9178 24.5689 20.8173C24.8117 20.7169 25.0719 20.6652 25.3346 20.6653C25.8652 20.6655 26.374 20.8764 26.7491 21.2517C27.1241 21.6271 27.3348 22.136 27.3346 22.6666C27.3344 23.1972 27.1235 23.706 26.7481 24.0811C26.3728 24.4562 25.8639 24.6668 25.3333 24.6666Z" />
      </svg>
    ),
  },
  {
    title: "Hotel",
    img: (
      <svg
        className="fill-black group-hover:fill-blue-400"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.33325 18.668H11.9999V21.3346H9.33325V18.668Z" />
        <path d="M25.3333 2.66663H14.6667C13.9594 2.66663 13.2811 2.94758 12.781 3.44767C12.281 3.94777 12 4.62605 12 5.33329V13.3333H6.66667C5.196 13.3333 4 14.5293 4 16V28C4 28.3536 4.14048 28.6927 4.39052 28.9428C4.64057 29.1928 4.97971 29.3333 5.33333 29.3333H26.6667C27.0203 29.3333 27.3594 29.1928 27.6095 28.9428C27.8595 28.6927 28 28.3536 28 28V5.33329C28 4.62605 27.719 3.94777 27.219 3.44767C26.7189 2.94758 26.0406 2.66663 25.3333 2.66663ZM6.66667 26.6666V16H14.6667V26.6666H6.66667ZM18.6667 10.6666H16V7.99996H18.6667V10.6666ZM24 21.3333H21.3333V18.6666H24V21.3333ZM24 16H21.3333V13.3333H24V16ZM24 10.6666H21.3333V7.99996H24V10.6666Z" />
      </svg>
    ),
  },
  {
    title: "Cruise",
    img: (
      <svg
        className="fill-black group-hover:fill-blue-400"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.6627 26.6666C21.4641 26.6666 20.9454 26.252 20.1614 25.6253C19.2547 24.9013 18.1281 24 15.9921 24C13.8574 24 12.7307 24.9013 11.8254 25.6266C11.0427 26.252 10.5254 26.6666 9.32675 26.6666C8.13075 26.6666 7.61342 26.252 6.83075 25.6266C5.92542 24.9013 4.80141 24 2.66675 24V26.6666C3.86408 26.6666 4.38141 27.0813 5.16408 27.7066C6.06941 28.432 7.19475 29.3333 9.32675 29.3333C11.4614 29.3333 12.5867 28.432 13.4921 27.708C14.2761 27.0813 14.7934 26.6666 15.9921 26.6666C17.1921 26.6666 17.7401 27.104 18.4961 27.708C19.4014 28.432 20.5281 29.3333 22.6627 29.3333C24.7974 29.3333 25.9241 28.432 26.8294 27.708C27.5854 27.104 28.1334 26.6666 29.3334 26.6666V24C27.1974 24 26.0707 24.9013 25.1641 25.6253C24.3801 26.252 23.8614 26.6666 22.6627 26.6666ZM8.00008 11.3333L5.33341 12L8.00008 22.6666H9.32675C11.4614 22.6666 12.5867 21.7653 13.4921 21.0413C14.2761 20.4146 14.7934 20 15.9921 20C17.1921 20 17.7401 20.4373 18.4961 21.0413C19.4014 21.7653 20.5281 22.6666 22.6627 22.6666H24.0001L24.0361 22.524L24.4534 20.8546L26.6667 12L24.0001 11.3333V6.66796C24.0002 6.35961 23.8934 6.06074 23.698 5.82226C23.5025 5.58377 23.2305 5.4204 22.9281 5.35996L17.3334 4.24129V2.66663H14.6667V4.24129L9.07208 5.35996C8.76971 5.4204 8.49763 5.58377 8.30217 5.82226C8.10672 6.06074 7.99996 6.35961 8.00008 6.66796V11.3333ZM10.6667 7.75863L16.0001 6.69196L21.3334 7.75863V10.6666L16.0001 9.33329L10.6667 10.6666V7.75863Z" />
      </svg>
    ),
  },
  {
    title: "Bus",
    img: (
      <svg
        className="fill-black group-hover:fill-blue-400"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M28.0001 8.02796C28.0041 7.83329 27.9907 6.07463 26.2668 4.38129C24.5694 2.71463 22.8574 2.66663 22.6667 2.66663H9.32808C9.00941 2.66663 7.33742 2.75063 5.71741 4.40263C4.04808 6.10396 4.00008 7.81196 4.00008 7.99996V12H2.66675V16H4.00008V24C4.00008 24.9786 4.54141 25.8306 5.33341 26.2946V28C5.33341 28.3536 5.47389 28.6927 5.72394 28.9428C5.97399 29.1928 6.31313 29.3333 6.66675 29.3333H8.00008C8.3537 29.3333 8.69284 29.1928 8.94289 28.9428C9.19294 28.6927 9.33342 28.3536 9.33342 28V26.6666H22.6667V28C22.6667 28.3536 22.8072 28.6927 23.0573 28.9428C23.3073 29.1928 23.6465 29.3333 24.0001 29.3333H25.3334C25.687 29.3333 26.0262 29.1928 26.2762 28.9428C26.5263 28.6927 26.6667 28.3536 26.6667 28V26.2973C27.0713 26.0653 27.4075 25.7308 27.6416 25.3275C27.8757 24.9242 27.9993 24.4663 28.0001 24V16H29.3334V12H28.0001V8.02796ZM12.0001 5.33329H20.0001V7.99996H12.0001V5.33329ZM8.66675 24C8.13614 23.9998 7.62733 23.7888 7.25226 23.4135C6.87719 23.0382 6.66657 22.5292 6.66675 21.9986C6.66692 21.468 6.87788 20.9592 7.2532 20.5841C7.62852 20.2091 8.13747 19.9984 8.66808 19.9986C9.19869 19.9988 9.7075 20.2098 10.0826 20.5851C10.4576 20.9604 10.6683 21.4694 10.6681 22C10.6679 22.5306 10.457 23.0394 10.0816 23.4144C9.70631 23.7895 9.19736 24.0001 8.66675 24ZM14.6667 17.3333H6.66675V10.6666H14.6667V17.3333ZM23.3334 24C22.8028 23.9998 22.294 23.7888 21.9189 23.4135C21.5439 23.0382 21.3332 22.5292 21.3334 21.9986C21.3336 21.468 21.5445 20.9592 21.9199 20.5841C22.2952 20.2091 22.8041 19.9984 23.3347 19.9986C23.8654 19.9988 24.3742 20.2098 24.7492 20.5851C25.1243 20.9604 25.3349 21.4694 25.3347 22C25.3346 22.5306 25.1236 23.0394 24.7483 23.4144C24.373 23.7895 23.864 24.0001 23.3334 24ZM25.3334 17.3333H17.3334V10.6666H25.3334V17.3333Z" />
      </svg>
    ),
  },
];
const HeroSection = () => {
  //------------------------------states--------------------------------------------
  const [data, setData] = useState("Trip");
  // -----------------------------hooks-------------------------------------------

  const navigate = useNavigate();

  // const tripData = [
  //   {
  //     label:
  //       "Place you want to start your trip asdlkjasldjalksdajls alskdjlkasdj",
  //     placeholder: "Place 12344556",
  //     img: (
  //       <svg
  //         width="20"
  //         height="20"
  //         viewBox="0 0 20 20"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g clip-path="url(#clip0_972_1398)">
  //           <path
  //             d="M9.99996 1.66669C6.77496 1.66669 4.16663 4.27502 4.16663 7.50002C4.16663 11.875 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.875 15.8333 7.50002C15.8333 4.27502 13.225 1.66669 9.99996 1.66669ZM5.83329 7.50002C5.83329 5.20002 7.69996 3.33335 9.99996 3.33335C12.3 3.33335 14.1666 5.20002 14.1666 7.50002C14.1666 9.90002 11.7666 13.4917 9.99996 15.7334C8.26663 13.5084 5.83329 9.87502 5.83329 7.50002Z"
  //             fill="#5C5C5C"
  //           />
  //           <path
  //             d="M9.99996 9.58335C11.1506 9.58335 12.0833 8.65061 12.0833 7.50002C12.0833 6.34943 11.1506 5.41669 9.99996 5.41669C8.84937 5.41669 7.91663 6.34943 7.91663 7.50002C7.91663 8.65061 8.84937 9.58335 9.99996 9.58335Z"
  //             fill="#5C5C5C"
  //           />
  //         </g>
  //         <defs>
  //           <clipPath id="clip0_972_1398">
  //             <rect width="20" height="20" fill="white" />
  //           </clipPath>
  //         </defs>
  //       </svg>
  //     ),
  //   },
  //   {
  //     label: "Place you want to end your trip",
  //     placeholder: "Place",
  //     img: (
  //       <svg
  //         width="20"
  //         height="20"
  //         viewBox="0 0 20 20"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g clip-path="url(#clip0_972_1398)">
  //           <path
  //             d="M9.99996 1.66669C6.77496 1.66669 4.16663 4.27502 4.16663 7.50002C4.16663 11.875 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.875 15.8333 7.50002C15.8333 4.27502 13.225 1.66669 9.99996 1.66669ZM5.83329 7.50002C5.83329 5.20002 7.69996 3.33335 9.99996 3.33335C12.3 3.33335 14.1666 5.20002 14.1666 7.50002C14.1666 9.90002 11.7666 13.4917 9.99996 15.7334C8.26663 13.5084 5.83329 9.87502 5.83329 7.50002Z"
  //             fill="#5C5C5C"
  //           />
  //           <path
  //             d="M9.99996 9.58335C11.1506 9.58335 12.0833 8.65061 12.0833 7.50002C12.0833 6.34943 11.1506 5.41669 9.99996 5.41669C8.84937 5.41669 7.91663 6.34943 7.91663 7.50002C7.91663 8.65061 8.84937 9.58335 9.99996 9.58335Z"
  //             fill="#5C5C5C"
  //           />
  //         </g>
  //         <defs>
  //           <clipPath id="clip0_972_1398">
  //             <rect width="20" height="20" fill="white" />
  //           </clipPath>
  //         </defs>
  //       </svg>
  //     ),
  //   },
  //   {
  //     label: "Start date",
  //     placeholder: "Not Selected",
  //     img: (
  //       <svg
  //         width="20"
  //         height="20"
  //         viewBox="0 0 20 20"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g clip-path="url(#clip0_972_1414)">
  //           <path
  //             opacity="0.3"
  //             d="M4.16675 6.66667H15.8334V5H4.16675V6.66667Z"
  //             fill="#5C5C5C"
  //           />
  //           <path
  //             d="M5.83333 9.16669H7.5V10.8334H5.83333V9.16669ZM15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM12.5 9.16669H14.1667V10.8334H12.5V9.16669ZM9.16667 9.16669H10.8333V10.8334H9.16667V9.16669Z"
  //             fill="#5C5C5C"
  //           />
  //         </g>
  //         <defs>
  //           <clipPath id="clip0_972_1414">
  //             <rect width="20" height="20" fill="white" />
  //           </clipPath>
  //         </defs>
  //       </svg>
  //     ),
  //   },
  //   {
  //     label: "End date",
  //     placeholder: "Not Selected ",
  //     img: (
  //       <svg
  //         width="20"
  //         height="20"
  //         viewBox="0 0 20 20"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g clip-path="url(#clip0_972_1414)">
  //           <path
  //             opacity="0.3"
  //             d="M4.16675 6.66667H15.8334V5H4.16675V6.66667Z"
  //             fill="#5C5C5C"
  //           />
  //           <path
  //             d="M5.83333 9.16669H7.5V10.8334H5.83333V9.16669ZM15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM12.5 9.16669H14.1667V10.8334H12.5V9.16669ZM9.16667 9.16669H10.8333V10.8334H9.16667V9.16669Z"
  //             fill="#5C5C5C"
  //           />
  //         </g>
  //         <defs>
  //           <clipPath id="clip0_972_1414">
  //             <rect width="20" height="20" fill="white" />
  //           </clipPath>
  //         </defs>
  //       </svg>
  //     ),
  //   },
  //   {
  //     label: "Travellers",
  //     img: (
  //       <svg
  //         width="20"
  //         height="20"
  //         viewBox="0 0 20 20"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g clip-path="url(#clip0_972_1430)">
  //           <path
  //             d="M13.7499 10.8334C12.7499 10.8334 11.1916 11.1167 9.99992 11.6667C8.80825 11.1084 7.24992 10.8334 6.24992 10.8334C4.44158 10.8334 0.833252 11.7334 0.833252 13.5417V15.8334H19.1666V13.5417C19.1666 11.7334 15.5583 10.8334 13.7499 10.8334ZM10.4166 14.5834H2.08325V13.5417C2.08325 13.0917 4.21658 12.0834 6.24992 12.0834C8.28325 12.0834 10.4166 13.0917 10.4166 13.5417V14.5834ZM17.9166 14.5834H11.6666V13.5417C11.6666 13.1584 11.4999 12.825 11.2333 12.525C11.9666 12.275 12.8666 12.0834 13.7499 12.0834C15.7833 12.0834 17.9166 13.0917 17.9166 13.5417V14.5834ZM6.24992 10C7.85825 10 9.16658 8.69169 9.16658 7.08335C9.16658 5.47502 7.85825 4.16669 6.24992 4.16669C4.64158 4.16669 3.33325 5.47502 3.33325 7.08335C3.33325 8.69169 4.64158 10 6.24992 10ZM6.24992 5.41669C7.16658 5.41669 7.91658 6.16669 7.91658 7.08335C7.91658 8.00002 7.16658 8.75002 6.24992 8.75002C5.33325 8.75002 4.58325 8.00002 4.58325 7.08335C4.58325 6.16669 5.33325 5.41669 6.24992 5.41669ZM13.7499 10C15.3583 10 16.6666 8.69169 16.6666 7.08335C16.6666 5.47502 15.3583 4.16669 13.7499 4.16669C12.1416 4.16669 10.8333 5.47502 10.8333 7.08335C10.8333 8.69169 12.1416 10 13.7499 10ZM13.7499 5.41669C14.6666 5.41669 15.4166 6.16669 15.4166 7.08335C15.4166 8.00002 14.6666 8.75002 13.7499 8.75002C12.8333 8.75002 12.0833 8.00002 12.0833 7.08335C12.0833 6.16669 12.8333 5.41669 13.7499 5.41669Z"
  //             fill="#5C5C5C"
  //           />
  //         </g>
  //         <defs>
  //           <clipPath id="clip0_972_1430">
  //             <rect width="20" height="20" fill="white" />
  //           </clipPath>
  //         </defs>
  //       </svg>
  //     ),
  //   },
  // ];

  function handleHeroData(data) {
    console.log(data.toLowerCase());
    if (data.toLowerCase() === "bus") {
      navigate("/bus");
    } else if (data.toLowerCase() === "cruise") {
      navigate("/cruise-form");
    }
    setData(data);
  }

  return (
    <div className="h-[30rem] flex flex-col items-center justify-center ">
      <section className="flex flex-col justify-center ">
        <div className="flex  items-center justify-center rounded-2xl overflow-hidden rounded-b-none bg-white">
          {heroData.map((el, index) => {
            return (
              <div
                onClick={() => handleHeroData(`${el.title}`)}
                key={index}
                className={`w-32 ${
                  data.toLowerCase() === el.title.toLowerCase()
                    ? "border-b-blue-400 bg-blue-400/30"
                    : " "
                }   space-y-1 group hover:bg-blue-400/30 h-20 border-b-2  border-b-transparent hover:border-b-blue-400 flex flex-col justify-center items-center `}
              >
                <div className="text-gray-600  w-8 h-8 ">{el.img}</div>
                <p>{el.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      <div className="bg-white rounded-3xl">
        {data && <HeroSupportingComponent data={data} />}
      </div>
    </div>
  );
};

export default HeroSection;
