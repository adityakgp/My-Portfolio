import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full xs:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#219be5]">
            About
          </h2>
        </div>

        

        <br />

        <p className="text-lg">
          
I am a student currently pursuing my education at the {" "}
<a
href="http://www.iitkgp.ac.in/"
target="_blank"
rel="noreferrer"
className="border-b-2 border-gray-500"
>Indian Institute of Technology Kharagpur</a>, with a projected graduation date of 2025. Alongside my academic endeavors, I have established myself as a skilled and proficient full-stack developer, specializing in various facets of web development, data mining, and machine learning.

        </p>

        <br />

        <p className="text-lg">
          During my professional tenure, I have had the privilege of working at Chi Squarex Technologies, where I held the position of Head of Web Development. This experience allowed me to hone my skills and develop a deeper understanding of the complexities and nuances that come with managing and overseeing web development projects.

        </p>

        <br />

        <p className="text-lg">
        As an individual, I am deeply passionate about the latest and most innovative technologies, and I am constantly seeking opportunities to explore and experiment with cutting-edge advancements. Additionally, I am fascinated by the intersection between technology and science and strive to delve deeper into this realm to unlock its full potential.

        </p>
      </div>
    </div>
  );
};

export default About;
