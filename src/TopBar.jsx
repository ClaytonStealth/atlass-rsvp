import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
import smallLogo from "../src/assets/smallLogo.png";
import sportlogo from "../src/assets/sportlogo.png";


const TopBar = () => {
  return (
    <div className="flex fixed justify-between items-center px-4 py-2 w-full shadow-xl">
      <div className="flex items-center">
        <img src={sportlogo} alt="/" className="text-white mr-2 h-[40px] w-[40px]"/>
        <h1 className="text-xl font-bold text-gray-700">ATLAS</h1>
      </div>
      
    </div>
  );
};

export default TopBar;