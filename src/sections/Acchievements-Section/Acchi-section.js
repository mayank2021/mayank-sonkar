import React from 'react';
import './Acchi.section.css';
import Acchievements from '../../components/Acchievements/Acchievements';
import { AchiData } from '../../Data/achiData';

const AcchiSection = (props) => {
    return (
        <div className="achi-container">
          <h1 style={{color:props.color}} className="primary--heading center">achievements</h1>
          <hr style={{borderColor:props.color, width: "70px" }} className="primary--heading-hr" />
          <div className="achievement-card--container">
            {
              AchiData.map(ele => {
                return(
                  <Acchievements 
                key={ele.key}
                image={ele.image}
                title={ele.title}
                descrip={ele.descrip}
                color={props.color}/> 
                )
              })
            }
          </div> 
        </div>
    )
}

export default AcchiSection;
