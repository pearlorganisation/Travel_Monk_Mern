import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitContact } from "../../features/contact/contactAction";
import { resetContactForm } from "../../features/contact/contactSlice";
import { useLocation } from "react-router-dom";
import useScrollToTop from "../../hooks/scrollTop";

const ContactUs = () => {
  useScrollToTop()
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
      contact: "Chandigarh, Punjab",
    },
  ];
  return (
    <main className="">
      <div className="w-full mx-auto text-gray-600">
        <div
          className="h-96 flex justify-center items-center"
          style={{
            backgroundImage: `url('/HeroImg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white flex justify-center items-center">
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>{" "}
          </div>
        </div>
        <div className="max-w-lg lg:mx-32 mx-4 mt-3 mb-3 gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3 mt-4">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Contact Details
            </p>
            <p className="mt-8">
              If you have a story to share or a question that has not been
              answered on our website, please get in touch with us via contact
              details listed below or fill in the form on the right.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <a
                      href={`${
                        item.isEmail
                          ? `mailto:${item.contact}`
                          : `tel:${item.contact}`
                      }    `}
                    >
                      {item.contact}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex mx-2 flex-col gap-4 px-4 lg:py-x-4 pt-3">
                <div className="flex flex-row">
                  <a
                    href="https://www.facebook.com/imtravelmonk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="32"
                      className="fill-slate-50"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <path
                        d="M17.397 24.9972V16.8012H20.162L20.573 13.5922H17.397V11.5482C17.397 10.6222 17.655 9.98817 18.984 9.98817H20.668V7.12717C19.8487 7.03936 19.0251 6.99696 18.201 7.00017C15.757 7.00017 14.079 8.49217 14.079 11.2312V13.5862H11.332V16.7952H14.085V24.9972H17.397Z"
                        fill="blue"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/imtravelmonk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <path
                        d="M24.9471 12.305C24.937 11.5476 24.7952 10.7977 24.5281 10.089C24.2964 9.49111 23.9426 8.94816 23.4892 8.49479C23.0359 8.04142 22.4929 7.68761 21.8951 7.45596C21.1954 7.19331 20.4562 7.0513 19.7091 7.03596C18.7471 6.99296 18.4421 6.98096 16.0001 6.98096C13.5581 6.98096 13.2451 6.98096 12.2901 7.03596C11.5432 7.05141 10.8044 7.19343 10.1051 7.45596C9.50713 7.68745 8.96409 8.0412 8.5107 8.49459C8.05732 8.94798 7.70356 9.49102 7.47207 10.089C7.2089 10.7881 7.06719 11.5271 7.05307 12.274C7.01007 13.237 6.99707 13.542 6.99707 15.984C6.99707 18.426 6.99707 18.738 7.05307 19.694C7.06807 20.442 7.20907 21.18 7.47207 21.881C7.70395 22.4787 8.05797 23.0215 8.51151 23.4747C8.96505 23.9279 9.50813 24.2815 10.1061 24.513C10.8035 24.7862 11.5424 24.9383 12.2911 24.963C13.2541 25.006 13.5591 25.019 16.0011 25.019C18.4431 25.019 18.7561 25.019 19.7111 24.963C20.4582 24.9482 21.1974 24.8066 21.8971 24.544C22.4948 24.312 23.0376 23.9581 23.4909 23.5048C23.9442 23.0515 24.2982 22.5086 24.5301 21.911C24.7931 21.211 24.9341 20.473 24.9491 19.724C24.9921 18.762 25.0051 18.457 25.0051 16.014C25.0031 13.572 25.0031 13.262 24.9471 12.305ZM15.9941 20.602C13.4401 20.602 11.3711 18.533 11.3711 15.979C11.3711 13.425 13.4401 11.356 15.9941 11.356C17.2202 11.356 18.396 11.843 19.263 12.71C20.13 13.577 20.6171 14.7529 20.6171 15.979C20.6171 17.2051 20.13 18.3809 19.263 19.2479C18.396 20.1149 17.2202 20.602 15.9941 20.602ZM20.8011 12.263C20.6595 12.2631 20.5192 12.2353 20.3884 12.1812C20.2575 12.127 20.1386 12.0476 20.0385 11.9475C19.9384 11.8474 19.859 11.7285 19.8049 11.5976C19.7507 11.4668 19.7229 11.3266 19.7231 11.185C19.7231 11.0435 19.7509 10.9033 19.8051 10.7726C19.8592 10.6419 19.9386 10.5231 20.0387 10.423C20.1387 10.323 20.2575 10.2436 20.3882 10.1895C20.519 10.1353 20.6591 10.1075 20.8006 10.1075C20.9421 10.1075 21.0822 10.1353 21.2129 10.1895C21.3436 10.2436 21.4624 10.323 21.5625 10.423C21.6625 10.5231 21.7419 10.6419 21.7961 10.7726C21.8502 10.9033 21.8781 11.0435 21.8781 11.185C21.8781 11.781 21.3961 12.263 20.8011 12.263Z"
                        fill="orange"
                      />
                      <path
                        d="M15.994 18.9821C17.6525 18.9821 18.997 17.6376 18.997 15.9791C18.997 14.3206 17.6525 12.9761 15.994 12.9761C14.3355 12.9761 12.991 14.3206 12.991 15.9791C12.991 17.6376 14.3355 18.9821 15.994 18.9821Z"
                        fill="#333333"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/imTravelMonk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="fill-slate-50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <path
                        d="M8.98292 11.1968C10.1913 11.1968 11.1709 10.2172 11.1709 9.0088C11.1709 7.8004 10.1913 6.8208 8.98292 6.8208C7.77452 6.8208 6.79492 7.8004 6.79492 9.0088C6.79492 10.2172 7.77452 11.1968 8.98292 11.1968Z"
                        fill="#333333"
                      />
                      <path
                        d="M13.237 12.8552V24.9942H17.006V18.9912C17.006 17.4072 17.304 15.8732 19.268 15.8732C21.205 15.8732 21.229 17.6842 21.229 19.0912V24.9952H25V18.3382C25 15.0682 24.296 12.5552 20.474 12.5552C18.639 12.5552 17.409 13.5622 16.906 14.5152H16.855V12.8552H13.237ZM7.09497 12.8552H10.87V24.9942H7.09497V12.8552Z"
                        fill="#333333"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/imtravelmonk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <path
                        d="M9.07697 13.457C9.07697 12.679 9.21297 11.944 9.48097 11.258C9.73702 10.5917 10.1174 9.98013 10.602 9.45596C11.0855 8.93867 11.6388 8.49136 12.246 8.12696C12.8689 7.75011 13.5433 7.4658 14.248 7.28296C14.9612 7.09568 15.6956 7.00123 16.433 7.00196C17.572 7.00196 18.632 7.24296 19.615 7.72296C20.5851 8.1942 21.4109 8.9174 22.006 9.81696C22.62 10.732 22.925 11.767 22.925 12.921C22.925 13.613 22.857 14.29 22.718 14.952C22.5815 15.6136 22.3645 16.256 22.072 16.865C21.7931 17.4544 21.4285 17.9993 20.99 18.482C20.5492 18.9569 20.0155 19.3361 19.422 19.596C18.7776 19.8784 18.0805 20.0205 17.377 20.013C16.888 20.013 16.4 19.898 15.918 19.667C15.436 19.437 15.09 19.121 14.882 18.716C14.809 18.997 14.709 19.403 14.576 19.934C14.448 20.464 14.362 20.806 14.324 20.961C14.284 21.115 14.21 21.372 14.102 21.728C14.0287 21.9913 13.9348 22.2484 13.821 22.497L13.477 23.171C13.3282 23.4602 13.1619 23.74 12.979 24.009C12.798 24.271 12.574 24.584 12.307 24.944L12.158 24.997L12.059 24.889C11.952 23.756 11.897 23.078 11.897 22.854C11.897 22.191 11.976 21.447 12.132 20.621C12.285 19.796 12.527 18.759 12.852 17.512C13.177 16.266 13.363 15.533 13.413 15.316C13.184 14.849 13.068 14.239 13.068 13.489C13.068 12.89 13.255 12.329 13.63 11.801C14.006 11.275 14.481 11.012 15.057 11.012C15.498 11.012 15.84 11.158 16.085 11.451C16.331 11.743 16.451 12.111 16.451 12.56C16.451 13.036 16.293 13.725 15.975 14.626C15.657 15.528 15.499 16.201 15.499 16.648C15.499 17.101 15.661 17.48 15.985 17.777C16.3047 18.0741 16.7276 18.2351 17.164 18.226C17.56 18.226 17.927 18.136 18.268 17.955C18.6036 17.7793 18.8942 17.5284 19.117 17.222C19.6022 16.5563 19.9481 15.7995 20.134 14.997C20.23 14.575 20.304 14.174 20.35 13.797C20.399 13.418 20.42 13.06 20.42 12.72C20.42 11.473 20.024 10.501 19.237 9.80496C18.446 9.10896 17.416 8.76296 16.149 8.76296C14.708 8.76296 13.503 9.22896 12.538 10.164C11.572 11.096 11.086 12.281 11.086 13.718C11.086 14.035 11.134 14.341 11.225 14.637C11.314 14.932 11.411 15.167 11.516 15.341C11.62 15.512 11.718 15.679 11.807 15.833C11.897 15.987 11.944 16.097 11.944 16.163C11.944 16.365 11.891 16.628 11.784 16.953C11.673 17.278 11.542 17.44 11.384 17.44C11.369 17.44 11.307 17.429 11.199 17.406C10.8249 17.2943 10.4871 17.0855 10.22 16.801C9.93641 16.506 9.71262 16.159 9.56097 15.779C9.40975 15.4003 9.29196 15.0091 9.20897 14.61C9.1193 14.2322 9.07499 13.8452 9.07697 13.457Z"
                        fill="#333333"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactUsForm />
        </div>
      </div>
    </main>
  );
};

export default ContactUs;

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const pageUrl = location.pathname;
  console.log("----------------page url", pageUrl);
  const submitForm = (data) => {
    const formData = { ...data, page: pageUrl };
    dispatch(submitContact(formData));

    setTimeout(() => {
      reset();
      dispatch(resetContactForm());
    }, 300);
  };
  return (
    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
      <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
        <div>
          <label className="font-medium">Full name</label>
          <input
            type="text"
            required
            {...register("name")}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            required
            {...register("email")}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Mobile No</label>
          <input
            type="tel"
            required
            {...register("phoneNumber")}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Message</label>
          <textarea
            required
            {...register("message")}
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          ></textarea>
        </div>
        <button
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
