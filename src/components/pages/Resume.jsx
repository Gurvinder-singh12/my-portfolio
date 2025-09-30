import myCV from "../../assets/GurvinderSingh_cv.pdf";
const Resume = () => {
  return (
    <>
      <div className="resume-section">
              <div className="resume-text">
                <h2>ABOUT ME</h2>
                <p className="" style={{ fontSize: "20px" }}>
                  Hello! I am a Front End React developer. Currently
                  building a strong and growing skill set in HTML5, CSS3, JavaScript, Redux, React.I am dedicated to continuous learning and staying
                  up-to-date with the latest trends and best coding practices.Let's connect and discuss how I can
                  contribute to your web development team!
                </p>
              </div>
              <div className="my-resume">
                <iframe src={myCV} width="100%" height="100%" />
              </div>
            </div>    
    </>
  )
}

export default Resume
