import React from "react";
import noteapp from "../assets/projects/noteapp.png";
import portfolio from "../assets/projects/portfolio.png";
import savelarvas from "../assets/projects/savelarvas.png";
import textformat from "../assets/projects/textformat.png";
import nekonews from "../assets/projects/nekonews.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Javascript Game",
      src: savelarvas,
      href: "https://github.com/adityakgp/save-the-larvas",
      deploy: "https://adityakgp.github.io/save-the-larvas/",
    },
    {
      id: 2,
      name: "News App",
      src: nekonews,
      href: "https://github.com/adityakgp/NekoNews",
      shadow: "shadow-[#0093d3]",
    },
    {
      id: 3,
      name: "Portfolio Site",
      src: portfolio,
      href: "https://github.com/AgrPaavan/basic-portfolio",
      deploy: "https://adityakgp.github.io/save-the-larvas/",
    },
    {
      id: 4,
      name: "Note App",
      src: noteapp,
      href: "https://github.com/adityakgp/My-Note-Book",
      deploy: "https://my-notebook-e899a.web.app/signup",
    },
    {
      id: 5,
      name: "Text Formatter",
      src: textformat,
      href: "https://github.com/adityakgp/Text-Formatter-React",
      deploy: "https://adityakgp.github.io/Text-Formatter-React/",
      shadow: "shadow-[#43e660]",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-accent">
            Projects
          </h2>
          <p className="py-6">
            Checkout some of the things I have worked on here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, name, src, href, shadow, deploy }) => (
            <div
              key={id}
              className={`shadow-md rounded-lg hover:scale-105 duration-500 ${
                shadow ? shadow : "shadow-gray-600"
              }`}
            >
              <img src={src} alt="" className="rounded-md m-auto flex-1" />
              <div className="flex flex-col grow flex-initial justify-center items-center">
                <button className="px-6 py-3 cursor-default">{name}</button>
                {deploy && (
                  <div className="flex flex-row justify-between items-center">
                    <button className="px-6 py-3 text-gray-500 mb-auto justify-end hover:text-gray-400">
                      <a href={href} target="_blank" rel="noreferrer">
                        Github
                      </a>
                    </button>
                    <button className="px-6 py-3 text-gray-500 mb-auto justify-end hover:text-gray-400">
                      <a href={deploy} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    </button>
                  </div>
                )}
                {!deploy && (
                  <button className="px-6 py-3 text-gray-500 mb-auto justify-end hover:text-gray-400">
                    <a href={href} target="_blank" rel="noreferrer">
                      Github Repository
                    </a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
