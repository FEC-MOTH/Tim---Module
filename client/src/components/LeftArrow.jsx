import React from 'react';
import style from '../css/LeftArrow.css';

const LeftArrow = function(props) {
  return (
    <div className="LeftArrow" onClick={props.previous}>
      <i
        className={props.currentValue <= 0 ? 'arrowHidden' : 'fas fa-angle-left fa-2x'}
        aria-hidden="true"
      />
    </div>
  );
};

export default LeftArrow;
