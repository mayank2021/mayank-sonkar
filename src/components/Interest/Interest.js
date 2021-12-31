import React from 'react';
import './Interest.css';

const Interest = (props) => {
    return (
        <div style={{borderColor:props.color}} className="interest-card-container">
            <div style={{borderColor:props.color}} className="interest-img--div">
            <img  src={props.image} alt="css" />
            </div>
            <h1 style={{color:props.color}} className="center">{props.title}</h1>
            <p>{props.descrip}</p>
        </div>
    )
}

export default Interest;
