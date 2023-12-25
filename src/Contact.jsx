import React from "react";
import AtlasNoBack from "./assets/sportlogo.png";
import ww from "./assets/wwNoBack.png";
import macallen from "./assets/MacallenNoBack.png";
import glen from "./assets/glenNoBack.png";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" m-auto w-full flex justify-center items-center p-4 py-16 h-screen bg-fixed bg-gradient-to-b from-white to-black"
    >
      <div className="grid md:grid-cols-2 w-full">
        <div className="flex flex-col justify-around items-center">
          <p className="text-center text-sm font-semibold text-gray-900">
            Thur, Feb 1st | Macallan Headquarters NYC
          </p>
          <h2 className="text-center text-4xl italic font-bold font-newsreader text-gray-700">
            CHEERS AND CHAMPIONS:{" "}
          </h2>
          <p className="text-center text-xl font-semibold text-gray-700 py-2">
            A NEW YEAR CELEBRATION WITH YOUNG PROFESSIONALS
          </p>
          <button className="p-2 px-4 rounded-md bg-gray-900 text-white">
            Click To RSVP
          </button>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center">
            <img src={AtlasNoBack} alt="/" className="w-[200px] h-[200px]" />
            <p className=" font-newsreader">
              PRESENTED BY:{" "}
              <span className=" font-newsreader">ATLAS SPORTS</span>
            </p>
            <p>FEATURING:</p>
            <div className="flex justify-between items-center my-4 sm:flex-wrap overflow-x-auto">
              <img src={ww} alt="/" className="h-[80px] w-[120px] mr-2" />
              <img src={macallen} alt="/" className="h-[70px] w-[150px] mx-4" />
              <img src={glen} alt="/" className="h-[70px] w-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
