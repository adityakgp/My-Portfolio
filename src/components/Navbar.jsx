import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={50} />
        </>
      ),
      href: "https://www.linkedin.com/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={50} />
        </>
      ),
      href: "https://www.github.com/agrpaavan",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={50} />
        </>
      ),
      href: "mailto:paavanagr@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={50} />
        </>
      ),
      href: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-[#219be5]">Paavan</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <ul className="flex flex-col justify-center items-center">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-8 text-4xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
          <ul className="flex flex-row justify-center items-center absolute w-full text-white bottom-0">
            {socialLinks.map(({ id, child, href, style }) => (
              <li key={id} className="py-8 px-4">
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;