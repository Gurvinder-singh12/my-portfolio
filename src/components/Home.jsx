import { useRef, useState } from "react";
import Lottie from "lottie-react";
import waves from "../assets/svg/waves.json";
import ww from "../assets/contact Green.json";
import waveSecond from "../assets/Waves.json";
import waveThird from "../assets/svg/Green wave.json";
import waveBG from "../assets/svg/Moving bubbles.json";
import myCV from "../assets/GurvinderSingh_cv.pdf";
import Contact from "./pages/Contact";
import logo from "../assets/logo.png";
import Projects from "./pages/Projects";

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
        <Lottie className="lottieWave" style={{zIndex:"-1", position:"absolute"}} animationData={waveBG} />
        {/* <div style={{ display: "flex" }}> */}
          <div className="info-text">
            <h1>MY NAME IS GURVINDER SINGH</h1>
            <p>FRONTEND REACT DEVELOPER</p>
            <p>Rupnagar,Punjab</p>
          </div>
        {/* </div> */}
        <div className="img-animation">
        <div className="profileImg"></div></div>
      </section>
      <Lottie className="lottieWave" animationData={waves} />

      {/* about or resume section */}
      <section ref={aboutRef} className="resume-section">
        <div className="resume-text">
          <h2>ABOUT ME</h2>
          <p className="about-text">
            Hello! I am a Front End React developer. Currently building a strong
            and growing skill set in HTML5, CSS3, JavaScript, Redux, React.I am
            dedicated to continuous learning and staying up-to-date with the
            latest trends and best coding practices.Let's connect and discuss
            how I can contribute to your web development team!
          </p>
        </div>
        <div className="my-resume">
          <iframe src={myCV} width="100%" height="100%" />
        </div>
      </section>
      <Lottie className="lottieWave" animationData={waveSecond} />
      {/* Projects Section */}
      <section ref={projectsRef} className="project-section">
        <Projects />
      </section>
      {/* Contact Section */}
      <Lottie className="lottieWave" style={{width:"100%", margin:"2rem"}} animationData={waveThird} />
      <section ref={contactRef} className="contact-section">
        <Lottie className="form-bg" animationData={ww} />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
