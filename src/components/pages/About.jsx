import Lottie from "lottie-react";
import waves from "../../assets/svg/waves.json";
const About = () => {
  return (
    <>
      <div className="about-section">
        <div style={{ display: "flex" }}>
          <div className="about-text">
            <h1>MY NAME IS GURVINDER SINGH</h1>
            <p>FRONTEND REACT DEVELOPER</p>
            <p>Rupnagar,Punjab</p>
          </div>
        </div>
        <div className="profileImg"></div>
      </div>
      <Lottie className="lottieWave" animationData={waves} />
    </>
  );
};

export default About;
