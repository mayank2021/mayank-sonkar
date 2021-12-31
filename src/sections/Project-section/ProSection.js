import React from "react";
import "./ProSection.css";
import Project from "../../components/Projects/Projects";
import { ProjectData } from "../../Data/projectsData";

const ProSection = (props) => {
  return (
    <div className="prosection">
      <h1 style={{ color: props.color }} className="primary--heading center">
        Projects
      </h1>
      <hr
        style={{ borderColor: props.color }}
        className="primary--heading-hr"
      />
      <div className="project-container">
        {ProjectData.map((ele) => {
          return (
            <Project
              key={ele.key}
              image={ele.image}
              title={ele.title}
              descrip={ele.descrip}
              tech1={ele.tech1}
              tech2={ele.tech2}
              tech3={ele.tech3}
              tech4={ele.tech4}
              tech5={ele.tech5}
              tech1span={ele.tech1span}
              tech2span={ele.tech2span}
              tech3span={ele.tech3span}
              tech4span={ele.tech4span}
              tech5span={ele.tech5span}
              color={props.color}
              flexdirection={ele.flexdirection}
              margintop={ele.margintop}
              live={ele.live}
              code={ele.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProSection;
