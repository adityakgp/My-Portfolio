import React from 'react'
import Typewriter from "typewriter-effect";
import "./Type.css"

function Text() {
  return (
    <Typewriter style={{color: "red"}}
      options={{
        strings: [
          "Full Stack Developer",
          "MERN Stack Developer",
          "Machine Learning Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text