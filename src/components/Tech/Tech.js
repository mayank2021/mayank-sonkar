import React from 'react';
import './Tech.css';


const TechCard = (props) => {
    return (
        <div className="tech-main">
            <div style={{borderColor:props.color}} className="card--container">
                     <div className="tech-skills-div c1"><img className="html-img" src={props.tech1} alt="html" /><span className="html-span">{props.tech1span}</span></div>
                     <div className="tech-skills-div c2"><img className="html-img" src={props.tech2} alt="html" /><span className="html-span">{props.tech2span}</span></div>
                     <div className="tech-skills-div c3"><img className="html-img" src={props.tech3} alt="html" /><span className="html-span">{props.tech3span}</span></div>
                     <div className="tech-skills-div c4"><img className="html-img" src={props.tech4} alt="html" /><span className="html-span">{props.tech4span}</span></div>
                     {
                         props.tech5?(
                            <div className="tech-skills-div c5"><img className="html-img" src={props.tech5} alt="html" /><span className="html-span">{props.tech5span}</span></div>
                         ):null
                     }
                      {
                         props.tech6?(
<div className="tech-skills-div c6"><img className="html-img" src={props.tech6} alt="html" /><span className="html-span">{props.tech6span}</span></div>                         ):null
                     }
                      {
                         props.tech7?(
                            <div className="tech-skills-div c7"><img className="html-img" src={props.tech7} alt="html" /><span className="html-span">{props.tech7span}</span></div>
                            ):null
                     }
                      {
                         props.tech8?(
                            <div className="tech-skills-div c8"><img className="html-img" src={props.tech8} alt="html" /><span className="html-span">{props.tech6span}</span></div>                         ):null
                     }
                    
                     
                  
                     
                <img className="image" src={props.image} alt="design" />
                <div className="tech-content">
                    <h1 style={{color:props.color}}>{props.title}</h1>
                    <hr style={{borderColor:props.color}} className="hr-tech" />
                    <p>{props.descrip}</p>
                </div>
            </div>
        </div>
    )
}

export default TechCard;
