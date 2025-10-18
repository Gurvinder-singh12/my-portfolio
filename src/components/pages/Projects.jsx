import React, { useState } from "react";
import project1 from "../../assets/restaurant.jpg";
import project2 from "../../assets/project2.jpg";
import Marquee from "react-fast-marquee";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiPostman, SiRedux } from "react-icons/si";
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      img: project1,
      desc: "A React.js restaurant website using Redux Toolkit with a dynamic menu, cart, and table booking.",
      tools: "ReactJS,React-Router,Redux-Toolkit,TailwindCSS",
      demo: "https://apna-restaurant.netlify.app",
      code: "https://github.com/Gurvinder-singh12/restaurant-website",
    },
    {
      id: 2,
      title: "Portfolio Website",
      img: project2,
      desc: "A responsive ReactJS portfolio website showcasing my skills and projects with a modern UI and smooth navigation",
      tools: "ReactJS,CSS,EmailJS,React-Toast,TailwindCSS",
      code: "https://github.com/Gurvinder-singh12/my-portfolio.git",
    },
  ];

  return (
    <div className="projects">
      <h1 className="section-title my-3">Projects</h1>
      <div className="project-container">
        {/* Left Section */}
        <div className="project-text">
          <h2>{projects[activeIndex].title}</h2>
          <p>{projects[activeIndex].desc}</p>

          {/* Tools Section */}
          <div className="flex flex-wrap gap-2 justify-center">
            {projects[activeIndex].tools.split(",").map((tool, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-gray-950 text-white rounded-full"
              >
                {tool}
              </span>
            ))}
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
              rel="noreferrer noopener"
            >
              Demo
            </a>
            <a
              href={projects[activeIndex].code}
              target="_blank"
              rel="noreferrer noopener"
            >
              Code
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="project-nav">
          <button onClick={handlePrev}>⬅ Prev</button>

          {projects.map((_, index) => (
            <button
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={handleNext}>Next ➡</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
