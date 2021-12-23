// <!-- navbar -->
import React from "react";

import Skills from "./Skills";
import Timeline from "./Timeline";

const AboutSection = ({ parameter }: { parameter: string }): JSX.Element => {
  return (
    <>
      <section className="about-section">
        <div className="about">
          <div className="about-img-container">
            <img src="/assets/images/amazing/home.png" className="about-img" alt="" />
            <button className="download-cv-btn">downlaod cv</button>
          </div>
          <p className="about-info">Lorem ipsum.....</p>
        </div>

        <Skills parameter="" />
        <Timeline year="" />
      </section>
    </>
  );
};

export default AboutSection;
