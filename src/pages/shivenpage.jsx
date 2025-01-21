import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { CircleLoader } from "react-spinners";
// import { createOrUpdateConsultantProfile, getParticularConsultantProfile } from "../../features/actions/consultantProfile";

const CompanyProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
//   const { consultantProfileData, isCreated } = useSelector((state) => state.consultantProfile);
//   const { loggedInUserData } = useSelector((state) => state.auth);
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch =useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm(
//     {
//     defaultValues:consultantProfileData
//   }
);

  const onSubmit = (data) => {

//     const newData= {...data,consultantId:loggedInUserData?._id}
// dispatch(createOrUpdateConsultantProfile(newData))

  };

  const handleEditClick = () => {
    setIsDisabled(false); // Enable the input fields
    setTimeout(() => {
      setFocus("consultantName"); // Focus on the first field after enabling
    }, 10); // Delay to allow the re-render to complete
  };

//   useEffect(()=>{
//     if(isCreated)
//       dispatch(getParticularConsultantProfile(loggedInUserData?._id))
//     setIsDisabled(true);
//   },[isCreated])

//   useEffect(()=>{
// dispatch(getParticularConsultantProfile(loggedInUserData?._id))
//   },[])
  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Consultant Profile
          </h1>
          {isDisabled && (
            <button
              className="text-white text-lg bg-blue-500 hover:bg-blue-700 p-1 px-4 rounded-md transition duration-300"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
        </div>

        <div className="w-full flex-1 mt-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("consultantName", {
                    required: {
                      value: true,
                      message: "Consultant Name is a required field",
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Consultant Name
                </label>
                {errors.consultantName && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.consultantName?.message ||
                      "Consultant Name is a required field"}
                  </p>
                )}
                </div>

                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("mobileNumber", {
                    required: {
                      value: true,
                      message: "Mobile Number is a required field",
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Mobile Number
                </label>
                {errors.mobileNumber && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.mobileNumber?.message ||
                      "Mobile Number is a required field"}
                  </p>
                )}
                </div>
              <div className="flex flex-col gap-2">
              <select
  id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
  disabled={isDisabled}
  {...register("gender", {
    required: {
      value: true,
      message: "Gender is a required field",
    },
  })}
>
<label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                    Select Gender
                </label>
  <option value="" disabled selected hidden>
    Select Gender
  </option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Others">Others</option>
</select>
                {errors.gender && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.gender?.message || "Gender is a required field"}
                  </p>
                )}
              </div>
              
         
              <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  disabled={isDisabled}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is a required field",
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
                {errors.email && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.email?.message ||
                      "Email is a required field"}
                  </p>
                )}
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">

                   
          
          


                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("companyId", {
                    required: {
                      value: true,
                      message: "Company ID is a required field",
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                Company ID
                </label>
                {errors.companyId && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.companyId?.message ||
                      "Email is a required field"}
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("companyPan", {
                    required: {
                      value: true,
                      message: "Company PAN is a required field",
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                CompanyPan
                </label>
                {errors.companyPan && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.companyPan?.message ||
                      " CompanyPan is a required field"}
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <textarea
                id="floating_outlined"
                  className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("address")}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>

                </div>

              </div>
              


        
            </div>
     

            <button
              className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleLoader />
              ) : (
                <>
                  <span className="ml-3">Save</span>
                </>
              )}
            </button>

            <p className="mt-6 text-xs text-gray-600 text-center">
              Shiven Consultancy <br />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
