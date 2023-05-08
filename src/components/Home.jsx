import React from "react";
import Text from "./Text"
import { HiOutlineArrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

const Home = () => {
    const handleRedirect = () => {
    window.open('https://drive.google.com/file/d/17tV5nm93UGZ_ZRsgce-6eM31KT7x-_K5/view?usp=share_link', '_blank');
    }
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-1xl sm:text-2xl font-light text-accent">
            Hi, I'm
          </h3>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Aditya Das
          </h2>
          <span></span>
          <Text/>
          {/* <p className="text-white py-4 max-w-sm sm:max-w-xl">
          Student at Indian Institute of Technology Kharagpur and a full-stack developer with expertise in web development, data mining, and machine learning. I've worked as a developer and head of web at Chi Squarex Technologies. I'm passionate about new technologies and love exploring the intersection between technology and science.
          </p> */}

          <div className="hidden md:inline">
            
            {/* <Link href="https://drive.google.com/file/d/1azY6APPIBzBuBRAI-miOs6XePm64yGqZ/view?usp=share_link" smooth duration={500} offset={-80}> */}
              <button className="group text-white w-fit px-6 py-3 my-2 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" onClick={handleRedirect}>
                Resume
                <div className="contents md:hidden">
                  {/* <Link href="https://drive.google.com/file/d/1azY6APPIBzBuBRAI-miOs6XePm64yGqZ/view?usp=share_link" smooth duration={500} offset={-80}> */}
                    Resume
                  {/* </Link> */}
                </div>
                <span className="group-hover:rotate-90 duration-300">
                  <HiOutlineArrowRight size={18} className="ml-1" />
                </span>
              </button>
            {/* </Link> */}
          </div>
          {/* <div className="inline md:hidden">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiOutlineArrowRight size={18} className="ml-1" />
                </span>
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
