import Lottie from "lottie-react";
import insta from "../assets/Instagram Logo Effect.json";
import linkdin from "../assets/Linkdin animation.json";

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <Lottie animationData={insta} className="social-icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/gurvinder-singh-reactjs"
        target="_blank"
        rel="noreferrer"
      >
        <Lottie animationData={linkdin} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
