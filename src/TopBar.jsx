import React from "react";
import sportlogo from "./assets/sportlogo.png";

const TopBar = () => {
  return (
    <div className='flex fixed justify-between items-center px-4 py-2 w-full shadow-xl'>
      <div className='flex items-center'>
        <img
          src={sportlogo}
          alt='/'
          className='text-white mr-2 h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]'
        />
      </div>
    </div>
  );
};

export default TopBar;
