import React from 'react';
import './InterestSection.css';
import Interest from '../../components/Interest/Interest';
import {interestData} from '../../Data/interest';

const InterestSection = (props) => {
    return (
           <div className="interest-container">
          <h1 style={{color:props.color}} className="primary--heading utility-head center">Personal Interest</h1>
          <hr style={{borderColor:props.color, width: "300px" }} className="primary--heading-hr utility-hr" />
          <h1 style={{color:props.color}} className="primary--heading interest-heading center">Interest</h1>
          <hr style={{borderColor:props.color, width: "150px" }} className="primary--heading-hr interest-hr" />
          <div className="achievement-card--container">
              {
                  interestData.map(child => {
                      return(
                        <Interest 
                           key={child.key}
                           color={props.color}
                           title={child.title}
                           image={child.image}
                           descrip={child.description}
                                  />  
                      )
                  })
              }
          </div>  
        </div>
    )
}

export default InterestSection;
