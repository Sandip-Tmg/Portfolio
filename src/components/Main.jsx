import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import Resume from '../../assets/resume.pdf'

export default function () {
  return (
    <div id="home" className="w-full h-screen text-center bg-[#0a192f]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-pink-600 text-2xl">Hi, my name is</p>
          <h1 className="py-4 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Sandip Tamang
          </h1>
          <h2 className="py-2 text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Software Engineer.
          </h2>
          <p className="py-4 text-gray-600 text-2xl sm:max-w-[70%] m-auto app-p">
            I’m passionate in technologies and have a keen interest in software development, machine learning, and game development.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://ie.linkedin.com/in/sandip-tamang-b338b31b1?original_referer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-white rounded-full shadow-md shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={20}/>
              </div>
            </a>
            <a
              href="https://github.com/Sandip-Tmg"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-white rounded-full shadow-md shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={20}/>
              </div>
            </a>
            <a href="">
              <div className="text-white rounded-full shadow-md shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20}/>
              </div>
            </a>
            {/* <a href={Resume}>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
