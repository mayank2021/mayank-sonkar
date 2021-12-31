import React,{ useState} from 'react';
import './Projects.css';


const Projects = (props) => {

const [arrContainer, setarrContainer] = useState(false);

    return (
        <div style={{color:'white'}}>
                <div className="box">
                    <div style={{background:props.color, borderColor:props.color}}  className="border-div center">
                    <img className="border-div-img" src={props.image} alt="project" />
                    <div className="black-background"></div>
                <div className="card_content">              
                <div>
                  <p className="project-name">{props.title}</p>
                  <hr style={{borderColor:props.color}}  className="hr-project" />
                  <p className="description">{props.descrip}</p>
            </div>
            <div style={{background:props.color}}  className={`${arrContainer?'active_arr':null} arr_container center`}
               onClick={() => setarrContainer(true)} >
                      Know More
            </div>
                </div>
            <div style={{background:props.color}}  className={`${arrContainer?'active':'off'} left-container`}>
                <p>Technologies</p>
                <div className="skills">
                     <div className="tech-skills-div"><img className="html-img" src={props.tech1} alt="html" /><span className="html-span">{props.tech1span}</span></div>
                     <div className="tech-skills-div"> <img className="css-img" src={props.tech2} alt="css" /> <span className="css-span">{props.tech2span}</span></div>
                     <div className="tech-skills-div"> <img className="react-img" src={props.tech3} alt="react" /> <span className="react-span">{props.tech3span}</span></div>
                     {
                       props.tech4?(
                        <div className="tech-skills-div"> <img className="node-img" src={props.tech4} alt="node" /> <span className="node-span">{props.tech4span}</span></div>
                       ):null
                     }
                     {
                       props.tech5?(
                        <div className="tech-skills-div"> <img className="node-img" src={props.tech5} alt="node" /> <span className="node-span">{props.tech5span}</span></div>
                       ):null
                     }
                </div>
                <div style={{flexDirection:props.flexdirection,marginTop:props.margintop}} className="card_button--container">
                <button style={{background:props.color}}  className="card_button"><a href={props.live} target="_blank" rel="noreferrer">{props.title === 'Todogenix'?'Know more':"Go Live"}</a></button>
                {props.title !== "Liable Web"?<button style={{background:props.color}}  className="card_button"><a href={props.code} target="_blank" rel="noreferrer">Code</a></button>:<p style={{textAlign:"center"}}>Sorry! Code of this project is kept private.</p>}
                </div>
               <div style={{color:props.color}}  className="cancel center"
               onClick={() => setarrContainer(false)}>Go Back</div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Projects;
