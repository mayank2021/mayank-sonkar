import React from 'react';
import './About.css';

const AboutCard = (props) => {
    return (
        <div className="Card">
            <div style={{borderColor:props.color}}  className="about_card--contaier">
               <h1 style={{color:props.color}} >{props.title}</h1>
               <p>{props.descrip}</p>
            </div>
        </div>
    )
}

export default AboutCard;
