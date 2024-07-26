import React from "react";
import BackgroundImage from "../assets/images/bg.jpg"; // Import the background image

const Contact = () => {
  return (
    <div
      name="contact"
      className="relative w-full h-auto bg-cover bg-center bg-no-repeat p-4 text-white"
      style={{ backgroundImage: `url(${BackgroundImage})` }} // Corrected the style prop syntax
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-black to-black opacity-75"></div> {/* Add an overlay */}
      <div className="relative z-10 flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/raeqdyla"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
