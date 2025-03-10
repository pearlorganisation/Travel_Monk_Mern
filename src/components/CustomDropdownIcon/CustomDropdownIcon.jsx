import React from "react";
import Select, { components } from "react-select";
import { IoMdAdd } from "react-icons/io";

// Custom DropdownIndicator component
const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IoMdAdd style={{ color: "gray", fontSize: "16px" }} />
    </components.DropdownIndicator>
  );
};

// const App = () => {
//   return (
//     <div style={{ width: "300px", margin: "50px auto" }}>
//       <Select
//         options={options}
//         components={{ DropdownIndicator: CustomDropdownIndicator }}
//         placeholder="Select a flavor"
//       />
//     </div>
//   );
// };

export default CustomDropdownIndicator;
