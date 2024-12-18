import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Gender: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false); 

  const options: string[] = ["Male", "Female", "Others"]; 

  return (
    <div
      className="relative w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="flex justify-between items-center p-3">
        <div className="text-sm font-medium">Gender</div>
        <div className="ml-4">
          <MdKeyboardArrowDown
            size={24}
            className={`transition-transform ${
              isHovered ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isHovered && (
        <div className="absolute top-full left-0 mt-2 w-full border border-gray-500 rounded-lg bg-gray-200 shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gender;