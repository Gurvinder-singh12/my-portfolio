import React, { useState } from "react";
import project1 from "../../assets/restaurant.jpg";
import project2 from "../../assets/project2.jpg";
import Marquee from "react-fast-marquee";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiPostman, SiRedux } from "react-icons/si";
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      img: project1,
      desc: "A React.js restaurant website using Redux Toolkit with a dynamic menu, cart, and table booking.",
      demo: "https://apna-restaurant.netlify.app",
      code: "https://github.com/Gurvinder-singh12/restaurant-website",
    },
    {
      id: 3,
      title: "Portfolio Website",
      img: project2,
      desc: "A personal portfolio website built with ReactJS. It includes smooth scrolling navigation, animated sections using Lottie, a resume preview, projects showcase with demo/code links, and a working contact form powered by EmailJS.",
      code: "https://github.com/Gurvinder-singh12/my-portfolio.git",
    },
  ];

  return (
    <div className="projects">
      <h1 className="section-title my-3">
        Projects
      </h1>
      <div className="project-container">
        {/* Left Section */}
        <div className="project-text">
          <h2>{projects[activeIndex].title}</h2>
          <p>{projects[activeIndex].desc}</p>
            <div className="flex flex-wrap gap-2 justify-center">
                <span className=" text-sm px-2  py-1 bg-blue-200   rounded-full">ReactJS</span>
                <span className=" text-sm px-3 py-1 bg-blue-200  rounded-full">React Router</span>
                <span className="text-sm px-3 py-1 bg-blue-200  rounded-full">Redux Toolkit</span>
                <span className="text-sm px-3 py-1 bg-blue-200  rounded-full">TailwindCSS</span>
              </div>
        </div>

        {/* Right Section */}
        <div className="project-image-container">
          <img
            src={projects[activeIndex].img}
            alt={projects[activeIndex].title}
          />

          {/* Overlay Buttons */}
          <div className="overlay-buttons">
            <a
              href={projects[activeIndex].demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href={projects[activeIndex].code}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="project-nav">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? projects.length - 1 : prev - 1
              )
            }
          >
            ⬅ Prev
          </button>

          {projects.map((_, index) => (
            <button
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === projects.length - 1 ? 0 : prev + 1
              )
            }
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
