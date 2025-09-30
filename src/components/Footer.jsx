import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="footer-section" >
      <p>{currentYear} Gurvinder Singh | All Rights Reserved</p>
      <p>Made with🧡using ReactJS</p>
    </div>
  );
};

export default Footer;
