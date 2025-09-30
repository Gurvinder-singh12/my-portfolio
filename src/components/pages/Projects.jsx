import React, { useState } from "react";
import project1 from "../../assets/projects.png";
import project2 from "../../assets/project2.jpg";
import  Marquee  from "react-fast-marquee";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import{SiBootstrap, SiJavascript, SiPostman, SiRedux} from "react-icons/si"
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      img: project1,
      desc: "A responsive restaurant website built using React and Bootstrap. three pages home menu and team and also a option to book a table. on menu page show different dishes .this page all data come from a json file ",
      demo: "https://demo1.com",
      code: "https://github.com/demo1",
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
    //  <div className="project-section ">
    <div className="project-container">
      <Marquee className="skill-icons" pauseOnHover={true} delay={0} speed={75}>
        <FaHtml5  color="#E34F26" />
        <FaCss3  color="#1572B6" />
        <SiBootstrap color="rgb(117, 50, 250)"/>
        <SiJavascript color="#F7DF1E" />
        <FaReact color="#61DAFB" />
        <SiRedux  color="#764ABC" />
        <FaGithub />
        <SiPostman color="rgb(255, 109, 56)" />
      </Marquee>
      {/* Left Section */}
      <div className="project-text">
        <h2>{projects[activeIndex].title}</h2>
        <p>{projects[activeIndex].desc}</p>
      </div>

      {/* Right Section */}
      <div className="project-image-container">
        <img
          src={projects[activeIndex].img}
          alt={projects[activeIndex].title}
        />

        {/* Overlay Buttons */}
        <div className="overlay-buttons">
          <a href={projects[activeIndex].demo} target="_blank" rel="noreferrer">
            Demo
          </a>
          <a href={projects[activeIndex].code} target="_blank" rel="noreferrer">
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
    // </div>
  );
};

export default Projects;
