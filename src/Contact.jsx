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
          <p className="text-center text-sm font-josefin_sans font-bold text-black">
            Thur, Feb 1st | Macallan Headquarters NYC
          </p>
          <h2 className="text-center text-4xl italic font-bold font-newsreader text-black">
            CHEERS AND CHAMPIONS:{" "}
          </h2>
          <p className="text-center text-xl font-josefin_sans font-bold text-black py-2">
            A NEW YEAR CELEBRATION WITH YOUNG PROFESSIONALS
          </p>
            <Link to="rsvp" smooth={true} duration={1000}>
          <button className="py-6 px-12 rounded-md bg-black text-white">
              Click To RSVP
          </button>
            </Link>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center">
            <img src={AtlasNoBack} alt="/" className="w-[200px] h-[200px]" />
            <p className=" font-josefin_sans font-semibold">
              PRESENTED BY:{" "}
              <span className=" font-josefin_sans font-semibold">ATLAS SPORTS</span>
            </p>
            <p className="font-josefin_sans font-semibold">FEATURING:</p>
            <div className="flex justify-between items-center my-4 sm:flex-wrap overflow-x-auto">
              <img src={ww} alt="/" className="h-[80px] w-[120px] mr-4" />
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
