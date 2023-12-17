import React from "react";
import { useState } from "react";
import AtlassLogo from "../src/assets/AtlassLogo.JPG";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

export default function Rsvp(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [rsvpMessage, setRsvpMessage] = useState("");
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img
        className='absolute w-full h-full object-cover mix-blend-overlay'
        src={AtlassLogo}
        alt='/'
      />

      <div className=' flex justify-center items-center h-full '>
        <div className=' max-w-[400px] w-full mx-auto dark:bg-opacity-30 bg-opacity-30 bg-white dark:bg-zinc-500 p-8 rounded-lg relative'>
          <h2 className='text-4xl font-bold text-center py-4 dark:text-white'>
            Atlass
          </h2>
          {rsvpMessage && <h3 className='font-bold'>{rsvpMessage}</h3>}
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl dark:hover:shadow-zinc-800 px-6 py-2 relative flex items-center rounded-lg dark:text-zinc-300'>
              <AiFillFacebook className='mr-2' />
              <a href='https://www.facebook.com/'>FaceBook</a>
            </p>
            <p className='border shadow-lg hover:shadow-xl dark:hover:shadow-zinc-800 px-6 py-2 relative flex items-center rounded-lg dark:text-zinc-300'>
              <FcGoogle className='mr-2' />
              <a href='https://www.google.com/'>Google</a>
            </p>
          </div>

          <div className='flex flex-col mb-4 relative'>
            <label>Email</label>
            <input
              className='border relative bg-gray-100 p-2 rounded-lg dark:bg-zinc-500 dark:text-white'
              type='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='flex flex-col relative'>
            <label>Name</label>
            <input
              className='border relative bg-gray-100 p-2 rounded-lg dark:bg-zinc-500 dark:text-white'
              type='text'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <button
            className='w-full py-3 mt-8 bg-indigo-600 hover:bg-transparent dark:bg-indigo-700/50  dark:hover:text-indigo-400 relative text-white rounded-lg'
            onClick={async () => {}}
          >
            Sign up
          </button>

          <p className='flex items-center relative mt-2 dark:text-zinc-300'>
            <input className='mr-2' type='checkbox' />
            Yes, Attending
          </p>
          <p className='flex items-center relative mt-2 dark:text-zinc-300'>
            <input className='mr-2' type='checkbox' />
            No
          </p>
          <div className='flex justify-between sm:w-[300px] pt-4 text-2xl pl-5'>
            <a href='https://www.facebook.com/profile.php?id=100088389997417'>
              <FaFacebook className='text-zinc-700 dark:text-zinc-300' />
            </a>
            <a href='https://www.instagram.com/_n3xtzion_/'>
              <FaInstagram className='text-zinc-700 dark:text-zinc-300' />
            </a>
            <a href='https://twitter.com/N3XTzION'>
              <FaTwitter className='text-zinc-700 dark:text-zinc-300' />
            </a>
            <a href='https://www.twitch.tv/n3xtzion'>
              <FaTwitch className='text-zinc-700 dark:text-zinc-300' />
            </a>
            <a href='https://github.com/ClaytonStealth?tab=repositories'>
              <FaGithub className='text-zinc-700 dark:text-zinc-300' />
            </a>
          </div>
          <p
            className='text-center mt-8 relative dark:text-zinc-300 hover:text-indigo-400 dark:hover:text-indigo-400 cursor-pointer'
            onClick={() => {}}
          ></p>
        </div>
      </div>
    </div>
  );
}
