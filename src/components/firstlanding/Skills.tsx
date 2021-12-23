// <!-- navbar -->
import React from "react";

const Skills = ({ parameter }: { parameter: string }): JSX.Element => {
  return (
    <div className="skill-section">
      <h1 className="heading">skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <img src="/assets/images/amazing/html.png" className="skill-img" alt="" />
          <div className="skill-level">98%</div>
          <h1 className="skill-name">HTML</h1>
          <p className="skill-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
            delectus!
          </p>
        </div>
        <div className="skill-card">
          <img src="/assets/images/amazing/css.png" className="skill-img" alt="" />
          <div className="skill-level">98%</div>
          <h1 className="skill-name">HTML</h1>
          <p className="skill-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
            delectus!
          </p>
        </div>
        <div className="skill-card">
          <img src="/assets/images/amazing/js.png" className="skill-img" alt="" />
          <div className="skill-level">98%</div>
          <h1 className="skill-name">HTML</h1>
          <p className="skill-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
            delectus!
          </p>
        </div>
        <div className="skill-card">
          <img src="/assets/images/amazing/nodejs.png" className="skill-img" alt="" />
          <div className="skill-level">98%</div>
          <h1 className="skill-name">HTML</h1>
          <p className="skill-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
            delectus!
          </p>
        </div>
        <div className="skill-card">
          <img src="/assets/images/amazing/reactjs.png" className="skill-img" alt="" />
          <div className="skill-level">98%</div>
          <h1 className="skill-name">HTML</h1>
          <p className="skill-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
            delectus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
