import { useForm } from "react-hook-form";
import ArrRight from "../../assets/arrright.png";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";

import Fav from ".././../assets/logos/fav.png";
import Air from ".././../assets/logos/air.png";
import Star from ".././../assets/logos/star.png";
import FreeB from ".././../assets/logos/breakfast.png";
import Wifi from ".././../assets/logos/wifi.png";
import Parking from ".././../assets/logos/parking.png";

import Sea from ".././../assets/logos/sea.png";
import Cancel from ".././../assets/logos/cancel.png";
const SearchBar = () => {
  const { handleSubmit, register } = useForm();

  const searchData = [
    {
      label: "Location",
      placeholder: "Enter Location",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1398)">
            <path
              d="M9.99996 1.66669C6.77496 1.66669 4.16663 4.27502 4.16663 7.50002C4.16663 11.875 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.875 15.8333 7.50002C15.8333 4.27502 13.225 1.66669 9.99996 1.66669ZM5.83329 7.50002C5.83329 5.20002 7.69996 3.33335 9.99996 3.33335C12.3 3.33335 14.1666 5.20002 14.1666 7.50002C14.1666 9.90002 11.7666 13.4917 9.99996 15.7334C8.26663 13.5084 5.83329 9.87502 5.83329 7.50002Z"
              fill="#5C5C5C"
            />
            <path
              d="M9.99996 9.58335C11.1506 9.58335 12.0833 8.65061 12.0833 7.50002C12.0833 6.34943 11.1506 5.41669 9.99996 5.41669C8.84937 5.41669 7.91663 6.34943 7.91663 7.50002C7.91663 8.65061 8.84937 9.58335 9.99996 9.58335Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1398">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Check in ",
      placeholder: "-- / --",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1414)">
            <path
              opacity="0.3"
              d="M4.16675 6.66667H15.8334V5H4.16675V6.66667Z"
              fill="#5C5C5C"
            />
            <path
              d="M5.83333 9.16669H7.5V10.8334H5.83333V9.16669ZM15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM12.5 9.16669H14.1667V10.8334H12.5V9.16669ZM9.16667 9.16669H10.8333V10.8334H9.16667V9.16669Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1414">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Check out ",
      placeholder: "-- / --",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1414)">
            <path
              opacity="0.3"
              d="M4.16675 6.66667H15.8334V5H4.16675V6.66667Z"
              fill="#5C5C5C"
            />
            <path
              d="M5.83333 9.16669H7.5V10.8334H5.83333V9.16669ZM15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM12.5 9.16669H14.1667V10.8334H12.5V9.16669ZM9.16667 9.16669H10.8333V10.8334H9.16667V9.16669Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1414">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Travellers",
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_972_1430)">
            <path
              d="M13.7499 10.8334C12.7499 10.8334 11.1916 11.1167 9.99992 11.6667C8.80825 11.1084 7.24992 10.8334 6.24992 10.8334C4.44158 10.8334 0.833252 11.7334 0.833252 13.5417V15.8334H19.1666V13.5417C19.1666 11.7334 15.5583 10.8334 13.7499 10.8334ZM10.4166 14.5834H2.08325V13.5417C2.08325 13.0917 4.21658 12.0834 6.24992 12.0834C8.28325 12.0834 10.4166 13.0917 10.4166 13.5417V14.5834ZM17.9166 14.5834H11.6666V13.5417C11.6666 13.1584 11.4999 12.825 11.2333 12.525C11.9666 12.275 12.8666 12.0834 13.7499 12.0834C15.7833 12.0834 17.9166 13.0917 17.9166 13.5417V14.5834ZM6.24992 10C7.85825 10 9.16658 8.69169 9.16658 7.08335C9.16658 5.47502 7.85825 4.16669 6.24992 4.16669C4.64158 4.16669 3.33325 5.47502 3.33325 7.08335C3.33325 8.69169 4.64158 10 6.24992 10ZM6.24992 5.41669C7.16658 5.41669 7.91658 6.16669 7.91658 7.08335C7.91658 8.00002 7.16658 8.75002 6.24992 8.75002C5.33325 8.75002 4.58325 8.00002 4.58325 7.08335C4.58325 6.16669 5.33325 5.41669 6.24992 5.41669ZM13.7499 10C15.3583 10 16.6666 8.69169 16.6666 7.08335C16.6666 5.47502 15.3583 4.16669 13.7499 4.16669C12.1416 4.16669 10.8333 5.47502 10.8333 7.08335C10.8333 8.69169 12.1416 10 13.7499 10ZM13.7499 5.41669C14.6666 5.41669 15.4166 6.16669 15.4166 7.08335C15.4166 8.00002 14.6666 8.75002 13.7499 8.75002C12.8333 8.75002 12.0833 8.00002 12.0833 7.08335C12.0833 6.16669 12.8333 5.41669 13.7499 5.41669Z"
              fill="#5C5C5C"
            />
          </g>
          <defs>
            <clipPath id="clip0_972_1430">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const sortByOptions = [
    {
      id: 1,
      name: "Popular",
    },
    {
      id: 2,
      name: "Price - Low to High",
    },
    {
      id: 3,
      name: "Price - High to Low",
    },
    {
      id: 4,
      name: "High Ratings",
    },
    {
      id: 5,
      name: "High Reviews",
    },
    {
      id: 6,
      name: "Popular",
    },
    {
      id: 7,
      name: "Newest First",
    },
  ];

  const ratings = [
    {
      id: 1,
      reviews: "532",
      name: "4.2+",
    },
    {
      id: 2,
      reviews: "224",
      name: "3.5+",
    },
    {
      id: 3,
      reviews: "254",
      name: "3+",
    },
  ];

  const starCategories = [
    {
      id: 1,
      name: "3 Star",
      reviews: "532",
    },
    {
      id: 2,
      name: "4 Star",
      reviews: "224",
    },
    {
      id: 3,
      name: "5 Star",
      reviews: "254",
    },
  ];

  const priceRanges = [
    {
      id: 1,
      name: "₹ 0 - ₹ 2000",
      reviews: "532",
    },
    {
      id: 2,
      name: "₹ 2000 - ₹ 5500",
      reviews: "224",
    },
    {
      id: 3,
      name: "₹ 5500 - ₹ 9000",
      reviews: "254",
    },
    {
      id: 4,
      reviews: "446",
      name: "₹ 9000 - ₹ 12500",
    },
    {
      id: 5,
      name: "₹ 12500 - ₹ 15000",
      reviews: "16",
    },
  ];

  const hotelsData = [
    {
      id: 1,
      image: Image1,
      top: "Only One Room Left",
      name: "  ITC Grand Goa - A Luxury Resort Collection",
      price: "17000",
      taxes: "3000",
      rating: "5",
      features: [
        { id: 1, name: "Free Parking", logo: Parking },
        { id: 2, name: "Free Wifi", logo: Wifi },
        { id: 3, name: "Air Conditioner", logo: Air },
        { id: 4, name: "Sea View", logo: Sea },
        { id: 5, name: "Free Breakfast", logo: FreeB },
        { id: 6, name: "Free Cancellation", logo: Cancel },
      ],
    },
    {
      id: 2,
      image: Image2,
      name: "The Fern Kadamba Hotel and Spa, Goa",
      price: "15000",
      originalPrice: "20000",
      tag: "Limited Time Deal",
      taxes: "3000",
      rating: "5",
      features: [
        { id: 1, name: "Free Parking", logo: Parking },
        { id: 2, name: "Free Wifi", logo: Wifi },
        { id: 3, name: "Air Conditioner", logo: Air },
        { id: 4, name: "Sea View", logo: Sea },
        { id: 5, name: "Free Breakfast", logo: FreeB },
        { id: 6, name: "Free Cancellation", logo: Cancel },
      ],
    },
    {
      id: 3,
      image: Image3,
      name: "Luxury Farm House",
      price: "24890",
      originalPrice: "29000",
      tag: "Limited Time Deal",
      taxes: "3000",
      rating: "4.8",
      features: [
        { id: 1, name: "Free Parking", logo: Parking },
        { id: 2, name: "Free Wifi", logo: Wifi },
        { id: 3, name: "Air Conditioner", logo: Air },
        { id: 4, name: "Sea View", logo: Sea },
      ],
    },
    {
      id: 4,
      image: Image4,
      name: "Country Inn Panjim Goa",
      price: "28790",
      originalPrice: "32000",
      tag: "Limited Time Deal",
      taxes: "3000",
      rating: "4.6",
      features: [
        { id: 1, name: "Free Parking", logo: Parking },
        { id: 2, name: "Free Wifi", logo: Wifi },
        { id: 3, name: "Air Conditioner", logo: Air },
        { id: 4, name: "Sea View", logo: Sea },
      ],
    },
  ];

  return (
    <div className=" p-10 bg-gray-200">
      <div
        className="p-4 rounded-2xl flex items-center justify-center bg-white"
        style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className="grid justify-between items-center grid-cols-[auto_auto_auto_155px_auto] gap-2  ">
          {searchData.map((el, index) => {
            return (
              <div className="relative p-2" key={index}>
                <div className=" flex justify-start items-center">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {el.label}
                  </label>
                </div>

                <div>
                  <div className="absolute top-8    justify-center inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {el.img}
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={el.placeholder}
                  />
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="text-white px-12 py-2 bg-[#007E8F] rounded-sm hover:bg-[#439ca8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-md      text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-row gap-6">
          <h1 className="mr-12">Sort By</h1>

          {sortByOptions.map((sortByOption) => (
            <div className="flex flex-row gap-6 items-center justify-center">
              <h1 className="font-semibold hover:text-blue-400 hover:underline hover:cursor-pointer text-sm">
                {sortByOption.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="w-[25%]  ">
          <div className="">
            <div className="mt-2 h-[300px] rounded-xl w-[90%] bg-red-400">
              Explore on Map
            </div>

            <div className="w-[90%]">
              <h1 className="mt-4 font-semibold text-lg"> Filter By </h1>

              <h3 className="mt-3 font-semibold">Price</h3>

              <div className="flex flex-row gap-3 items-center justify-center">
                <input
                  type="text"
                  placeholder="Min"
                  className="input input-bordered w-full max-w-xs"
                />

                <h3 className=""> to </h3>

                <input
                  type="text"
                  placeholder="Max"
                  className="input input-bordered w-full max-w-xs"
                />

                <div className="bg-white p-1 px-4 border-2 border-gray-200 rounded-xl">
                  <button className="p-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.00006 11H17.5861L12.2931 5.70703L13.7071 4.29303L21.4141 12L13.7071 19.707L12.2931 18.293L17.5861 13H3.00006V11Z"
                        fill="#7A7A7A"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {priceRanges.map((priceRange) => (
                <div className="flex flex-row  justify-between items-center mt-2">
                  <div className="flex flex-row gap-3">
                    <input type="checkbox" className="checkbox" />
                    <h3>{priceRange.name}</h3>
                  </div>

                  <h1 className="text-sm">( {priceRange.reviews} )</h1>
                </div>
              ))}

              <h3 className="mt-3 font-semibold">Star Category</h3>

              {starCategories.map((starCategory) => (
                <div className="flex flex-row  justify-between items-center mt-2">
                  <div className="flex flex-row gap-3">
                    <input type="checkbox" className="checkbox" />
                    <h3>{starCategory.name}</h3>
                  </div>

                  <h1 className="text-sm">( {starCategory.reviews} )</h1>
                </div>
              ))}

              <h3 className="mt-3 font-semibold">Ratings</h3>

              {ratings.map((rating) => (
                <div className="flex flex-row  justify-between items-center mt-2">
                  <div className="flex flex-row gap-3">
                    <input type="checkbox" className="checkbox" />
                    <h3>{rating.name}</h3>
                  </div>

                  <h1 className="text-sm">( {rating.reviews} )</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[75%] mt-2">
          {hotelsData.map((hotel) => (
            <div className=" bg-white w-full rounded-xl mt-6">
              <div className="flex flex-col items-center rounded-xl border  text-center  md:flex-row md:items-start md:text-left relative">
                <img src={Fav} className="w-8 h-8 absolute right-6 top-2" />
                <div className="mb-0 md:mr-6 md:mb-0 ">
                  <img
                    className=" rounded-xl  object-cover size-96 w-72 "
                    src={hotel.image}
                    alt=""
                  />

                  {hotel.top && (
                    <div className="absolute top-2 left-3 bg-red-500 p-2 rounded-xl">
                      <h3 className="text-gray-200 text-sm ">{hotel.top}</h3>
                    </div>
                  )}
                </div>
                <div className="">
                  <div className="flex flex-row justify-start items-center w-full">
                    <p className="text-xl font-bold text-gray-700 mt-3">
                      {hotel.name}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <img src={Star} className="w-5 h-5" />
                      <h3> {hotel.rating} </h3>
                    </div>
                  </div>
                  <p className="mb-4 mt-4 text-sm font-medium text-gray-500">
                    This property offers :
                  </p>

                  <div className="flex flex-row w-full">
                    <div className="grid grid-cols-2 gap-3">
                      {hotel.features.map((feature) => (
                        <div className="flex flex-row gap-2 items-center justify-start">
                          <img src={feature.logo} className="h-5 w-5" />
                          <h3>{feature.name}</h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 justify-start items-center">
                    <h1 className="mt-6 font-bold text-xl"> ₹ {hotel.price}</h1>

                    {hotel.originalPrice && (
                      <strike>
                        <h1 className="mt-6 font-bold text-md line text-gray-400">
                          ₹ {hotel.originalPrice}
                        </h1>
                      </strike>
                    )}

                    {hotel.tag && (
                      <div className="bg-yellow-500 rounded-lg p-2 mt-6">
                        <h3 className=" text-sm "> {hotel.tag}</h3>
                      </div>
                    )}
                  </div>

                  <h3 className="text-gray-400 text-lg mt-4">
                    + ₹ {hotel.taxes} taxes and fees per night
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
