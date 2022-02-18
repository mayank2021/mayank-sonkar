import "./DemoSection.css";
import DemoCard from "../../components/DemoCard/DemoCard";
import { ProjectDemoData } from "../../Data/ProjectDemoData";

const DemoSection = (props) => {
  return (
    <div className="project-demo--section">
      <h1
        style={{ color: props.color }}
        className="primary--heading center heading-demo-utility "
      >
        demos
      </h1>
      <hr
        style={{ borderColor: props.color, width: "90px" }}
        className="primary--heading-hr"
      />
      <div className="demo-card--container">
        {ProjectDemoData.map((ele) => {
          return (
            <DemoCard
              key={ele.key}
              title={ele.videoTitle}
              link={ele.videoLink}
              color={props.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DemoSection;
