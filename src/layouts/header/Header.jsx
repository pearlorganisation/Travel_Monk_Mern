import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import ProfileMenu from "../../components/ProfileMenue/ProfileMenu";

export default function Header() {
  const [state, setState] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "International Packages", path: "/international_packages" },
    { title: "Indian Packages", path: "/indian_packages" },
    { title: "About Us", path: "/about_us" },
    { title: "Contact Us", path: "/contact" },
  ];

  // const isLoggedIn = localStorage.getItem("isLoggedIn");

  // useEffect(() => {
  //   const checkAuth = () => {
  //     setIsLogin(localStorage.getItem("isLoggedIn"));
  //     setState();
  //   };

  //   checkAuth();
  // }, [localStorage.getItem("isLoggedIn")]);

  // to check for is userlogged in
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isTransparent ? "transparent" : "black"
      } bg-black w-full border-b md:border-0 md:static z-50`}
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <svg
              width="166"
              height="45"
              viewBox="0 0 166 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.1016 7.625V19H81.7656V7.625H84.1016ZM87.6016 7.625V9.46094H78.3203V7.625H87.6016ZM88.9375 7.625H93.1797C94.0495 7.625 94.7969 7.75521 95.4219 8.01562C96.0521 8.27604 96.5365 8.66146 96.875 9.17188C97.2135 9.68229 97.3828 10.3099 97.3828 11.0547C97.3828 11.6641 97.2786 12.1875 97.0703 12.625C96.8672 13.0573 96.5781 13.4193 96.2031 13.7109C95.8333 13.9974 95.3984 14.2266 94.8984 14.3984L94.1562 14.7891H90.4688L90.4531 12.9609H93.1953C93.6068 12.9609 93.9479 12.888 94.2188 12.7422C94.4896 12.5964 94.6927 12.3932 94.8281 12.1328C94.9688 11.8724 95.0391 11.5703 95.0391 11.2266C95.0391 10.862 94.9714 10.5469 94.8359 10.2812C94.7005 10.0156 94.4948 9.8125 94.2188 9.67188C93.9427 9.53125 93.5964 9.46094 93.1797 9.46094H91.2812V19H88.9375V7.625ZM95.2969 19L92.7031 13.9297L95.1797 13.9141L97.8047 18.8906V19H95.2969ZM103.812 9.57031L100.719 19H98.2266L102.453 7.625H104.039L103.812 9.57031ZM106.383 19L103.281 9.57031L103.031 7.625H104.633L108.883 19H106.383ZM106.242 14.7656V16.6016H100.234V14.7656H106.242ZM113.398 16.625L116.078 7.625H118.688L114.727 19H113.008L113.398 16.625ZM110.93 7.625L113.602 16.625L114.008 19H112.273L108.336 7.625H110.93ZM127.383 17.1719V19H121.328V17.1719H127.383ZM122.094 7.625V19H119.75V7.625H122.094ZM126.594 12.2578V14.0391H121.328V12.2578H126.594ZM127.375 7.625V9.46094H121.328V7.625H127.375ZM136.062 17.1719V19H130.336V17.1719H136.062ZM131.094 7.625V19H128.75V7.625H131.094Z"
                fill="white"
              />
              <path
                d="M74.0859 26.625H76.0703L78.9922 34.9766L81.9141 26.625H83.8984L79.7891 38H78.1953L74.0859 26.625ZM73.0156 26.625H74.9922L75.3516 34.7656V38H73.0156V26.625ZM82.9922 26.625H84.9766V38H82.6328V34.7656L82.9922 26.625ZM96.375 32.0469V32.5859C96.375 33.4505 96.2578 34.2266 96.0234 34.9141C95.7891 35.6016 95.4583 36.1875 95.0312 36.6719C94.6042 37.151 94.0938 37.5182 93.5 37.7734C92.9115 38.0286 92.2578 38.1562 91.5391 38.1562C90.8255 38.1562 90.1719 38.0286 89.5781 37.7734C88.9896 37.5182 88.4792 37.151 88.0469 36.6719C87.6146 36.1875 87.2786 35.6016 87.0391 34.9141C86.8047 34.2266 86.6875 33.4505 86.6875 32.5859V32.0469C86.6875 31.1771 86.8047 30.401 87.0391 29.7188C87.2734 29.0312 87.6042 28.4453 88.0312 27.9609C88.4635 27.4766 88.974 27.1068 89.5625 26.8516C90.1562 26.5964 90.8099 26.4688 91.5234 26.4688C92.2422 26.4688 92.8958 26.5964 93.4844 26.8516C94.0781 27.1068 94.5885 27.4766 95.0156 27.9609C95.4479 28.4453 95.7812 29.0312 96.0156 29.7188C96.2552 30.401 96.375 31.1771 96.375 32.0469ZM94.0078 32.5859V32.0312C94.0078 31.4271 93.9531 30.8958 93.8438 30.4375C93.7344 29.9792 93.5729 29.5938 93.3594 29.2812C93.1458 28.9688 92.8854 28.7344 92.5781 28.5781C92.2708 28.4167 91.9193 28.3359 91.5234 28.3359C91.1276 28.3359 90.776 28.4167 90.4688 28.5781C90.1667 28.7344 89.9089 28.9688 89.6953 29.2812C89.487 29.5938 89.3281 29.9792 89.2188 30.4375C89.1094 30.8958 89.0547 31.4271 89.0547 32.0312V32.5859C89.0547 33.1849 89.1094 33.7161 89.2188 34.1797C89.3281 34.638 89.4896 35.026 89.7031 35.3438C89.9167 35.6562 90.1771 35.8932 90.4844 36.0547C90.7917 36.2161 91.1432 36.2969 91.5391 36.2969C91.9349 36.2969 92.2865 36.2161 92.5938 36.0547C92.901 35.8932 93.1589 35.6562 93.3672 35.3438C93.5755 35.026 93.7344 34.638 93.8438 34.1797C93.9531 33.7161 94.0078 33.1849 94.0078 32.5859ZM107.32 26.625V38H104.977L100.406 30.375V38H98.0625V26.625H100.406L104.984 34.2578V26.625H107.32ZM111.703 26.625V38H109.359V26.625H111.703ZM118.516 26.625L114.008 32.2422L111.406 35.0391L110.984 32.8203L112.742 30.4141L115.641 26.625H118.516ZM115.852 38L112.5 32.7422L114.234 31.2891L118.625 38H115.852Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.4394 11.4948C31.4467 14.0095 31.9242 14.1904 33.4091 17.56C34.8939 20.9296 34.1515 20.2557 36.3788 23.6252C38.6061 26.9948 39.3485 27.6687 40.8333 29.6904C41.3322 30.3697 42.6429 31.8127 43.0606 32.2264C43.4718 32.6335 43.5597 32.8489 44.5455 33.7339C45.4425 34.5392 45.69 34.8746 46.7727 35.7557C47.8555 36.6367 49 38 49 38C49 38 45.9771 35.9816 44.5455 35.0817C43.3757 34.3465 41.7578 33.2074 41.5758 33.06C40.9767 32.5749 40.3 31.9233 39.1993 31.0383C38.3223 30.3332 36.5588 28.5637 35.6364 27.6687C34.7537 26.8123 33.8449 25.4544 33.8449 25.4544C33.8449 25.4544 32.5382 23.9695 31.5809 22.3649L28.9545 18.9078C28.3975 18.2951 28.2121 18.2339 27.1823 17.143C27.0673 17.2679 26.9359 17.4116 26.7914 17.5704C26.3304 18.0772 25.741 18.7322 25.1388 19.4042C23.157 21.6156 20.9959 23.6902 18.6659 25.6034C16.9357 27.0241 15.1172 28.5237 14.5544 29.0091C14.5315 29.0729 14.4954 29.1339 14.4459 29.1885C14.6304 29.2733 14.8411 29.3468 15.0838 29.4216C15.2869 29.4842 15.4694 29.5671 15.6161 29.6347C15.628 29.6402 15.6396 29.6455 15.6511 29.6508C15.7912 29.7154 15.8987 29.765 16.0103 29.8044C16.1997 29.8712 16.4042 29.9223 16.6408 29.9782C16.6659 29.9841 16.6914 29.9901 16.7173 29.9962C16.9256 30.0451 17.16 30.1002 17.3884 30.171C17.7172 30.2729 18.0423 30.3929 18.3482 30.5058C18.4257 30.5344 18.5019 30.5625 18.5767 30.5898C18.9568 30.7285 19.3133 30.8507 19.6749 30.9358C19.8004 30.9653 19.917 30.9832 20.0584 31.0048C20.1274 31.0154 19.6749 30.9358 19.6749 30.9358L22.2727 31.9348L17.0357 32.6053C17.0357 32.6053 12.362 32.9572 9.45477 33.5952C8.78883 33.7414 8.39164 33.8166 7.75882 34.0028C7.12599 34.1891 2.22727 35.3043 2.22727 35.3043L0 35.9783L0.742424 35.3043L1.48485 34.6304L2.22727 33.9565C3.09077 33.2678 4.00156 32.2134 5.19697 31.2609C7.52297 29.4075 9.34546 27.7624 9.55083 27.6099C9.72056 27.4839 9.9711 27.28 10.1869 27.1008C10.2931 27.0126 10.3881 26.9327 10.4565 26.8749L10.5371 26.8066L10.5587 26.7882L10.5655 26.7824L10.5695 26.779L12.8768 24.8399L15.0636 22.8001L17.4643 20.2406L21.625 15.0028L22.3634 13.9266C22.815 13.269 23.4204 12.388 24.0356 11.4948C25.2532 9.72727 26.5428 7.86261 26.7175 7.64628C26.8589 7.47135 27.4697 7 27.4697 7C27.4697 7 28.2121 7.64628 28.9545 8.79913C29.8763 10.2304 29.8141 9.93387 30.4394 11.4948Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.6464 0C49.6464 0 49.8872 0.0946608 50.2387 0.305434C50.8549 0.674946 50.8549 0.67503 51.5989 1.35155L52.3429 2.02806C52.5783 2.34238 53.0777 2.79913 53.8308 3.59902C54.7674 4.59386 56.1918 6.08089 56.8066 6.7636C57.6155 7.66199 58.3274 8.75315 59.0385 9.46966C59.3819 9.81574 60.2849 11.2885 61.2703 12.1757C61.759 12.6157 62.4139 13.2211 62.7582 13.5288C62.9304 13.6826 63.0498 13.8109 63.1483 13.8987C63.9109 14.5784 64.4144 15.0558 64.9901 15.5583C67.1189 17.4162 68.1905 18.4495 70.3277 20.2955C70.1899 20.1761 70.5162 20.4583 70.3277 20.2955C70.4655 20.4149 71.4673 21.4294 71.6467 21.647C71.8932 21.9459 73 23 73 23L71.5121 22.3235C69.2952 20.7309 64.6383 18.306 61.0744 16.1991C59.65 15.357 58.7105 14.7759 57.5505 13.5289C55.3187 11.1293 55.3187 10.3601 54.5747 9.46966C53.4443 8.11663 49.404 9.1264 48.6231 9.46966C47.7297 9.86236 46.4448 10.6426 45.7772 11.0463C43.8876 12.1888 41.6035 14.4411 41.1835 14.8818C40.7635 15.3225 40.4396 15.5583 40.4396 15.5583L39.6956 16.2348C39.6956 16.2348 38.3902 17.5251 37.4637 18.2644C36.6481 18.9153 35.9758 19.6174 35.2319 20.2939C34.9561 20.4833 34.8903 20.6046 34.4879 20.9705C34.1169 20.3751 33 16.0039 33 16.0039C33 16.0039 33.4774 15.7794 33.7674 15.6402C34.3663 15.3526 34.9736 15.0506 35.1847 14.9173C37.2247 13.629 39.0034 12.0669 40.8292 10.4633C41.0973 10.2279 41.3664 9.99153 41.6375 9.75505C42.6582 8.86462 43.6297 7.81682 44.5279 6.78554C45.1872 6.02854 45.6183 5.34395 46.1132 4.55786C46.303 4.25644 46.5021 3.9401 46.7272 3.59902C46.8867 3.3572 47.0528 3.0853 47.2317 2.7912L47.2531 2.75611C47.4241 2.47516 47.6058 2.1766 47.7961 1.8817C48.1888 1.27334 48.6427 0.641239 49.1706 0.161161C49.3011 0.0425579 49.6464 0 49.6464 0Z"
                fill="white"
              />
            </svg>
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
                <li
                  key={idx}
                  className="text-white text-xs md:text-[13px] lg:text-base xl:text-lg
                  hover:text-[#007E8F] border-b-transparent  duration-150"
                >
                  <Link to={item.path} className="ml-1 mr-1">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-row justify-between">
          {/* <div className="hidden md:inline-block mr-20">
            <form className="">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  style={{
                    backgroundColor:
                      "linear-gradient(90deg, rgba(255,255,255,0.1) 10%, rgba(255,255,255,1) 40%)",
                  }}
                  className="block lg:min-w-72 p-1 text-sm border border-[#DDE2E4] text-gray-900 bg-transparent rounded-md "
                  placeholder=""
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
                >
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div> */}

          <div className="hidden md:inline-block " data-aos="fade-left">
            <div className="flex flex-row gap-6 items-center justify-center">
              {!isUserLoggedIn ? (
                <div className="flex flex-row gap-6 items-center justify-center">
                  <Link
                    to="/login"
                    data-aos="zoom-out"
                    data-aos-delay="800"
                    className="hover:text-[#007E8F]  text-white border-b-transparent  duration-150 mr-2"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className=" border-b-2 rounded-full bg-[#007E8F] hover:bg-[#439CA8] px-4 py-2 text-white border-b-transparent hover:border-b-[#007E8F] duration-150"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <ProfileMenu />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
