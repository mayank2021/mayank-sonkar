import React from "react";
import './AboutSection.css';
import AboutCard from "../../components/About/About";
import { AboutData } from "../../Data/aboutData";

const AboutSection = (props) => {
  return (
    <div className="about-section">
      <h1 style={{color:props.color}}  className="primary--heading center">About</h1>
      <hr   style={{borderColor:props.color, width: "70px" }} className="primary--heading-hr" />
      <div className="about-card--container">
        {
          AboutData.map(ele => {
            return (
              <AboutCard 
                key={ele.key}
                title={ele.title}
                descrip={ele.descrip}
                color={props.color} />
            )
          })
        }
      </div>
    </div>
  );
};

export default AboutSection;
