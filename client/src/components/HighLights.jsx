import React from 'react';
import style from '../css/HighLights.css';

const HighLights = function(props) {
  const first = props.highlights[0].slice(0, 3);
  const second = props.highlights[0].slice(3);
  console.log(second);
  console.log(first);
  return (
    <div className="highlightWrapper">
      <div className="firstWrapper">
        {first.map(values => (
          <div className="first">
            <h4>{values[0]}</h4>
            <p className="bodyy">{values[1]}</p>
          </div>
        ))}
      </div>
      <div className="secondWrapper">
        {second.map(value => (
          <div className="second">
            <h4>{value[0]}</h4>
            <p className="secondBody">{value[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighLights;
