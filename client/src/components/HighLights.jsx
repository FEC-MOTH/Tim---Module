import React from 'react';
import style from '../css/HighLights.css';

const HighLights = function(props) {
  const first = props.highlights[0].slice(0, 3);
  const second = props.highlights[0].slice(3);

  return (
    <div className={style.highlightWrapper}>
      <div className={style.firstWrapper}>
        {first.map(values => (
          <div className={style.first}>
            <h4 className={style.highlightTitle}>{values[0]}</h4>
            <p className={style.bodyy}>{values[1]}</p>
          </div>
        ))}
      </div>
      <div className={style.secondWrapper}>
        {second.map(value => (
          <div className={style.second}>
            <h4 className={style.highlightTitle}>{value[0]}</h4>
            <p className={style.secondBody}>{value[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighLights;
