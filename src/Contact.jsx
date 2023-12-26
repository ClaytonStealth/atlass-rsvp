import React from "react";
import AtlasNoBack from "./assets/sportlogo.png";
import ww from "./assets/wwNoBack.png";
import macallen from "./assets/MacallenNoBack.png";
import glen from "./assets/glenNoBack.png";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div
      name='contact'
      className=' m-auto w-full flex flex-col justify-center items-center pt-[148px] sm:pt-16 h-screen bg-fixed bg-gradient-to-b from-white to-black'
    >
      <div className='grid md:grid-cols-2 w-full'>
        <div className='flex flex-col gap-y-10 justify-end items-center text-center'>
          <p className='text-center text-sm font-josefin_sans font-bold text-black mb-4'>
            Thur, Feb 1st | Macallan Headquarters NYC
          </p>
          <h2 className='text-center text-4xl italic font-bold font-newsreader text-black'>
            CHEERS AND CHAMPIONS:{" "}
          </h2>
          <p className='text-center text-xl font-josefin_sans font-bold text-black py-2'>
            A NEW YEAR CELEBRATION WITH YOUNG PROFESSIONALS
          </p>
        </div>

        <div className=' mt-8 sm:mt-0'>
          <div className='flex flex-col justify-center items-center'>
            <img
              src={AtlasNoBack}
              alt='/'
              className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mb-8'
            />
            <p className=' font-josefin_sans font-semibold text-center'>
              PRESENTED BY:{" "}
              <span className=' font-josefin_sans font-semibold text-center'>
                ATLAS SPORTS
              </span>
            </p>
            <p className='font-josefin_sans font-semibold text-center'>
              FEATURING:
            </p>
            <div className='flex justify-between items-center flex-wrap mb-4 sm:mb-0'>
              <img
                src={ww}
                alt='/'
                className='h-[40px] w-[60px] md:h-[80px] md:w-[120px] sm:mr-4'
              />
              <img
                src={macallen}
                alt='/'
                className='h-[35px] w-[75px] md:h-[70px] md:w-[150px] ml-4'
              />
              <img
                src={glen}
                alt='/'
                className='h-[35px] w-[75px] md:h-[70px] md:w-[150px]'
              />
            </div>
            <Link to='rsvp' smooth={true} duration={1000}>
              <button className='sm:hidden py-3 px-6 sm:py-6 sm:px-12 rounded-md bg-black text-white'>
                Click To RSVP
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden sm:block pt-8'>
        <Link to='rsvp' smooth={true} duration={1000}>
          <button className='py-3 px-6 sm:py-6 sm:px-12 rounded-md bg-black text-white'>
            Click To RSVP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
