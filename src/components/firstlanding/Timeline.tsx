// credit : https://dev.to/kunaal438/amazing-portfolio-website-using-html-css-and-js-l8f
import React from "react";
// import { Grid, Typography, Divider } from "@material-ui/core";
// import TimelineEntry from "../components/TimelineEntry";

const Timeline = ({ year }: { year: string }): JSX.Element => {
  return (
    <div className="timeline">
      <h1 className="heading">education and experience</h1>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">2000-2002</h1>
          <p className="card-detail">
            1.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi
            recusandae laborum ipsam dignissimos nostrum vitae provident officia,
            consectetur ab accusantium corrupti exercitationem temporibus repellat non
            magni cupiditate ea reprehenderit.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">2002-2008</h1>
          <p className="card-detail">
            2.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi
            recusandae laborum ipsam dignissimos nostrum vitae provident officia,
            consectetur ab accusantium corrupti exercitationem temporibus repellat non
            magni cupiditate ea reprehenderit.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">2008-2010</h1>
          <p className="card-detail">
            3.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi
            recusandae laborum ipsam dignissimos nostrum vitae provident officia,
            consectetur ab accusantium corrupti exercitationem temporibus repellat non
            magni cupiditate ea reprehenderit.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">2000-2002</h1>
          <p className="card-detail">
            4.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi
            recusandae laborum ipsam dignissimos nostrum vitae provident officia,
            consectetur ab accusantium corrupti exercitationem temporibus repellat non
            magni cupiditate ea reprehenderit.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">2000-2002</h1>
          <p className="card-detail">
            5.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi
            recusandae laborum ipsam dignissimos nostrum vitae provident officia,
            consectetur ab accusantium corrupti exercitationem temporibus repellat non
            magni cupiditate ea reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
