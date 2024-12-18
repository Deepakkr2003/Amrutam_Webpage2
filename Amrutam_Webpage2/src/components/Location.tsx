import React, { useState } from "react";

const Location: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [selectedLocation, setSelectedLocation] = useState<string>("Select Location"); 

  const locations: string[] = ["New York", "London", "Paris", "Tokyo", "Sydney"]; 

  const handleSelect = (location: string): void => { 
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <div
        className="p-3 cursor-pointer flex justify-between items-center text-gray-500"
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)} 
      >
        <span>{selectedLocation}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0  w-full border-2 border-green-500 bg-white z-10">
          {locations.map((location) => (
            <div
              key={location}
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSelect(location)} 
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;