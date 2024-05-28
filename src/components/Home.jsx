import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className=" mt-10 text-3xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-white text-lg py-6 max-w-md">
            As a skilled MERN stack developer, I build dynamic web applications with MongoDB, Express.js, React, and Node.js, enhancing user experiences and driving business growth.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full w-64 h-64 md:w-[300px] md:h-[350px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
