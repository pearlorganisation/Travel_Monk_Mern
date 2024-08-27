import React from "react";
import { useForm } from "react-hook-form";

const GetInTouchForm = () => {
  const { handleSubmit, register } = useForm({});

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container border border-red-500 mx-auto">
      <div className="py-8">
        <h1 className="text-center text-4xl font-bold "> Get In Touch</h1>
        <p className="text-sm text-center font-thin">
          Please share your specific request
        </p>
      </div>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            {...register("name")}
            class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
          />
        </div>
        <div class="mb-5">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact Number <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            {...register("phone")}
            class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            type="message"
            {...register("message")}
            class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
          />
        </div>{" "}
        <button
          type="button"
          class="mt-8 my-2 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            class="mr-2"
            viewBox="0 0 548.244 548.244"
          >
            <path
              fill-rule="evenodd"
              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
              clip-rule="evenodd"
              data-original="#000000"
            />
          </svg>
          Send Message
        </button>
      </form>

      <div className="flex  flex-col justify-center items-center py-8">
        <h1 className="text-3xl py-4">
          Where are you going to take your next selfie?
        </h1>
        <div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
