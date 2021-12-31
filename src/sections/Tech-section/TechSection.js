import React from 'react';
import './TechSection.css';
import TechCard from '../../components/Tech/Tech';  
import { TechData } from '../../Data/TechData';

const TechSection = (props) => {
    return (
        <div className="tech-section">
            <h1 style={{color:props.color}} className="primary--heading center">Technologies</h1>
            <hr style={{borderColor:props.color, width:"180px"}} className="primary--heading-hr"/>
            <div className="tech-card--container">
                {
                    TechData.map(ele => {
                        return(
                            <TechCard 
                            key={ele.key}
                            image={ele.image}
                            title={ele.title}
                            descrip={ele.descrip}
                            tech1={ele.tech1}
                            tech2={ele.tech2}
                            tech3={ele.tech3}
                            tech4={ele.tech4}
                            tech5={ele.tech5}
                            tech6={ele.tech6}
                            tech7={ele.tech7}
                            tech1span={ele.tech1span}
                            tech2span={ele.tech2span}
                            tech3span={ele.tech3span}
                            tech4span={ele.tech4span}
                            tech5span={ele.tech5span}
                            tech6span={ele.tech6span}
                            tech7span={ele.tech7span}
                            color={props.color}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TechSection;
