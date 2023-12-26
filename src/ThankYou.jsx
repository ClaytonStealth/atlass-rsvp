import React from 'react';

const ThankYou = (props) => {
    return (
        <div name="thank-you" className="h-screen flex flex-col justify-center items-center bg-fixed bg-gradient-to-b from-white to-black">
            <h1 className="text-4xl font-newsreader italic text-white text-center">{props.tyMessage}</h1>
        </div>
    );
};

export default ThankYou;
