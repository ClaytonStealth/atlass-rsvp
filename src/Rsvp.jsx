import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
import { validator } from "./lib/validator";

export default function Rsvp(props) {
  const form = useRef();
  const [rsvpState, setRsvpState] = useState({
    user_email: "",
    user_fName: "",
    user_lName: "",
    user_affiliation: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRsvpState({ ...rsvpState, [name]: value });
  };

  console.log(validator({rsvpState}));

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_YOUR_SERVICE_ID,
    //     process.env.REACT_APP_YOUR_TEMPLATE_ID,
    //     form.current,
    //     process.env.REACT_APP_YOUR_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("Success");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div
      method='post'
      name='rsvp'
      className=' w-full min-h-screen flex items-center justify-center bg-fixed bg-gradient-to-b from-white to-black'
    >
      {/* RSVP Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className='max-w-[400px] w-full mx-auto shadow-2xl p-8 rounded-lg'
      >
        <div className='flex flex-col mb-4 '>
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='First Name'
            name='user_fName'
            onChange={onChangeHandler}
          />
        </div>
        <div className='flex flex-col mb-4 '>
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='Last Name'
            name='user_lName'
            onChange={onChangeHandler}
          />
        </div>
        <div className='flex flex-col mb-4'>
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl'
            type='email'
            placeholder='Email'
            name='user_email'
            onChange={onChangeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <input
            className='p-2 rounded-2xl shadow-2xl bg-gray-200'
            type='text'
            placeholder='Affiliation'
            name='user_affiliation'
            onChange={onChangeHandler}
          />
        </div>
        <Link to='thank-you' smooth={true} duration={1000}>
          <button
            type='submit'
            className='w-full py-3 mt-8 bg-black text-white rounded-md'
            onClick={(e) => {
              e.preventDefault();
              props.setTyMessage(`Thank you ${rsvpState.user_fName}!`);
              props.setAtlasMsg(
                "A member of Atlas Sports will contact you with more details shortly."
              );
              sendEmail(e);
            }}
          >
            RSVP NOW
          </button>
        </Link>
      </form>
    </div>
  );
}
