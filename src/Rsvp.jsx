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

  const [touched, setTouched] = useState({
    user_fName: false,
    user_lName: false,
    user_email: false,
    user_affiliation: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setRsvpState({ ...rsvpState, [name]: value });
  };

  const isValidObj = validator(rsvpState);
  console.log(isValidObj);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending Email");

    emailjs
      .sendForm(
        "service_chwkmbo",
        "template_9p2imej",
        form.current,
        "NHoQwlFQpc2euGO3O"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Success");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
        <div
          className={`flex flex-col mb-4 ${
            touched.user_fName && isValidObj.user_fName.error
              ? "animate-shake"
              : ""
          }`}
        >
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='First Name'
            name='user_fName'
            onChange={onChangeHandler}
          />
          {touched.user_fName && isValidObj.user_fName.error && (
            <p className='text-red-700 text-xs font-bold mb-1'>
              Field Required
            </p>
          )}
        </div>
        <div
          className={`flex flex-col mb-4 ${
            touched.user_lName && isValidObj.user_lName.error
              ? "animate-shake"
              : ""
          }`}
        >
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='Last Name'
            name='user_lName'
            onChange={onChangeHandler}
          />
          {touched.user_lName && isValidObj.user_lName.error && (
            <p className='text-red-700 text-xs font-bold mb-1'>
              Field Required
            </p>
          )}
        </div>
        <div
          className={`flex flex-col mb-4 ${
            touched.user_email && isValidObj.user_email.error
              ? "animate-shake"
              : ""
          }`}
        >
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl'
            type='email'
            placeholder='Email'
            name='user_email'
            onChange={onChangeHandler}
          />
          {touched.user_email && isValidObj.user_email.error && (
            <p className='text-red-700 text-xs font-bold mb-1'>
              Field Required
            </p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            className='p-2 rounded-2xl shadow-2xl bg-gray-200'
            type='text'
            placeholder='Company Affiliation (Optional)'
            name='user_affiliation'
            onChange={onChangeHandler}
          />
        </div>
        <Link to='thank-you' smooth={true} duration={1000}>
          <button
            type='submit'
            className='w-full py-3 mt-8 bg-black text-white rounded-md'
            disabled={
              isValidObj.user_fName.error ||
              isValidObj.user_lName.error ||
              isValidObj.user_email.error
            }
            onClick={(e) => {
              if (
                !isValidObj.user_fName.error &&
                !isValidObj.user_lName.error &&
                !isValidObj.user_email.error
              ) {
                props.setTyMessage(`Thank you ${rsvpState.user_fName}!`);
                props.setAtlasMsg(
                  "A member of Atlas Sports will contact you with more details shortly."
                );
                sendEmail(e);
              }
            }}
          >
            RSVP NOW
          </button>
        </Link>
      </form>
    </div>
  );
}
