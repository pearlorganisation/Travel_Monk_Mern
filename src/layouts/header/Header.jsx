import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const headerData = [
    {
      title: "Home",
    },
    {
      title: "School Trips",
    },
    {
      title: "Corporate Trips",
    },
    {
      title: "Blog ",
    },
    {
      title: "About Us",
    },
    {
      title: "Contact Us",
    },
  ];

 

  return (
    <header className="  bg-black font-sans tracking-wide relative z-50">
      <section className="flex flex-wrap py-2 items-center gap-4 relative  px-10  ">
        <a href="/" className="">
          <img src="logo.png" alt="logo" className="w-[170px]" />
        </a>

        <ul className="flex justify-center  space-x-8 lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 max-lg:hidden">
          {headerData.map((el, index) => {
            return (
              <li key={index}>
                <Link
                  to={"/" + el.title}
                  className="hover:text-pink-500 font-bold text-white text-[15px]"
                >
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="flex flex-wrap items-start gap-4 px-10 py-4 relative">
        <div
          id="collapseMenu"
          className="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:justify-center gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="/">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>

          </ul>
        </div>

        <div className="flex ml-auto lg:hidden">
          <button id="toggleOpen">
            <svg
              className="w-7 h-7 fill-pink-500"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
