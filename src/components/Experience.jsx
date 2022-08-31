import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full h-screen text-center bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-5xl font-bold mb-14">Experience & Skills</p>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center cursor-pointer">
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
              </div>
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                <p className="my-4">CSS</p>
              </div>
              <div className="hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto"
                  src={JavaScript}
                  alt="HTML icon"
                />
                <p className="my-4">JAVASCRIPT</p>
              </div>
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                <p className="my-4">REACT</p>
              </div>
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
                <p className="my-4">GITHUB</p>
              </div>
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
                <p className="my-4">NODE JS</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2">
              <p className="text-3xl font-bold text-[#8892b0]">2022</p>
              <div>
                <p className="font-bold text-2xl">Software Development Intern</p>
                <p className="text-1.5xl">Informatica</p>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
