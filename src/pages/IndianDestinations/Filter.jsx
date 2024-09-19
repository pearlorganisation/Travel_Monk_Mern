import React from "react";

function Filter({ iconName, label1, label2 }) {
  return (
    <div className="flex justify-center items-center gap-10 w-fit h-full ">
      <div className="flex">
        <div className="flex px-2 items-center">
          {" "}
          <img src={iconName} />
        </div>
        <div>
          <div className="text-neutral-800">{label1}</div>
          <div className="text-sm text-neutral-500">{label2}</div>
        </div>
      </div>

      <div>
        <i className="ri-arrow-down-s-line"></i>
      </div>
    </div>
  );
}

export default Filter;
