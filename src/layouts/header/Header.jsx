import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about_us" },
    { title: "Contact Us", path: "/contact_us" },
    { title: "Product", path: "/product" },
  ];

  return (
    <nav className="bg-black  w-full border-b md:border-0 md:static  z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDzrcR76JDFjYJComkIbHIv6eMK2ZRPvUpw&s"
              width={50}
              height={50}
              alt="logo"
              data-aos="zoom-in"
              data-aos-delay="800"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-white border-2 border-white focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="white"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul
            className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-primary">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block " data-aos="fade-left">
          <Link
            to="/signup"
            className="py-3 px-4 mr-2 text-white bg-black border-2 border-primary border-width-2 hover:bg-red-400 rounded-md shadow"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            data-aos="zoom-out"
            data-aos-delay="800"
            className="py-3 px-4 text-white bg-primary hover:bg-blue-500 rounded-md shadow"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
