import React from 'react';
import './Acchievements.css';
import Html from '../../Images/Tech/html.png';

const Acchievements = (props) => {
    return (
        <div style={{borderColor:props.color}} className="achi-card--container">
            <div className="utility-flex">
            <img src={props.image} alt="achievement" />
            <h1 style={{color:props.color}}>{props.title}</h1>
            </div>
            <p>{props.descrip}</p>
        </div>
    )
}

export default Acchievements;
