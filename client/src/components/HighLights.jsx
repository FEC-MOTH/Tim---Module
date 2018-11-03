import React from 'react';
import style from '../css/HighLights.css';

const HighLights = function(props) {
  return (
    <div className="highlightWrapper">
      <div className="boostTitle">
        <div>
          <h4>{props.title}</h4>
          <p>{props.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default HighLights;
