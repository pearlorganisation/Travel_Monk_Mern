import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartners } from "../../features/partners/partnersActions";
import BusCruiseContactForm from "./BusCruiseContactForm";
import { baseURL } from "../../services/axiosInterceptor";

export default function BusContactForm() {
  const { partners } = useSelector((state) => state.partner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartners());
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "info@thetravelmonk.com",
      isEmail: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91-8146654329",
      isEmail: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Chandigarh, Punjab.",
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="flex items-center justify-center flex-col gap-4">
          <h3 className="text-4xl font-semibold">
            {" "}
            Our Bus Travelling Partners{" "}
          </h3>

          <div className="flex flex-row gap-12">
            {Array.isArray(partners) && partners?.map((item) => (
              <div key={item?._id} className="">
                {item?.partnerType?.partnerTypeName === "Bus" && (
                  <img
                    src={`${baseURL}/${item?.partnerLogo?.path}`}
                    alt={item?.name}
                    className="w-20 h-20 rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p className="mt-8">
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item?.icon}</div>
                    <a
                      href={`${
                        item?.isEmail
                          ? `mailto:${item?.contact}`
                          : `tel:${item?.contact}`
                      }    `}
                    >
                      {item?.contact}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <BusCruiseContactForm type="Bus" />
        </div>
      </div>
    </main>
  );
}
