import React from "react";
import AtlassSportsLogo from "../src/assets/Atlas-Sports-Logo.png";
import party from "../src/assets/party.jpg";

const Contact = () => {
  return (
    <div name="contact" className=" m-auto w-full p-4 py-16 h-screen bg-fixed bg-gradient-to-b from-white to-black">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-around justify-center items-center">
          <p className="text-center text-sm font-semibold text-gray-900">Thur, Feb 1st | Macallan Headquarters NYC</p>
          <h2 className="text-center text-4xl italic font-bold font-newsreader text-gray-700">
            CHEERS AND CHAMPIONS:{" "}
          </h2>
          <p className="text-center text-xl font-semibold text-gray-700 py-2">
            A NEW YEAR CELEBRATION WITH YOUNG PROFESSIONALS
          </p>
          <button className="p-2 rounded-md bg-gray-900 text-white">Click To RSVP</button>
        </div>

        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Affiliation"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2 bg-gradient-to-br from-black to-white">
              RSVP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
