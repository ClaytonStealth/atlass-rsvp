import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Rsvp(props) {
  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [affiliation, setAffiliation] = useState("");

  return (
    <div
      method="post"
      name="rsvp"
      className=" w-full min-h-screen flex items-center justify-center bg-fixed bg-gradient-to-b from-white to-black"
    >
      {/* RSVP Form */}
      <form className="max-w-[400px] w-full mx-auto shadow-2xl p-8 rounded-lg">
        <div className="flex flex-col mb-4 ">
          <input
            className="bg-gray-200 p-2 rounded-2xl shadow-2xl "
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col mb-4 ">
          <input
            className="bg-gray-200 p-2 rounded-2xl shadow-2xl "
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => {
              setLName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            className="bg-gray-200 p-2 rounded-2xl shadow-2xl"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="p-2 rounded-2xl shadow-2xl bg-gray-200"
            type="text"
            placeholder="Affiliation"
            name="affiliation"
            onChange={(e) => {
              setAffiliation(e.target.value);
            }}
          />
        </div>
        <Link to="thank-you" smooth={true} duration={1000}>
          <button
            type="submit"
            className="w-full py-3 mt-8 bg-black text-white rounded-md"
            onClick={(e) => {
              e.preventDefault();
              props.setTyMessage(`Thank you ${fname} for RSVPing`);
              props.setAtlasMsg(
                "A member of the Atlas team will reach out to you shortly."
              );
            }}
          >
            RSVP NOW
          </button>
        </Link>
      </form>
    </div>
  );
}
