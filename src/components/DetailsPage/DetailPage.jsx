import React, { useState } from "react";

const DetailPage = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("Overview");

  const specialties = [
    "Overview",
    "Miller's Series",
    "Anesthesia Machine and Work",
    "Basic and Advanced Airway",
    "Basics of Anesthesia",
    "Monitoring in Anesthesia",
    "Clinical Anesthesia",
    "Perioperative Management",
    "Cardiac Anesthesia",
    "Thoracic Anesthesia",
    "Neuroanesthesia",
    "Obstetric Anesthesia",
    "Pediatric Anesthesia",
    "Onco Anesthesia",
  ];

  const content = {
    Overview: {
      title: "Anesthesia",
      description: `
        Anesthesia Package covers 20 specialties into a single package at a discounted price. It combines all aspects from basic to advanced lectures in anesthesia including machines, physics, pharmacology, anatomy, physiology, monitoring, mechanical ventilation, and more. 
        The category contains 748 video lectures, 20 sub-specialties.`,
      videoCount: 748,
      subSpecialties: 20,
    },
    // Add content for other specialties here...
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 border-r">
        <h2 className="text-xl font-bold px-4 py-2">Sub Specialities</h2>
        <ul className="space-y-2 px-4">
          {specialties.map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 rounded ${
                selectedSpeciality === item
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setSelectedSpeciality(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">
          {content[selectedSpeciality]?.title || selectedSpeciality}
        </h1>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Specialty"
            className="w-48 h-32 rounded-lg shadow-lg mr-4"
          />
          <div>
            <p className="text-lg mb-2">
              {content[selectedSpeciality]?.description ||
                "Details about this specialty will appear here."}
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded font-bold">
                Purchase this category
              </button>
              <button className="bg-green-500 py-2 px-4 rounded font-bold">
                Share
              </button>
            </div>
          </div>
        </div>
        <p className="text-yellow-300 font-bold">
          The category contains{" "}
          {content[selectedSpeciality]?.videoCount || "N/A"} video lectures,{" "}
          {content[selectedSpeciality]?.subSpecialties || "N/A"} sub-specialties.
        </p>
      </div>
    </div>
  );
};

export default  DetailPage;
