import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black  ">
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2><br/>
          <p className="text-white text-1xl py-6  max-w-md ">
          As a skilled MERN stack developer, I build dynamic web applications with MongoDB, Express.js, React, and Node.js, enhancing user experiences and driving business growth.
          </p>
         <br/>

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

        <div>
        <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full
             w-[250px] h-[300px] md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;