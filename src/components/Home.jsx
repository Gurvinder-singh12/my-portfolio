import { useRef, useState } from "react";
import Lottie from "lottie-react";
import waves from "../assets/svg/waves.json";
import ww from "../assets/contact Green.json";
import waveSecond from "../assets/Waves.json";
import waveThird from "../assets/svg/Green wave.json";
import waveBG from "../assets/svg/Moving bubbles.json";
// import myCV from "../assets/GurvinderSingh_cv.pdf";
import Contact from "./pages/Contact";
import logo from "../assets/logo.png";
import Projects from "./pages/Projects";
import  Marquee  from "react-fast-marquee";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import{SiBootstrap, SiJavascript, SiPostman, SiRedux} from "react-icons/si"

const Home = () => {
  const infoRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homePage ">
      <nav className="sticky-top">
        <img
          src={logo}
          className="logo"
          onClick={() => handleScroll(infoRef)}
        />
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li onClick={() => handleScroll(aboutRef)}>ABOUT</li>
          <li onClick={() => handleScroll(projectsRef)}>PROJECTS</li>
          <li onClick={() => handleScroll(contactRef)}>CONTACT</li>
        </ul>
      </nav>

      {/* Info section with picture */}
      <section ref={infoRef} className="info-section">
        <Lottie
          className="lottieWave"
          style={{ zIndex: "-1", position: "absolute" }}
          animationData={waveBG}
        />
        {/* <div style={{ display: "flex" }}> */}
        <div className="info-text">
          <h1>MY NAME IS GURVINDER SINGH</h1>
          <p>FRONTEND REACT DEVELOPER</p>
          <p>Rupnagar,Punjab</p>
        </div>
        {/* </div> */}
        <div className="img-animation">
          <div className="profileImg"></div>
        </div>
      </section>
      <Lottie className="lottieWave" animationData={waves} style={{ width: "100%", margin: "2rem" }}/>

      {/* about or resume section */}
      <section ref={aboutRef} className="resume-section">
        <h1 className="about-headline" style={{display:"grid" ,justifyContent:"center", marginBottom:"2rem", }}>ABOUT ME</h1>
        <div className="about-container"
        style={{ display:"flex" , justifyContent:"space-around"}}
        >
          {/* Left: About Me */}
          <div className="about-text-box" >
            {/* <h2 className="about-headline" style={{display:"grid" ,justifyContent:"center"}}>ABOUT ME</h2> */}
            <p style={{fontSize:"x-large"}}>
              Hello! I am a Front End React Developer. Currently building a
              strong and growing skill set in HTML5, CSS3, JavaScript, Redux,
              and React. I am dedicated to continuous learning and staying
              up-to-date with the latest trends and best coding practices. Let's
              connect and discuss how I can contribute to your web development
              team!
            </p>
          </div>

          {/* Right: Resume */}
          {/* <div className="resume-box"> */}
            {/* <h2 >My Resume</h2> */}
            {/* <p>You can view my resume online or download it directly.</p> */}

            <div className="resume-buttons">
              <a
                href="/GurvinderSingh_cv.pdf"
                download="Gurvinder_Singh_Resume.pdf"
                className="download-btn"
              >
                Download Resume
              </a>

              <a    
                href="https://docs.google.com/gview?embedded=true&url=https://gurvinder-portfolio.netlify.app/GurvinderSingh_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Online
              </a>
            </div>
          {/* </div> */}
        </div>
      </section>

       <section id="skills">
      <h2 className="section-title">My Skills</h2>

      {/* <Marquee className="skill-marquee" pauseOnHover={true} delay={0} speed={75}> */}
      <div className="skill-section" style={{display:"flex", flexWrap:"wrap"}}>
        <div className="skill-card">
          <FaHtml5 color="#E34F26" size={50} />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <FaCss3 color="#1572B6" size={50} />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <SiBootstrap color="rgb(117, 50, 250)" size={50} />
          <p>Bootstrap</p>
        </div>
        <div className="skill-card">
          <SiJavascript color="#F7DF1E" size={50} />
          <p>JavaScript</p>
        </div>
        </div>
        <div style={{display:"flex", flexWrap:"wrap", marginTop:"2rem"}}>
        <div className="skill-card">
          <FaReact color="#61DAFB" size={50} />
          <p>React</p>
        </div >
        <div className="skill-card">
          <SiRedux color="#764ABC" size={50} />
          <p>Redux</p>
        </div>
        <div className="skill-card">
          <FaGithub color="#fff" size={50} />
          <p>GitHub</p>
        </div>
        <div className="skill-card">
          <SiPostman color="rgb(255, 109, 56)" size={50} />
          <p>Postman</p>
        </div>
        </div>
      {/* </Marquee> */}
    </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="project-section">
        <Projects />
      </section>
      {/* Contact Section */}
     <Lottie className="lottieWave" animationData={waveSecond} style={{ width: "100%",}}/>
      <section ref={contactRef} className="contact-section">
        {/* <Lottie className="form-bg" animationData={ww} /> */}
          <Lottie
          className="lottieWave"
          style={{ zIndex: "-1", position: "absolute" }}
          animationData={waveBG}
        />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
