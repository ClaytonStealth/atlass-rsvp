import React, { useState, useRef, useEffect } from "react";
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

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [touched, setTouched] = useState({
    user_fName: false,
    user_lName: false,
    user_email: false,
    user_affiliation: false,
  });

  const [shakeFields, setShakeFields] = useState([]);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showFNameError, setShowFNameError] = useState(false);
  const [showLNameError, setShowLNameError] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setRsvpState({ ...rsvpState, [name]: value });
  };

  const isValidObj = validator(rsvpState);

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

  useEffect(() => {
    if (shakeFields.length > 0) {
      // Set error visibility for each field
      setShowFNameError(shakeFields.includes("user_fName"));
      setShowLNameError(shakeFields.includes("user_lName"));
      setShowEmailError(shakeFields.includes("user_email"));

      // Reset shake animation after a short delay
      const timeoutId = setTimeout(() => {
        setShakeFields([]);
      }, 600); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    }
  }, [shakeFields]);

  const handleButtonClick = (e) => {
    // Check input validation
    setFormSubmitted(true);
    const fieldsToShake = [];
    if (isValidObj.user_fName.error) fieldsToShake.push("user_fName");
    if (isValidObj.user_lName.error) fieldsToShake.push("user_lName");
    if (isValidObj.user_email.error) fieldsToShake.push("user_email");

    if (fieldsToShake.length > 0) {
      // Shake the specified fields
      setShakeFields(fieldsToShake);

      // Set error visibility for each field
      setShowFNameError(fieldsToShake.includes("user_fName"));
      setShowLNameError(fieldsToShake.includes("user_lName"));
      setShowEmailError(fieldsToShake.includes("user_email"));
    } else {
      // No errors, proceed with sending email
      props.setTyMessage(`Thank you ${rsvpState.user_fName}!`);
      props.setAtlasMsg(
        "A member of Atlas Sports will contact you with more details shortly."
      );
      sendEmail(e);

      // Scroll to the next page (assuming 'thank-you' is the target)
      document.getElementById("thank-you").scrollIntoView({
        behavior: "smooth",
        duration: 1000,
      });
      // Reset error visibility after successful submission
      setShowFNameError(false);
      setShowLNameError(false);
      setShowEmailError(false);
    }

    e.preventDefault();
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
            shakeFields.includes("user_fName") ? "animate-shake" : ""
          }`}
        >
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='First Name'
            name='user_fName'
            onChange={onChangeHandler}
          />
          {formSubmitted && showFNameError && (
            <p className='text-red-700 text-xs font-bold mb-1'>
              Field Required
            </p>
          )}
        </div>
        <div
          className={`flex flex-col mb-4 ${
            shakeFields.includes("user_lName") ? "animate-shake" : ""
          }`}
        >
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl '
            type='text'
            placeholder='Last Name'
            name='user_lName'
            onChange={onChangeHandler}
          />
          {formSubmitted && showLNameError && (
            <p className='text-red-700 text-xs font-bold mb-1'>
              Field Required
            </p>
          )}
        </div>
        <div
          className={`flex flex-col mb-4 ${
            shakeFields.includes("user_email") ? "animate-shake" : ""
          }`}
        >
          <input
            className='bg-gray-200 p-2 rounded-2xl shadow-2xl'
            type='email'
            placeholder='Email'
            name='user_email'
            onChange={onChangeHandler}
          />
          {formSubmitted && showEmailError && (
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

        <button
          type='submit'
          className='w-full py-3 mt-8 bg-black text-white rounded-md'
          onClick={handleButtonClick}
        >
          RSVP NOW
        </button>
      </form>
    </div>
  );
}
