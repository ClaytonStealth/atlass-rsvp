import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Rsvp(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const rsvpObject = {
    email: email,
    name: name,
    affiliation: affiliation,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, affiliation);
    rsvpObject.email = email;
    rsvpObject.name = name;
    rsvpObject.affiliation = affiliation;
    console.log(rsvpObject);
  };

  return (
    <div
      name='rsvp'
      className=' w-full min-h-screen flex items-center justify-center bg-fixed bg-gradient-to-b from-white to-black'
    >
      {/* RSVP Form */}
      <form className='max-w-[400px] w-full mx-auto shadow-2xl p-8 rounded-lg'>
        <h1 className='text-4xl font-bold font-josefin_sans text-center py-4 text-white'>
          ATLAS
        </h1>
        <div className='flex flex-col mb-4 '>
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='First & Last'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='flex flex-col mb-4'>
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl'
            type='email'
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='flex flex-col'>
          <input
            className='p-2 rounded-2xl shadow-2xl bg-gray-200'
            type='text'
            placeholder='Affiliation'
            onChange={(e) => {
              setAffiliation(e.target.value);
            }}
          />
        </div>
        <Link to='thank-you' smooth={true} duration={1000}>
          <button
            className='w-full py-3 mt-8 bg-black text-white rounded-md'
            onClick={(e) => {
              e.preventDefault();
              props.setTyMessage(
                `Thank you ${name} for RSVPing! We will send you an email with more information soon.`
              );
            }}
          >
            RSVP
          </button>
        </Link>
      </form>
    </div>
  );
}
